import styled from 'styled-components'

export default function Layout({children}){

    const Container = styled.section`
        font-size: 1.5rem;
        text-align: center;
        background: lightgrey;
        color: darkred;
    `;

    return <Container>{children}</Container>
}