import { Link } from "react-router-dom"
import styled from "styled-components"
import Menu from "./Menu"

const HeaderStyle = styled.header `
    padding: 20px;
    background-color: #0d0d0d;
    width: 100%;

    h1 {
        text-align: center;
    }

    h1 a {
        font-family: 'Courier New', Courier, monospace;
        color: #00ff2b;
        text-decoration: none;
    }
`

function Header() {
    return(
        <>
            <HeaderStyle>
                <h1><Link to={"/"}>10xCoder</Link></h1>

                <Menu/>
            </HeaderStyle>
        </>
    )
}

export default Header