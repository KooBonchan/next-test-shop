export async function GET() {
  const data = await fetch('https://api.vercel.app/products');
  const posts = await data.json();
  return Response.json(posts);
}