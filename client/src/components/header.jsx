export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>

              <div className='col-md-12 intro-text'>
                <h1>
                  Protection Starts Here
                  <span></span>
                </h1>
                <p>Fairline Defense protects your family in all<br></br>defense situations.</p>
                <a
                  href='register'
                  className='btn getstartedbtn-custom btn-lg page-scroll'
                >
                  Get Started
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
