import '../App.css';
import html from '../images/html.png';
import css3 from '../images/css3.png';
import js from '../images/js.png';
import bs from '../images/bs.png';
import vue from '../images/vue.png';
import react from '../images/react.png';

function Skills(){
  return (
    <div>
      <h2 className='section-title'>Skills with Level of Experties</h2>
      <div className="skills-div">
        <div className="card  container">
          &#9733; &#9733; &#9733; &#9733; &#9733;
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={html} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Expert</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          &#9733; &#9733; &#9733; &#9734; &#9734;
          <div className="row no-gutters">
            <div className="col-md-4 css3">
              <img src={css3} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Intermediate</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          &#9733; &#9733; &#9733; &#9734; &#9734;
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={js} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Intermediate</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          &#9733; &#9733; &#9733; &#9734; &#9734;
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={bs} className="card-img" alt="..." />
            </div>
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">Intermediate</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          &#9733; &#9734; &#9734; &#9734; &#9734;
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={vue} className="card-img" alt="..." />
            </div>
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">Beginner</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          &#9733; &#9734; &#9734; &#9734; &#9734;
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={react} className="card-img" alt="..." />
            </div>
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">Beginner</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;