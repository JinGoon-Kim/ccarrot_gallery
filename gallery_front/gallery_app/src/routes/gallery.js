import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import "./gallery.css"

const gallery = () => {

    // const [gallery_title, setGalleryTitle] = useState('');//첫번째 인자 = 초기 데이터 -> 두번째 인자 바꿔줄 데이터
    // const [password, setPassword] = useState('');
    // const [member_email, setMember_email] = useState('');


    return (
        <div className="eidt">
            <div className="border edit__container">
                <h2 class="mb-5 text-center">Edit Gallery</h2>

                {/* <input name="gallery_seq" value="1"/><br/> */}


                <label className='form-label'>작품타이틀</label>
                <div className='col-xs-12 mb-3'>
                    <input type="text" name='gallery_title' className='form-control'/>
                </div>

                <label className='form-label'>작품 설명</label>
                <div className='col-xs-12 mb-3'>
                    <textarea name="gallery_content" className='form-control art_info'/>
                </div>

                <label className='form-label'>작품이미지</label>
                <div className='col-xs-12 mb-3'>
                    <input type="file" className='form-control'/>
                </div>
            </div>
        </div>
    );
};

export default gallery;