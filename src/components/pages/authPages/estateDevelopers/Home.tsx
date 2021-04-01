import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import DesktopNav from 'components/reusables/DesktopNav';

const Home: FC<any> = (): ReactElement => {
    return (
        <HomeScreenWrapper className='container-fluid'>
            <DesktopNav />

            Estate developers home page
        </HomeScreenWrapper>
    )
};

const HomeScreenWrapper = styled.div`
    background-color: black;
    color: white;
`;

export default Home;
