const navbarData = [
  {
    title: 'Home',
    hasSubMenu: false
  },
  {
    title: 'watches',
    hasSubMenu: false
  },
  {
    title: 'Brands',
    hasSubMenu: true,
    subMenuList: ["Rolex",
      "Omega",
      "Patek Philippe",
      "Audemars Piguet",
      "Breitling",
      "Tudor",
      "see more"

    ]
  },
  {
    title: 'Categories',
    hasSubMenu: true,
    subMenuList: ["Men's / Women's Watches",
      "New / Pre - Owned Watches",
      "Mechanical / Automatic Watches",
      "Vintage Watches",
      "Chronographs",
      "Diving Watches",
      "Pilot's Watches",
      "Military Watches",
      "Swiss Watches",
      "Racing Watches",
      "Sailing Watches",
      "Accessories"]
  },
  {
    title: 'Services',
    hasSubMenu: true,
    subMenuList: ["Watch Collection",
      "Appraisal",
      "Watch Explorer",
      "Dealer Search",
      "Advanced Search"]
  },
  {
    title: 'sell a watch',
    hasSubMenu: false
  }
]
export default navbarData;