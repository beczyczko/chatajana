const Contact = (props) => {
    return (
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
    );
};

export default Contact;
