import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import IndustryPage from "@/components/Sections/IndustryPage";
import { industries, type IndustrySlug } from "@/lib/industriesData";

// One dynamic route serves every industry landing page. Adding an industry
// to src/lib/industriesData.ts automatically creates its /for/<slug> page —
// no per-industry files to keep in sync.

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug as IndustrySlug];
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: {
      canonical: `/for/${slug}`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://myconsulting.network/for/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
  };
}

export default async function IndustryLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries[slug as IndustrySlug];
  if (!industry) notFound();

  return (
    <>
      <Header />
      <IndustryPage industry={industry} />
      <Footer />
    </>
  );
}
