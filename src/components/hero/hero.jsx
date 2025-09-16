import "./hero.css"


function Hero() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        {/* Left Column */}
        <div className="col-md-6">
          <span className="badge bg-primary mb-3">New Generation Computing</span>
          <h1 className="fw-bold">
            Build Your <span className="text-primary">Dream Setup</span>
          </h1>
          <p className="text-muted">
            Discover cutting-edge gaming rigs, professional workstations,
            and custom builds tailored to your needs. Experience the future
            of computing today.
          </p>
          <div className="d-flex gap-2 mt-4">
            <a href="#" className="btn btn-primary">
              Start Building →
            </a>
            <a href="#" className="btn btn-dark">
              Browse Products
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-center">
          <div className="p-3 rounded-4 shadow-lg bg-dark hero-image-wrapper">
            <img
              src="/public/images/hero-img.jpg"
              className="img-fluid rounded-3"
              alt="Setup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Hero;