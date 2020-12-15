import styled from 'styled-components'

export default function Header(){

    const Header = styled.header`
        grid-row: 1 / span 1;
        grid-column: 2 / span 1;
    `;

    const Container = styled.div`
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    `;


    return <Header>
        <Container>
            <h1>David's Test Blog</h1>
        </Container>
        </Header>
}