import { LOGO_URL } from "../utils/const"

const Header= ()=>{
    return(
        <div className="header">
            <div>
            <img id="logo"src={LOGO_URL} alt="logo-img"/>
            </div>
            <div>
                <ul id="nav-bar">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Contact US</li>
                    <li className="nav-item">Login</li>
                    <li className="nav-item">SignUp</li>
                </ul>
            </div>
        </div>
    )
}

export default Header