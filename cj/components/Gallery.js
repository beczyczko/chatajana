import { imageSource } from '../common/imageHelper';

const Gallery = (props) => {
    const galleryImages = props.galleryImages;

    return (
        <div id="gallery-section" className="container-fluid content">
            {/*todo db fix image width to fit 5 standard thumbnails in a row*/}
            <div className="container">
                <div className="row">
                    <h1>Galeria</h1>
                </div>
                <div className="row">
                    <div className="content-md">
                        {galleryImages.map(({ index, img }) => (
                            <a key={`gallery-img-${index}`}
                               className="example-image-link"
                               href={imageSource(img, 'large')}
                               data-lightbox="gallery">
                                <img className="image-thumb" src={imageSource(img, 'thumbnail')} alt=""/>
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
