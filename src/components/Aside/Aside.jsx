import { useState } from "react"
import Card from "../Card/Card"
import "./Aside.css"

function Aside() {
    const info = [
        {
            title: "Juega en línea",
            description: "Juega contra una persona de tu nivel",
            img: "/aside/blitz.svg"
        },
        {
            title: "Jugar contra bots",
            description: "Desafía a un robot, desde el nivel Fácil a Maestro",
            img: "/aside/cute-bot.svg"
        },
        {
            title: "Juega contra un amigo",
            description: "Invita a un amigo a jugar al ajedrez",
            img: "/aside/handshake.svg"
        },
        {
            title: "Torneos",
            description: "Participa en una Arena en la que cualquiera puede ganar",
            img: "/aside/tournaments.svg"
        },
        {
            title: "Variantes de ajedrez",
            description: "Descubre nuevas y divertidas formas de jugar al ajedrez",
            img: "/aside/variants.svg"
        }
    ]

    const [data, setData] = useState(info);

    return (
        <div className="aside">
            <div className="bar-fixed">
                <h2>Juega al ajedrez</h2>
                <img src="/aside/play.svg" className="play-logo" />
            </div>
            <div className="card-container">
                {data.map((item) =>
                    <Card title={item.title} description={item.description} img={item.img} />)}
            </div>

        </div>
    )
}

export default Aside