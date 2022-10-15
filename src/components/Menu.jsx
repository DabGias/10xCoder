import styled from "styled-components"
import { Link } from "react-router-dom"

const NavStyle = styled.nav `
    ul {
        width: 90%;
        list-style: none;
        margin: 20px auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    ul li a {
        padding: 10px;
        border-radius: 10px;
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        color: white;
        text-decoration: none;
        transition: 150ms;
    }

    ul li a:hover {
        background-color: #2f2f2f;
        transition: 150ms;
    }
`

function Menu() {
    return(
        <>
            <NavStyle>
                <ul>
                    <li>
                        <Link to={"/candidato"}>Criar Candidato 👨‍💻</Link>
                    </li>
                    <li>
                        <Link to={"/lista-candidatos"}>Listar Candidatos 🧾</Link>
                    </li>
                </ul>
            </NavStyle>
        </>
    )
}

export default Menu