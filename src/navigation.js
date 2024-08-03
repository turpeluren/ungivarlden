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
      href: getPermalink('/engagera-dig'),
      /*links: [
        {
          text: 'Bli medlem',
          href: getPermalink('/engagera-dig'),
        }
      ]*/
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
      text: 'Aktuellt',
      href: getPermalink('/#upcoming'),
    },
    {
      text: 'Om oss',
      href: getPermalink('/om'),
    },
    {
      text: 'Kontakt',
      href: getPermalink('/kontakt'),
      
    },
  ],
  actions: [{ text: 'Bli medlem', href: getPermalink('/engagera-dig#bli-medlem') }],
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
        { text: '🏡 Besöksadress:<br>Vägenvägen 00, 123 45 Ort'},
        { text: '📨 Mail:<br><a class="underline hover:text-black break-all" href="mailto:ungivarlden.org@gmail.com">ungivarlden.org@gmail.com</a>' },
        { text: '💬 <a class="underline hover:text-black" href="/kontakt#form">Skicka ett meddelande</a>'}
      ],
    },
    {
      title: 'Meny',
      links: [

        { text: '🤸 Engagera dig', href: getPermalink('/engagera-dig') },
        { text: '📅 Aktuellt', href: getPermalink('/aktuellt') },
        { text: '🤲 Värderingar', href: '/om#values' },
        { text: '🙋 Om oss', href: getPermalink('/om') },
        { text: '💌 Kontakt', href: getPermalink('/kontakt') },
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
