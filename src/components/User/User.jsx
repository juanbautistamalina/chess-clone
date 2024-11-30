import "./User.css"

function User({imgUser, name}) {
  return (
    <div className="user">
        <img src={`${imgUser}.png`} />
        <p>{name}</p>
    </div>
  )
}

export default User