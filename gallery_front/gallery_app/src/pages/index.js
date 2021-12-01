import { useEffect } from 'react';
import { useRef } from 'react'; 
import Footer from '../components/Footer/index.js';
import { imageData } from '../data.js';
import "../css/Home.css";
import GalleryItem from '../components/Galleryitem/index.js';
import LocomotiveScroll from 'locomotive-scroll';
import '../../node_modules/locomotive-scroll/src/locomotive-scroll.scss';
import { readConfigFile } from 'typescript';


function Home(){

    useEffect(()=>{
        if(ref){
            new LocomotiveScroll({
                el: ref.current,
                smooth: true,
                direction: 'horizontal'
            })
        }
    },[]);
    const ref = useRef(null);


    const images = imageData.map((tupples, index) =>
    tupples.map((url, elementIndex) => (
      <GalleryItem
        key={url}
        src={url}
        index={elementIndex}
        columnOffset={index * 14}
      />
    ))
  );
    


    return(
    <>
        
        <div className='main-container'>
            <div className='scroll-container' data-scroll-container ref={ref}>
                <div className='content'>
                    <div className='gallery'>
                        {images}
                        <div className='gallery-helper' data-scroll data-scroll-speed={-1}>Scroll to discover more</div>
                        <div className='behind-text fill' data-scroll data-scroll-speed={-2}>
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

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });//스크롤 이벤트

export default Home;