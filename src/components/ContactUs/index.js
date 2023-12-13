import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

function ContactUs() {
  return (
    <div className="contact-bg-container">
      <Header />
      <button className="button">Hire Me</button>
      <div className="contact-container">
        <div className="contact-card">
          <h1>LeelaGopiKrishna Munipalle</h1>
          <p>Email: munipallegopikrishna@gmail.com</p>
          <p>PhoneNumber: 6304206589</p>
          <p>SrNagar,Hyderabad,Telangana</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ContactUs;
