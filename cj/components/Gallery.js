import { imageSource } from '../common/imageHelper';

const Gallery = (props) => {
    const galleryImages = props.galleryImages;

    return (
        <div id="gallery-section" className="container-fluid content">
            <div className="container">
                <div className="row">
                    <h1>Galeria</h1>
                </div>
                <div className="row">
                    <div className="gallery-thumbnails">
                        {galleryImages.map(({ index, img }) => (
                            <a key={`gallery-img-${index}`}
                               href={imageSource(img, 'large')}
                               data-lightbox="gallery">
                                <div className="image-frame">
                                    <img src={imageSource(img, 'thumbnail')} alt=""/>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="content-sm">
                        {galleryImages.map(({ index, img }) => (
                            <img key={`gallery-img-${index}`}
                                 src={imageSource(img, 'small')}
                                 className="img-responsive"/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
