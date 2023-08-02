import React from  'react';

class Benefit extends React.Component {
  render() {
    return (    
      <div id="feedCarousel" className="carousel slide" data-ride="carousel">
        <h1>Benefits</h1>
        <ol className="carousel-indicators">
          <li data-target="#feedCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#feedCarousel" data-slide-to="1"></li>
          <li data-target="#feedCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">

          <div className="item active">
            <img src="/img/gallery/4.jpg" alt="Los Angeles" className='gallery-img'/>
          </div>

          <div className="item">
            <img src="/img/gallery/5.jpg" alt="Chicago"  className='gallery-img'/>
          </div>
        
          <div className="item">
            <img src="/img/gallery/6.jpg" alt="New York" className='gallery-img'/>
          </div>
      
        </div>

        <a className="left carousel-control" href="#feedCarousel" data-slide="prev">
          <span className="gallery-arrow">&#8592;</span>
        </a>
        <a className="right carousel-control" href="#feedCarousel" data-slide="next">
          <span className="gallery-arrow">&#8594;</span>          
        </a>
      </div>
    );
  }
}

export default Benefit;