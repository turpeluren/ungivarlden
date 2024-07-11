import { getStaticPaths } from './pages/[...blog]/[...page].astro';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Hem',
      href: '/'
    },
    {
      text: 'Engagera dig',
      links: [
        {
          text: 'Kommande event',
          href: getPermalink('/#upcoming'),
        },
        {
          text: 'Anmäl dig? Bli medlem?',
          href: getPermalink('/anmalan'),
        }
      ]
      /*links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],*/
    },
    {
      text: 'Verksamhet',
      href: getPermalink('/verksamhet'),

      /*links: [
        {
          text: 'Verksamhet',
          href: getPermalink('/verksamhet'),
        },
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],*/
    },
    {
      text: 'Kontakt',
      href: getPermalink('/kontakt'),
      /*links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],*/
    },
    {
      text: 'Om oss',
      href: getPermalink('/om'),
    },
  ],
  actions: [{ text: 'Anmäl dig? Bli medlem?', href: getPermalink('/anmalan') }],
};

export const footerData = {
  about: 'Ung i världen är en organisation bla bla bla.',
  links: [
    /*{
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Om Ung i världen',
      about: 'Ung i världen är en organisation bla bla bla.',
    },*/
    
    {
      title: 'Kontakt',
      links: [
        { text: 'Besöksadress: Vägenvägen 00, 123 45 Ort'},
        { text: 'Mail: <a class="underline hover:text-black  break-all" href="mailto:ungivarlden.org@gmail.com">ungivarlden.org@gmail.com</a>' },
      ],
    },
    {
      title: 'Meny',
      links: [
        { text: '🙋 Om oss', href: getPermalink('/om') },
        { text: '🤲 Värderingar', href: '/om#values' },
        { text: '💌 Kontakt', href: getPermalink('/kontakt') },
        { text: '📅 Aktuellt', href: getPermalink('/aktuellt') },
        { text: '🤸 Engagera dig', href: getPermalink('/anmalan') },
      ],
    },
  ],
  secondaryLinks: [
    /*{ text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },*/
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    /*{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },*/
  ],
  footNote: `
    Ung i världen · 
    2024 · 
    Sida av <a class="underline" href="https://turpelurpeluren.online">turpelurpeluren</a>.
  `,
};
