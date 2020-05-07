const navbarData = [
  {
    title: 'Home',
    hasSubMenu: false,
    link:'home'
  },
  {
    title: 'watches',
    hasSubMenu: false,
    link:'watches'
  },
  {
    title: 'Brands',
    hasSubMenu: true,
    link:'brands',
    subMenuList: ["Rolex",
      "Omega",
      "Patek Philippe",
      "Audemars Piguet",
      "Breitling",
      "Tudor"
    ]
  },
  // {
  //   title: 'Categories',
  //   hasSubMenu: true,
  //   subMenuList: ["Men's / Women's Watches",
  //     "New / Pre - Owned Watches",
  //     "Mechanical / Automatic Watches",
  //     "Vintage Watches",
  //     "Chronographs",
  //     "Diving Watches",
  //     "Pilot's Watches",
  //     "Military Watches",
  //     "Swiss Watches",
  //     "Racing Watches",
  //     "Sailing Watches",
  //     "Accessories"]
  // },
  // {
  //   title: 'Services',
  //   hasSubMenu: true,
  //   subMenuList: ["Watch Collection",
  //     "Appraisal",
  //     "Watch Explorer",
  //     "Dealer Search",
  //     "Advanced Search"]
  // },
  {
    title: 'sell a watch',
    hasSubMenu: false,
    link: 'sell'
  }
]
export default navbarData;