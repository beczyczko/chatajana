import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = ({ content, error }) => {
    const galleryStartImageNo = 4;

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    const images = content.images.map((img, i) => ({ i, img }));

    const imageSource = (imageNo, size) => {
        const imageInDesiredFormat = images[imageNo].img.formats[size];
        const imageRelativeUrl = imageInDesiredFormat ? imageInDesiredFormat.url : images[imageNo].img.url;
        return `http://localhost:1337${imageRelativeUrl}`;
    };

    const galleryImages = () => {
        return images.slice(galleryStartImageNo, images.length);
    };
    ``
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
                                    <li><a href="mieszkanie.html">Mieszkanie</a></li>
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
                                            <li><a href="mieszkanie.html">Mieszkanie</a></li>
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

                <div className="container-fluid content">
                    <div className="container">
                        <div className="row">
                            <aside className="col-sm-7">
                                <a className="content-md example-image-link" href={imageSource(0, 'large')}
                                   data-lightbox="gallery">
                                    <img className="img-responsive" src={imageSource(0, 'medium')} alt=""/>
                                </a>
                                <img src={imageSource(0, 'small')} className="content-sm img-responsive"/>
                            </aside>
                            <section className="col-sm-5">
                                <div className="txt description">Chata Jana zaprasza do Łeby. Polecamy ciepły klimat
                                    naszego pensjonatu. Wybierając naszą ofertę spośród innych <a
                                        href="http://meteor-turystyka.pl/noclegi,morze,57.html" target='blank'>opcji
                                        noclegów nad morzem</a>, z pewnością nie pożałujesz! Dysponujemy pokojami 2-5
                                    osobowymi z łazienkami, balkonami i lodówkami. Do dyspozycji gości jest też w pełni
                                    wyposażony aneks kuchenny. Teren posesji jest ogrodzony, parking bezpłatny.
                                </div>
                            </section>
                        </div>
                        <div className="row">
                            <aside className="col-sm-7 col-sm-push-5">
                                <a className="content-md example-image-link" href={imageSource(1, 'large')}
                                   data-lightbox="gallery">
                                    <img className="img-responsive" src={imageSource(1, 'medium')} alt=""/>
                                </a>
                                <img src={imageSource(1, 'small')} className="content-sm img-responsive"/>
                            </aside>
                            <section className="col-sm-5 col-sm-pull-7">
                                <div className="txt">
                                    <h3>Udostępniamy także:</h3>
                                    <ul>
                                        <li>miejsce na samochód</li>
                                        <li>grill ogrodowy</li>
                                        <li>plac zabaw dla dzieci</li>
                                        <li>rowery (płatne)</li>
                                        <li>parawany</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className="row">
                            <aside className="col-sm-7">
                                <a className="content-md example-image-link" href={imageSource(2, 'large')}
                                   data-lightbox="gallery">
                                    <img className="img-responsive" src={imageSource(2, 'medium')} alt=""/>
                                </a>
                                <img src={imageSource(2, 'small')} className="content-sm img-responsive"/>
                            </aside>
                            <section className="col-sm-5">
                                <div className="txt">
                                    <ul>
                                        <li>Odległość do plaży - 1,5 km</li>
                                        <li>Park dinozaurów - 300 m</li>
                                        <li>Stadniny koni, kajaki - 1,2 km</li>
                                        <li>Sea Park w Sarbsku - 8 km</li>
                                        <li>Sklepy, restauracje - 300 m</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className="row">
                            <aside className="col-sm-7 col-sm-push-5">
                                <a className="content-md example-image-link" href={imageSource(3, 'large')}
                                   data-lightbox="gallery">
                                    <img className="img-responsive" src={imageSource(3, 'medium')} alt=""/>
                                </a>
                                <img src={imageSource(3, 'small')} className="content-sm img-responsive"/>
                            </aside>
                            <section className="col-sm-5 col-sm-pull-7">
                                <div className="txt">
                                    <ul>
                                        <li>Atrakcyjne ceny</li>
                                        <li>Spokojna okolica</li>
                                        <li>Komfortowe warunki</li>
                                        <li>Cena do uzgodnienia</li>
                                        <li>Zapraszamy do nas!</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div id="gallery-section" className="container-fluid content">
                    <div className="container">
                        <div className="row">
                            <h1>Galeria</h1>
                        </div>
                        <div className="row">
                            <div className="content-md">
                                {galleryImages().map(({ i, img }) => (
                                    <a key={`gallery-img-${i}`}
                                       className="example-image-link"
                                       href={imageSource(i, 'large')}
                                       data-lightbox="gallery">
                                        <img className="image-thumb" src={imageSource(i, 'thumbnail')} alt=""/>
                                    </a>
                                ))}
                            </div>
                            <div className="content-sm">
                                {galleryImages().map(({ i, img }) => (
                                    <img key={`gallery-img-${i}`}
                                         src={imageSource(i, 'small')}
                                         className="img-responsive"/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div id="map-section" className="container-fluid content">
                    <div className="container">
                        <h1>Lokalizacja</h1>
                        <div className="container-map">
                            <iframe id="map"
                                    src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=pl&amp;geocode=&amp;q=chata+jana&amp;aq=&amp;sll=54.760117,17.556312&amp;sspn=0.119056,0.338173&amp;g=%C5%82eba+pl&amp;ie=UTF8&amp;t=m&amp;ll=54.750164,17.565207&amp;spn=0.006935,0.01605&amp;z=15&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>

                <div id="contact" className="container-fluid content">
                    <div className="container" id="contact">
                        <h1>Kontakt</h1>
                        <div className="content-sm">
                            <a href="tel:694572228"><h2>694 572 228</h2></a>
                            <a href="tel:598661174"><h2>59 866 11 74</h2></a>
                            <a href="mailto:chatajanaleba@gmail.com?Subject=Zapytanie%20z%20chatajana.pl">
                                <h2>chatajanaleba@gmail.com</h2></a>
                        </div>
                        <div className="content-md">
                            <h2>694 572 228</h2>
                            <h2>59 866 11 74</h2>
                            <h2>chatajanaleba@gmail.com</h2>
                        </div>
                    </div>
                </div>

                <div className="container-fluid content">
                    <div className="container">
                        <h1>Informacje dodatkowe</h1>
                        <div className="container-info">
                            <h3>Pobyt, zakwaterowanie:</h3>
                            <p>
                                &ndash; Doba hotelowa zaczyna się o godzinie 13:00 a kończy o 10:00 w dniu wyjazdu.<br/>
                                &ndash; Rezerwacja powinna być potwierdzona zadatkiem na konto (nr poniżej).<br/>
                                &ndash; Opłata za pobyt deklarowany zadatkiem pobierana jest w dniu przyjazdu, przy
                                zameldowaniu.<br/>
                                &ndash; W przypadku wcześniejszego wyjazdu nie zwracamy niewykorzystanej opłaty.<br/>
                                &ndash; W przypadku rezygnacji z pobytu zadatek nie podlega zwrotowi.<br/>
                            </p>

                            <h3>Dane do przelewu:</h3>
                            <p>
                                Elżbieta Beczyczko<br/>
                                ul. Paderewskiego 12, 84-360 Łeba<br/>
                                Nr konta bankowego: PKO SA 07 1240 3800 1111 0000 4464 1117<br/>
                                W tytule: termin pobytu (np. od ... do ...) oraz numer kontaktowy<br/>
                            </p>

                            <h3>Zakres cen:</h3>
                            <p>Ceny 30-60 zł od osoby za dobę w zależności od terminu i długości pobytu. Ceny noclegów
                                nie obejmują opłaty klimatycznej.</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid content">
                    <div className="container">
                        <div className="row">
                            <img src="images/bon_m.jpg" className="bon content-sm"/>
                            <img src="images/bon.jpg" className="bon content-md"/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid content">
                    <div className="container container-partners">
                        <a href='http://www.nocowanie.pl/noclegi/leba/kwatery_i_pokoje/2084/' target='_blank'
                           title='Chata Jana'>
                            <img src='http://img.nocowanie.pl/files/photos/exban/1_1.gif' border='0'
                                 alt='Chata Jana' width='108' height='70'/>
                        </a>
                        <a href='http://www.nocowanie.pl/noclegi/leba/' target='_blank' title='Łeba'><img
                            src='http://img.nocowanie.pl/files/photos/exban/1_2.gif' border='0' alt='Łeba' width='21'
                            height='70'/></a>
                        <a href='http://www.nocowanie.pl/' target='_blank' title='noclegi'>
                            <img src='http://img.nocowanie.pl/files/photos/exban/1_3.gif' border='0' alt='noclegi'
                                 width='31' height='70'/>
                            <a href="http://www.eholiday.pl/noclegi-nn3873.html" title="Pokoje Gościnne Chata Jana Łeba"
                               target="_blank">
                                <img src="http://www.eholiday.pl/img/partner/l1a.gif"
                                     alt="Pokoje Gościnne Chata Jana Łeba" border="0" width="52"
                                     height="26"/>
                            </a>
                            <a href="http://www.eholiday.pl/noclegi-leba-53017.html" title="noclegi Łeba"
                               target="_blank">
                                <img src="http://www.eholiday.pl/img/partner/l1b.gif" alt="noclegi Łeba" border="0"
                                     width="22"
                                     height="26"/>
                            </a>
                            <a href="http://www.eholiday.pl" title="noclegi" target="_blank">
                                <img src="http://www.eholiday.pl/img/partner/l1c.gif" alt="noclegi" border="0"
                                     width="22" height="26"/>
                            </a>
                        </a>
                    </div>
                </div>

            </main>

            <footer>
            </footer>
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

        const content = await fetch('http://localhost:1337/localizations/1', {
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
