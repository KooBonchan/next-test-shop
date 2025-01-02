export default interface Item{
  idx: number;
  name: string;
  thumbnail: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  price: number;
  stock: number;
  provider: string;
}