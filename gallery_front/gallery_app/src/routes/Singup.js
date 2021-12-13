import axios from 'axios';
import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import "./Singup.css";

function Singup(){//usestate 리엑트 훅을 사용할땐 class를 사용하면 안된다
        const [userid, setUserid] = useState('');//첫번째 인자 = 초기 데이터 -> 두번째 인자 바꿔줄 데이터
        const [password, setPassword] = useState('');
        const [member_email, setMember_email] = useState('');
        const [member_hp, setMember_hp] = useState('');
        const [member_nickname, setMember_nickname] = useState('');
        

        let body = {//전송해줄 데이터
            member_id : userid,
            member_password : password,
            member_email : member_email,
            member_hp : member_hp,
            member_nickname : member_nickname,
        }

        const { handleSubmit, register, watch} = useForm();//mode:'onChange' = 유효성 검사를 할 수 있도록 해준다.

        let bodyJson = JSON.stringify(body);
        const onSubmit = (event) =>{//항상 첫번째 인자는 event를 받아온다.
            //form은 submit을 할때 항상 새로고치게 되어있다.
            //axios.post("http://110.11.231.118:8070/api/members", bodyJson, {headers : headers}).then((res) => console.log(res));
            console.log(watch());
            console.log(bodyJson);
        }

        const onError = (error) =>{//에러일때 표출
            if(error.member_id) {
                alert(error.member_id.message);
                return false;
            };
            
            if(error.password) alert(error.password.message);
        }



        const headers = {
            'Content-type': 'application/Json; charset=UTF-8',
        }




        return (
        <form onSubmit={handleSubmit(onSubmit,onError)}>
            <section className="sign_up">
                <div className="sign_up_main">
                    <h3 className="mb-5 text-center">SIGN UP</h3>

                    <div className="mb-3">
                        <label className="form-label">User Id</label>
                        <input 
                            className="form-control"
                            {...register('member_id',{
                                minLength:{
                                    value:5,
                                    message:"아이디는 5글자 이상이어야 합니다."
                                },
                                required:{
                                    value:true,
                                    message:"아이디는 필수 입력입니다."
                                }
                            })}//register이 value와 onChange={(e)=> data(e.target.value)} 가 없어도 실행되도록 도와준다.
                            type="text" 
                            name="member_id" 
                            placeholder="user id"
                        />
                        
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                            className="form-control" 
                            type="password" 
                            name="member_password"
                            placeholder="password"
                            {...register("password",{
                                minLength:{
                                    value:4,
                                    message:"비밀번호는 4글자 이상이어야 합니다."
                                },
                                required:{
                                    value:true,
                                    message:"비밀번호는 필수값 입니다."
                                }
                            })}
                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            className="form-control" 
                            type="email" 
                            name="member_email" 
                            placeholder="Email"
                            value={member_email}
                            onChange={(e)=> setMember_email(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="member_hp" 
                            placeholder="Phone Number"
                            value={member_hp}
                            onChange={(e)=>{setMember_hp(e.target.value)}}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">NickName</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="member_nickname" 
                            placeholder="NickName"
                            value={member_nickname}
                            onChange={(e)=>{setMember_nickname(e.target.value)}}
                        />
                    </div>

                    <div className="mb-3">
                        <input className="form-check-input" type="checkbox" id="form_check"/>
                        <label className="form-check-label px-1"> Click</label>
                    </div>

                    <button type="submit" className="btn btn-primary">회원가입</button>
                </div>
            </section>
        </form>
        );
}


export default Singup;