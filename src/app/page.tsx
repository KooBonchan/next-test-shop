import ItemCard from "./component/ItemCard";
import styles from "./page.module.css";

const sampleItems = [
  {id: 1, title: "item1", thumbnail: "/image/item1.jpg",shortDesc:'Sterling by MusicMan', price: 100},
  {id: 2, title: "item2", thumbnail: "/image/item2.jpg",shortDesc:'Sire GB5 Black', price: 100},
  {id: 3, title: "item3", thumbnail: "/image/item3.png",shortDesc:'Bass over 8000$', price: 100},
];

export default function Home() {

  return (
    <div className={styles.page}>
      <div className={styles.itemContainer}>
      {sampleItems.map(item => (
        <ItemCard key={item.id} {...item} />
      ))}
      </div>
    </div>
  );
}
