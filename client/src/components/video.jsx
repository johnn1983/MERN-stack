const aboutImgSrc6 = "img/randomguy.png";

const videoStyle = {
  width:'100%'
}
export const Video = (props) => {
  return (
    <div class="image-join">
      <p className="text-center"
        style={{ 
          fontSize:'48px',
          fontWeight: 700,
          color: '#000',
          marginTop: '80px'
         }}
      >How it Works</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
        <img src= { aboutImgSrc6 } style={{width: '80%'}}/>
      </div>
      <div className="video-section-title">
        <h1>It couldn't be more<br></br> simple.</h1>
        <div style={{ display:'flex', justifyContent: 'center' }}>
          <div style={videoStyle}>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-2">
                <p className="video-txt-1" style={{ color: '#132A4A'}} >
                  Step 1
                </p>
              </div>
              <div className="col-md-2">
                <p className="video-txt-2"
                  style={{color: '#C73232'}}>
                  Sign up
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p style={{ color: '#132A4A', textAlign: 'right'}}>
                  and step done
                </p>
              </div>
              <div className="col-sm-6">
                <p style={{textAlign: 'left', color: '#C73232' }}>
                  You are protected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}