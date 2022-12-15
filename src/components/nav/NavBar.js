import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

const localKandyUser = localStorage.getItem("kandy_user")
const kandyUserObject = JSON.parse(localKandyUser)

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            {
                kandyUserObject.staff
                ? <>
                 <li className="navbar__item active">
                    <Link className="navbar__link" to="/ProductList">Products</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/ProductForm">Create Product</Link>
                </li>
                </>
                : <>
                </>
            }
               
            
            {
                localStorage.getItem("kandy_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("kandy_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    // What is :"" doing?
                    : ""
            }
        </ul>
    )
}

