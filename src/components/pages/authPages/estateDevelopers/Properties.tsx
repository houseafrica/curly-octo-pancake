import React, { FC, ReactElement, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import estateList from "components/pages/dummyData/estateList";

interface EstateItem {
    id: number,
    imageUrl: string,
    name: string,
    address: string
}

const Properties: FC = (): ReactElement => {

    const [addNew, setAddNew] = useState(false);

    return (
        <PropertiesScreenWrapper>
            { addNew &&
                <div className="new-estate-dialog">
                    <div className="content text-center">
                        <button className="d-block ml-auto" onClick={()=> setAddNew(false)}>&#10005;</button>
                        <h6>Upload your files</h6>
                        <p>Files should be CSV only</p>

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
                    <h3 className="mb-3">My property</h3>
                    <p>
                        <span  className="d-inline-block mr-2">My Property</span>
                        <span className="mr-2">&gt;</span>
                        <span>Estate</span>
                    </p>
                    <div className="row">
                        {estateList.map((data: EstateItem): ReactElement => 
                            (<div className="col-xl-4 col-lg-6 col-md-6 mb-4" key={data.id}>
                                <img src={data.imageUrl} alt={data.name} className="estate-img" />
                                <div className="d-flex px-4">
                                    <p className="mr-3 font-14">{data.address}</p>
                                    <Link to={`/estate-developers/properties/estates/${data.id}`}>
                                        <span>View </span>
                                        <span className="forward-arrow">&#8594;</span>
                                    </Link>
                                </div>
                            </div>)
                        )}
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
                            <button className="add-new mr-4" onClick={()=> setAddNew(true)}>Add new estate</button>
                            <button className="upload">Upload units</button>
                        </div>
                    </div>
                </div>
            </div>
        </PropertiesScreenWrapper>
    )
}

const PropertiesScreenWrapper = styled.div`
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
            padding: 30px 40px;

            button{
                all: unset;
                width: 30px;
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

        .estate-img{
            width: 100%;
            height: 210px;
            object-fit: cover;
            border-radius: 40px;
            background-color: red;

            & + div{
                a{
                    white-space: nowrap;
    
                    .forward-arrow{
                        font-size: 20px;
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
    }
`;

export default Properties;
