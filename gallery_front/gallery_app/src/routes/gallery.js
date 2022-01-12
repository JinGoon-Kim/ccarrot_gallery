import React,{ useRef } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import "./gallery.css"

const Gallery = () => {

    const [gallery_title, setGalleryTitle] = useState('');//첫번째 인자 = 초기 데이터 -> 두번째 인자 바꿔줄 데이터
    const [gallery_content, setGalleryContent] = useState('');
    const [file, setFile] = useState('');
    const [previewURL, setPreviewURL] = useState('');
    const fileRef= useRef();


    const { handleSubmit, register, watch} = useForm();//mode:'onChange' = 유효성 검사를 할 수 있도록 해준다.

    const onSubmit = (event) => {
        axios.post("http://110.11.231.118:8070/v1/api/gallery", bodyJson, {headers : headers}).then((res) => console.log(res));
        alert('회원가입이 완료되었습니다.');
        console.log(watch());
       // document.location.href ="/";
    }
    
    const headers = {
        'Content-type': 'application/Json; charset=UTF-8; multipart/form-data'
    }

    const onerror = () => {

    }

    let bodyJson = JSON.stringify(watch());//제이슨을 문자열로 변경해준다.





    //파일업로드
    const handleFileOnChange = (event) => {//파일 불러오기
        event.preventDefault();
        let file = event.target.files[0];
        let reader = new FileReader();
    
        reader.onloadend = (e) => {
            setFile(file);
            setPreviewURL(reader.result);
        }
        if(file)
        reader.readAsDataURL(file);
    }
    
    const handleFileButtonClick = (e) => {//버튼 대신 클릭하기
        e.preventDefault();
        fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
    }



    return (
        <div className="eidt">
            <form onSubmit={handleSubmit(onSubmit, onerror)} encype="multipart/form-data">
                <div className="border edit__container">
                    <h2 className="mb-5 text-center">Edit Gallery</h2>
                    <input name="id" 
                        {...register("id",{
                            required:{
                                value:"1"
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
                        <input ref={fileRef} type="file" className='form-control'/>
                        <button onClick={handleFileButtonClick} className="btn btn-primary">파일선택</button>
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