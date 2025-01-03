import { delay } from "@/util/timeUtil";

interface CartItem{
  idx: number;
  quantity: number;
}

const placeholderCart: CartItem[] = [
  {
    idx:1,
    quantity: 2,
  },{
    idx:3,
    quantity: 71,
  },{
    idx:10,
    quantity: 199,
  },{
    idx:2653,
    quantity: 991199,
  },
];

export async function GET() {
  await delay(1000);
  console.log('api(GET cart) called')
  return Response.json(placeholderCart);
}

export async function POST(request: Request) {
  console.log('api(POST cart) called');
  console.log(await request.json());
  await delay(1000);
  // throw new Error('Failure Test');
  return new Response(null, {status: 200});
}