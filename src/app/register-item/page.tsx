import Form from "next/form";

export default function Page(){
  const handleSubmit = async () => {
    'use server';
  };


  return (
    <>
    
    <Form action={handleSubmit}>
      <div>
        Register a new Item
      </div>
      <label htmlFor="name">name:</label>
      <input type="text" name="name" id="name" defaultValue={"123"}/><br />

      <label htmlFor="name">shortDesc:</label>
      <input type="text" name="shortDesc" id="shortDesc" /><br />
      <label htmlFor="name">LongDesc:</label>
      <textarea name="longDesc" id="longDesc"></textarea><br />
      <input type="number" name="price" id="price" defaultValue={123} />￦<br />

      <button>submit</button>
    </Form>
    
    </>
  );
}