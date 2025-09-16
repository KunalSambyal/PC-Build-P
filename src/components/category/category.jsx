import './category.css';

function Category() {
    return (
        <div className="container text-center py-5 text-white">
      {/* Section Title */}
      <h2 className="fw-bold">Shop by Category</h2>
      <p className="text-light mb-5">Find the perfect computer for your needs</p>

      {/* Categories Grid */}
      <div className="row g-4">
        
        {/* Category Card */}
        <div className="col-md-3">
          <div className="card bg-dark border-0 shadow-sm p-4 h-100">
            <div className="icon-circle bg-gradient-pink mx-auto mb-3">
              <i className="bi bi-controller fs-3 text-white"></i>
            </div>
            <h5 className="fw-bold text-white">Gaming PCs</h5>
            <p className="text-light">150+ products</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-dark border-0 shadow-sm p-4 h-100">
            <div className="icon-circle bg-gradient-blue mx-auto mb-3">
              <i className="bi bi-briefcase fs-3 text-white"></i>
            </div>
            <h5 className="fw-bold text-white">Workstations</h5>
            <p className="text-light">85+ products</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-dark border-0 shadow-sm p-4 h-100">
            <div className="icon-circle bg-gradient-green mx-auto mb-3">
              <i className="bi bi-laptop fs-3 text-white"></i>
            </div>
            <h5 className="fw-bold text-white">Laptops</h5>
            <p className="text-light">120+ products</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-dark border-0 shadow-sm p-4 h-100">
            <div className="icon-circle bg-gradient-orange mx-auto mb-3">
              <i className="bi bi-hdd fs-3 text-white"></i>
            </div>
            <h5 className="fw-bold text-white">Components</h5>
            <p className="text-light">300+ products</p>
          </div>
        </div>

      </div>
    </div>
    );
}

export default Category;