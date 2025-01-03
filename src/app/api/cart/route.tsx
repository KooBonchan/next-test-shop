import { delay } from "@/util/timeUtil";



export async function GET() {
  await delay(1000);
  return Response.json([]);
}

export async function POST(request: Request) {
  console.log('api(add to cart) was called');
  console.log(await request.json());
  await delay(1000);
  throw new Error('Failure Test');
  return new Response(null, {status: 200});
}