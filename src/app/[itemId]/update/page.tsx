export default async function item(
  {params,} :
  {params: Promise<{itemId: number}>}
) {
  const {itemId} = await params;
  return (
  <>
    <h1>ITEM {itemId}</h1>
  </>
  );
}