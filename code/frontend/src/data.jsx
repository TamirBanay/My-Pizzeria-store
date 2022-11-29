import margarita from "./components/Product/Product-images/margarita.jpg";
import garlic from "./components/Product/Product-images/garlic.jpg";
import balagan from "./components/Product/Product-images/balagan.jpg";
import newyork from "./components/Product/Product-images/new-york.jpg";
import margarita2 from "./components/Product/Product-images/margarita2.jpg";
import kremburle from "./components/Product/Product-images/kremburle.jpg";
import fadj from "./components/Product/Product-images/fadj.jpg";
import newyorkcake from "./components/Product/Product-images/newyorkcake.jpg";
import fererofistuk from "./components/Product/Product-images/fererofistuk.jpg";
import Pancakes from "./components/Product/Product-images/Pancakes.jpg";

const data = {
  subMenus: [
    {
      name: "ספיישלים",
      items: [
        {
          id: 0,
          name: "מרגריטה",
          about: "גבינת מוצרלה, זיתים שחורים, עגבניות, פלפל חריף",
          price: 50,
          img: margarita,
        },

        {
          id: 1,
          name: "מרגריטה משופרת",
          about: "פיצה עם רוטב עגבניות ושום בחיתוך דק דק שנותן טעם מיוחד",
          price: 50,
          img: margarita2,
        },

        {
          id: 2,
          name: "פטריות שום בצל",
          about: "פיצה עם פיטריות שום בצל ופלפל צילי ",
          price: 60,
          img: garlic,
        },
        {
          id: 3,
          name: "פיצה בלאגן",
          about: "פיצה עם בטטה אננס בולגרית וקונפי שום",
          price: 60,
          img: balagan,
        },

        {
          id: 4,
          name: "פיצה ניו יורק",
          about: "פיצה עם גבינת ניו יורק חצילים ונגיעות פסטו",
          price: 60,
          img: newyork,
        },
      ],
    },
    {
      name: "קינוחים",
      items: [
        {
          id: 5,
          name: "קרם בורלה",
          about: "קינוח עם שכבת קרמל שרוף על קרם עדין וקטיפתי בטעם וניל",
          price: 40,
          img: kremburle,
        },
        {
          id: 6,
          name: "פאדג' שוקולד",
          about: "עוגת פאגד מתוקה ומלאה בשוקולד משובח ",
          price: 40,
          img: fadj,
        },

        {
          id: 7,
          name: "עוגת ניו-יורק",
          about: "עוגת גיבנה קלאסית שמונחת על מצה של פרורי לחם ",
          price: 40,
          img: newyorkcake,
        },
        {
          id: 8,
          name: "פררו פיסטוק-(צמחוני)",
          about: "כדורי פררו רושה בטעם פיסטוק, כל ביס חוויה",
          price: 35,
          img: fererofistuk,
        },
        {
          id: 9,
          name: "פנקייקים",
          about: "ערימת פנקנייקים גדולים וטעימים במיוחד",
          price: 35,
          img: Pancakes,
        },
      ],
    },
  ],
};
export default data;
