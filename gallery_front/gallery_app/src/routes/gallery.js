import React,{ useRef } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as yup from"yup";

import "./gallery.css";

const schema = yup.object().shape({
    picture: yup
    .mixed()
    .required("You need to provide a file")
    .test("fileSize","The file is too large", (value) => {
        return value && value[0].size <= 2000000;
    }),
});






const Gallery = () => {

    const [gallery_title, setGalleryTitle] = useState('');//첫번째 인자 = 초기 데이터 -> 두번째 인자 바꿔줄 데이터
    const [gallery_content, setGalleryContent] = useState('');
    const [file, setFile] = useState('');
    const [previewURL, setPreviewURL] = useState('');
    const fileRef= useRef();


    const { handleSubmit, register, watch, reset, error} = useForm({validationSchema: schema});//mode:'onChange' = 유효성 검사를 할 수 있도록 해준다.
    
    const onSubmit = async (data) => {
        const headers = {
            'Content-type': 'application/Json; charset=UTF-8; multipart/form-data'
        }
        let bodyJson = JSON.stringify(data);//제이슨을 문자열로 변경해준다.
        console.log(bodyJson);

        axios.post("http://ccarrot.kro.kr:8070/v1/api/gallery", bodyJson, {headers}).then((res) => console.log(res));

        alert('완료되었습니다.');
        


        //reset();
       // document.location.href ="/";
    }
    

    const onerror = (error) => {
        //console.log(error);
    }

    






    
    // const handleFileButtonClick = (e) => {//버튼 대신 클릭하기
    //     e.preventDefault();
    //     fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
    // }

//https://react.vlpt.us/basic/12-variable-with-useRef.html

    return (
        <div className="eidt">
            <form onSubmit={handleSubmit(onSubmit, onerror)} encype="multipart/form-data">
                <div className="border edit__container">
                    <h2 className="mb-5 text-center">Edit Gallery</h2>
                    <input name="member_seq" 
                        {...register("member_seq",{
                            required:{
                                value:"25"
                            }
                        })}
                    />

                    {/* <input name="gallery_seq" value="1"/><br/> */}


                    <label className='form-label'>작품타이틀</label>
                    <div className='col-xs-12 mb-3'>
                        <input type="text"
                        {...register('gallery_title',{
                            required:{
                                value:true,
                                message:"타이틀은 필수입니다."
                            }
                        })}
                        name='gallery_title' className='form-control'/>
                    </div>

                    <label className='form-label'>작품 설명</label>
                    <div className='col-xs-12 mb-3'>
                        <textarea name="gallery_content"
                        {...register("gallery_content",{
                            required:{
                                value:true,
                                message:"작품설명은 필수입니다."
                            }
                        })}
                        className='form-control art_info'/>
                    </div>

                    <label className='form-label'>작품이미지</label>
                    <div className='col-xs-12 mb-3'>
                        <input type="file" name="files" className='form-control'/>
                        {/* <button onClick={handleFileButtonClick} className="btn btn-primary">파일선택</button> */}
                        {/* {error.picture && <p>{error.picture.message}</p>} */}
                    </div>
                    <div className="text-right col-xs-12 d-flex mt-4 justify-content-end">
                        <button type="submit" className="btn btn-primary gallery_submit">저장</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Gallery;