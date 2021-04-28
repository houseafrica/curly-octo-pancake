import React, { FC, ReactElement, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {useDropzone} from 'react-dropzone';

const myCustomFileGetter = async (e: any, setState: any) => {
    const files = [];
    const fileList = e.dataTransfer ? e.dataTransfer.files : e.target.files;
  
    
      const file = fileList.item(0);
      
      Object.defineProperty(file, 'myProp', {
        value: true
      });
  
      files.push(file);
    
    setState(file);

    return files;
}

const FileInput = ({setState, placeholder}: any) => {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
      getFilesFromEvent: e => myCustomFileGetter(e, setState)
    });
  
    const file = acceptedFiles[0];
  
    return (
      <FileInputWrapper>
        <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            {file ? 
                <p>{file.name}</p> : 
                <p>{placeholder}</p>
            }
        </div>
      </FileInputWrapper>
    );
}
  
const FileInputWrapper = styled.div`
    width: 100%;
    height: 64px;
    background-color: #f5f5f5;
    border-radius: 20px;
`;


  
const AllocatePropertyModal: FC<any> = ({ setAllocate }): ReactElement => {

    const [ownerAgree, setOwnerAgree] = useState<undefined | File>(undefined);

    useEffect(() => {
        if(ownerAgree){
            console.log(ownerAgree);
        }
    }, [ownerAgree]);
    
    return(
        <AllocatePropertyModalWrapper>
            <div className="content">
                <button className="d-block ml-auto" onClick={()=> setAllocate(false)}>&#10005;</button>
                <h6 className="mb-4">Mortgage application form</h6>
                <div className="row">
                    <form className="w-100">
                        <div className="col-12 mb-3">
                            <input type="text" name="" id="" className="d-block w-100" placeholder="Name" />
                        </div>
                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <input type="text" name="" id="" className="w-100" placeholder="Email" />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <input type="number" name="" id="" className="w-100" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <input type="text" name="" id="" className="d-block w-100" placeholder="Name" />
                        </div>
                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <FileInput placeholder="Owner Agreement" setState={setOwnerAgree} />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <input type="number" name="" id="" className="w-100" placeholder="Phone Number" />
                            </div>
                        </div><div className="row">   
                            <div className="col-lg-6 mb-3">
                                <FileInput placeholder="Deed of Assignment" setState={setOwnerAgree} />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <FileInput placeholder="Land Survey Document" setState={setOwnerAgree} />
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </AllocatePropertyModalWrapper>
    )
}

const AllocatePropertyModalWrapper = styled.div`

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
        width: 550px;
        min-height: 600px;
        height: fit-content;
        background-color: #ffffff;
        border-radius: 30px;
        flex-shrink: 0;
        padding: 30px 40px;

        button{
            all: unset;
            width: 30px;
        }

        .row{
            form{
                .row{
                    margin-left: 0;
                    margin-right: 0;

                    div:nth-child(1){
                        padding-right: 7.5px;
                    }
                    div:nth-child(2){
                        padding-left: 7.5px;
                    }

                    @media all and (max-width: 991px){
                        div:nth-child(1), div:nth-child(2){
                            padding-left: 15px;
                            padding-right: 15px;
                        }
                    }
                }

                input{
                    background-color: #F5F5FB;
                    height: 64px;
                    border-radius: 20px;
                    border: none;
                    padding: 0 20px;
        
                    &:focus{
                        outline: none;
                        border: 1px solid red;
                    }
                }
            }
        }

        
    }
    
    @media all and (max-width: 520px){
        padding-left: 15px;
        padding-right: 15px;
        
        .content{
            width: 100%;
        }
    }

`;

export default AllocatePropertyModal;