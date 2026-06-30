/* ===================================================================
 *  团队主页数据 —— 改这里
 * ===================================================================*/
window.TEAM = {
  name: "工作室名（在 team.js 修改）",   // ← 团队/工作室名字，填你想要的
  pinyin: "MUSIC STUDIO",
  tagline: "承接音乐制作",
  intro: "承接作曲 / 作词 / 编曲 / 混音 / 演唱 等全流程音乐制作，欢迎约稿与合作。点击下方成员进入个人主页。",

  // 成员列表：点击卡片进入 member.html?id=<id>
  // id 必须和 data.js 里 window.MEMBERS 注册的 key 一致
  members: [
    {
      id: "yuezixi",
      name: "月紫夕",
      title: "作曲 · 作词 · 策划 · 和声",
      avatar: "assets/img/avatar.jpg",
      desc: "古风原创音乐人 · 全平台 id：月紫夕YUEZIXI"
    },
    {
      // 凌雪用自己的作品集站，填 url 即外链跳转（新标签打开），无需站内数据
      name: "凌雪",
      title: "作曲 · 编曲",
      avatar: "https://lingxue4912.github.io/LingXue-music-portfolio/assets/img/TouXiang.jpg",
      desc: "擅长古风 / 现风 / 电子。",
      url: "https://lingxue4912.github.io/LingXue-music-portfolio/"
    }
    // 站内成员：加一条带 id 的，并在 data.js 里 window.MEMBERS["新id"] = {...}
    // 外部成员：加一条带 url 的（指向对方网站），就会外链跳转
  ]
};
