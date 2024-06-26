export default ({
    title: '标题',
    base: '/vite-press-demo/',
    description: 'Just playing around.',
    outDir: '../public',
    cleanUrls: true,
    themeConfig: {
        nav: [
            {
                text: '导航',
                items: [
                    { text: '页面1', link: '/page/page1' },
                    { text: '页面2', link: '/page/page2' }
                ]
            }
        ],
        sidebar: {
            '/page/': [
                {
                    text: '关于侧边栏',
                    items: [
                        { text: '关于1', link: '/page/page1' },
                        { text: '关于2', link: '/page/page2' }
                    ]
                },
 
            ]
        }
    }
})
