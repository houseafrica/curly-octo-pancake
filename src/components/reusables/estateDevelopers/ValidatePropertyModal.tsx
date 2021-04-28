import React, { FC, ReactElement, useState } from 'react';
import styled from '@emotion/styled';

const ValidatePropertyModal: FC<any> = ({ setValidate }): ReactElement => {

    const [stage, setStage] = useState<number>(1);
    return (
        <ValidatePropertyModalWrapper>
            
                {stage === 1 ? (
                <div className="content first">
                    <button className="d-block ml-auto close" onClick={()=> setValidate(false)}>&#10005;</button>
                    <h6 className="text-center">Validate property</h6>
                    <p className="mb-5 text-center">select your preferred service provider</p>
                    <div className="d-flex flex-column align-items-center">
                        <p className="proceed-title" onClick={() => {setStage(2)}}>Proceed with this option</p>

                        <div className="d-flex option mb-3">
                            <img src="https://via.placeholder.com/50x50?text=icon" alt="lawyer" />
                            <div>
                                <p className="mb-0">Lawyer</p>
                                <p className="f-14">Find out if the property is legit</p>
                            </div>
                        </div>

                        <div className="d-flex option">
                            <img src="https://via.placeholder.com/50x50?text=icon" alt="lawyer" />
                            <div>
                                <p className="mb-0">Both estate valuer and lawyer</p>
                                <p className="f-14">Select from best in class valuer</p>
                            </div>
                        </div>
                    </div>
                </div>
                ) : 
                
                stage === 2 ? (
                    <div className="content second">
                        <button className="d-block ml-auto close" onClick={()=> setValidate(false)}>&#10005;</button>
                        <h6 className="text-center">Estate valuers</h6>
                        <p className="mb-5 text-center">select from trusted estate valuers below</p>
                        <div className="row mb-4">
                            <div className="col-md-6 col-lg-4 mb-4" onClick={() => setStage(3)}>
                                <div className="each-valuer">
                                    <img src="https://via.placeholder.com/300x200?text=placeholder+image" alt="estate surveyor" />
                                    <p className="font-weight-bold mb-3">Alabi, Ojo & Makinde</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="each-valuer">
                                    <img src="https://via.placeholder.com/300x200?text=placeholder+image" alt="estate surveyor" />
                                    <p className="font-weight-bold mb-3">Alabi, Ojo & Makinde</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="each-valuer">
                                    <img src="https://via.placeholder.com/300x200?text=placeholder+image" alt="estate surveyor" />
                                    <p className="font-weight-bold mb-3">Alabi, Ojo & Makinde</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button onClick={() => setStage(1)}>Previous</button>
                        </div>
                    </div>
                    ) : 

                stage === 3 ? (
                    <div className="content third">
                        <button className="d-block ml-auto close" onClick={()=> setValidate(false)}>&#10005;</button>
                        <h6 className="text-center">Purpose of valuations / validation</h6>
                        <p className="mb-5 text-center">select the reasons for valuation / validation of this property</p>

                        <form className="mb-4">
                            <div className="col-12 mb-2">
                                <input type="checkbox" name="estate" id="estate" className="mr-3" />
                                <label htmlFor="estate" className="mb-0">Contract of Sale Agreement</label>
                            </div>
                            <div className="col-12 mb-2">
                                <input type="checkbox" name="estate" id="estate" className="mr-3" />
                                <label htmlFor="estate" className="mb-0">Home Owners Agreement</label>
                            </div>
                            <div className="col-12 mb-2">
                                <input type="checkbox" name="estate" id="estate" className="mr-3" />
                                <label htmlFor="estate" className="mb-0">Deed of Assignment</label>
                            </div>
                            <div className="col-12 mb-2">
                                <input type="checkbox" name="estate" id="estate" className="mr-3" />
                                <label htmlFor="estate" className="mb-0">Survey Plan</label>
                            </div>
                            <div className="col-12 mb-2">
                                <input type="checkbox" name="estate" id="estate" className="mr-3" />
                                <label htmlFor="estate" className="mb-0">Land Verification</label>
                            </div>
                            <div className="input-text">
                                <input type="text" placeholder="Other reasons" name="other-reasons" id="other-reason"/>
                            </div>
                        </form>
                        <div className="d-flex justify-content-center">
                            <button className="mr-3" onClick={() => setStage(2)}>Previous</button>
                            <button>Verify</button>
                        </div>
                    </div>): null}
            
        </ValidatePropertyModalWrapper>
    )
}

