"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Globe, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Collections",
          id: "features",
        },
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Journal",
          id: "contact",
        },
      ]}
      brandName="LUXEWEAR"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Elevated Essentials for Modern Living"
      description="Discover our latest collection of premium apparel, designed for comfort and timeless style."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-beautiful-african-american-woman-holding-black-umbrella_627829-4624.jpg",
          alt: "Model wearing our collection",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-wool-texture-details_23-2149620478.jpg",
          alt: "Premium material detail",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-young-woman-with-vitiligo_23-2149180780.jpg",
          alt: "Minimalist design aesthetic",
        },
        {
          src: "http://img.b2bpic.net/free-photo/freedom-concept-with-woman-holding-cloth-nature_23-2148170221.jpg",
          alt: "Ethical production showcase",
        },
        {
          src: "http://img.b2bpic.net/free-photo/body-shaped-modern-vases-arrangement_23-2149835471.jpg",
          alt: "Classic crewneck product",
        },
      ]}
      buttons={[
        {
          text: "Shop Collection",
          href: "#products",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "100% Organic Cotton",
        },
        {
          type: "text-icon",
          text: "Worldwide Shipping",
          icon: Globe,
        },
        {
          type: "text",
          text: "Sustainable Production",
        },
        {
          type: "text-icon",
          text: "Premium Quality",
          icon: ShieldCheck,
        },
        {
          type: "text",
          text: "Timeless Design",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Premium Materials",
          description: "Sourced from the finest mills for lasting comfort.",
          tag: "Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-wool-texture-details_23-2149620478.jpg",
        },
        {
          id: "f2",
          title: "Timeless Design",
          description: "Versatile pieces that outlast the trends.",
          tag: "Style",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-with-vitiligo_23-2149180780.jpg",
        },
        {
          id: "f3",
          title: "Ethical Production",
          description: "Consciously crafted with respect for the planet.",
          tag: "Ethics",
          imageSrc: "http://img.b2bpic.net/free-photo/freedom-concept-with-woman-holding-cloth-nature_23-2148170221.jpg",
        },
      ]}
      title="Designed with Purpose"
      description="Our commitment to quality ensures every piece feels as good as it looks."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          brand: "LUXE",
          name: "Classic Crewneck",
          price: "$65",
          rating: 5,
          reviewCount: "128",
          imageSrc: "http://img.b2bpic.net/free-photo/body-shaped-modern-vases-arrangement_23-2149835471.jpg",
        },
        {
          id: "p2",
          brand: "LUXE",
          name: "Urban Hoodie",
          price: "$120",
          rating: 5,
          reviewCount: "94",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-wearing-black-hoodie_23-2149359803.jpg",
        },
        {
          id: "p3",
          brand: "LUXE",
          name: "Essential Denim",
          price: "$145",
          rating: 4,
          reviewCount: "210",
          imageSrc: "http://img.b2bpic.net/free-photo/boutique-employee-providing-fashion-guidance-male-customer_482257-117992.jpg",
        },
        {
          id: "p4",
          brand: "LUXE",
          name: "Slim Trousers",
          price: "$110",
          rating: 5,
          reviewCount: "88",
          imageSrc: "http://img.b2bpic.net/free-photo/spring-wardrobe-switch-flat-lay_23-2150264146.jpg",
        },
        {
          id: "p5",
          brand: "LUXE",
          name: "Winter Coat",
          price: "$295",
          rating: 5,
          reviewCount: "56",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-man-s-reflection-mirror_23-2149426425.jpg",
        },
        {
          id: "p6",
          brand: "LUXE",
          name: "Summer Dress",
          price: "$185",
          rating: 4,
          reviewCount: "72",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-long-dress-holding-straw-hat-standing-spring-flower-field-sunset_8353-8229.jpg",
        },
      ]}
      title="New Arrivals"
      description="Explore the freshest pieces from our seasonal collection."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "VOGUE",
        "GQ",
        "ELLE",
        "HARPER'S",
        "I-D",
        "THE CUT",
        "HYPEBEAST",
      ]}
      title="Trusted by Creators"
      description="Featured in leading fashion publications globally."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Stay Connected"
      description="Join our newsletter for early access to new arrivals and exclusive events."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-woman-holding-dress-cloth_23-2148827153.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="LUXEWEAR"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "New Arrivals",
              href: "#products",
            },
            {
              label: "Best Sellers",
              href: "#",
            },
            {
              label: "Accessories",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Shipping",
              href: "#",
            },
            {
              label: "Returns",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
