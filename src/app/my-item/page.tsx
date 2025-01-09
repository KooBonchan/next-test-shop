import ItemDto from "@/model/ItemDto";
import { delay } from "@/util/timeUtil";
import axios from "axios";
import Image from "next/image";
// Delete after testing
import { placeholderCart } from "../api/item/placeholder";

async function mockAxiosCall(){
  console.log('api(GET item) called')
  const response = await delay(1000).then(()=>placeholderCart);
  const cart = response
  .filter(item => item.price < 800000)
  .map(item=>({
    ...item,
    baseImgUrl: 'https://placehold.co/600x400',
  }));

  return Response.json(cart);
}

export default async function MyItemPage() {
  
  try{
    const response = await mockAxiosCall();
    const myItems: ItemDto[] = await response.json();
    //const response = await axios({url: '/api/item/my'})
    //const myItems:ItemDto[] = response.data;
    return (
      <div style={{display:"flex", flexWrap:"wrap",gap:"1rem"}}>
      {myItems.map(item => {
        const {idx, name, baseImgUrl} = item;
        return (
          <div key={idx} >
            <h3>{name}</h3>
            <Image alt={name} src={baseImgUrl} width={200} height={200} />
          </div>
        )
      })}
      </div>
    );
  } catch(e) {
    console.log(e);
    return <div>Invalid Access</div>
  }


  
}