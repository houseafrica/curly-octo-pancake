import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import PropvatLogo from 'assets/icons/propvat-logo.svg';
import { ReactComponent as DashboardIcon } from 'assets/icons/dev_dashboard.svg';
import { ReactComponent as MapIcon } from 'assets/icons/nav_map.svg';
import { ReactComponent as PersonIcon } from 'assets/icons/nav_person.svg';





const DesktopNav: FC<any> = (): ReactElement => {
    return (
        <NavWrapper className="align-items-center">
            
            <img src={PropvatLogo} alt='propvat-logo' className='d-block logo'/>
            
            <div className="d-flex flex-column flex-grow-1 w-100 text-center">
                <NavLink exact to="/estate-developers" activeClassName="selected">
                    <DashboardIcon className='dev-dashboard'/>
                </NavLink>
                <NavLink to="/estate-developers/properties" activeClassName="selected">
                    <MapIcon />
                </NavLink>
                <NavLink to="/estate-developers/terms-of-use" activeClassName="selected">
                    <MapIcon />
                </NavLink>
                <NavLink to="/estate-developers/enquiries" activeClassName="selected">
                    <MapIcon />
                </NavLink>
                <NavLink to="/estate-developers/fifth" activeClassName="selected">
                    <PersonIcon />
                </NavLink>
                <NavLink to="/estate-developers/sixth" activeClassName="selected">
                    <MapIcon />
                </NavLink>
            </div>
            
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    width: 100px;
    min-height: 600px;
    height: 96vh;
    background-color: #41085B;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    padding-top: 30px;

    
    .logo{
        width: 80px;
        height: auto
        flex-shrink: 0;
        margin-bottom: 50px;
    }

    a{  
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 30px;

        svg{
            width: 30px;
            height: auto;
            path{
                fill: white; !important;
            }
        }
    }

    .selected{
        
        background-color: white;

        svg{
            path{
                fill: #41085B; !important;
            }
        }
    }

    @media all and (max-width: 768px){
        display: none;
    }
`;

export default DesktopNav;
