import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'; 
import Footer from '../components/Footer/index.js';
import Navber from '../components/Navbar/index.js';
import { imageData } from '../data.js';
import "../css/Home.css";
import GalleryItem from '../components/Galleryitem/index.js';

class Index extends React.Component{

    state={
        imgdata:[]
    }
    
    Getimg = imageData.map((tupples,index) =>{
        tupples.map((url, elemenIndex) => (
        <GalleryItem 
            key={elemenIndex} 
            index={url} 
            src={url} 
            columnOffset={index*14} 
        />
            ));
    });
    

    componentDidMount(){// 랜더린될때 맨먼저 랜더링 됨.
        this.imgdata();
    }

    render(){
        return(
        <>
            <Navber />
            <div className='main-container'>
                <div className='scroll-container'>
                    <div className='content'>
                        <div className='gallery'>
                            <div className='gallery-helper'>Scroll to discover more</div>
                            <div className='behind-text fill'>
                                every body loves a good story
                            </div>
                        </div>
                        <Footer />
                    </div>

                </div>

            </div>
        </>

        );
    }
}

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });//스크롤 이벤트

export default Index;