import "./About.css";
import aboutImg from "./About-images/aboutImg.png";

export default function About() {
  return (
    <div className="about-container">
      <div className="img-about-container">
        <img className="img-about" src={aboutImg} />
      </div>
      <div className="about-text-container">
        <h1 className="about-title">הסיפור שלנו...</h1>
        <div className="story-container">
          פיצה פיצרייה היא רשת הפיצריות הגדולה ביותר בישראל ומונה 100 סניפים
          ברחבי הארץ מקרית שמונה עד אילת. הרשת חלבית ורב הסניפים כשרים בכשרות
          מהודרת. <p></p>
          פיצת ה "בלאגן"- פיצת הדגל שלנו, היא פיצה מבצק עבה ואוורירי שהגיעה אלינו
          מארה"ב והיום הטעם האהוב שלה מוכר בכל בית בישראל. הרשת מוכרת מגוון רחב
          של פיצות מיוחדות כמו הפיצה הקלאסית מבצק דק, פיצת הציזי קראסט ופיצת
          הקראון המלכותית – פיצה דקה, מעוטרת בכדורי גבינת שמנת בשוליים. <p></p>
          מלבד הפיצות הטעימות שלנו, התפריט מגוון במנות נפלאות נוספות כגון פסטות
          טריות ברטבים שונים, סלטים טריים, קישים, פוקצ'ות וכמובן קינוחים. רשת
          פיצה פיצרייה בישראל הינה בבעלות תמיר בנאי החזקות בע"מ.
        </div>
      </div>
    </div>
  );
}
