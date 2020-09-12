import {
  ContactPhoneOutlined,
  LocalShippingOutlined,
  PaymentOutlined,
  CardGiftcardOutlined,
} from "@material-ui/icons";
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
    item: "Anako Steam",
    image: bike,
    count: 50,
    rate: 4,
    des: "2046 Water Driven Power",
    price: 960,
    sold: false,
    hot: true,
    discount: 0,
    id: "new-0",
  },
  {
    item: "Superbike Strike",
    image: bike,
    count: 30,
    rate: 4.5,
    des: "900 Slow Polygon Fit",
    price: 2100,
    sold: false,
    hot: false,
    discount: 10,
    id: "new-1",
  },
  {
    item: "S-Mountain Bike",
    image: bike,
    count: 42,
    rate: 4.5,
    des: "IV-6 Super Speed Up",
    price: 1200,
    sold: true,
    hot: false,
    discount: 18,
    id: "new-2",
  },
  {
    item: "Fluid Bearable",
    image: bike,
    count: 28,
    rate: 4,
    des: "Sunshine 700 X Framer",
    price: 600,
    sold: false,
    hot: false,
    discount: 0,
    id: "new-3",
  },
  {
    item: "Co-Stretch SV",
    image: bike,
    count: 50,
    rate: 4,
    des: "333 Super Steel Framer Support",
    price: 2260,
    sold: false,
    hot: true,
    discount: 10,
    id: "new-4",
  },
  {
    item: "Superbike Ocean",
    image: bike,
    count: 28,
    rate: 4.5,
    des: "D-Philo Model Circle Round",
    price: 1900,
    sold: false,
    hot: false,
    discount: 20,
    id: "new-5",
  },
  {
    item: "Small Road Bike",
    image: bike,
    count: 22,
    rate: 4.5,
    des: "IV-6 Super Speed Up",
    price: 800,
    sold: false,
    hot: true,
    discount: 0,
    id: "new-6",
  },
  {
    item: "Blue Entertainment",
    image: bike,
    count: 58,
    rate: 5,
    des: "De Blue 700 X Framer",
    price: 600,
    sold: true,
    hot: true,
    discount: 0,
    id: "new-7",
  },
];

export const services = [
  {
    title: "Free shipping",
    subtitle: "Orders Over $1200",
    Icon: LocalShippingOutlined,
    id: "service-0",
  },
  {
    title: "Quick Payment",
    subtitle: "100% Secure Payment",
    Icon: PaymentOutlined,
    id: "service-1",
  },
  {
    title: "Gift Certificate",
    subtitle: "Buy Now Up to $1000",
    Icon: CardGiftcardOutlined,
    id: "service-2",
  },
  {
    title: "24/7 Support",
    subtitle: "Online Support",
    Icon: ContactPhoneOutlined,
    id: "service-3",
  },
];
