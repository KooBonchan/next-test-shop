export default interface ItemDto {
  idx: number;
  name: string;
  baseImgUrl: string;
  shortDesc: string;
  longDesc?: string;
  price: number;

  regDate: Date;
  stock: number;
  providerIdx: number;
  deleted?:boolean;

};