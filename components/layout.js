import Head from 'next/head';
import Header from './Header/header';
import Loading from './Loading/loading';

const Layout = ({
    title = 'Default title',
    children
}) => {
    return(
        <div>
            <Head>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Roboto+Slab&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Head>
            <Header/>
            <main>
                {children}
                <Loading/>
            </main>
            <footer></footer>
        </div>
    );
}

export default Layout;