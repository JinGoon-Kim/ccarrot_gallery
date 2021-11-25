import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function GalleryItem({src, index, columnOffset}){

    return (
        <div className='gallery-item'>
            <div className='gallery-item-image'>
                <div
                    className='gallery-item-imginner'
                    style={{backgroundImage:'url(${src})'}}
                >sdfgsdfg</div>
            </div>
        </div>
    );
}

export default GalleryItem;