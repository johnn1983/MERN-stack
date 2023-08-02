import React from 'react';

class Welcome extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container welcome-section'>
                <h1 className='welcome-title'>We are the solution to<br></br>protect you</h1>
                <p className='welcome-paragraph'>Fairline defense is a subscription based <span class="bold">legal team</span> that<br></br> protects you with <span class="bold">$1.5M</span> in legal fees. </p>
            </div>
        )
    }
}

export default Welcome;