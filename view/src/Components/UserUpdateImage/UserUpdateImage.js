import React from 'react';
import PropTypes from 'prop-types';
import './UserUpdateImage.css';

function Image() {
    return (
        <svg className='figure-img img-fluid rounded Image__svg' 
            width="100%" 
            height="250px" 
            xmlns = "http://www.w3.org/2000/svg"  
            role="img">
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
        </svg>
    );
}

class UserUpdateImage extends React.Component {
    constructor(props) {
        super(props);

        this.fileInput = React.createRef();
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const { url } = this.props.match;
        const image = this.fileInput.current.files[0];
        let label = this.fileInput.current.labels[0].childNodes[0];
        label.data = image.name;
        this.props.updateProfile(url+'/image', image);
    }

    render() {
        const { image } = this.props;
        return (
            <figure className='figure UploadImage__figure'>
                { image ? <img src={image} className='figure-img img-fluid rounded UploadImage__image' /> : <Image /> }
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
        );
    }
}

UserUpdateImage.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    updateProfile: PropTypes.func,
    image: PropTypes.string
};

export default UserUpdateImage;