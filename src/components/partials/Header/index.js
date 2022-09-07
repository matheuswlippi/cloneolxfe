import React from "react";
import { HeaderArea } from './styled'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to='/'>
                        <spam className="logo-1">0</spam>
                        <spam className="logo-2">L</spam>
                        <spam className="logo-3">X</spam>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/signin">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Cadastrar</Link>
                        </li>
                        <li>
                            <Link to="/signin" className="button">Postar um Anúncio</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header