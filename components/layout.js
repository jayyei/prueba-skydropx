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