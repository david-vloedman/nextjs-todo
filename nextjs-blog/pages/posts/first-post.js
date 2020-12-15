import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import styled from 'styled-components'

export default function FirstPost(){

    // const Main = styled.section`
    //     max-width: 250px;
    //     border-radius: 6px;
    //     border: 1px solid #eee;
    //     margin: 2rem 2rem auto;
    //     padding: .4em;
    //     color: hotpink;
    //     background: #eee;
    // `;

    const Container = styled.div`
        padding: 5px;
    `;

    return <Layout>
        <Container>
        <h1>FIRST POST GOALS ACCHOMPOLISHED</h1>
        <h2>What should I put on my first page?</h2>
        <p>Styles.</p>
        </Container>
    </Layout>
    
}