import { localizationById } from '../api/localizations';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import AdditionalInfo from '../components/AdditionalInfo';
import Descriptions from '../components/Descriptions';

const Home = ({ localisation, error }) => {
    if (error) {
        return <div>An error occurred: {error}</div>;
    }

    const localisationDescriptions = localisation.descriptions;
    const galleryStartImageNo = localisationDescriptions.length;

    const indexedImages = localisation.images.map((img, index) => ({ index, img }));
    const galleryImages = () => {
        return indexedImages.slice(galleryStartImageNo, indexedImages.length);
    };

    //todo db favicon
    //todo db google analytics
    return (
        <div>
            <main>
                <Descriptions descriptions={localisationDescriptions} indexedImages={indexedImages}/>
                <Gallery galleryImages={galleryImages()}/>

                <div id="map-section" className="container-fluid content">
                    <div className="container">
                        <h1>Lokalizacja</h1>
                        <div className="container-map">
                            <iframe id="map"
                                    src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=pl&amp;geocode=&amp;q=chata+jana&amp;aq=&amp;sll=54.760117,17.556312&amp;sspn=0.119056,0.338173&amp;g=%C5%82eba+pl&amp;ie=UTF8&amp;t=m&amp;ll=54.750164,17.565207&amp;spn=0.006935,0.01605&amp;z=15&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>

                <Contact/>
                <AdditionalInfo additionalInfo={localisation.additionalInfo}/>
            </main>
        </div>
    )
};

export const getStaticProps = async () => {
    let { localisation, error } = await localizationById(1);

    if (localisation) {
        return {
            props: {
                localisation
            }
        };
    } else {
        return {
            props: {
                error
            }
        };
    }
};

export default Home;
