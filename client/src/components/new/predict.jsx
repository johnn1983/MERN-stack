import '../../assets/new-components.css';
export const Predict = (props) => {
  return (
    <header id='predict'>
      <img src='img/predictbgimg.png'  style={{ width: '100%' }}/>
      <div className='predict-text'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 predict-text-intro'>
                <div><h2>
                  No one can predict when something will happen.
                </h2>
                </div>
                <div>
                <h2>
                  Be prepared Fairline Defense has a plan.
                </h2>
                </div>
                <div>
                {/* <img src='img/redvector.png' id="redvector-top" style={{ width: '100%' }}/> */}
                </div>
                <div>
                {/* <img src='img/redvector.png' id="redvector-mid" style={{ width: '100%' }}/> */}
                </div>
                <div>
                {/* <img src='img/redvectorsmall.png' id="redvector-bot" /> */}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}
