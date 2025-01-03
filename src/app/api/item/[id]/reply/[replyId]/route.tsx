import { delay } from "@/util/timeUtil";
import { placeholderReply } from "../placeholder";

export async function GET({params}: {params: Promise<{idx: number, replyIdx: number}>}) {
  const { idx, replyIdx } = await params;
  console.log('api(GET reply) called')
  const response = await delay(1000).then(()=>placeholderReply[0]);
  const reply = {
    ...response,
    itemIdx: idx,
    replyIdx: replyIdx,
  }
  return Response.json(reply);
}