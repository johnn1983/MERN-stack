import '../../assets/new-components.css';
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 introduction-text'>
                <h1>
                  Protection for the 21st century starts here
                  <span></span>
                </h1>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
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
