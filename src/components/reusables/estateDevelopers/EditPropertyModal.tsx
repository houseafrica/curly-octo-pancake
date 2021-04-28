import React, { FC, ReactElement, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';
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
      getFilesFromEvent: e => myCustomFileGetter(e, setState),
      noDrag: true
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
        borderRadius: '20px',
        backgroundColor: '#F5F5F5',
        height: '60px',
        border: 'none',
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: '20px',
    }),
    valueContainer: (provided: any) => ({
        ...provided,
        height: '60px',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        color: 'purple',
        borderRadius: '20px',
        backgroundColor: state.isFocused ? 'red' : '#fffff',
    }),
    multiValue: (provided: any) => ({
        ...provided, 
    })
};

  
const EditPropertyModal: FC<any> = ({ setEdit }): ReactElement => {

    const [ownerAgree, setOwnerAgree] = useState<undefined | File>(undefined);

    useEffect(() => {
        if(ownerAgree){
            console.log(ownerAgree);
        }
    }, [ownerAgree]);
    
    return(
        <EditPropertyModalWrapper>
            <div className="content">
                <button className="d-block ml-auto" onClick={()=> setEdit(false)}>&#10005;</button>
                <h6 className="mb-4">Mortgage application form</h6>
                <div className="row form-container">
                    <form className="w-100">
                        {/* 1 */}
                        <div className="col-12 mb-3">
                            <input type="text" name="" id="" className="d-block w-100" placeholder="Name of property owner" />
                        </div>
                        
                        {/* 2 */}
                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <input type="text" name="" id="" className="w-100" placeholder="Type of development" />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <input type="text" name="" id="" className="w-100" placeholder="Street name" />
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <input type="text" name="" id="" className="w-100" placeholder="Type of property" />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <input type="number" name="" id="" className="w-100" placeholder="Plot number" />
                            </div>
                        </div>
                        
                        {/* 4 */}
                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <FileInput placeholder="Floor Plan" setState={setOwnerAgree} />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <input type="number" name="" id="" className="w-100" placeholder="Proof of ownership" />
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <input type="text" name="" id="" className="w-100" placeholder="Category" />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <input type="text" name="" id="" className="w-100" placeholder="Development" />
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <FileInput placeholder="Proof of ownership document" setState={setOwnerAgree} />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <FileInput placeholder="Survey Document" setState={setOwnerAgree} />
                            </div>
                        </div>

                        {/* 7 */}
                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <input type="number" name="" id="" className="w-100" placeholder="Property status" />
                            </div>
                        </div>

                        {/* SECTION 2 */}
                        <div className="row">
                            <div className="col-12">
                                <p>PROPERTY FEATURES / DESCRIPTION</p>
                            </div>
                        </div>
                        
                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <Select
                                    options = {countryOptions}
                                    styles = {countryStyles}
                                    name="country"
                                    placeholder={'Bathroom / Toilet'}
                                />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <Select
                                    options = {countryOptions}
                                    styles = {countryStyles}
                                    name="country"
                                    placeholder={'Sitting room'}
                                />
                            </div>
                        </div>

                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <Select
                                    options = {countryOptions}
                                    styles = {countryStyles}
                                    name="country"
                                    placeholder={'Bedroom'}
                                />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <Select
                                    options = {countryOptions}
                                    styles = {countryStyles}
                                    name="country"
                                    placeholder={'Kitchen'}
                                />
                            </div>
                        </div>

                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <Select
                                    options = {countryOptions}
                                    styles = {countryStyles}
                                    name="country"
                                    placeholder={'Parking space'}
                                />
                            </div>
                            <div className="col-lg-6 mb-3 position-relative">
                                {/* unit price */}
                                <input type="number" name="unit-price" id="unit-price" className="w-100" placeholder="Unit price" />
                                <div className="ngn position-absolute h-100">NGN</div>
                            </div>
                        </div>

                        <div className="row">   
                            <div className="col-lg-6 mb-3">
                                <Select
                                    defaultValue={[countryOptions[0], countryOptions[1]]}
                                    isMulti
                                    name="colors"
                                    options={countryOptions}
                                    styles = {countryStyles}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <textarea name="" id="">
                                    Property description
                                </textarea>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </EditPropertyModalWrapper>
    )
}

const EditPropertyModalWrapper = styled.div`

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

        .form-container{
            height: 400px;
            overflow-y: auto;
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
                .ngn{
                    top: 0; 
                    right: 15px;
                    padding-left: 0;
                    width: 60px;
                    background-color: #41085B;
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;
                    color: #FFFFFF;
                    line-height: 64px;
                    text-align: center;
                    padding-left: 0 !important;
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

export default EditPropertyModal;