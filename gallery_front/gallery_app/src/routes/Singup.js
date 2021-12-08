import axios from 'axios';
import React, { Component } from 'react';
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


        function formCheck(e){
            if(!userid){
                console.log("아이디를 입력해주세요"); 
            }
        }


        let bodyJson = JSON.stringify(body);

        const onSubmit = (event) =>{//항상 첫번째 인자는 event를 받아온다.
            //form은 submit을 할때 항상 새로고치게 되어있다.
            event.preventDefault();//새로고침 안되도록 preventDefault을 해줘야한다.

            axios.post("http://ccarrot.kro.kr:8070/api/members", bodyJson, {headers : headers}).then((res) => console.log(res));
            console.log(bodyJson);
        }

        const headers = {
            'Content-type': 'application/Json; charset=UTF-8',
        }
        
        


        return (
        <form onSubmit={onSubmit}>
            <section className="sign_up">
                <div className="sign_up_main">
                    <h3 className="mb-5 text-center">SIGN UP</h3>

                    <div className="mb-3">
                        <label className="form-label">User Id</label>
                        <input 
                            className="form-control"
                            value={userid} 
                            onChange={(e)=> setUserid(e.target.value)}//바꿔줄 데이터를 이 인풋안에 value로 바꿔준다.
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
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
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