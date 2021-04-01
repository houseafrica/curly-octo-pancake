import React, { FC, ReactElement } from 'react'
import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import PropvatLogo from 'assets/icons/propvat-logo.svg';


const DesktopNav: FC<any> = (): ReactElement => {
    return (
        <NavWrapper>
            <img src={PropvatLogo} alt='propvat-logo' className='logo'/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/terms-of-use">Terms of Use</NavLink>
            <NavLink to="/support">Support</NavLink>
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    position: fixed;
    left: 20px;
    top: 20px;
    width: 100px;
    height: 90vh;
    background-color: #41085B;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .logo{
        width: 80px;
        height: auto
        align-self: center;
    }
`;

export default DesktopNav;
