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

export const social = [
  { name: 'facebook', link: 'https://facebook.com/adify' },
  { name: 'twitter', link: 'https://twitter.com/adify' },
  { name: 'github', link: 'https://github.com/iqubex-technologies/adify' },
  { name: 'youtube', link: 'https://youtube.com/c/Iqubex' },
]

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

export const featuresSection = [
  {
    image: 'https://i.ibb.co/KNQ1yZ8/feature-icon-1.png',
    title: 'Fully Secured',
    excerpt:
      'Made great fish shall beast, fourth land also Doesn tree without lesser likeness he fruit of called gathering day whose called were have',
  },
  {
    image: 'https://i.ibb.co/R2shmpP/feature-icon-2.png',
    title: 'Unique Design',
    excerpt:
      'Made great fish shall beast, fourth land also Doesn tree without lesser likeness he fruit of called gathering day whose called were have',
  },
  {
    image: 'https://i.ibb.co/YpMBV0v/feature-icon-3.png',
    title: 'A Volunteer',
    excerpt:
      'Made great fish shall beast, fourth land also Doesn tree without lesser likeness he fruit of called gathering day whose called were have',
  },
]

export const featuresInDetailSection = [
  {
    iconImage: 'https://i.ibb.co/qy71mMJ/Icon-1.png',
    image: 'https://i.ibb.co/fFrj25L/about-img.png',
    title: (
      <>
        Easy To <br />
        Access Social Media
      </>
    ),
    excerpt:
      "Saw shall light. Us their to place had creepeth day night great wher appear to. Hath, called, sea called, gathering wherein open make living Female itself gathering man. Waters and, two. Bearing. Saw she'd all let she'd lights abundantly blessed.",
    button: {
      linkName: 'Learn More',
      href: '/',
    },
  },
  {
    iconImage: 'https://i.ibb.co/X4JZPmf/Icon-2.png',
    image: 'https://i.ibb.co/jy5mfhn/about-img-1.png',
    title: 'Easy To Access Social Media',
    excerpt:
      "Saw shall light. Us their to place had creepeth day night great wher appear to. Hath, called, sea called, gathering wherein open make living Female itself gathering man. Waters and, two. Bearing. Saw she'd all let she'd lights abundantly blessed.",
    button: {
      linkName: 'Learn More',
      href: '/',
    },
  },
  // {
  //   iconImage: 'https://i.ibb.co/R2shmpP/feature-icon-2.png',
  //   embed: (
  //     <>
  //       <iframe
  //         width="100%"
  //         height={315 * 1}
  //         src="https://www.youtube.com/embed/eZe4Q_58UTU"
  //         frameBorder="0"
  //         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //         title="Adify YouTube Video"
  //       ></iframe>
  //     </>
  //   ),
  //   title: 'Watch the video!',
  //   excerpt: 'The video shall throw light on what the core idea of Adify is.',
  // },
]

export const subscribeSection = {
  title: (
    <>
      Experience the most simple way to <br />
      manage adverts
    </>
  ),
  excerpt: (
    <>
      <strong>26,567 people</strong> subscribed for the{' '}
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

export const faqSection = {
  title: 'Frequently Asked Questions',
  excerpt:
    'Beginning Gathered Divided Upon Blessed Seasons Form Herb Years Subdue',
  questions: [
    {
      question: 'What exactly is an Ad Serving API?',
      answer: <>Really nice question.</>,
    },
    {
      question: 'When will the API be ready to use?',
      answer: (
        <>
          When the API will be ready for use, you'll be notified in your mail
          inbox. To get notified, Subscribe to Adify.
        </>
      ),
    },
    {
      question: 'How do I contact you?',
      answer: (
        <>
          Email us at{' '}
          <a href={`mailto:${meta.email}`}>
            {meta.email.replace('@', ' [ at ] ')}
          </a>{' '}
          for any query you have.
        </>
      ),
    },
  ],
}

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
