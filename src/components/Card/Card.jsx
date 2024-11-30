import "./Card.css"

function Card({ title, description, img }) {
  return (
    <div className="card">
      <img src={img} className="card-icon" />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  )
}

export default Card