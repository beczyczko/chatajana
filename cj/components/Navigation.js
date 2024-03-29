import Link from 'next/link';

const Navigation = () => {
    return (
        <header id="top">
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link href="/"><a id="link-top" className="navbar-brand">Chata Jana</a></Link>
                    </div>
                    <div>
                        <ul className="nav navbar-nav navbar-right over-768">
                            <li><Link href="/"><a>Pensjonat</a></Link></li>
                            <li><Link href="/apartamenty"><a>Apartamenty</a></Link></li>
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
                                    <li><Link href="/"><a>Pensjonat</a></Link></li>
                                    <li><Link href="/apartamenty"><a>Apartamenty</a></Link></li>
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
    );
};

export default Navigation;
