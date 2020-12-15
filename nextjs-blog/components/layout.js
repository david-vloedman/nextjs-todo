import styled from 'styled-components'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Layout({children}){

    const Layout = styled.div`
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-template-rows: 1fr 3fr 1fr;
        max-width: 95%;
        margin-left: auto;
        margin-right: auto;
    `;

    const Main = styled.main`
        padding: 25px;
    `;

    return (
        <Layout>
            <Head>
                <title>David does Nextjs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <Nav/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </Layout>
    )
}