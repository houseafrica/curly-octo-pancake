import React, { FC, ReactElement, useState } from 'react';
import styled from '@emotion/styled';

interface EstateItem {
    id: number,
    imageUrl: string,
    name: string,
    address: string,
    dimension: string
}

const EachPptyInEachEstate: FC<any> = ({ data }): ReactElement => {

    const [toggleMore, setToggleMore] = useState(false);
    return (
        <EachPptyInEachEstateWrapper className="mb-4 col-12" key={data.id}>
            <img src={data.imageUrl} alt={data.name} className="property-img" />
            <div className="property-contents position-relative">
                <div className="d-flex justify-content-between">
                    <div>
                        <p>{data.name}</p>
                        <p className="mb-1">{data.address}</p>
                        <p>SQM: {data.dimension}</p>
                    </div>
                    <button className="d-flex flex-column three-dots" onClick={() => {setToggleMore(!toggleMore)}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    
                </div>
                {toggleMore && (
                    <div className="position-absolute dropdown">
                        <a href='#' className="d-block">Edit</a>
                        <a href='#' className="d-block">Property Info</a>
                    </div>
                )}
                <div className="d-flex justify-content-end">
                    <button className="mr-4 validate">Validate</button>
                    <button className="allocate">Allocate</button>
                </div>
            </div>
            
        </EachPptyInEachEstateWrapper>
    )
}


const EachPptyInEachEstateWrapper = styled.div`
    display: flex;
    .property-img{
        width: 280px;
        height: 200px;
        object-fit: cover;
        border-radius: 40px;
        background-color: red;
    }
    .three-dots{
        border: none;
        height: 18px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span{
            width: 4px;
            height: 4px;
            background-color: #000000;
            border-radius: 50%;
        }
    }
    .property-contents{
        padding: 20px 30px 10px 30px;
        width: 100%;

        .dropdown{
            z-index: 8;
            top: 10px;
            right: 40px;
            width: 130px;
            height: 80px;
            background-color: #41085B;
            padding: 15px;
            border-radius: 15px;

            a{
                color: #FFFFFF;
            }
        }
    }
    div{
        .validate, .allocate{
            border: none;
            padding: 10px 28px; 
            color: #FFFFFF;
            border-radius: 16px;
        }

        .validate{
            background-color: #3AD29F;
        }
        .allocate{
            background-color: #41085B;
        }
    }
`;


export default EachPptyInEachEstate;
