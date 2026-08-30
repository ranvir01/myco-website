import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import ArticleBody from "@/components/Blog/ArticleBody";
import OpenQuoteButton from "@/components/UI/OpenQuoteButton";
import { articles, getArticle } from "@/lib/blogData";
import { services, freeAuditOffer } from "@/lib/servicesData";
import { FiArrowLeft, FiArrowRight, FiClock } from "react-icons/fi";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: [article.targetKeyword],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://myconsulting.network/blog/${slug}`,
      siteName: "MyConsulting Network",
      type: "article",
      publishedTime: article.publishDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    mainEntityOfPage: `https://myconsulting.network/blog/${article.slug}`,
    image: "https://myconsulting.network/og-image.png",
    author: {
      "@type": "Organization",
      name: "MyConsulting Network",
      url: "https://myconsulting.network",
    },
    publisher: {
      "@type": "Organization",
      name: "MyConsulting Network",
      logo: {
        "@type": "ImageObject",
        url: "https://myconsulting.network/logos/MyCo_Network_Logo_PNG.png",
      },
    },
  };

  const relatedServices = services.filter((s) =>
    article.relatedServiceSlugs.includes(s.slug)
  );
  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="min-h-screen pt-[70px] md:pt-[80px]">
        <article className="py-12 md:py-16">
          <div className="container-custom px-5 sm:px-6">
            <div className="max-w-3xl mx-auto">
              {/* Breadcrumb / back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-secondary-light hover:text-primary transition-colors mb-6"
              >
                <FiArrowLeft className="w-4 h-4" />
                All articles
              </Link>

              {/* Article header */}
              <header className="mb-8 md:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {article.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-secondary-light/70">
                    <FiClock className="w-3.5 h-3.5" />
                    {article.readingMinutes} min read
                  </span>
                  <span className="text-xs text-secondary-light/60">
                    {formatDate(article.publishDate)}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary font-heading leading-tight">
                  {article.title}
                </h1>
              </header>

              <ArticleBody blocks={article.body} />

              {/* Free audit CTA */}
              <div className="mt-12 bg-gradient-to-br from-primary to-emerald-700 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
                  {freeAuditOffer.name}
                </h2>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  {freeAuditOffer.description}
                </p>
                <OpenQuoteButton className="!bg-white !text-primary hover:!bg-gray-100">
                  Get My Free AI Audit
                </OpenQuoteButton>
              </div>

              {/* Related services */}
              {relatedServices.length > 0 && (
                <aside className="mt-10">
                  <h2 className="text-lg font-bold text-secondary font-heading mb-4">
                    Services mentioned in this article
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services#${service.slug}`}
                        className="group bg-white rounded-xl p-5 shadow-soft border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
                      >
                        <p className="font-semibold text-secondary group-hover:text-primary transition-colors">
                          {service.name}
                        </p>
                        <p className="text-sm text-secondary-light mt-1">
                          {service.priceLine}
                        </p>
                      </Link>
                    ))}
                  </div>
                </aside>
              )}
            </div>
          </div>
        </article>

        {/* More articles */}
        <section className="py-12 md:py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/40 to-white" />
          <div className="container-custom relative z-10 px-5 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary font-heading text-center mb-8">
              Keep reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {otherArticles.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all flex flex-col"
                >
                  <span className="inline-block self-start px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">
                    {other.tag}
                  </span>
                  <p className="font-bold text-secondary group-hover:text-primary transition-colors leading-snug flex-1">
                    {other.title}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-4">
                    Read article
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
