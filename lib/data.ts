
import { AiFillSignal } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { TiTags } from "react-icons/ti";
import { BiCategory } from "react-icons/bi";
export const pageItems = [
  {
    label: "离开盒子高亮还在",
    href: "/1",
  },
  {
    label: "图片放大Modal",
    href: "/2",
  },
  {
    label: "导航栏",
    href: "/3",
  },
  {
    label: "搜索框",
    href: "/4",
  },
  {
    label: "选项框",
    href: "/5",
  },
  {
    label: "表单",
    href: "/6",
  },
  {
    label: "按钮",
    href: "/7",
  },
  {
    label: "文字",
    href: "/8",
  },
  {
    label: "背景特效",
    href: "/9",
  },
  {
    label: "卡片",
    href: "/10",
  },
  {
    label: "换页特效1",
    href: "/11",
  },
  {
    label: "换页特效2",
    href: "/12",
  },
  {
    label: "换页特效3",
    href: "/13",
  },
  {
    label: "滑动视差",
    href: "/14",
  },
  {
    label: "轮播图",
    href: "/15",
  },
  {
    label: "进度条",
    href: "/16",
  },
  {
    label: "Sass练习",
    href: "/17",
  },
  {
    label: "gsap动画1",
    href: "/18",
  },
  {
    label: "gsap动画2",
    href: "/19",
  },
  {
    label: "animate练习",
    href: "/20",
  },
  {
    label: "javascript练习",
    href: "/21",
  },
];


export const navItems = [
  {
    label: "home",
    href: "/11",
  },
  {
    label: "Blog",
    href: "/11/blog",
  },
  {
    label: "Guides",
    href: "/11/guide",
    child: [
      {
        label: "HTML",
        href: "/",
        color: "bg-red-300",
      },
      {
        label: "CSS",
        href: "/",
        color: "bg-green-300",
      },
      {
        label: "JS",
        href: "/",
        color: "bg-blue-300",
      },
    ],
  },
  {
    label: "About",
    href: "/11/about",
  },
];

export const navItems12 = [
  {
    label: "home",
    href: "/12",
  },
  {
    label: "Blog",
    href: "/12/blog",
  },
  {
    label: "Guides",
    href: "/12/guide",
    child: [
      {
        label: "HTML",
        href: "/",
        color: "bg-red-300",
      },
      {
        label: "CSS",
        href: "/",
        color: "bg-green-300",
      },
      {
        label: "JS",
        href: "/",
        color: "bg-blue-300",
      },
    ],
  },
  {
    label: "About",
    href: "/12/about",
  },
];

export const navItems13 = [
  {
    label: "home",
    href: "/13",
  },
  {
    label: "Blog",
    href: "/13/blog",
  },
  {
    label: "Guides",
    href: "/13/guide",
    child: [
      {
        label: "HTML",
        href: "/",
        color: "bg-red-300",
      },
      {
        label: "CSS",
        href: "/",
        color: "bg-green-300",
      },
      {
        label: "JS",
        href: "/",
        color: "bg-blue-300",
      },
    ],
  },
  {
    label: "About",
    href: "/13/about",
  },
];

export const navItems3_3 = [
  {
    title: "文章",
    link: "/posts",
    isclick: true,
    child: [
      {
        title: "分类",
        link: "/categories",
        icon: BiCategory
      },
      {
        title: "标签",
        link: "/tags",
        icon: TiTags
      },
      {
        title: "归档",
        link: "/archives",
        icon: BiTransfer
      },
      {
        title: "文章数据",
        link: "/chart",
        icon: AiFillSignal
      },
    ],
  },

  {
    title: "娱乐",
    link: "/hobby",
    isclick: false,
    child: [
      {
        title: "电影",
        link: "/hobby/movies",
        icon: BiCategory
      },
    ],
  },

  {
    title: "发现",
    link: "/discover",
    isclick: false,
    child: [
      {
        title: "学习网站",
        link: "/discover/website",
        icon: BiCategory
      },
    ],
  },
  {
    title: "逛逛",
    link: "/see",
    isclick: false,
    child: [
      {
        title: "友人帐",
        link: "/see/friends",
        icon: BiCategory
      },
      {
        title: "相册",
        link: "/see/photos",
        icon: BiCategory
      },
      {
        title: "留言板",
        link: "/see/messageboard",
        icon: TiTags
      },
    ],
  },
  {
    title: "关于我",
    link: "/aboutme",
    isclick: true,
  },
]
export const navItems3_4 = [
  {
    id: 1,
    title: "文章",
    link: "/posts",
    visible: false,
    child: [
      {
        title: "分类",
        link: "/categories",
        icon: BiCategory
      },
      {
        title: "标签",
        link: "/tags",
        icon: TiTags
      },
      {
        title: "归档",
        link: "/archives",
        icon: BiTransfer
      },
      {
        title: "文章数据",
        link: "/chart",
        icon: AiFillSignal
      },
    ],
  },

  {
    id: 2,
    title: "娱乐",
    link: "/hobby",
    visible: false,
    child: [
      {
        title: "电影",
        link: "/hobby/movies",
        icon: BiCategory
      },
      {
        title: "明星",
        link: "/hobby/stars",
        icon: BiCategory
      },
    ],
  },

  {
    id: 3,
    title: "发现",
    link: "/discover",
    visible: false,
    child: [
      {
        title: "学习网站",
        link: "/discover/website",
        icon: BiCategory
      },
      {
        title: "有趣新闻",
        link: "/discover/news",
        icon: BiCategory
      },
    ],
  },
  {
    id: 4,
    title: "逛逛",
    link: "/see",
    visible: false,
    child: [
      {
        title: "友人帐",
        link: "/see/friends",
        icon: BiCategory
      },
      {
        title: "相册",
        link: "/see/photos",
        icon: BiCategory
      },
      {
        title: "留言板",
        link: "/see/messageboard",
        icon: TiTags
      },
    ],
  },
  {
    id: 5,
    title: "关于我",
    link: "/aboutme",
    visible: false,
  },
]
