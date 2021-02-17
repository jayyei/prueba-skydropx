import Head from 'next/head';
import Header from './Header/header'

const Layout = ({
    title = 'Default title',
    children
}) => {
    return(
        <>
            <Head>
                <title>{title}</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <footer></footer>
        </>
    );
}

export default Layout;