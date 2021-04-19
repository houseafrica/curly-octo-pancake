import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';
import { estateProperties } from "components/pages/dummyData/estateList";

interface EstateItem {
    id: number,
    imageUrl: string,
    name: string,
    address: string,
    dimension: string
}

const countryOptions: Array<any> = [
    {value: 'nigeria', label: 'Nigeria'},
    {value: 'ghana', label: 'Ghana'},
    {value: 'south-africa', label: 'South Africa'}
];

const countryStyles = {
    indicatorSeparator: () => ({
        display: 'none',
    }),
    control: (provided: any) => ({
        ...provided,
        borderRadius: '50px',
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: '20px',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        color: 'purple',
        borderRadius: '20px',
        backgroundColor: state.isFocused ? 'red' : '#fffff',
    })
};

const EachEstate: FC = (): ReactElement => {
    return (
        <EachEstateWrapper>
            {/* <Link to="/estate-developers/properties/estates/123456" className="d-block text-center">Go to an estate </Link> */}
            <div className="row">
                <form className='col-xl-4 col-lg-5 col-md-6 col-12'>
                    <input type="text" name="ppty-search" id="ppty-search" className="w-100" placeholder="Search for property" />
                </form>
            </div>
            <div className="row">
                <div className="col-lg-8 main">
                    <h3 className="mb-3">My property</h3>
                    <p>
                        <span  className="mr-2 grey-9c">My Property</span>
                        <span className="mr-2 font-weight-bold">&gt;</span>
                        <span className="mr-2 grey-9c">Estate</span>
                        <span className="mr-2 font-weight-bold">&gt;</span>
                        <span className="font-weight-bold propvat-purple">Sky High Estate</span>
                    </p>
                    <p>
                        <span className="mr-2">Price range:</span>
                        <span className="mr-3">&#8358;5.5m - &#8358;100m</span>
                        <span className="mr-2">Size:</span>
                        <span>108.13m<sup>2</sup></span>
                    </p>

                    <div className="banner text-center text-white mb-4">
                        <h5>Sky high estate</h5>
                        <p className="mb-1">Nicely furnished four bedroom bungalow</p>
                        <p className="mb-1">Waterfront luxuriously fitted Two(2) Beds</p>
                        <div>
                            <button className="mr-3 total-units mb-3">571 units</button>
                            <button className="available-units">250 units available</button>
                        </div>
                    </div>
                    <div className="row">
                        {estateProperties.map((data: EstateItem): ReactElement => 
                            (<div className="each-property mb-4 col-12" key={data.id}>
                                <img src={data.imageUrl} alt={data.name} className="property-img" />
                                <div className="property-contents">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p>{data.name}</p>
                                            <p className="mb-1">{data.address}</p>
                                            <p>SQM: {data.dimension}</p>
                                        </div>
                                        <button className="d-flex flex-column three-dots" onClick={() => {console.log("button clicked");}}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="mr-4 validate">Validate</button>
                                        <button className="allocate">Allocate</button>
                                    </div>
                                </div>
                                
                            </div>)
                        )}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="sidebar">
                        <h5>Property Management</h5>
                        <p className="subtitle">
                            Add new estates and upload properties to estates
                            using the buttons below
                        </p>
                        <div className="mb-5">
                            <button className="add-new mr-4 mb-3">Add new estate</button>
                            <button className="upload">Upload units</button>
                        </div>
                        <div className="mb-5">
                            <h6>Filter</h6>
                            <p className="font-weight-medium">Property type</p>
                            <div className="row">
                                <div className="col-xl-6 mb-2 col-lg-12">
                                    <input type="checkbox" name="estate" id="estate" className="mr-3" />
                                    <label htmlFor="estate" className="mb-0">Estate</label>
                                </div>
                                <div className="col-xl-6 mb-2 col-lg-12">
                                    <input type="checkbox" name="detached" id="detached" className="mr-3" />
                                    <label htmlFor="detached" className="mb-0">Detached roof</label>
                                </div>
                                <div className="col-xl-6 mb-2 col-lg-12">
                                    <input type="checkbox" name="estate" id="estate" className="mr-3" />
                                    <label htmlFor="estate" className="mb-0">Estate</label>
                                </div>
                                <div className="col-xl-6 mb-2 col-lg-12">
                                    <input type="checkbox" name="detached" id="detached" className="mr-3" />
                                    <label htmlFor="detached" className="mb-0">Detached roof</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <h6>Location</h6>
                            <div className="row">
                                <div className="col-xl-6 mb-2 col-lg-12">
                                    <Select
                                        defaultValue = {countryOptions[0]}
                                        options = {countryOptions}
                                        styles = {countryStyles}
                                        name="country"
                                    />
                                </div>
                                <div className="col-xl-6 mb-2 col-lg-12">
                                    <Select
                                        defaultValue = {countryOptions[0]}
                                        options = {countryOptions}
                                        styles = {countryStyles}
                                        name="country"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6>Date posted</h6>
                            <div className="row">
                                <div className="col-xl-6 mb-2 col-lg-12">
                                    <Select
                                        defaultValue = {countryOptions[0]}
                                        options = {countryOptions}
                                        styles = {countryStyles}
                                        name="country"
                                    />
                                </div>
                                <div className="col-xl-6 mb-2 col-lg-12">
                                    <Select
                                        defaultValue = {countryOptions[0]}
                                        options = {countryOptions}
                                        styles = {countryStyles}
                                        name="country"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </EachEstateWrapper>
    )
}

const EachEstateWrapper = styled.div`
    margin-left: 150px;
    padding-top: 30px;
    
    .grey-9c{
        color: #9C9C9C;
    }

    .font-14{
        font-size: 14px;
    }

    .font-weight-medium{
        font-weight: 600;
    }

    form{
        input[name="ppty-search"]{
            background: #f5f5fb;
            border: none;
            height: 40px;
            border-radius: 18px;
            outline: none;
        }
        margin-bottom: 50px;
    }

    .main{
        height: 93vh;
        overflow-Y: auto;
        padding-right: 40px;

        .banner{
            width: 100%;
            height: 170px;
            background: url("https://via.placeholder.com/750x150?text=placeholder+image");
            border-radius: 30px;
            padding: 20px;

            button{
                border: none;
                border-radius: 15px;
                padding: 5px 10px;
                background-color: #FFFFFF;
            }

            .total-units{
                color: #41C84E;
            }

            .available-units{
                color: #FFAC28;
            }

        }
        .each-property{
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
        }
    }
    .sidebar{
        height: 93vh;
        overflow-Y: auto;
        overflow-X: hidden;

        .subtitle{
            opacity: 0.45;
        }

        .add-new{
            border: none;
            padding: 10px 20px;
            border-radius: 16px;
            background-color: #41085B;
            color: #FFFFFF;
        }

        .upload{
            border: 1px solid #41085B;
            border-radius: 16px;
            padding: 8px 18px;
        }
    }

    @media all and (max-width: 768px){
        padding-top: 80px;
        margin-left: 0;

        .main{
            padding-right: 15px;
        }

        .sidebar{
            display: none;
        }
    }

    @media all and (max-width: 600px){
        .main{
            .each-property{
                flex-direction: column;
                .property-img{
                    width: 100%;
                    height: 200px;
                }
            }
        }
    }

    @media all and (max-width: 320px){
        .main{
            .banner{
                height: 250px;
            }
        }
    }

    
`;

export default EachEstate;

