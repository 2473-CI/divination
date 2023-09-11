/*
 * @Author: RuStealsMelons
 * @Date: 2023-09-01 01:09:44
 * @LastEditors: RuStealsMelons
 * @LastEditTime: 2023-09-01 01:09:44
 * @Description:
 */


module.exports = {
  title: 'divination',
  description: 'frontend docs',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    siteTitle: 'divination',
    logo: '/logo.png',
    laslltUpdatedText: '最后更新',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/RuStealsMelons',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present RuStealsMelons',
    },
    sidebar: {
      '/': [
        {
          text: '时间',
          collapsible: true,
          items: [
            { text: "真太阳时", link: '/utils/TrueSolarTime' },
            { text: "阴历工具", link: '/utils/LunarTime' },
           ]
        },
      ]
    },
  },
};
