import { Category, Menu, Product, ProductCart } from "@/types";

export const menu: Menu[] = [
  {
    label: "Inicio",
    icon: "fi fi-rr-home",
    href: "/",
  },
  {
    label: "Menu",
    icon: "fi fi-rr-rectangle-list",
    href: "/menu",
  },
  {
    label: "Ordenes",
    icon: "fi fi-rr-ballot-check",
    href: "/orders",
  },
  {
    label: "Historial",
    icon: "fi fi-rr-time-past",
    href: "/history",
  },
  {
    label: "Facturas",
    icon: "fi fi-rr-file-invoice-dollar",
    href: "/bills",
  },
];

export const categories: Category[] = [
  {
    category: "Hamburguesas",
  },
  {
    category: "Pizza",
  },
  {
    category: "Tacos",
  },
  {
    category: "Pollos",
  },
  {
    category: "Enzaldas",
  },
  {
    category: "Pastas",
  },
  {
    category: "Lonches",
  },
  {
    category: "Refrescos",
  },
  {
    category: "Combos",
  },
];

export const products: Product[] = [
  {
    name: "Bacon burger",
    category: "Hamburguesas",
    image:
      "https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?t=st=1714602475~exp=1714606075~hmac=8b586f916b1486958326fcd5abba01346b3b0da6bd3a9dc49304abfc689f8274&w=2000",
    discount: 15,
    stock: 100,
    price: 99.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam",
  },
  {
    name: "Tacos a la mexicana",
    category: "Tacos",
    image:
      "https://img.freepik.com/foto-gratis/delicioso-taco-estudio_23-2150799519.jpg?t=st=1714604360~exp=1714607960~hmac=cd0840b3d167ebaa9666eb1666bb6a911385dcf5e8f3d4b743feb39eb6c08138&w=2000",
    discount: 5,
    stock: 100,
    price: 89.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam",
  },
  {
    name: "Pollito",
    category: "Pollos",
    image:
      "https://img.freepik.com/foto-gratis/pollo-frito-aislado_74190-3392.jpg?t=st=1714604945~exp=1714608545~hmac=30fe4c78fac745501a21a3928864cb199df3f8bca07ce3f9a56c616111fa3aeb&w=2000",
    discount: 10,
    stock: 100,
    price: 49.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam",
  },
  {
    name: "Lonche del chavo",
    category: "Lonches",
    image:
      "https://img.freepik.com/foto-gratis/dos-deliciosos-sandwiches_144627-3689.jpg?t=st=1714605192~exp=1714608792~hmac=ee472ccc24864e3cf439e84581ad9d1850098044f2dec03c060136d0db80bb95&w=1800",
    discount: 0,
    stock: 100,
    price: 69.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam",
  },
  {
    name: "Pizza especial",
    category: "Pizzas",
    image:
      "https://img.freepik.com/foto-gratis/pizza-mariscos_1203-8950.jpg?t=st=1714605415~exp=1714609015~hmac=a4b332c755c107e4faefac2ef2cc2529defcb35af65a69257eedd0bfe5f21195&w=2000",
    discount: 0,
    stock: 0,
    price: 109.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam",
  },
  {
    name: "Refresco 600ml",
    category: "Refrescos",
    image:
      "https://img.freepik.com/fotos-premium/botella-cola-sobre-fondo-blanco_318269-1271.jpg?w=1480",
    discount: 0,
    stock: 100,
    price: 29.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius pariatur facere illo quas soluta voluptatibus nihil mollitia ipsam",
  },
];

export const productsCart: ProductCart[] = [
  {
    name: "Bacon burger",
    image:
      "https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?t=st=1714602475~exp=1714606075~hmac=8b586f916b1486958326fcd5abba01346b3b0da6bd3a9dc49304abfc689f8274&w=2000",
    price: 99.99,
    quantity: 2,
  },
  {
    name: "Pollito",
    image:
      "https://img.freepik.com/foto-gratis/pollo-frito-aislado_74190-3392.jpg?t=st=1714604945~exp=1714608545~hmac=30fe4c78fac745501a21a3928864cb199df3f8bca07ce3f9a56c616111fa3aeb&w=2000",
    price: 49.99,
    quantity: 1,
  },
  {
    name: "Refresco 600ml",
    image:
      "https://img.freepik.com/fotos-premium/botella-cola-sobre-fondo-blanco_318269-1271.jpg?w=1480",
    price: 29.99,
    quantity: 2,
  },
];
