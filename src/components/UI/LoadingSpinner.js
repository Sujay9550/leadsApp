const LoadingSpinner = () => {
  return (
    <div className="container mt-5 p-5 text-center fw-bold">
      <div className="row">
        <div className="col-lg-12">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
