module.exports = {
  title: '我的博客',
  host: 'localhost',
  port: '8199',
  description: 'nrbo',
  theme: 'reco',
  base: '/interview/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  extraWatchFiles: [ //监听文件自己动构建
    '.vuepress/foo.js', // 使用相对路径
    '/path/to/bar.js'   // 使用绝对路径
  ],
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: "首页", link: "/" },
      {
        text: "codinglin 的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/726107228492253" },
          { text: "Github", link: "https://github.com/coding-lin" }
        ]
      }
    ],
	 sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,  // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      }
    ]
  }
}