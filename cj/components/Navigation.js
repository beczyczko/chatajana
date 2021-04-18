const Navigation = () => {
    return (
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
    );
};

export default Navigation;
