import '../App.css';
import cm from '../images/coming-soon.png';
import p1 from '../images/project01.JPG';

function Projects() {
  return (
    <div>
      <h2 className="section-title">Projects</h2>
      <div className="container-fluid project-div">
        <div className="card side-card">
          <img src={cm} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Project Title</h5>
            <p className="card-text">Tech Used</p>
            <p className="card-text">No. of Team Members</p>
            <p className="card-text">Purpose</p>
            <p className="card-text">Your Role in Project</p>
            <p className="card-text">Duration</p>
            <a href=" " className="btn btn-primary">
              {" "}
              Link
            </a>
          </div>
        </div>
        <div className="card">
          <img src={p1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tribute Page</h5>
            <p className="card-text">Teach Used :HTML, CSS, BootStrap</p>
            <p className="card-text">No. of Team Members : 1</p>
            <p className="card-text">To practice responiveness of a website</p>
            <p className="card-text">Role: Designing & Development</p>
            <p className="card-text">Duration : 4hrs</p>
            <a
              href="https://ramandeepramarayane.github.io/tribute-page-APJ-Abdul-Kalam/"
              className="btn btn-primary"
            >
              Visit
            </a>
          </div>
        </div>
        <div className="card side-card">
          <img src={cm} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Project Title</h5>
            <p className="card-text">Tech Used</p>
            <p className="card-text">No. of Team Members</p>
            <p className="card-text">Purpose</p>
            <p className="card-text">Your Role in Project</p>
            <p className="card-text">Duration</p>
            <a href=" " className="btn btn-primary">
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;