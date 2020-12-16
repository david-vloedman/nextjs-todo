import styled from 'styled-components'

export default function Header(){

    const Header = styled.header`
        grid-row: 1 / span 1;
        grid-column: 1 / span 2;
        border-bottom: 1px solid #1A1C20;
    `;

    const Container = styled.div`
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        font-size: 2rem;
    `;


    return <Header>
        <Container>
            <h1>David's Test Blog</h1>
        </Container>
        </Header>
}