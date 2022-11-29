import "./Contact.css";
import afterHeading from "./contect-images/afterHeading.jpeg";
import pizza from "./contect-images/pizza.png";
import massege from "./contect-images/massege.png";
import location from "./contect-images/location.png";
import phone from "./contect-images/phone.png";

export default function Contact(props) {

  return (
    <div>
      <div className="aftet-heading">
        <img className="afterHeading-img" src={afterHeading}alt="" />
      </div>

      <div className="tree-container">
        <div className="container" id="address">
          <div className="icon-container">
            <img className="location-img" src={location}alt="" />
          </div>
          <div className="text-contact-container">
            רחוב צפנייה 10, אשקלון
            <div className="inner-container">כתובת</div>
          </div>
        </div>
        <div className="container" id="mail">
          <div className="icon-container">
            <img className="massege-img" src={massege} alt=""/>
          </div>
          <div className="text-contact-container">
            pizzeria@gmail.com
            <div className="inner-container">דוא"ל</div>
          </div>
        </div>
        <div className="container" id="phone">
          <div className="icon-container">
            <img className="phone-img" src={phone}alt="" />
          </div>
          <div className="text-contact-container">
            08-6764571
            <div className="inner-container">טלפון</div>
          </div>
        </div>
      </div>
      <div className="partTwo-container">
        <div className="pizza-container">
          <img className="pizza-img" src={pizza} alt=""/>
        </div>
        <div className="sendUs-container">
          <h1 className="title-contact">שלחו לנו הודעה</h1>

          <ol className="send-messege">
            <p></p>
            <form action="mailto:banay9329@gmail.com" method="post">
              <div className="name-email">
                <div className="name">
                  <label className="label-name">שם מלא:</label>
                  <br></br>
                  <input className="input-text" type="text" />
                </div>
                <div className="email">
                  <label className="label-name">דוא"ל: </label>
                  <br></br>

                  <input className="input-text" type="email" />
                </div>
                <div className="טלפון">
                  <label className="label-name">טלפון: </label>
                  <br></br>
                  <input className="input-text" type="phone" />
                </div>
              </div>
              <br />
              <div className="send">
                <label className="label-messege">מה תרצה להגיד לנו?</label>
                <br />

                <textarea
                  className="text-input"
                  name="name"
                  rows="5"
                  cols="30"
                  defaultValue=" כתוב את ההודעה כאן:"
                ></textarea>

                <br />
                <button className="Button-send" type="button">
                  שלח
                </button>
              </div>
            </form>
          </ol>
        </div>
      </div>
    </div>
  );
}