const ValidatePropertyModalWrapper = styled.div`
    
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

    .f-14{
        font-size: 14px;
    }  

    .content{
        margin-bottom: 150px;
        margin-top: 150px;
        width: 750px;
        height: 450px;
        background-color: #ffffff;
        border-radius: 30px;
        flex-shrink: 0;
        padding: 30px 50px;

        .close{
            all: unset;
            width: 30px;
            text-align: end;
        }

        div{
            padding: 0 80px;
        
            .proceed-title{
                width: 100%;
                height: 60px;
                border-radius: 15px;
                background-color: #41085B;
                color: #FFFFFF;
                text-align: center;
                line-height: 60px;
            }

            .option{
                height: 60px;
                border-radius: 15px;
                padding: 6px 20px !important;
                box-shadow: 0px 3px 24px #0000000D;
                width: 100%;

                img{
                    display: inline-block;
                    margin-right: 20px;
                    border-radius: 15px;
                }

                div{
                    padding: 0;

                    
                    p{
                        width: 100%;
                        padding: 0;
                    }
                }
            }
        }

        @media all and (max-width: 375px){
            padding: 30px;
        }

        &.second{
            padding: 0 40px;
            .row{
                height: 200px;
                overflow-y: auto;
                padding: 0 40px;

                div{
                    width: 100%;
                    padding: 0 10px;

                    .each-valuer{
                        width: 100%;
                        padding: 0;
                        box-shadow: 0px 3px 24px #0000000D;
                        border-bottom-left-radius: 25px;
                        border-bottom-right-radius: 25px;
                        img{
                            width: 100%;
                            min-height: 120px;
                            border-radius: 30px;
                        }

                        p{  
                            font-size: 14px;
                            padding: 2px 10px 40px 10px;
                        }
                    }
                }

                @media all and (max-width: 375px){
                    padding: 0 10px;
                }
            }
            div{
                button{
                    width: 120px;
                    height: 40px;
                    line-height: 40px;
                    border: none;
                    border-radius: 17px;
                    color: #FFFFFF;
                    background-color: #F6B973;
                }
            }
        }
        


        &.third{
            width: 750px;
            height: 520px;

            form{
                div{
                    #other-reason{
                        border: none;
                        height: 46px;
                        max-width: 500px;
                        width: 100%;
                        border-radius: 15px; 
                        background-color: #f5f5f5;
                        padding: 15px;
                        
                    }
                }

                .input-text{
                    max-width: 450px;
                    width: 100%;
                }
            }

            div{
                button{
                    width: 110px;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 17px;
                    color: #FFFFFF;
                    border: none;

                    &:nth-child(1){
                        background-color: #F6B973;
                    }

                    &:nth-child(2){
                        background-color: #3AD29F;
                    }
                }
            }
        }
    }
        
    @media all and (max-width: 768px){
        padding-left: 30px;
        padding-right: 30px;

        .content{
            width: 100%;

            div{
                padding: 0 20px;

                .option{
                    width: 100%;
                    overflow-x: auto;

                    div{
                        min-width: 400px;
                    }
                }
            }

            &.third{
                width: 100%;
            }
        }
    }

    @media all and (max-width: 520px){
        padding-left: 15px;
        padding-right: 15px;
            
        .content{
            width: 100%;

            div{
                padding: 0;
            }
        }
    }
`;

export default ValidatePropertyModal;
