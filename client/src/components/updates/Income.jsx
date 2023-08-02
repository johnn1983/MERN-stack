import {Card} from './card';
export const Income = (props) => {
  return (
    <div id="income">
      <div className="container">
        <h2 className="income-title">What do we get?</h2>
        <p className="income-sub-title">Peace of mind at $19.99</p>
        <div className="row card-area">
          <Card 
            src='img/7.png'
            title='24/7'
            text='Critical Response Team'
          />
          <Card 
            src='img/8.png'
            title='100%'
            text='Legal Defense Team'
          />
          <Card 
            src='img/9.png'
            title='$1.5M'
            text='In Lefal Fees'
          />
        </div>
      </div>
    </div>
  );
};
