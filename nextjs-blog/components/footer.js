import Link from 'next/link'
import styled from 'styled-components'

export default function Footer(){

    const Footer = styled.footer`
        font-size: .9rem;
        text-align: center;
        grid-column: 1 / span 3;
        grid-row 3 / span 1;
    `;

    return <Footer>
        This is just a study into an interesting technology stack.
        {' '}
        <Link href="mailto:djvloedman@gmail.com">
            <a>Contact Me</a>
        </Link>
    </Footer>
}