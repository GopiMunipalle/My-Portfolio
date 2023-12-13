import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

function Projects() {
  return (
    <div className="projects-bg-container">
      <Header />
      <h1
        style={{
          fontFamily: "Roboto",
          fontSize: "30px",
          marginLeft: "40px",
          marginTop: "5px",
        }}
      >
        Projects
      </h1>
      <div className="projects-container">
        <div className="projects-page">
          <h1>Todos Application</h1>
          <p>
            A task management solution, designed to make life easier.
            <br />
            Streamlined task management through a combination of HTML, CSS, and
            Bootstrap for an intuitive interface.
            <br />
            Seamless CRUD operations through JavaScript event listeners and
            dynamic UI updates.
            <br /> Secure task persistence with local storage methods, ensuring
            that your tasks are always available.
          </p>
          <p>
            <span>Technologies:</span>HTML,CSS,JavaScript and Bootstrap
          </p>
          <div className="project-link-card">
            <span>ProjectLink::</span>
            <a href="https://munipalletodo.ccbp.tech/" target="__blank">
              https://munipalletodo.ccbp.tech/
            </a>
          </div>
        </div>
        <div className="projects-page">
          <h1>Wikipedia Search Application</h1>
          <p>
            Unlock the vast wealth of knowledge on Wikipedia with a custom
            search application that delivers relevant and curated results.
            <br /> Quick and easy access to information has never been easier.{" "}
            <br />
            Beautifully presented search results with HTML list elements, styled
            with CSS, Bootstrap, and a responsive design that adapts to any
            device.
            <br />
            Seamlessly access information with the power of asynchronous fetch
            GET HTTP API calls and the ability to open the desired result in a
            new tab for further reading.
          </p>
          <p>
            <span>Technologies:</span>HTML, CSS, JS, REST API Calls, Bootstrap
          </p>
          <div className="project-link-card">
            <span className="span">ProjectLink::</span>
            <a href="https://munipallewiki.ccbp.tech/" target="__blank">
              https://munipallewiki.ccbp.tech/
            </a>
          </div>
        </div>
        <div className="projects-page">
          <h1>Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)</h1>
          <p>
            Username:rahul, Password:rahul@2021
            <br /> Rolled out an innovative e-commerce platform patterned after
            Amazon and Flipkart. <br />
            Designed pages for Login, Products, and Product details with React
            Router and React components.
            <br /> Ensured user security through JWT tokens, REST API calls, and
            local storage.
          </p>
          <p>
            <span>Technologies:</span>React JS, JS, CSS, Bootstrap, Routing,
            REST API Calls, Local Storage, JWT Token, Authorization,
            Authentication
          </p>
          <div className="project-link-card">
            <span>ProjectLink::</span>
            <a
              href="https://main.d1tv8o2b3t7zip.amplifyapp.com/"
              target="__blank"
            >
              https://main.d1tv8o2b3t7zip.amplifyapp.com/
            </a>
          </div>
        </div>
        <div className="projects-page">
          <h1>Movies App (Netflix/Amazon Prime Clone)</h1>
          <p>
            Username:rahul, Password:rahul@2021
            <br /> Built a dynamic, feature-rich OTT platform for movie
            enthusiasts. <br />
            Utilized React Router for seamless navigation, React Slick for
            horizontal scrolling, and Figma for UI design.
            <br /> Integrated TMDb APIs for movie database and authentication,
            and used client storage to persist login state.
          </p>
          <p>
            <span>Technologies:</span>HTML, CSS, JavaScript, React JS,
            Bootstrap, React Slick, Figma, client storage.
          </p>
          <div className="project-link-card">
            <p>
              <span>ProjectLink::</span>
            </p>
            <p>
              <a
                href="https://master.d30euk7c6w32bz.amplifyapp.com/"
                target="__blank"
              >
                https://master.d30euk7c6w32bz.amplifyapp.com/
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Projects;
