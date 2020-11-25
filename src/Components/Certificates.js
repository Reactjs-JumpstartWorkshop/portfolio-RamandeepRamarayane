import '../App.css';
import certi from '../images/certi1.JPG'

function Footer(){
  return (
    <div className="space">
      <h2 className="section-title">Certificates & Courses</h2>
      <div className="card">
        <img
          className="card-img-bottom"
          src={certi}
          alt="Card image"
        />
        <div className="card-body">
          <h4 className="card-title">Responsive Web Design</h4>
          <p className="card-text">Issued on: Nov 2020</p>
          <a
            href="https://www.freecodecamp.org/certification/fcc9eac914e-11e3-45f7-966f-2975053b4fc9/responsive-web-design"
            class="btn btn-primary"
          >
            See Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;