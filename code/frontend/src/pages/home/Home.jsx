import "./Home.css";
import logoNoBack from "./Home-images/logoNoBack.png";
import pizzas from "./Home-images/pizzas.jpg"


export default function Home() {
  return (
    <div>
      <div className="afterHeading">
        <div className="afterHeading-text">100% מוצרלה</div>

        <img className="logo-container" src={logoNoBack} alt="" />
        <div className="afterHeading-text" id="quallty">
          100% איכות
        </div>
      </div>
      <img className="hut-pizzeImg" src={pizzas} alt="" />
      <div className="footer">
        <div className="icons">
          <i className="social-icon fa-brands fa-instagram"></i>

          <i className="social-icon fa-brands fa-twitter"></i>
          <i className="social-icon fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  );
}
