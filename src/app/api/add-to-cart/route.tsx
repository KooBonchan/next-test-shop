export async function POST(request: Request) {
  console.log('api(add to cart) was called');
  console.log(await request.json());
  await new Promise(resolve => setTimeout(resolve, 1000));
  return new Response(null, {status: 200});
}