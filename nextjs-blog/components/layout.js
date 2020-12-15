import styled from 'styled-components'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({children}){

    const Container = styled.section`
        font-size: 1.5rem;
        background: #F9F2CE;
        color: #333;
        padding: 0 1rem;
        margin: 2rem auto;
        max-width: 40rem;
    `;

    return <Container>
        <Head>
        <title>David does Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        {children}
        
        </Container>
}