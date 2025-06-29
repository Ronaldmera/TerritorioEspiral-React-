const card = ({ number, title, image }) => {
  return (
    <div className="col-6 col-sm-6 col-md-3">
      <div className="card-estadistica p-4 shadow rounded bg-white h-100 cards">
        <h3 className="fw-bold">{number}</h3>
        <p>{title}</p>
        <img src={image} alt="" className="img-estadistica" loading="lazy" />
      </div>
    </div>
  );
};

export default card;
