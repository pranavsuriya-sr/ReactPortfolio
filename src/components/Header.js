import React from "react";
import './styles/Header.css'
import { Close } from "@mui/icons-material";
import  {Link} from 'react-router-dom';
const Header = () => 
{
    return (
        <div className="header">
            <div className="header_logo">
                <h1>Pranav Suriya</h1>
            </div>

            <nav>
                <ul>
                    <div className="closed">
                        <Close className='close'>

                        </Close>
                    </div>
                    <li>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/'>About</Link>
                    </li>
                    <li>
                        <Link to = '/'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to = '/'>Blog</Link>
                    </li>
                    <li>
                        <Link to = '/'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;