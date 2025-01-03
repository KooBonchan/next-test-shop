import { delay } from "@/util/timeUtil";
import { placeholderReply } from "./placeholder";

export async function GET({params}: {params: Promise<{id: number}>}) {
  const { id } = await params;
  console.log('api(GET reply) called')
  const response = await delay(1000).then(()=>placeholderReply.filter((reply)=>reply.itemIdx === id));
  
  return Response.json(response);
}