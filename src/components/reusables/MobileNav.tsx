import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import PropVatLogo from 'assets/icons/propvat-logo.svg';
import { ReactComponent as NotificationIcon } from 'assets/icons/notification-bell.svg';


const MobileNav: FC = (): ReactElement => {
    return (
        <MobileNavWrapper>
            <input type="checkbox" name="drawer" id="drawer" className="d-none" />
            <div className="mobile-navbar d-flex justify-content-between align-items-center position-relative">
                <div className="hamburger d-flex flex-column justify-content-between">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <label htmlFor="drawer" className="position-absolute blanket-label"></label>
                <p className="my-0 text-dark">PropVat</p>
                <NotificationIcon className="bell" />
            </div>
            <div className="mobile-menu flex-column">
                <label htmlFor="drawer" className="text-white ml-auto mr-4">&#10005;</label>
                <img src={PropVatLogo} alt='propvat-logo' className='d-block mobile-logo'/>
                <NavLink exact to="/estate-developers" className="text-white mb-3">Dashboard</NavLink>
                <NavLink exact to="/estate-developers" className="text-white mb-3">Property</NavLink>
                <NavLink exact to="/estate-developers" className="text-white mb-3">Mortgage</NavLink>
                <NavLink exact to="/estate-developers" className="text-white mb-3">Profile</NavLink>
                <NavLink exact to="/estate-developers" className="text-white mb-3">Support</NavLink>
                <NavLink exact to="/estate-developers" className="text-white mb-3">Logout</NavLink>
            </div>
        </MobileNavWrapper>
    )
}

const MobileNavWrapper = styled.div`
    padding: 25px 3%;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    display: none;

    input#drawer:checked ~ .mobile-menu{
        transform: translateX(0);
        
    }

    div.mobile-navbar{   
        .hamburger{
            width: 24px;
            height: 21px;
            padding: 2px 0;

            span{
                width: 100%;
                height: 3px;
                flex-shrink: 0;
                background-color: #000000;
                border-radius: 20px;
            }
        }
        .bell{
            width: 16px;
            height: auto;
        }
        input#drawer{
            display: none;
        }
        .blanket-label{
            z-index: 4;
            width: 24px;
            height: 25px;
        }

        .blanket-label:hover ~ hamburger{
            opacity: 0.5;
        }
    }

    .mobile-menu{
        position: fixed;
        top: 0;
        left: 0;
        height: 100Vh;
        width: 300px;
        background-color: #41085B;
        z-index: 4;
        padding-left: 25px;
        padding-top: 25px;
        display: flex;
        transform: translateX(-300px);
        transition: transform 0.3s ease-in;
        overflow-y: auto;

        img.mobile-logo{
            margin-bottom: 55px;
            width: 150px;
            height: 50px;
            margin-left: -5px;
        }
    }

    @media all and (max-width: 768px){
        display: block;
    }

    @media all and (max-width: 375px){
        .mobile-menu{
            width: 280px;
        }
    }
`;
export default MobileNav;

