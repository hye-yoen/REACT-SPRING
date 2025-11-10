import {Link} from "react-router-dom"

const Nav = () => {
    return(
        <nav>
            <Link to="/">HOME</Link>
            <hr/> 
            <Link to="/about">ABOUT</Link>
        </nav>
    )
}

export default Nav