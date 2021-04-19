import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import  SearchIcon from 'assets/icons/search-input.svg';
import { ReactComponent as PropertiesIcon } from 'assets/icons/dev-properties-icon.svg';
import { ReactComponent as EstateIcon } from 'assets/icons/dev-estate-icon.svg';
import { ReactComponent as EnquiriesIcon } from 'assets/icons/dev-enquiries-icon.svg';
import { ReactComponent as ServicesProviderIcon } from 'assets/icons/dev-service-providers-icon.svg';
import ClientAvatar from 'assets/images/Oval.svg';

const Home: FC<any> = (): ReactElement => {

    const barChartData = [
        {
            "month": "December",
            "Properties": 60,
            "Estates": 10,
            "Enquiries": 20,
            "Service Providers": 30,
        },
        {
            "month": "January",
            "Properties": 75,
            "Estates": 10,
            "Enquiries": 45,
            "Service Providers": 15,
        },
        {
            "month": "February",
            "Properties": 80,
            "Estates": 20,
            "Enquiries": 40,
            "Service Providers": 20,
        },
        {
            "month": "March",
            "Properties": 100,
            "Estates": 5,
            "Enquiries": 85,
            "Service Providers": 10,
        }
    ];

    

    return (
        <HomeScreenWrapper>
            <div className="row">
                <form className='col-xl-4 col-lg-5 col-md-6 col-12'>
                    <input type="text" name="ppty-search" id="ppty-search" className="w-100" placeholder="Search for property" />
                </form>
            </div>
            
            <div className="mb-5">
                <p className="username">Hello, Lucy palmers!</p>
                <p>Welcome to PropVat</p>
            </div>
            <div className="row primary-metrics  mb-5">
                <div className="each-metric col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="metric-icon-case">
                        <PropertiesIcon />
                    </div>
                    <div>
                        <p className="title">Total Properties</p>
                        <p>34</p>
                    </div>
                    <p className="percentage negative">-25%</p>
                </div>
                <div className="each-metric col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="metric-icon-case">
                        <EstateIcon />
                    </div>
                    <div>
                        <p className="title">Total Estate</p>
                        <p>34</p>
                    </div>
                    <p className="percentage positive">+25%</p>
                </div>
                <div className="each-metric col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="metric-icon-case">
                        <EnquiriesIcon />
                    </div>
                    <div>
                        <p className="title">Total Enquiries</p>
                        <p>34</p>
                    </div>
                    <p className="percentage negative">-25%</p>
                </div>
                <div className="each-metric col-md-6 col-lg-4 col-xl-3 d-flex">
                    <div className="metric-icon-case">
                        <ServicesProviderIcon />
                    </div>
                    <div>
                        <p className="title">Total Service Providers</p>
                        <p>34</p>
                    </div>
                    <p className="percentage positive">+25%</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="w-100 overflow-x-auto">
                        <BarChart width={550} height={350} data={barChartData}>
                            <CartesianGrid strokeDasharray="6 3" />
                            <XAxis dataKey="month" />
                            <YAxis label={{value: 'Tasks', position: 'top'}} />
                            <Tooltip />
                            <Legend  />
                            <Bar dataKey="Properties" fill="#4791FF" barSize={10} legendType="circle" />
                            <Bar dataKey="Estates" fill="#FF2366" barSize={10} legendType="circle" />
                            <Bar dataKey="Enquiries" fill="#02BC77" barSize={10} legendType="circle" />
                            <Bar dataKey="Service Providers" fill="#FFD950" barSize={10} legendType="circle" />
                        </BarChart>
                    </div>
                    
                </div>
                <div className="col-lg-6 table-metrics mb-4">
                    <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Client Name</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>356421</td>
                                <td className="d-flex align-items-center">
                                    <img src={ClientAvatar} alt="Charles Nweze" className="d-inline-block client-avatar mr-3" />
                                    <span>Charles Nweze</span>
                                </td>
                                <td>19-Aug-2020</td>
                                <td>View</td>
                            </tr>

                            <tr>
                                <td>356421</td>
                                <td className="d-flex align-items-center">
                                    <img src={ClientAvatar} alt="Charles Nweze" className="d-inline-block client-avatar mr-3" />
                                    <span>Charles Nweze</span>
                                </td>
                                <td>19-Aug-2020</td>
                                <td>View</td>
                            </tr>

                            <tr>
                                <td>356421</td>
                                <td className="d-flex align-items-center">
                                    <img src={ClientAvatar} alt="Charles Nweze" className="d-inline-block client-avatar mr-3" />
                                    <span>Charles Nweze</span>
                                </td>
                                <td>19-Aug-2020</td>
                                <td>View</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </HomeScreenWrapper>
    )
}

type WrapperProps = {
    children?: JSX.Element|JSX.Element[];
}

const HomeScreenWrapper = styled.div<WrapperProps>`
    margin-left: 150px;
    padding-top: 30px;

    .negative{
        color: #FF2366; 
    }

    .positive{
        color: #02BC77;
    }
    form{
        input[type="text"]{
            background: #f5f5fb;
            border: none;
            height: 40px;
            border-radius: 18px;
            outline: none;
            background-image: url(${SearchIcon});
            background-repeat: no-repeat;
            background-position: 25px center;
            padding-left: 15px;

            &:not(:placeholder-shown){
                background-image: none;
            }


            &::placeholder{
                text-indent: 35px;
            }
        }
        margin-bottom: 50px;
    }

    .username{
        font-size: 30px;
        margin-bottom: 5px;
    }

    .username + p{
        font-size: 14px;
        margin-top: -5px;
    }
    .primary-metrics{
        .each-metric{
            height: 56px;
            margin-bottom: 30px;

            &:nth-child(2){
                .metric-icon-case{
                    background-color: #ffac2833;
                }
            }
            &:nth-child(3){
                .metric-icon-case{
                    background-color: #FF236633;
                }
            }
            &:nth-child(4){
                .metric-icon-case{
                    background-color: #3AD29F33;
                }
            }
            .metric-icon-case{
                border-radius: 5px;
                background-color: #4791FF33;
                padding: 10px;
                height: 56px;
                margin-right: 10px;
                svg{
                    height: 36px;
                    width: auto;
                }
            }
            
            .metric-icon-case + div{
                padding: 3px;

                .title{
                    margin: 0;
                    whitespace: nowrap !important;
                }
                .title + p{
                    margin-top: -5px;
                }
            }
            .title{
                font-size: 14px;
                margin-bottom: 0;
            }

            .title + p{
                font-size: 24px;
                font-weight: 600;
                min-width: 140px;
            }

            .percentage{
                margin-left: 20px;
                font-size: 14px;
                margin-top: 10px;
                font-weight: 500;
                width: 40px;
                text-align: end;
                line-height: 30px;
            }
        }
    }
    .table-metrics{
        
        div{
            overflow-x: auto;
            width: 100%;
            border-radius: 15px;
            padding: 20px;
            background-color: #fafafd;

            table{
                background-color: #fafafd;
                min-width: 100%;
                width: 500px;
                table-layout: fixed;

                tr{
                    border-bottom: 1px solid #70707033;
                    height: 50px;

                    th:nth-child(2){
                        width: 220px;
                    }

                    td:nth-child(2){
                        height: 50px;
                    }

                    th:nth-child(3){
                        width: 120px;
                    }
                }
            }
        }
    }
    
    @media all and (max-width: 768px){
        padding-top: 70px;
        margin-left: 0;
        form{
            
        }
    }
`;

export default Home;


