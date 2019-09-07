import React from 'react'

export const meta = {
  name: 'Adify',
  title: 'Adify',
  social: 'adifytech',
  website: 'https://adify.now.sh', // soon https://adify.tech
  meta_description: '',
  meta_ogTitle: 'Adify - Ad serving API for publishers',
  tagline: <>Ad serving API for publishers</>,
  image: 'https://i.ibb.co/tD7NDDx/logo.png',
  lightLogo:
    'https://discordapp.com/assets/065a456aee15f669a505172edc830b79.svg',
  darkLogo:
    'https://logodownload.org/wp-content/uploads/2017/11/discord-logo.png',
  favicon: `/static/favicon.ico`,
  email: `info@iqubex.com`,
  domain: 'https://adify.now.sh',
}

export const menu = [
  {
    linkName: 'Home',
    href: '/index',
  },
  {
    linkName: 'Features',
    href: '/features',
  },
  {
    linkName: 'Pricing',
    href: '/pricing',
  },
  {
    linkName: 'Contact',
    href: '/contact',
  },
]

export const landingSection = {
  bannerImage: 'https://i.ibb.co/3p6nCKw/banner-img.png',
  title: meta.tagline,
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  button: {
    href: '/trial',
    linkName: 'Sign up now',
  },
}

export const subscribeSection = {
  title: (
    <>
      Experience the most simple way to <br />
      manage adverts
    </>
  ),
  excerpt: (
    <>
      <strong>26,500 people</strong> subscribed for the{' '}
      <strong>gamechanging service</strong>.
    </>
  ),
  placeholder: 'Enter your email',
  button: {
    href: '/trial',
    linkName: 'Subscribe',
  },
}

export const showcasingSection = [
  {
    image: 'https://cdn.worldvectorlogo.com/logos/product-hunt-1.svg',
    alt: 'Product Hunt',
    link: 'https://producthunt.com',
  },
  {
    image:
      'http://rockvilleredi.org/wp-content/uploads/2017/05/Forbes-logo-1024x382.jpg',
    alt: 'Forbes Magazine',
    link: 'https://forbes.com',
  },
  {
    image:
      'https://www.catholiccharitiesdc.org/wp-content/uploads/2018/10/twitter-logo.png',
    alt: 'Twitter',
    link: 'https://twitter.com',
  },
  {
    image: 'https://logonoid.com/images/time-logo.png',
    alt: 'Time Magazine',
    link: 'https://time.com',
  },
]

export const footer = {
  excerpt:
    "Gathered. Under is whose you'll to make years is mat lights thing together fish made forth thirds cattle behold won't. Fourth creeping first female.",
  copyright: (
    <>Copyright &copy; {new Date().getFullYear()} All rights reserved.</>
  ),
  links: [
    {
      sectionName: 'About Us',
      menu: [
        {
          href: '/',
          linkName: 'Managed Website',
        },
      ],
    },
    {
      sectionName: 'Quick Links',
      menu: [
        {
          href: '/',
          linkName: 'Managed Website',
        },
      ],
    },
    {
      sectionName: 'My Account',
      menu: [
        {
          href: '/',
          linkName: 'Managed Website',
        },
      ],
    },
    {
      sectionName: 'Resources',
      menu: [
        {
          href: '/',
          linkName: 'Managed Website',
        },
      ],
    },
  ],
}

export const social = [
  { name: 'facebook', link: 'https://facebook.com/adify' },
  { name: 'twitter', link: 'https://twitter.com/adify' },
  { name: 'github', link: 'https://github.com/iqubex-technologies/adify' },
  { name: 'youtube', link: 'https://youtube.com/c/Iqubex' },
]
