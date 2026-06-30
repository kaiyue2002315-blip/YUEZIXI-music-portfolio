/* ===================================================================
 *  美工 / 题字 成员 —— 模板示例（图片画廊版）
 *  复制改成真人即可：works 用 image 字段（图片地址）而不是 netease；
 *  下面的图片是占位，替换成真实作品图（放 assets/img/<人名>/ 下）。
 *  预览：member.html?id=art-demo
 * ===================================================================*/
window.MEMBERS = window.MEMBERS || {};
window.MEMBERS["art-demo"] = {
  profile: {
    name: "示例 · 美工",
    avatar: "https://p1.music.126.net/cvy5STPGqeFHeqSJU0bQBQ==/109951173147540741.jpg", // 占位
    bio: "曲绘 / 题字 / 海报 / 排版。此为美工成员示例框架，替换为真人资料即可。",
    commissionStatus: "open",
    roles: ["曲绘", "题字", "海报", "排版"],
    platforms: [],
    contacts: { qq: "" }
  },

  taxonomy: {
    roles:  ["曲绘", "题字", "海报", "排版"],
    genres: ["古风", "二次元", "现代"],
    moods:  []
  },

  // 图片作品：用 image 字段（不是 netease），点击可放大
  works: [
    { title: "曲绘示例", roles: ["曲绘"], genres: ["古风"], image: "https://p1.music.126.net/cvy5STPGqeFHeqSJU0bQBQ==/109951173147540741.jpg", desc: "歌曲封面插画（占位图，替换为真实作品）" },
    { title: "题字示例", roles: ["题字"], genres: ["古风"], image: "https://p1.music.126.net/H9W93hd5fnD3--Vfob1CYg==/109951169892531788.jpg", desc: "手写歌名题字" },
    { title: "海报示例", roles: ["海报"], genres: ["现代"], image: "assets/img/lingxue/TouXiang.jpg", desc: "单曲宣传海报" },
    { title: "排版示例", roles: ["排版"], genres: ["古风"], image: "assets/img/avatar.jpg", desc: "接新详情长图排版" }
  ],

  // 报价同音乐成员结构（曲绘/题字/海报各一类）
  priceGroups: [
    {
      category: "曲绘", pinyin: "Illustration",
      groups: [{ items: [
        { name: "半身", price: "¥200 起", desc: "" },
        { name: "全身", price: "¥350 起", desc: "" },
        { name: "场景 / 封面", price: "另议", desc: "" }
      ] }]
    },
    {
      category: "题字", pinyin: "Lettering",
      groups: [{ items: [
        { name: "歌名题字", price: "1r/字", desc: "非商原创可无偿。" }
      ] }]
    },
    {
      category: "海报 / 排版", pinyin: "Design",
      groups: [{ items: [
        { name: "歌封海报", price: "¥15/张", desc: "" },
        { name: "接新 / 详情排版", price: "另议", desc: "" }
      ] }]
    }
  ],

  freeNote: { title: "说明", desc: "以上为示例价格，正式价格按美工本人填写为准。" },
  queue: []
};
