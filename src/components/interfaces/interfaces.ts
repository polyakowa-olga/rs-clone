/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
export interface IPlayer {
  id: number,
  name: string,
  money: number,
  capital: number,
  color: string,
  currentPosition: number
  isBankrupt?: boolean
  isInPrison?: number
}

export interface ICardsData {
  id: number,
  type: string,
  title: string,
  description: string,
  price?: number,
  tax: number,
  country?: string,
  owner?: any,
  images?: string,
  flag?: string
}

export interface IMessage {
  text: string,
  sum: number
}