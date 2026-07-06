import type { Metadata } from "next";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer/Footer";
import QuoteModal from "@/components/ContactForm/QuoteModal";
import IndustryPage from "@/components/Sections/IndustryPage";
import { industries } from "@/lib/industriesData";

const industry = industries["home-services"];

export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
  keywords: industry.keywords,
  alternates: {
    canonical: "/for/home-services",
  },
  openGraph: {
    title: industry.metaTitle,
    description: industry.metaDescription,
    url: "https://myconsulting.network/for/home-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: industry.metaTitle,
    description: industry.metaDescription,
  },
};

export default function HomeServicesPage() {
  return (
    <>
      <Header />
      <IndustryPage industry={industry} />
      <Footer />
      <QuoteModal />
    </>
  );
}
