export interface IProduction {
  item: string;
  image: string;
  count: number;
  rate: number;
  des: string;
  price: number;
  sold: boolean;
  hot: boolean;
  discount: number;
  id: string;
}

export interface ICountdown {
  name: string;
  count: number;
}
