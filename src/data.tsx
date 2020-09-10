import bike from "./assets/bicycle.svg";

export const nav = [
  {
    label: "Home",
    link: "/",
    id: 0,
  },
  {
    label: "Mountain",
    link: "/mountain",
    id: 1,
  },
  {
    label: "Road",
    link: "/road",
    id: 2,
  },
  {
    label: "Commuter",
    link: "/commuter",
    id: 3,
  },
  {
    label: "Kids",
    link: "/kids",
    id: 4,
  },
];

export const activeStyle = {
  borderBottom: "2px solid #EF8216",
  color: "#EF8216",
  borderRadius: 0,
};

export const variantsNav = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      mass: 0.8,
    },
  },
  exit: { x: "-100vw", transition: { stiffness: 80, delay: 0.3 } },
};
export const variantsNavLists = {
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.4 } },
};

export const variantsNavList = {
  hidden: {
    y: 80,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  exit: {
    y: 80,
    opacity: 0,
  },
};

export const newArrival = [
  {
    item: "Superbike Aldor 2018",
    image: bike,
    count: 50,
    rate: 4,
    des: "2046 Water Driven Power",
    price: "$960",
    sold: false,
    hot: false,
    discount: 0,
    id: "new-0",
  },
  {
    item: "Superbike Aldor 2018",
    image: bike,
    count: 30,
    rate: 4.5,
    des: "900 Slow Polygon Fit",
    price: "$2100",
    sold: false,
    hot: true,
    discount: 10,
    id: "new-1",
  },
  {
    item: "Superbike Aldor 2018",
    image: bike,
    count: 42,
    rate: 4.5,
    des: "IV-6 Super Speed Up",
    price: "$1200",
    sold: true,
    hot: false,
    discount: 18,
    id: "new-2",
  },
  {
    item: "Superbike Aldor 2018",
    image: bike,
    count: 28,
    rate: 4,
    des: "Sunshine 700 X Framer",
    price: "$600",
    sold: false,
    hot: false,
    discount: 0,
    id: "new-3",
  },
];
