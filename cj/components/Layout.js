import Head from "next/head"
import Navigation from './Navigation';
import CjFooter from './CjFooter';
import Bon from './Bon';
import Partners from './Partners';
import { GA_TRACKING_ID } from '../config';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Chata Jana</title>
                <link rel="icon" href="/favicon.ico"/>

                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
                <link href='https://fonts.googleapis.com/css?family=Lato:400,700&subset=latin,latin-ext'
                      rel='stylesheet' type='text/css'/>

                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                        });
                      `,
                    }}
                />
                <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="lightbox/dist/css/lightbox.css" rel="stylesheet"/>
                <link href="fontello/css/fontello.css" rel="stylesheet"/>
                <script src="Scripts/jquery-1.9.1.min.js"></script>
                <script src="bootstrap/js/bootstrap.min.js"></script>

                <script src="Scripts/jquery.scrollTo.min.js"></script>
                <script src="Scripts/scrollTo.js"></script>
            </Head>

            <Navigation/>
            {children}
            <Bon/>
            <Partners/>
            <CjFooter/>

            <script src="lightbox/dist/js/lightbox-plus-jquery.js"></script>
        </div>
    );
};

export default Layout;
