import { defineConfig } from "vitepress";
import mdItCustomAttrs  from 'markdown-it-custom-attrs';

export default defineConfig({
    base:'/docs',
    title:'WY博客',
    description: 'Just playing around.',
    appearance: true,
    ignoreDeadLinks: true,
    lang: 'zh-CN',
    lastUpdated: true,
    head:[
        ['link', { rel: 'icon', href: '/images/logo.png' }],
        ['link', { rel: 'icon', href: '/images/my.png' }], 
        [
            "link",
            { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
        ],
        ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],

    ],
    markdown: {
        config: (md) => {
            // use more markdown-it plugins!
            md.use(mdItCustomAttrs, 'image', {
                'data-fancybox': "gallery"
            })
            },
          //config: (md) => {
          //    const { demoBlockPlugin } = require('vitepress-theme-demoblock')
          //    md.use(demoBlockPlugin)
          //    },
        theme: 'material-palenight',
        lineNumbers: true
      },
      titleTemplate: '博客',
      themeConfig: {
        logo:'/images/logo.png',
        nav:[
            { text: '首页', link: '/' },
            { text: '留言板', link: '/message/' },
            { text: '美食记录', link: '/food/' },
            { text: '今日心情', link: '/mood/' },
            { text: '学习打卡', link: '/study/' },
            { text: '秘密', link: '/secret/' },
            { text: '小说分享', link: '/navel/' },
          ],
          sidebar:{
           // '/message/':[
           //   {
           //     text:'欢迎留言哦',
           //     collapsed:true,
           //     //collapsible:true,    
           // }
           // ],
            '/food/':[
                {
                  text:'美食喔喔喔喔',
                  collapsed:true,
                 // collapsible:true,
                  items:[
                      {
                          text:'火锅分享',
                          link:'/food/hotfood/'
                      },
                      {
                          text:'奶茶分享',
                          link:'/food/drinkfood/'
                      },
                      {
                        text:'小吃分享',
                        link:'/food/xiaochifood/'
                    },
                    {
                        text:'零食分享',
                        link:'/food/snacksfood/'
                    },
                    {
                        text:'水果分享',
                        link:'/food/fruitsfood/'
                    },
                  ]
              }
              ],
              '/mood/':[
                {
                  text:'小仙女的情绪记录',
                  collapsed:true,
                  //collapsible:true,
                  items:[
                      {
                          text:'高兴嘻嘻',
                          link:'/mood/happy/'
                      },
                      {
                          text:'悲伤蛙',
                          link:'/mood/sad/'
                      },
                      {
                        text:'苦瓜味的情绪',
                        link:'/mood/bitter/'
                    },
                    {
                        text:'朝天椒',
                        link:'/mood/spicy/'
                    },
                  ]
              }
              ],
              '/study/':[
                {
                  text:'HTML学习',
                  collapsed:true,
                  collapsible:true,
                  items:[
                         {
                          text:'html文档声明',
                          link:'/study/HTMLstudy/html文档声明'
                        },
                        {
                            text:'html语义化',
                            link:'/study/HTMLstudy/html语义化'
                          },   
                          {
                            text:'替换元素',
                            link:'/study/HTMLstudy/替换元素'
                          },  
                          {
                            text:'微格式',
                            link:'/study/HTMLstudy/微格式'
                          },  
                          {
                            text:'iframe',
                            link:'/study/HTMLstudy/iframe'
                          },  
                          {
                            text:'W3C标准组织',
                            link:'/study/HTMLstudy/W3C标准组织'
                          },  
                          {
                            text:'SEO',
                            link:'/study/HTMLstudy/SEO'
                          },  
                  ],
                },
                {
                  text:'CSS学习',
                  collapsed:true,
                  collapsible:true,
                  items:[
                         {
                          text:'css单位总结',
                          link:'/study/CSSstudy/css单位总结'
                        },
                        {
                            text:'css居中方式总结',
                            link:'/study/CSSstudy/css居中方式总结'
                          },  
                          {
                            text:'隐藏元素的方法总结',
                            link:'/study/CSSstudy/隐藏元素的方式总结'
                          },  
                          {
                            text:'浮动',
                            link:'/study/CSSstudy/浮动'
                          },  
                          {
                            text:'定位总结',
                            link:'/study/CSSstudy/定位总结'
                          },  
                          {
                            text:'BFC',
                            link:'/study/CSSstudy/BFC'
                          },  
                  ]
              },
              {
                text:'Javascript学习',
                collapsed:true,
                collapsible:true,
                items:[
                       {
                        text:'let,var,const的区别',
                        link:'/study/Javascriptstudy/let,var,const的区别'
                      },
                      {
                        text:'值和引用',
                        link:'/study/Javascriptstudy/值和引用'
                      },
                      {
                        text:'包装类型',
                        link:'/study/Javascriptstudy/包装类型'
                      },
                      {
                        text:'数据类型的转化',
                        link:'/study/Javascriptstudy/数据类型的转换'
                      },
                    
                      {
                        text:'运算符',
                        link:'/study/Javascriptstudy/运算符'
                      },
                      {
                        text:'原型和原型链',
                        link:'/study/Javascriptstudy/原型和原型链'
                      },
                      {
                        text:'执行栈和执行上下文',
                        link:'/study/Javascriptstudy/执行栈和执行上下文'
                      },
                      {
                        text:'作用域和作用域链',
                        link:'/study/Javascriptstudy/作用域和作用域链'
                      },
                      {
                        text:'this的指向',
                        link:'/study/Javascriptstudy/this的指向'
                      },
                ]
            },
            {
                text:'Vue学习',
                collapsed:true,
                collapsible:true,
                items:[
                       {
                        text:'组件通信总结',
                        link:'/study/Vuestudy/组件通信总结'
                      },
                      {
                        text:'虚拟DOM详解',
                        link:'/study/Vuestudy/虚拟DOM详解'
                      },
                      {
                        text:'v-model',
                        link:'/study/Vuestudy/v-model'
                      },
                      {
                        text:'数据响应原理',
                        link:'/study/Vuestudy/数据响应原理'
                      },
                      {
                        text:'diff',
                        link:'/study/Vuestudy/diff'
                      },
                      {
                        text:'生命周期详解',
                        link:'/study/Vuestudy/生命周期详解'
                      },
                      {
                        text:'过渡和动画',
                        link:'/study/Vuestudy/过渡和动画'
                      },

                ]
            },
            {
                text:'Git学习',
                collapsed:true,
                collapsible:true,
                items:[
                       {
                        text:'git总结',
                        link:'/study/git/git总结'
                      },
                ]
            },
            {
                text:'二叉树算法学习',
                collapsed:true,
                collapsible:true,
                items:[
                       {
                        text:'二叉树',
                        link:'/study/arithemtic/二叉树'
                      },
                ]
            },
            {
                text:'Webpack学习',
                collapsed:true,
                collapsible:true,
                items:[
                       {
                        text:'webpack',
                        link:'/study/Webpackstudy/'
                      },
                ]
            },
            {
                text:'React学习',
                collapsed:true,
                collapsible:true,
                items:[
                       {
                        text:'react',
                        link:'/study/React/'
                      },
                ]
            },
              ],
              '/secret/':[
                {
                  text:'树洞',
                  collapsed:true,
                  //collapsible:true,
                  items:[
                      {
                          text:'大漂亮的密码',
                          link:'/secret/beauty/'
                      }, 
                  ]
              }
              ],
              '/navel/':[
                {
                  text:'小说搭子',
                  collapsed:true,
                  //collapsible:true,
                  items:[
                      {
                          text:'经典霸道总裁文',
                          link:'/navel/badao/'
                      },
                      {
                          text:'大女主文',
                          link:'/navel/goddess/'
                      },
                      {
                        text:'种田文',
                        link:'/navel/zhongtian/'
                    },
                    {
                        text:'玄幻',
                        link:'/navel/dream/'
                    },
                    {
                        text:'校园文',
                        link:'/navel/school/'
                    },
                  ]
              }
              ],


          },
      }

})