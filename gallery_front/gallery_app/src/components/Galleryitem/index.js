import React, { Component } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { points } from "../../data.js";
import useOnScreen from '../../hooks/useOnScreen.js';
import cn from 'classnames';//여러 클래스를 추가할 때 뿐만 아니라, 특정 값이 true/false임에 따라 클래스명을 추가하거나, 추가하지 않도록 하는 것을 간단히 구현할 수 있게 해 줍니다.

import './style.css';


function GalleryItem({src, index, columnOffset}){

    let values = points[index];

    const ref = useRef(null);
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);



    if(!values) return null;

    const [row, column, spanRow, spanColumn] = values;
    const getScrollInde = ()=>{
        if(index === 1 || index === 4 ) return -1;
        if(index === 0 || index === 3) return 0;
        return 1;
    }


    return (
        <div className='gallery-item'
        data-scroll
        data-scroll-speed={getScrollInde()}
        style={{
            gridArea: `${row} / ${column + columnOffset} / span ${spanRow} / span ${spanColumn}`,
        }}
        ref={ref}
        >
            <div className={cn('gallery-item-image', {reveal: onScreen})}>
                <div
                    className='gallery-item-imginner'
                    style={{backgroundImage:`url(${src})`}}></div>
            </div>
        </div>
    );
}

export default GalleryItem;