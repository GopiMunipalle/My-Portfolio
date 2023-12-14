import Header from "../Header";
import Footer from "../Footer";
import "./index.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-bg-container">
      <Header />
      <div className="home-container">
        <h1 className="home">Home</h1>
        <div className="home-page">
          <img
            src="https://res.cloudinary.com/dpiaz73h0/image/upload/v1702294495/IMG20220514171623__1_-removebg-preview_hjgrz5.png"
            alt="home-img"
            className="home-image"
          />
          <div className="home-card-items">
            <h1 className="hi-heading">Hi</h1>
            <h1 className="home-name">I'm LeelaGopiKrishna</h1>
            <p className="home-description">
              I'm a fullstack Developer specializing in building exceptional
              digital experiences. Currently I'm focused on building responsive
              fullstack web applications.
            </p>
            <Link to="/about" className="link-home-item">
              <button type="button" className="home-button">
                To Know More
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
