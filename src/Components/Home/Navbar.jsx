import React, { useEffect,useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { is_Authanticated, logout, login } from '../Login/Autantication'

const Navbar = () => {
    const nav=useNavigate()
    const location = useLocation()
     const [is_login,setIs_login]=useState(false)
    function handlelogout() {
        let conform = confirm("Conform Your Logout ")
        if (conform) {
            logout()
            setIs_login(false)
        }
    }
    function handlelogin(){
        nav("/login")
        setIs_login(true)
    }
 
    useEffect(()=>{
        if(is_Authanticated()){
            setIs_login(is_Authanticated())
        }
        else{
            setIs_login(is_Authanticated())
        }
    },[is_login,location])

    return (
        <>
            <nav className="navbar p-3 navbar-expand-sm navbar-dark bg-success   sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-3 " to={"/"}>Shop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-5 " id="navbarNavDropdown">
                        <ul className="navbar-nav flex-row justify-content-evenly mt-3-sm gap-3">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/products"} >Shopping</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/mycart"} >My Cart
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                
                                    {is_login ? <Link className="nav-link" onClick={handlelogout}
                                    >Logout
                                        <i className="fa-solid fa-user ms-1"></i>
                                    </Link> : <button className="nav-link " onClick={handlelogin}
                                    >Login
                                        <i className="fa-solid fa-user ms-1"></i></button>
                                    }
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
