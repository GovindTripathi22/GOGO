/**
 * Blog Post Page
 */

import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, getBlogPosts, CMS_REVALIDATE, getSEO } from '@/lib/cms';

export const revalidate = 60;

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    // Use the optimized SEO fetch
    const seo = await getSEO(slug) || { title: 'Blog Post', description: '' };

    // Fallback to full post fetch if SEO is missing (unlikely if CMS is correct)
    const post = !seo.title ? await getBlogPostBySlug(slug) : null;
    const title = seo.title || post?.title || 'Post Not Found';
    const description = seo.description || (post?.body?.substring(0, 150) + '...') || '';

    return {
        title: `${title} | GoGo Blog`,
        description: description,
        openGraph: {
            title: title as string,
            description: description as string,
            type: 'article',
        },
    };
}

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Basic body rendering (In production, use a Markdown parser or Rich Text renderer)
    // For now, we assume body is plain text or basic markdown from CMS
    const renderContent = (content: string) => {
        return content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-bold mt-6 mb-3">{line.replace('### ', '')}</h3>;
            }
            if (line.trim().startsWith('- ')) {
                return <li key={i} className="ml-4 mb-2 list-disc">{line.replace('- ', '')}</li>;
            }
            if (line.trim()) {
                return <p key={i} className="mb-4 text-slate-600 leading-relaxed">{line}</p>;
            }
            return null;
        });
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <nav className="max-w-4xl mx-auto px-6 py-4">
                <ol className="flex items-center gap-2 text-sm text-slate-500" itemScope itemType="https://schema.org/BreadcrumbList">
                    <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <Link href="/" itemProp="item" className="hover:text-slate-900">
                            <span itemProp="name">Home</span>
                        </Link>
                        <meta itemProp="position" content="1" />
                    </li>
                    <span>/</span>
                    <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <Link href="/blog" itemProp="item" className="hover:text-slate-900">
                            <span itemProp="name">Blog</span>
                        </Link>
                        <meta itemProp="position" content="2" />
                    </li>
                    <span>/</span>
                    <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <span itemProp="name" className="text-slate-900 font-medium">{post.title}</span>
                        <meta itemProp="position" content="3" />
                    </li>
                </ol>
            </nav>

            {/* Article */}
            <article className="max-w-4xl mx-auto px-6 py-8">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <time dateTime={post.publishedDate}>
                            {new Date(post.publishedDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                        {post.author && (
                            <>
                                <span>•</span>
                                <span>{post.author}</span>
                            </>
                        )}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                        {post.title}
                    </h1>
                </header>

                {/* Content */}
                <div className="prose prose-lg prose-slate max-w-none">
                    {renderContent(post.body || '')}
                </div>

                {/* CTA */}
                <div className="mt-12 p-8 bg-slate-50 rounded-2xl text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to optimize your fleet?</h3>
                    <Link
                        href="/quote"
                        className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-[#d65a15] transition-colors"
                    >
                        Request a Quote
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </article>

            {/* Back to Blog */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>
            </div>
        </main>
    );
}
