interface Reply{
  itemIdx: number;
  writerIdx: number;
  content: string;
  regDate: Date;
}

const placeholderReply: Reply[] = [
  {
    itemIdx: 16,
    writerIdx: 5,
    content: "Test Comment 1",
    regDate: new Date(2011,0,1),
  },
];
export { placeholderReply };