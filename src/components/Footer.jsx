import styled from "styled-components"

const FooterStyle = styled.footer `
    font-size: 20px;
    padding: 20px;
    background-color: #0d0d0d;
    width: 100%;
    color: white;
    text-align: center;

    p {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }
`

function Footer() {
    return(
        <>
            <FooterStyle>
                <p>📍 Local: Rua de Terra, N° 256, Décimo Segundo Andar</p>
                <p>🤝 Parceiros: FIAP e IBM</p>
                <p>📞 Contatos: 10xCoder@yahoo.com.br</p>
            </FooterStyle>
        </>
    )
}

export default Footer