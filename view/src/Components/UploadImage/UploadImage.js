import React from 'react';
import Image from './Image.js';
import './UploadImage.css';

export default class UploadImge extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
        this.fileInput = React.createRef();
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(e) {
        const that = this;
        e.preventDefault();
        const url = location.pathname+location.search;
        const image = this.fileInput.current.files[0];
        let label = this.fileInput.current.labels[0].childNodes[0];
        label.data = image.name;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'image/jpeg'
            },
            body: image
        }).then((res) => {
            console.log(res.status);
        })
    }

    render() {
        const { img } = this.state
        return (
            <figure className='figure UploadImage__figure'>
                { img ? <img src={img} /> : <Image /> }
                <figcaption className='figure-caption UploadImage__figure-caption'>
                    <form className='custom-file' onChange={this.handleChange}>
                        <input 
                            className='custom-file-input' 
                            id='customFile' 
                            type='file' 
                            accept='.png, .jpg, .jpeg'
                            ref={this.fileInput} 
                        />
                        <label className='custom-file-label UploadImage__label' htmlFor="customFile">Загрузити фото:</label>
                    </form>
                </figcaption>
            </figure>
        )
    }
}