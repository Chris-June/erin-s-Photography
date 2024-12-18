import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const SEO = ({ 
  title = "Andy Photography - Professional Photography Services",
  description = "Professional photography services specializing in weddings, portraits, and events. Capturing life's beautiful moments with artistic vision.",
  keywords = ["photography", "photographer", "wedding photography", "portrait photography", "event photography", "professional photographer"],
  image = "/images/og-image.jpg",
  url = "https://home.intellisyncsolutions.io"
}: SEOProps) => {
  const siteTitle = `${title} | Andy Photography`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:site_name" content="Andy Photography" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#000000" />
      <meta name="author" content="Andy Photography" />
      <meta name="publisher" content="Intellisync Solutions" />

      {/* Language and Locale */}
      <meta property="og:locale" content="en_US" />
      <html lang="en" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Andy Photography",
          "image": `${url}${image}`,
          "description": description,
          "@id": url,
          "url": url,
          "telephone": "(555) 123-4567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Photography St",
            "addressLocality": "Chatham",
            "addressRegion": "ON",
            "postalCode": "N0P 0P0",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 42.4048,
            "longitude": -82.1910
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.facebook.com/andyphotography",
            "https://www.instagram.com/andyphotography",
            "https://twitter.com/andyphotography"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
