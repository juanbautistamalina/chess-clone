import User from "../User/User"
import Aside from "../Aside/Aside"
import "./Main.css"

function Main() {
  return (
    <div className="main">
      <div className="home">
      <User imgUser="/menu/opponent" name="Opponent"/>
        <img src="/menu/board.png" className="board" />
        <User imgUser="/menu/user" name="Player"/>
      </div>
        <Aside />
    </div>
  )
}

export default Main