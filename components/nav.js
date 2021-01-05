import styled from 'styled-components'
import Link from 'next/link'

export default function Nav(){

    const Nav = styled.nav`
        grid-column: 1 / span 1;
        grid-row: 2 / span 3;
    `;

    const UL = styled.ul`
        list-style: none;
        border-right: 1px solid black;
    `;


    return <Nav>
        <UL>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/posts/first-post">
                    <a>Baby's first post</a>
                </Link>
            </li>
            <li>
                <Link href="/posts/about">
                    <a>About</a>
                </Link>
            </li>

            <li>
                <Link href="/tools/todo">
                    <a>To Do App</a>
                </Link>
            </li>
        </UL>
    </Nav>
}