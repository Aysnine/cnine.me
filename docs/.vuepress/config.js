module.exports = {
  title: 'cnine.me',
  description: 'personal website',
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/Aysnine',
        },
        {
          type: 'codesandbox',
          link: 'https://codesandbox.io/u/Aysnine',
        },
        {
          type: 'codepen',
          link: 'https://codepen.io/aysnine',
        },
      ],
      copyright: [
        {
          text: 'Copyright © 2021-present cnine229@gmail.com',
        },
      ],
    },
    sitemap: {
      hostname: 'https://cnine.me'
    },
    feed: {
      canonical_base:'http://cnine.me',
    },
  },
}
