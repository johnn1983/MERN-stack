export const Cover = (props) => {
  return (
    <div id="cover">
      <div className="container">
        <h2 className="text-center">What do we cover?</h2>
        <div className="row">
         
          <div className="col-xs-12 col-md-6">
            <div className="cover-text">
              <div>
                <h2>Any actions to<br/> defend your life</h2>
                <p>Click below to see all coverages</p>
                <a
                  className='btn btn-custom-coverage btn-lg page-scroll'
                >
                  All Coverages
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="row cover-imgs">
              <div className="col-xs-4 col-md-4">
                <img src="img/1.png" className="img-responsive img-rounded" alt="" />
              </div>
              <div className="col-xs-4 col-md-4">
                <img src="img/2.png" className="img-responsive img-rounded" alt="" />
              </div>
              <div className="col-xs-4 col-md-4">
                <img src="img/3.png" className="img-responsive img-rounded" alt="" />
              </div>
            </div>
            <div className="row cover-imgs">
              <div className="col-xs-4 col-md-4">
                <img src="img/4.png" className="img-responsive img-rounded" alt="" />
              </div>
              <div className="col-xs-4 col-md-4">
                <img src="img/5.png" className="img-responsive img-rounded" alt="" />
              </div>
              <div className="col-xs-4 col-md-4">
                <img src="img/6.png" className="img-responsive img-rounded" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
