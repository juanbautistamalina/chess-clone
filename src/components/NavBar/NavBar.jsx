import "./NavBar.css"


function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="li-logo"><img src="/navbar/logo.png" className='logo' /></li>
                <li><img src="/navbar/play.png" /><span>Jugar</span></li>
                <li><img src="/navbar/puzzle.png" /> <span>Problemas</span></li>
                <li><img src="/navbar/learn.png" /> <span>Aprender</span></li>
                <li><img src="/navbar/see.png" /><span>Ver</span></li>
                <li><img src="/navbar/news.png" /><span>Noticias</span></li>
                <li><img src="/navbar/community.png" /><span>Comunidad</span></li>
                <li><img src="/navbar/more.png" /><span>Más</span></li>
                <li><img src="/navbar/premium.png"/><span>Prueba gratuita</span></li>
            </ul>

        </nav>
    )
}

export default NavBar