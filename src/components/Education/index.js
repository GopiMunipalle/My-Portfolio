import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

function Education() {
  return (
    <div className="education-bg-container">
      <Header />
      <div className="education-container">
        <div className="education-card">
          <div className="year-card">
            <h1 className="education-heading">
              NxtWave Distributive Technologies
            </h1>
            <p className="education-description">Mern Fullstack Developer</p>
          </div>
          <h1 className="education-year">Oct'2022-Jun'2023</h1>
        </div>
        <div className="education-card">
          <div className="year-card">
            <h1 className="education-heading">T.J.P.S College,Guntur</h1>
            <p className="education-description">Bachelor Of Science(BSC)</p>
            <span>MPCs-76%</span>
          </div>
          <h1 className="education-year">2022-2019</h1>
        </div>
        <div className="education-card">
          <div className="year-card">
            <h1 className="education-heading">
              Sri ChaitanyaJr College,Guntur
            </h1>
            <p className="education-description">Intermediate</p>
            <span>MPC-92%</span>
          </div>
          <h1 className="education-year">2017-2019</h1>
        </div>
        <div className="education-card">
          <div className="year-card">
            <h1 className="education-heading">Z.P.High School,Prakasam</h1>
            <p className="education-description">SSC</p>
            <span>80%</span>
          </div>
          <h1 className="education-year">2016-2017</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Education;
