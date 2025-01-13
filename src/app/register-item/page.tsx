import Form from "next/form";
import styles from "./page.module.css"

export default function Page(){
  const handleSubmit = async () => {
    'use server';
  };


  return (
    <>
    
    <Form action={handleSubmit} formMethod="POST">
      <div className={styles['form-container']}>
        <h2 className={styles['title']}>Register a New Item</h2>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="name">Item Name:</label>
          <input
            className={styles['text-input']}
            type="text"
            name="name"
            id="name"
            placeholder="Enter item name"
            defaultValue="123"
            required
            aria-describedby="nameHelp"
          />
          <small id="nameHelp" className={`${styles['form-text']} ${styles['text-muted']}`}>
            Provide a unique and descriptive name for the item.
          </small>
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="shortDesc">Short Description:</label>
          <input
            className={styles['text-input']}
            type="text"
            name="shortDesc"
            id="shortDesc"
            placeholder="Enter short description"
            required
            aria-describedby="shortDescHelp"
          />
          <small id="shortDescHelp" className={`${styles['form-text']} ${styles['text-muted']}`}>
            This is a brief description that appears on listings.
          </small>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="longDesc">Long Description:</label>
          <textarea
            className={styles['text-input']}
            name="longDesc"
            id="longDesc"
            placeholder="Provide a detailed description of the item"
            required
            aria-describedby="longDescHelp"
          ></textarea>
          <small id="longDescHelp" className={`${styles['form-text']} ${styles['text-muted']}`}>
            Use this space to explain the item's features and benefits in detail.
          </small>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="price">Price (₩):</label>
          <input
            className={styles['text-input']}
            type="number"
            name="price"
            id="price"
            defaultValue={123}
            min="0"
            step="0.01"
            required
            aria-describedby="priceHelp"
          />
          <small id="priceHelp" className={`${styles['form-text']} ${styles['text-muted']}`}>
            Set the price for the item in Korean Won (₩).
          </small>
        </div>
        <div className="form-actions">
          <button type="submit" className={`${styles['btn']}`}>
            Register Item
          </button>
        </div>
      </div>
    </Form>
    
    </>
  );
}