import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.Header}>

            <div className={style.lable}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"/>
            </div>

            <div className={style.links}>

                {!props.login ? <NavLink to={'/Login'}>Login</NavLink>
                    : <span onClick={props.logOut}>{props.login}</span>
                }

            </div>

        </header>
    );
};

export default Header;
