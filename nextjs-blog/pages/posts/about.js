import styled from 'styled-components'
import Layout from '../../components/layout'

export default function About(){

   

    const PhotoContainer = styled.div`
        width: 8rem;
        height: 8rem;
        margin: auto;
    `;

    const Photo = styled.img`
        border-radius: 9999px;
        width: 8rem;
        height: 8rem;
    `;

    const Heading = styled.div`
        text-align: center;
    `;

    const Text = styled.p`
        font-size: 1rem;
    `;


    return <Layout>
            
                <PhotoContainer>
                    <Photo
                        src="/images/me.jpg"
                        alt="David"
                    />
                </PhotoContainer>
                <Heading>
                <h1>Just me, playing around</h1>
                </Heading>
                <Text>
                    This is my Nextjs powered playground, just wanting to prove what I can do.
                </Text>
            
        </Layout>
}