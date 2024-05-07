export type Menu = {
  label: string;
  icon: string;
  href: string;
};

export type Category = {
  category: string;
};

export type Product = {
  name: string;
  category: string;
  image: string;
  discount: number;
  stock: number;
  price: number;
  description: string;
};

export type ProductCart = {
  name: string;
  image: string;
  price: number;
  quantity: number;
};
