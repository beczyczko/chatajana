import { imageSource } from '../common/imageHelper';
import ReactMarkdown from 'react-markdown';

const Descriptions = ({ indexedImages, descriptions }) => {

    const imageByIndex = (index) => {
        return indexedImages[index].img;
    };

    const asideClassNames = (i) => {
        const oddClass = i % 2 ? " col-sm-push-5" : "";
        return `col-sm-7${oddClass}`;
    };

    const sectionClassNames = (i) => {
        const oddClass = i % 2 ? " col-sm-pull-7" : "";
        return `col-sm-5${oddClass}`;
    };

    return (
        <div className="container-fluid content">
            <div className="container">
                {
                    descriptions.map((description, i) => (
                        <div key={`description-${i}`} className="row">
                            <aside className={asideClassNames(i)}>
                                <a className="content-md example-image-link"
                                   href={imageSource(imageByIndex(i), 'large')}
                                   data-lightbox="gallery">
                                    <img className="img-responsive" src={imageSource(imageByIndex(i), 'medium')}
                                         alt=""/>
                                </a>
                                <img src={imageSource(imageByIndex(i), 'small')}
                                     className="content-sm img-responsive"/>
                            </aside>
                            <section className={sectionClassNames(i)}>
                                <div className="txt description">
                                    <ReactMarkdown children={description.content}/>
                                </div>
                            </section>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Descriptions;
