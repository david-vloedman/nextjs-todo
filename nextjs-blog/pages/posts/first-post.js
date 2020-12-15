import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import styled from 'styled-components'

export default function FirstPost(){

    const Main = styled.section`
        max-width: 250px;
        border-radius: 6px;
        border: 1px solid #eee;
        margin-left: auto;
        margin-right: auto;
        padding: .4em;
    `;

    return <Layout>
        <Head>
            <title>David's First Page</title>
        </Head>
        <h1>FIRST POST GOALS ACCHOMPOLISHED</h1>
        <Link href="/">
            <a>Back to Home</a>
        </Link>
        <h2>What should I put on my first page?</h2>
        <p>Styles.</p>
        <Main>
            Will this have a slightly rounded container?
        </Main>
    </Layout>
    
}