import { delay } from "@/util/timeUtil";
import { placeholderCart } from "../placeholder";

export async function GET(
  request: Request,
  {params}: {params: Promise<{idx: number}>}
) {
  const {idx} = await params;
  console.log('api(GET item details) called')
  const response = await delay(200).then(()=>placeholderCart[Math.ceil(idx) % 10]);
  const item = {
    ...response,
    baseImgUrl: 'https://placehold.co/600x400',
  };
  return Response.json(item);
}