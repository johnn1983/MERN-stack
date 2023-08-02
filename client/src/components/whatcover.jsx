import React from 'react';

class Whatcover extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <h1 className='cover-title'>What do we cover?</h1>
                <p className='cover-paragraph'>Any actions to defend your life.</p>
                <p className='cover-paragraph'>Click below to see all coverages.</p>
                <button id="cover-btn">All coverages</button>
                // eslint-disable-next-line jsx-a11y/alt-text
                <img src="img/covervectorimg.png"></img>
            </div>
        )
    }
}

export default Whatcover;