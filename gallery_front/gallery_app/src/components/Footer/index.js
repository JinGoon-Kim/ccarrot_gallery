import { element } from 'prop-types';
import React, { Component } from 'react';
import './style.css';

const addresses = [
    {
        name: "Park Chan-geun",
        gitaddress: "https://github.com/ChanGeunPark",
        phone: "010-8668-8918",
        email: "design795@naver.com",
    },
    {
        name: "Jin-Gun Kim",
        gitaddress: "https://github.com/JinGoon-Kim",
        phone: "010-4920-9455",
        email: "OOOO@naver.com",
    },
  ];





function Footer(){
    return(
        <div className='footer'
        data-scroll
        data-scroll-speed = {-7}
        >
            <div className='contact-address'>
                {addresses.map((info) =>(
                    <div key={info.name}>
                        <h1>{info.name}</h1>
                        <div>
                            {info.gitaddress.split(',').map(element =>(
                                <p key={element}>{element}</p>
                            ))}
                        </div>
                        <p>{info.phone}</p>
                        <p>{info.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer;