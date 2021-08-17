const urlsItems = [
  { url: "http://mr.golitsyn.com/items?type=weapons", filename: "weapons" },
  {
    url: "http://mr.golitsyn.com/items?type=equipments",
    filename: "equipments",
  },
  { url: "http://mr.golitsyn.com/items?type=materials", filename: "materials" },
  { url: "http://mr.golitsyn.com/items?type=food", filename: "food" },
  { url: "http://mr.golitsyn.com/items?type=potions", filename: "potions" },
  { url: "http://mr.golitsyn.com/items?type=runes", filename: "runes" },
  { url: "http://mr.golitsyn.com/items?type=scrolls", filename: "scrolls" },
];

const urlMonsters = {
  url: "http://mr.golitsyn.com/monsters?type=full",
  filename: "monsters",
};

const urlEnchants = {
  url: "http://mr.golitsyn.com/enchants",
  filename: "enchants",
};

module.exports = { urlsItems, urlMonsters, urlEnchants };
