import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import ClientAvatar from 'assets/images/Oval.svg';


const InquiryDetailsModal: FC<any> = ({ setView }): ReactElement => {
    return (
        <InquiryDetailsModalWrapper>
            <div className="content">
                <button className="d-block ml-auto close" onClick={()=> setView(false)}>&#10005;</button>
                <h4 className="mb-5">Property Inquiry</h4>
                <div className="row">
                    <div className="col-md-9">
                        <div className="about-ppty mb-4">
                            <img src="https://via.placeholder.com/100x100?text=placeholder+image" alt="" />
                            <div>
                                <p className="font-weight-bold mb-0">Sky high estate</p>
                                <p className="mb-0">Nicely finished 4 bedroom bungalow.</p>
                                <p className="mb-3">Waterfront luxuriously fitted Two(2) Beds</p>
                                <div className="btn-group">
                                    <button className="mr-3">571 units</button>
                                    <button>250 units available</button>
                                </div>
                            </div>
                        </div>
                        <div className="client-comment">
                            <h5>CLIENT INFO</h5>
                            <div className="d-flex client-name align-items-center mb-3">
                                <img src={ClientAvatar} alt="Charles Nweze" className="d-inline-block client-avatar mr-3" />
                                <h6>Charles Nweze</h6>
                            </div>
                            <p>
                                The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. 
                                Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. 
                                Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. 
                                Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. 
                                Sex-charged fop blew my junk TV quiz. 
                                How quickly daft jumping zebras vex. Two driven jocks help.
                            </p>
                        </div>
                        <div className="client-info"></div>
                    </div>
                    <div className="col-md-3 side-column">
                        <div>
                            <h6>UNIT</h6>
                            <p>14</p>
                        </div>
                        <div>
                            <h6>TYPE</h6>
                            <p>3 Bedroom detached bungalow</p>
                        </div>
                        <div>
                            <h6>SIZE</h6>
                            <p>108.13m2</p>
                        </div>
                        <div>
                            <h6>PRICE</h6>
                            <p>50,000,000</p>
                        </div>
                        <div>
                            <h6>CLIENT'S BUDGET</h6>
                            <p>30,000,000</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </InquiryDetailsModalWrapper>
    )
}

const InquiryDetailsModalWrapper = styled.div`

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
        width: 750px;
        min-height: 600px;
        height: fit-content;
        background-color: #ffffff;
        border-radius: 30px;
        flex-shrink: 0;
        padding: 30px 50px;

        .close{
            all: unset;
            width: 30px;
            text-align: end;
        }

        .row{
            div{
                .about-ppty{
                    display: flex;
                    img{
                        width: 120px;
                        height: 120px;
                        margin-right: 20px;
                    }
                    div{
                        .btn-group{
                            button{
                                border: none;
                                padding: 3px 15px;
                                border-radius: 15px;

                                &:nth-child(1){
                                    background-color: #E5FFE7;
                                    color: #41C84E;
                                }
                                &:nth-child(2){
                                    background-color: #FFF3DF;
                                    color: #FFAC28;
                                }
                            }
                        }
                    }
                }
                .client-comment{
                    .client-name{
                        .client-avatar{
                            width: 40px;
                            height: 40px;
                        }
                        h6{
                            font-size: 18px;
                        }
                    }
                }
            }
            .side-column{
                div{
                    h6{
                        font-size: 14px;
                        color: #00000033;
                        margin-bottom: 0;
                    }
                    p{
                        font-size: 22px;
                        font-weight: 600;
                    }
                }
            }
        }

        @media all and (max-width: 375px){
            padding: 30px;
        }
    }
    
    @media all and (max-width: 768px){
        padding-left: 15px;
        padding-right: 15px;
        
        .content{
            width: 100%;
        }
    }

    @media all and (max-width: 575px){
        .row{
            div{
                .about-ppty{
                    flex-direction: column;

                    div{
                        .btn-group{
                            display: flex;
                            flex-direction: column;

                            button{
                                padding: 3px 15px;
                                width: fit-content;

                                &:nth-child(1){
                                    margin-bottom: 10px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

`;


export default InquiryDetailsModal;
