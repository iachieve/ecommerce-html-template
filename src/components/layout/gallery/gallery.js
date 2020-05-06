import React from 'react';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery from 'react-image-gallery';

const Gallery = ({images}) => {
    const src = images.map(img => {
        return {
            original: img,
            thumbnail: img,
        }
    });
    return (
        <React.Fragment>
            <ImageGallery

                slideOnThumbnailOver={true}
                items={src} infinite={true}
                autoPlay={false}
                thumbnailPosition='left'
                slideInterval={10000}>
            </ImageGallery>
        </React.Fragment>
    )
};

export default Gallery;