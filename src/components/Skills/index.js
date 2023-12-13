import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

function Skills() {
  return (
    <div className="skills-bg-container">
      <Header />
      <h1
        style={{
          fontFamily: "roboto",
          fontSize: "35px",
          marginLeft: "30px",
          color: "#000000",
        }}
      >
        Skills
      </h1>
      <div className="skills-container">
        <div className="skills-page">
          <h1>HTML</h1>
          <p>HyperTextMarkupLanguage</p>
        </div>
        <div className="skills-page">
          <h1>CSS</h1>
          <p>Cascading Style Sheet</p>
        </div>
        <div className="skills-page">
          <h1>BOOSTRAP</h1>
          <p>
            Boostrap is the most popular framework for building responsive,
            mobile-first sites
          </p>
        </div>
        <div className="skills-page">
          <h1>Javascript</h1>
          <p>
            JavaScript is a cross-platform, object-oriented scripting language
            used to make webpages interactive
          </p>
        </div>
        <div className="skills-page">
          <h1>Python</h1>
          <p>
            Python is a high-level, interpreted programming language known for
            its simplicity and readability
          </p>
        </div>
        <div className="skills-page">
          <h1>ReactJs</h1>
          <p>ReactJs is an Open-Source JavaScript Library</p>
        </div>
        <div className="skills-page">
          <h1>NodeJs</h1>
          <p>
            Node.js is an open-source, server-side JavaScript runtime
            environment built on Chrome's V8 JavaScript engine
          </p>
        </div>
        <div className="skills-page">
          <h1>ExpressJs</h1>
          <p>
            Express.js is a minimalist and flexible Node.js web application
            framework designed to build web applications and APIs easily and
            quickly
          </p>
        </div>
        <div className="skills-page">
          <h1>Sqlite</h1>
          <p>
            SQLite is a popular, lightweight, and self-contained SQL database
            engine
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Skills;
