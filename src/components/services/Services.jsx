import "./services.scss";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="body-container">
        <h2>Available Services</h2>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-body">
              <h3 className="card-title">Web Development</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img"></div>
            <div className="card-body">
              <h3 className="card-title">Software Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad
                repellat consectetur enim aliquid eos.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img"></div>
            <div className="card-body">
              <h3 className="card-title">Mobile Development</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique maxime, animi aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
