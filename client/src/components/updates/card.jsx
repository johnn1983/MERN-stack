export const Card = (props) => {
  return (
    <div className="col-xs-12 col-md-4">
      <div className="card">
        <div className="card-header">
          <img src={props.src}/>
          <h1 className="card-title">{props.title}</h1>
        </div>
        <div className="card-body">
          <p>
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};
