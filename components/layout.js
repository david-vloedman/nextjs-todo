import styled from 'styled-components'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Layout({children}){

    const Layout = styled.div`
        display: grid;
        grid-template-columns: 1fr 6fr;
        grid-template-rows: 1fr 6fr 1fr;
        max-width: 95%;
        margin-left: auto;
        margin-right: auto;
        min-height: 100vh;
        background-color: #EBC31E;
        color: #1A1C20;
    `;

    const Main = styled.main`
        padding: 25px;
        grid-row: 2 / span 1;
        grid-column: 2 / span 1;
        border-left: 1px solid #333;
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