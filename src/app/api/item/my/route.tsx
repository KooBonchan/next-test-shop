import { delay } from "@/util/timeUtil";
import { placeholderCart } from "../placeholder";

export async function GET() {
  console.log('api(GET item) called')
  const response = await delay(1000).then(()=>placeholderCart);
  const cart = response
  .filter(item => item.price < 1000000)
  .map(item=>({
    ...item,
    baseImgUrl: 'https://placehold.co/600x400',
  }));

  return Response.json(cart);
}