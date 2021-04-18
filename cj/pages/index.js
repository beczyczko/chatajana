import { cmsBaseUrl } from '../config';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import AdditionalInfo from '../components/AdditionalInfo';
import Descriptions from '../components/Descriptions';

const Home = ({ content, error }) => {
    const localisationDescriptions = content.descriptions;
    const galleryStartImageNo = localisationDescriptions.length;

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    const indexedImages = content.images.map((img, index) => ({ index, img }));
    const galleryImages = () => {
        return indexedImages.slice(galleryStartImageNo, indexedImages.length);
    };

    //todo db apartamenty page
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
                <AdditionalInfo additionalInfo={content.additionalInfo}/>
            </main>
        </div>
    )
};

Home.getInitialProps = async ctx => {
    try {
        // Parses the JSON returned by a network request
        const parseJSON = resp => (resp.json ? resp.json() : resp);
        // Checks if a network request came back fine, and throws an error if not
        const checkStatus = resp => {
            if (resp.status >= 200 && resp.status < 300) {
                return resp;
            }

            return parseJSON(resp).then(resp => {
                throw resp;
            });
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        const content = await fetch(`${cmsBaseUrl}/localizations/1`, {
            method: 'GET',
            headers,
        })
            .then(checkStatus)
            .then(parseJSON);

        return { content };
    } catch (error) {
        return { error };
    }
};

export default Home;
