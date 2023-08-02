import '../../assets/new-components.css';
export const NewHeader = (props) => {
  return (
    <header id='new-header'>
      <img src='img/joinnow.png'  style={{ width: '100%' }}/>
      <div className='new-intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 introduction-text'>
                <h1>
                  Protection for the 21st century starts here
                  <span></span>
                </h1>
                <a
                  href='register'
                  className='btn btn-custom1 btn-lg page-scroll'
                >
                  Join Now
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
