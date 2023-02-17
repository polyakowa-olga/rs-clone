export interface IPlayer {
  id: number;
  name: string;
  money: number;
  capital: number;
  color: string;
  currentPosition: number;
}

export interface ICardsData {
  id: number;
  type: string;
  name: string
  title: string;
  description: string;
  price?: number;
  tax: number;
  country?: string;
  owner?: any;
  images?: string;
  flag?: string;
  web?: string;
  value?: {
    tax: number;
    monopoly: number;
    shares: number[];
  };
  currValue?: number;
}

export interface IMessageInfo {
  text: string;
  sum: number;
}
