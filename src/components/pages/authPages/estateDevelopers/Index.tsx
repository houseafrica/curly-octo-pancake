import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import DesktopNav from 'components/reusables/DesktopNav';
import MobileNav from 'components/reusables/MobileNav';
import { estateDevRoutes } from 'components/pages/routes';
import { convertRoutesToComponents } from 'utilities';



const Index: FC<any> = (): ReactElement => {
    return (
        <IndexScreenWrapper className='container-fluid'>
            <div className='desktop-nav-container'>
                <DesktopNav />
            </div>
            <MobileNav />

            {convertRoutesToComponents(estateDevRoutes)}
        </IndexScreenWrapper>
    )
};

const IndexScreenWrapper = styled.div`

    .desktop-nav-container{
        height: 100vh;
        width: 120px;
        position: fixed;
        top: 0;
        left: 20px;
        padding-top: 20px;
        overflow-y: auto;
    }
`;

export default Index;
