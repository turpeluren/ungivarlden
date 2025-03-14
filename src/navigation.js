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
      links: [
        {
          text: 'Vår värdegrund',
          href: getPermalink('/värdegrund'),
        }
      ],
    },
    {
      text: 'Kontakt',
      href: getPermalink('/kontakt'),
    },
  ],
  actions: [
    {
      text: 'Bli medlem',
      href: getPermalink('/engagera-dig#bli-medlem'),
      icon: 'tabler:heart-handshake',
    },
  ],
};

export const footerData = {
  about: ' Ung i Världen är en ideell förening som vill uppnå ökad mångfald inom den svenska utvecklingssektorn bland de yngre generationerna. Tillsammans utforskar vi biståndsbranschen, främjar tvärkulturell dialog och uppmanar till globala karriärer.',
  links: [
    {
      title: 'Kontakt',
      links: [
        /*{ text: '🏡 Besöksadress:<br>Vägenvägen 00, 123 45 Ort'},*/
        { text: '📨 Mail:<br><a class="underline hover:text-black break-all" href="mailto:ungivarlden.org@gmail.com">ungivarlden.org@gmail.com</a>' },
        { text: '💬 <a class="underline hover:text-black" href="/kontakt#form">Skicka ett meddelande</a>'}
      ],
    },
    {
      title: 'Meny',
      links: [
        { text: '🏡 Hem', href: getPermalink('/') },
        { text: '🤸 Engagera dig', href: getPermalink('/engagera-dig') },
        { text: '📅 Aktuellt', href: getPermalink('/aktuellt') },
        { text: '🙋 Om oss', href: getPermalink('/om') },
        { text: '🤲 Värdegrund', href: getPermalink('/värdegrund') },
        { text: '💌 Kontakt', href: getPermalink('/kontakt') },
      ],
    },
  ],
  secondaryLinks: [
    /*{ text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },*/
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/ungivarldensweden' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/ung-i-v%C3%A4rlden/' },
    /*{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },*/
  ],
  footNote: `
    Ung i Världen · 
    2025 · 
    Sida av <a class="underline" href="https://turpelurpeluren.online">turpelurpeluren</a>.
  `,
};
