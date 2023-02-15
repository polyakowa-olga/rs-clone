export interface IPlayer {
  id: number;
  name: string;
  money: number;
  capital: number;
  color: string;
  currentPosition: number;
}

export interface ICardData {
  id: number;
  type: string;
  title: string;
  description: string;
  price?: number;
  tax: number;
  country?: string;
  owner?: any;
  images?: string;
  flag?: string;
}

export interface IMessageInfo {
  text: string;
  sum: number;
}
