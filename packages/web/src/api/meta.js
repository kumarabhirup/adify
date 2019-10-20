import React from 'react'

export const meta = {
  name: 'Adify',
  title: 'Adify - Sell your AdSpace in a few clicks', // <title></title>
  coverImage: 'https://i.ibb.co/SfmDpSH/Adify-Cover.jpg',
  website: 'https://adify.tech',
  domain: 'https://adify.tech',
  social: 'adifyTech',
  fbPageId: '104253327644041',
  email: `info@iqubex.com`,
  meta_ogTitle: 'Adify - Sell your AdSpace in a few clicks', // Facebook, Twitter card
  tagline: <>Sell your AdSpace like never before</>,
  meta_description:
    'Sell your AdSpace like never before. The deal maker of publishers and advertisers!',
  image: 'https://i.ibb.co/wMyWtxT/logo.png',
  lightLogo: 'https://i.ibb.co/wMyWtxT/logo.png',
  darkLogo: 'https://i.ibb.co/LgGLh56/logo-dark.png',
  favicon: `/static/favicon.ico`,
}

export const social = [
  { name: 'facebook', link: 'https://facebook.com/adify' },
  { name: 'twitter', link: 'https://twitter.com/adify' },
  { name: 'github', link: 'https://github.com/iqubex-technologies/adify' },
  { name: 'youtube', link: 'https://youtube.com/c/Iqubex' },
]

export const menu = [
  {
    linkName: 'Features',
    href: '/#featuresSection',
    to: 'featuresSection',
    scrollOffset: -100,
  },
  {
    linkName: 'Subscribe to updates',
    href: '/#subscribeSection',
    to: 'subscribeSection',
    scrollOffset: -120,
  },
  {
    linkName: 'FAQ',
    href: '/#faqSection',
    to: 'faqSection',
    scrollOffset: -100,
  },
]

export const landingSection = {
  bannerImage: 'https://i.ibb.co/fFrj25L/about-img.png',
  title: meta.tagline,
  excerpt: (
    <>
      Don't get spammed in email by the uninterested advertisers. Don't
      negotiate with businesses for adspaces. Don't manage their invoices when
      Adify's seamless checkout process does it all for you!
    </>
  ),
  button: {
    href: '/#subscribeSection',
    linkName: 'Subscribe',
  },
}

export const featuresSection = [
  {
    image: 'https://i.ibb.co/YpMBV0v/feature-icon-3.png',
    title: 'Create Adspace',
    excerpt:
      'Create custom adspaces worth any amount of money. Show the adspace on your website or app by the code you get when you create an Adify Adspace.',
  },
  {
    image: 'https://i.ibb.co/KNQ1yZ8/feature-icon-1.png',
    title: 'Let your sponsors buy',
    excerpt:
      "They'll click your adspace and pay you the amount of money you asked for the adspace through our platform. The Ad campaign will start automatically, you ever care?",
  },
  {
    image: 'https://i.ibb.co/R2shmpP/feature-icon-2.png',
    title: 'Earn while you sleep',
    excerpt:
      'Leave those AdSpaces on your website and Adify will take care of invoices, transactions and ad campaigns for you. You can moderate the Adspaces as well.',
  },
]

export const featuresInDetailSection = [
  {
    iconImage: 'https://i.ibb.co/qy71mMJ/Icon-1.png',
    image: 'https://i.ibb.co/3p6nCKw/banner-img.png',
    title: (
      <>
        Exclusive Adify API <br />
        To sell custom ads
      </>
    ),
    excerpt:
      'You run a website that has monetization strategy built? You hate typical box-like AdSense ads? You like dynamicity? But, hate doing checkout processes for your sponsors? Well, we have covered you all.',
    button: {
      linkName: 'Subscribe for updates',
      href: '/#subscribeSection',
      to: 'subscribeSection',
      scrollOffset: -120,
    },
  },
  {
    iconImage: 'https://i.ibb.co/X4JZPmf/Icon-2.png',
    image: 'https://i.ibb.co/NCJbxXd/undraw-complete-task-u2c3.png',
    title: 'Tired of using insensible Adsense Ads?',
    excerpt: (
      <>
        If you are a{' '}
        <strong>niche publisher with less but quality traffic</strong>, Adsense
        won't help you run your website. With Adify, you can{' '}
        <strong>decide the worth of your own adspace</strong> and sell it to the
        sponsors who trust you and your audience. Adify allows you to{' '}
        <strong>show Adsense ads when adspace is empty.</strong>
      </>
    ),
    button: {
      linkName: 'Subscribe for updates',
      href: '/#subscribeSection',
      to: 'subscribeSection',
      scrollOffset: -120,
    },
  },
]

export const subscribeSection = {
  title: (
    <>
      👉 Subscribe for updates 👈 <br />
      Free for pre-launch subscribers
    </>
  ),
  excerpt: (
    <>
      <strong style={{ color: 'green' }}>26,567 people</strong> subscribed for a{' '}
      <strong>better publishing experience</strong>
    </>
  ),
  belowText: <>Subscribers will get free access to Adify after launch day.</>,
  placeholder: 'Enter your email',
  button: {
    href: '/#subscribeSection',
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
  excerpt: 'Necessary questions that need an answer',
  questions: [
    {
      question: 'Will Adify be absolutely free for pre-launch subscribers?',
      answer: (
        <>
          Yes! If you subscribed before launch day, and sign in with appropriate
          Email Id after the Adify launch, you'll have to bear NO transaction
          charges for all your deals on Adify Platform. Early subscribers will
          get access to unlimited Adspaces, and every thing will be free for
          them.
        </>
      ),
    },
    {
      question: 'Is this just another useless Ad Network?',
      answer: (
        <>
          No! This is NOT an Ad Network. This is NOT a portal where ads are
          bought and sold. It is essentially a SaaS product made to make deals
          between publishers and advertisers more easy.
        </>
      ),
    },
    {
      question: 'Do I have control over my adspace? Can I ban ads?',
      answer: (
        <>
          Yes, you can choose to be a moderator in settings. You can ban ads
          that you don't like. In that case, the money of the advertiser will be
          refunded.
        </>
      ),
    },
    {
      question: 'What kinds of adspaces can be set up?',
      answer: (
        <>
          Typical box-like banner ads, native promotional ads, dynamic
          promotional ads (like the promotions you see on Reddit and Twitter)
          can be set up in a few minutes with Adify.
        </>
      ),
    },
    {
      question: "What if my adspace isn't bought and is empty?",
      answer: (
        <>
          For empty adspaces, you can setup Adsense Ads with a "Buy this
          Adspace" text below. Most of it will be customizable. You'll love it.
        </>
      ),
    },
    {
      question: 'What if two businesses booked the same adspace?',
      answer: (
        <>
          The sponsor that paid higher will get higher impressions. It will be
          in proportion with bidding that other sponsor has done. You don't need
          to care about your ads. They'll be served with accuracy. At max, 5
          bussiness can have one adspace.
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
    'No, this is not an Ad Network. This is a cool product that allows you to get quick 💸 cash flowing by selling your Web and App Adspaces to businesses.',
  copyright: (
    <>Copyright &copy; {new Date().getFullYear()} All rights reserved.</>
  ),
  links: [],
}
