import "./work.scss";

export default function Work() {
  return (
    <div className="work" id="work">
      <div className="body-container">
        <h2>Sample My Work</h2>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-body">
              <h3 className="card-title">Project 1</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img"></div>
            <div className="card-body">
              <h3 className="card-title">Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad
                repellat consectetur enim aliquid eos.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img"></div>
            <div className="card-body">
              <h3 className="card-title">Project 3</h3>
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
