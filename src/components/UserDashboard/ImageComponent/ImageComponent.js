import React, { Component } from 'react';
import classes from './ImageComponent.css';

class ImageComponent extends Component {
    render() {
        return (
                <div className={classes.ImageComponent}>
                    <img src="\image\vegSalad.jpg" alt=""></img>
                </div>
        )
    }
}

export default ImageComponent;