import React from 'react'

export const meta = {
  name: 'Adify',
  title: 'Adify',
  social: 'adifytech',
  website: 'https://adify.now.sh', // soon https://adify.tech
  meta_description: '',
  meta_ogTitle: 'Adify - Leading Ad serving API for publishers',
  tagline: <>Leading Ad serving API for publishers</>,
  image: 'https://i.ibb.co/tD7NDDx/logo.png',
  lightLogo: 'https://i.ibb.co/tD7NDDx/logo.png',
  darkLogo: 'https://i.ibb.co/tD7NDDx/logo.png',
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
