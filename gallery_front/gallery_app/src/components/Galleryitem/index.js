import React, { Component } from 'react';
import { points } from "../../data.js"
import './style.css';

function GalleryItem({src, index, columnOffset}){

    let values = points[index];

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
        >
            <div className='gallery-item-image'>
                <div
                    className='gallery-item-imginner'
                    style={{backgroundImage:`url(${src})`}}></div>
            </div>
        </div>
    );
}

export default GalleryItem;