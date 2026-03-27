export default {
  title: '我的学习日志',
  description: 'Django+Vue 开发成长记录',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/QuinnMercer/my-learning-blog' }
    ],
    sidebar: [
      {
        text: '学习笔记',
        items: [
          { text: 'Day 1: 环境搭建', link: '/day1' },
          { text: 'Day 2: 用户认证', link: '/day2' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/QuinnMercer/my-learning-blog' }
    ],
    footer: {
      message: 'Released under MIT License',
      copyright: 'Copyright © 2026 QuinnMercer'
    }
  }
}
