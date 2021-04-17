import Head from 'next/head'
import { cmsBaseUrl } from '../config';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import AdditionalInfo from '../components/AdditionalInfo';
import Bon from '../components/Bon';
import Partners from '../components/Partners';
import CjFooter from '../components/CjFooter';
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

    //todo db universal navigation component
    //todo db layout component
    //todo db apartamenty page
    //todo db favicon
    //todo db google analytics
    return (
        <div>
            <Head>
                <title>Chata Jana</title>
                <link rel="icon" href="/favicon.ico"/>

                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
                <link href='https://fonts.googleapis.com/css?family=Lato:400,700&subset=latin,latin-ext'
                      rel='stylesheet' type='text/css'/>

                <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="lightbox/dist/css/lightbox.css" rel="stylesheet"/>
                <link href="fontello/css/fontello.css" rel="stylesheet"/>
                <script src="Scripts/jquery-1.9.1.min.js"></script>
                <script src="bootstrap/js/bootstrap.min.js"></script>

                <script src="Scripts/jquery.scrollTo.min.js"></script>
                <script src="Scripts/scrollTo.js"></script>
            </Head>

            <main>
                <header id="top">
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a id="link-top" className="navbar-brand" href="#">Chata Jana</a>
                            </div>
                            <div>
                                <ul className="nav navbar-nav navbar-right over-768">
                                    <li><a href="apartamenty.html">Apartamenty</a></li>
                                    <li><a className="link-gallery" href="#">Galeria</a></li>
                                    <li><a className="link-map" href="#">Lokalizacja</a></li>
                                    <li><a className="link-contact" href="#">Kontakt</a></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right under-768">
                                    <li className="nav navbar-nav dropdown navbar-right">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                            <div className="fontello"><i className="icon-menu"></i></div>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="apartamenty.html">Apartamenty</a></li>
                                            <li><a className="link-gallery" href="#">Galeria</a></li>
                                            <li><a className="link-map" href="#">Lokalizacja</a></li>
                                            <li><a className="link-contact" href="#">Kontakt</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

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

                <Bon/>

                <Partners/>

            </main>

            <CjFooter/>

            <script src="lightbox/dist/js/lightbox-plus-jquery.js"></script>
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
