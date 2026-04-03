import React from "react";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Orbiters",
    "url": "https://orbiters.io",
    "logo": "https://orbiters.io/logo.png",
    "sameAs": [
      "https://twitter.com/orbiters_io",
      "https://linkedin.com/company/orbiters-io"
    ],
    "description": "Digital marketing and design agency built exclusively for automotive businesses and SaaS companies.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Khulna",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-888-000-0000",
      "contactType": "sales",
      "email": "hello@orbiters.io"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Automotive Digital Marketing",
    "provider": {
      "@type": "Organization",
      "name": "Orbiters"
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Automotive Growth Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Advertising"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reputation Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automotive SaaS Design"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  );
}
