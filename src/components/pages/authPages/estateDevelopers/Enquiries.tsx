import React, { FC, ReactElement, useState } from 'react';
import styled from '@emotion/styled';
import ClientAvatar from 'assets/images/Oval.svg';



const Enquiries: FC = (): ReactElement => {

    const [addNew, setAddNew] = useState(false);

    return (
        <EnquiriesScreenWrapper>
            { addNew &&
                <div className="new-estate-dialog">
                    <div className="content">
                        <button className="d-block ml-auto close" onClick={()=> setAddNew(false)}>&#10005;</button>
                        <h6 className="mb-5">Add new users</h6>
                        <form action="">
                            <input type="text" name="add-by-email" id="add-by-email" className="d-block w-100" placeholder="Add by email" />
                            <button type="submit">Add</button>
                        </form>

                    </div>
                </div>
            }
            <div className="row">
                <form className='col-xl-4 col-lg-5 col-md-6 col-12'>
                    <input type="text" name="ppty-search" id="ppty-search" className="w-100" placeholder="Search for property" />
                </form>
            </div>
            <div className="row">
                <div className="col-xl-8 col-lg-7 main">
                <div className="table-filter">
                    <div className="d-flex justify-content-between">
                        <div className="user-role">
                            <span className="mr-2">Staff</span>
                            <span className="mr-2">|</span>
                            <span className="mr-2">Estate Surveyors</span>
                            <span className="mr-2">|</span>
                            <span>Lawyers</span>
                        </div>
                        <button onClick={()=> setAddNew(true)}>Add new user</button>
                    </div>
                </div>
                <div className="table-metrics">
                    <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Users Name</th>
                                <th>Email</th>
                                <th>Last Seen</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="d-flex align-items-center">
                                    <img src={ClientAvatar} alt="Charles Nweze" className="d-inline-block client-avatar mr-3" />
                                    <span>Charles Nweze</span>
                                </td>
                                <td>charlesnweze@gmail.com</td>
                                <td>19-Aug-2020</td>
                                <td><button>Remove</button></td>
                            </tr>

                            <tr>
                                <td className="d-flex align-items-center">
                                    <img src={ClientAvatar} alt="Charles Nweze" className="d-inline-block client-avatar mr-3" />
                                    <span>Charles Nweze</span>
                                </td>
                                <td>charlesnweze@gmail.com</td>
                                <td>19-Aug-2020</td>
                                <td><button>Remove</button></td>
                            </tr>

                            <tr>
                                <td className="d-flex align-items-center">
                                    <img src={ClientAvatar} alt="Charles Nweze" className="d-inline-block client-avatar mr-3" />
                                    <span>Charles Nweze</span>
                                </td>
                                <td>charlesnweze@gmail.com</td>
                                <td>19-Aug-2020</td>
                                <td><button>Remove</button></td>
                            </tr>

                            <tr>
                                <td className="d-flex align-items-center">
                                    <img src={ClientAvatar} alt="Charles Nweze" className="d-inline-block client-avatar mr-3" />
                                    <span>Charles Nweze</span>
                                </td>
                                <td>charlesnweze@gmail.com</td>
                                <td>19-Aug-2020</td>
                                <td><button>Remove</button></td>
                            </tr>

                            <tr>
                                <td className="d-flex align-items-center">
                                    <img src={ClientAvatar} alt="Charles Nweze" className="d-inline-block client-avatar mr-3" />
                                    <span>Charles Nweze</span>
                                </td>
                                <td>charlesnweze@gmail.com</td>
                                <td>19-Aug-2020</td>
                                <td><button>Remove</button></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                    <div className="sidebar">
                        <h5>Property Management</h5>
                        <p>
                            Add new estates and upload properties to estates
                            using the buttons below
                        </p>
                        <div>
                            <button className="add-new mr-4">Add new estate</button>
                            <button className="upload">Upload units</button>
                        </div>
                    </div>
                </div>
            </div>
        </EnquiriesScreenWrapper>
    )
}

const EnquiriesScreenWrapper = styled.div`
    margin-left: 150px;
    padding-top: 30px;

    .new-estate-dialog{
        position: fixed;
        top: 0;
        left: 0;
        background-color: #00000029;
        width: 100vw;
        height: 100vh;
        z-index: 10;
        backdrop-filter: blur(4px);
        display: flex;
        justify-content: center;
        overflow-y: auto;

        
        .content{
            margin-bottom: 150px;
            margin-top: 150px;
            width: 450px;
            height: 300px;
            background-color: #ffffff;
            border-radius: 30px;
            flex-shrink: 0;
            padding: 30px 50px;

            .close{
                all: unset;
                width: 30px;
                text-align: end;
            }

            form{
                input{
                    border: none;
                    height: 64px;
                    border-radius: 20px;
                    background-color: #c5c5c5;
                    padding: 15px;
                    margin-bottom: 30px;
                }
                button{
                    display: block;
                    width: 80px;
                    height: 40px;
                    background-color: #41085B;
                    color: #FFFFFF;
                    border: none;
                    border-radius: 15px;
                    margin-left: auto;
                    
                }
            }

            @media all and (max-width: 375px){
                padding: 30px;
            }
        }
        
        @media all and (max-width: 520px){
            padding-left: 15px;
            padding-right: 15px;
            
            .content{
                width: 100%;
            }
        }
    }

    .font-14{
        font-size: 14px;
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
        padding-right: 50px;

        .table-filter{
            width: 100%;
            div{
                width: 100%;
                overflow-x: auto;
                margin-bottom: 20px;
                flex-wrap: nowrap;
                padding-bottom: 15px;

                .user-role{
                    margin-right: 100px;
                    flex-shrink: 0;
                    margin-bottom: 0;
                    width: 300px;

                    span{
                        display: inline-block;
                        line-height: 44px;
                        height: 100%;
                    }
                }
                button{
                    border: none;
                    padding: 10px 20px;
                    border-radius: 18px;
                    background-color: #41085B;
                    color: #FFFFFF;
                    margin-right: 30px;
                    white-space: nowrap;
                    height: 44px;

                    &:hover{
                        opacity: 0.8;
                    }

                    @media all and (max-width: 991px){
                        margin-right: 0;
                    }
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

                        th:nth-child(1){
                            width: 200px;
                        }

                        th:nth-child(2){
                            width: 250px;
                        }
    
                        td:nth-child(1){
                            height: 50px;
                        }
    
                        th:nth-child(3){
                            width: 150px;
                        }
                        td:nth-child(4){
                            button{
                                all: unset;
                                border: 1px solid black;
                                border-radius: 20px;
                                padding: 2px 15px;
                            }
                        }
                    }
                }
            }
        }
    }
    .sidebar{
        height: 93vh;
        overflow-Y: auto;

        .add-new{
            border: none;
            padding: 10px 20px;
            border-radius: 18px;
            background-color: #41085B;
            color: #FFFFFF;

            &:hover{
                opacity: 0.8;
            }
        }

        .upload{
            border: 1px solid #41085B;
            border-radius: 18px;
            padding: 6px 18px;
        }
    }

    @media all and (max-width: 768px){
        padding-top: 80px;
        margin-left: 0;

        .sidebar{
            display: none;
        }

        .main{
            padding-right: 15px;
        }
    }
`;

export default Enquiries;
