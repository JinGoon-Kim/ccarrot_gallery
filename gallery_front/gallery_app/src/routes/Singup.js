import React, { Component } from 'react';
import { useState } from 'react';
import "./Singup.css";

class Singup extends Component {


    constructor(props) {
        super(props);

        this.state ={
            member_id:""
        }
    }

    handleMemberChange = (event) =>{
        this.setState({
            member_id: event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`${this.state.member_id}`);
        event.preventDefault();
        
    }
    
    render() {
            const {member_id} = this.state
        return (
        <form onSubmit={this.handleSubmit}>
            <section className="sign_up">
                <div className="sign_up_main">
                    <h3 className="mb-5 text-center">SIGN UP</h3>
                    <div className="mb-3">
                        <label className="form-label">User Id</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="member_id" 
                            value={this.state.member_id} 
                            onChange={this.handleMemberChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control" type="password" name="member_password"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input className="form-control" type="email" name="member_email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">User hp</label>
                        <input className="form-control" type="text" name="member_hp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">NickName</label>
                        <input className="form-control" type="text" name="member_nickname" />
                    </div>
                    <div className="mb-3">
                        <input className="form-check-input" type="checkbox" id="form_check"/>
                        <label className="form-check-label pl-2">Click</label>
                    </div>
                    <button type="submit" className="btn btn-primary">회원가입</button>

                </div>
            </section>
        </form>
        );
    }
}


export default Singup;