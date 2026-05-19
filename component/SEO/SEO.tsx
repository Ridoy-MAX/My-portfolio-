import Head from 'next/head';
import { useRouter } from 'next/router';

export const SITE = {
  url: 'https://ridoy-hasan.vercel.app',
  name: 'Ridoy Hasan',
  legalName: 'Harun Or Rashid (Ridoy)',
  jobTitle: 'Full Stack Web Developer',
  email: 'harunorrashid@gmail.com',
  image: '/me.jpg',
  location: 'Mohammadpur, Dhaka, Bangladesh',
  twitter: '@ridoy_hasan',
  social: [
    'https://www.linkedin.com/in/ridoy-hasan-54a449182/',
    'https://github.com/Ridoy-MAX',
  ],
};

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
}

const DEFAULT_TITLE =
  'Ridoy Hasan (Harun Or Rashid) — Full Stack Web Developer | React, Next.js, Laravel';
const DEFAULT_DESCRIPTION =
  'Portfolio of Ridoy Hasan (Harun Or Rashid) — Full Stack Web Developer from Dhaka, Bangladesh. Specialising in React, Next.js, Angular, Node.js, Laravel, PHP, AWS EC2, and SAP UI5. Building ERP, MES, and SaaS applications.';
const DEFAULT_KEYWORDS =
  'Ridoy, Ridoy Hasan, Harun Or Rashid, Harun Or Rashid Ridoy, Ridoy Max, Full Stack Developer Bangladesh, Web Developer Dhaka, React developer Bangladesh, Next.js developer, Laravel developer, Angular developer, Node.js developer, SAP UI5, ERP developer, MES developer, AWS EC2, freelance web developer Dhaka, portfolio Ridoy';

const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image,
  noindex = false,
}) => {
  const router = useRouter();
  const fullTitle = title ? `${title} | Ridoy Hasan` : DEFAULT_TITLE;
  const canonical = `${SITE.url}${router.asPath.split('?')[0].split('#')[0]}`;
  const ogImage = `${SITE.url}${image || SITE.image}`;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    alternateName: [
      'Harun Or Rashid',
      'Harun Or Rashid Ridoy',
      'Ridoy Hasan',
      'Ridoy Max',
    ],
    url: SITE.url,
    image: ogImage,
    email: `mailto:${SITE.email}`,
    jobTitle: SITE.jobTitle,
    description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'Bangladesh',
    },
    knowsAbout: [
      'React',
      'Next.js',
      'Angular',
      'Node.js',
      'Laravel',
      'PHP',
      'JavaScript',
      'TypeScript',
      'AWS EC2',
      'SAP UI5 Web Components',
      'ERP systems',
      'MES systems',
      'RESTful API design',
      'Full Stack Web Development',
    ],
    sameAs: SITE.social,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    author: { '@type': 'Person', name: SITE.name },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE.legalName} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="theme-color" content="#06060c" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE.legalName} — ${SITE.jobTitle}`} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={SITE.twitter} />

      {/* Favicons */}
      <link rel="icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </Head>
  );
};

export default SEO;
