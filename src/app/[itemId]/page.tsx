import ItemDto from "@/model/ItemDto";
import { delay } from "@/util/timeUtil";
import Image from "next/image";
import AddToCart from "./component/AddToCart";

const placeholder : ItemDto = {
  idx: -1,
  name: "title",
  baseImgUrl: "https://placehold.co/400x400",
  shortDesc: "body",
  longDesc: "bodyBODYbodyBODYbody",
  price: 3002001,
  regDate: new Date(),
  stock: 123,
  providerIdx: 45
};

export default async function item(
  {params,} :
  {params: Promise<{itemId: number}>}
) {
  const {itemId} = await params;
  try{
    await delay(300); // Test for loading page
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`);

    const rawData = await response.json();
    
    const item:ItemDto = {
      ...placeholder,
      idx: rawData.id ?? placeholder.idx,
      name: rawData.title ?? placeholder.name,
      longDesc: rawData.body ?? placeholder.longDesc,
    };
    return (
      <>
        <Image alt={item.name} src={item.baseImgUrl}
          width={200} height={200}/>
        <h2>{item.name}</h2>
        <p>{item.longDesc}</p>
        <p>{item.price}</p>
        <AddToCart itemIdx={item.idx} />
      </>
    );
  } catch(e) {
    console.error(e);
    return (
      <>
        <h2>Failed to load data</h2>
      </>
    );
  }
}