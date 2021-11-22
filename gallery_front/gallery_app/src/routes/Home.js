import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import "../css/base.css";
import "../css/Home.css";




class Home extends React.Component{

    render(){
        return(
            <div id="fdf" data-scroll-container>
                <section data-scroll-section>
                    <h1>You should learn</h1>
                    <p>👋</p>
                </section>
                <section className="section2" id="my-section" data-scroll-section>
                    <h1>What's up?</h1>
                    <p>😬</p>
                </section>
            </div>

        );
    }
}

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });//스크롤 이벤트
console.log('ya');

export default Home;