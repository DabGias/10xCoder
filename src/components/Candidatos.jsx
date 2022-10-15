import styled from "styled-components"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const DivLista = styled.div `
    width: 90%;
    padding: 20px;
    margin: 20px auto;
    border-radius: 10px;
    background-color: #2f2f2f;
    color: white;

    table {
        width: 100%;
        margin: auto;
        text-align: center;
    }

    tbody tr td {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }

    .btns {
        width: 100%;
        display: flex;
    }

    .btns button {
        cursor: pointer;
        padding: 5px;
        border-radius: 5px;
    }

    .edit {
        background-color: #fdf290;
    }

    .del {
        background-color: #ff9292;
    }

    .edit a {
        text-decoration: none;
    }

    tfoot tr td {
        text-align: center;
    }
`

function Candidatos() {
    const [candidatos, setCandidatos] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/10xCoder/rest/candidato").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setCandidatos(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    function handleDelete(id) {
        fetch("http://localhost:8080/10xCoder/rest/candidato/" + id, {
            method: "delete"
        }).then(() => {
            window.location = "/"
        }).catch((error) => {
            console.log(error)
        })
    }
    
    return(
        <>
            <DivLista>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Login</th>
                            <th>Senha</th>
                            <th>Endereço</th>
                            <th>Complemento do Endereço</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Data de Nascimento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            candidatos.map((cand) => (
                                <tr key={cand.idCand}>
                                    <td>{cand.idCand}</td>
                                    <td>{cand.nomeCand}</td>
                                    <td>{cand.cpfCand}</td>
                                    <td>{cand.loginCand}</td>
                                    <td>{cand.senhaCand}</td>
                                    <td>{cand.endCand}</td>
                                    <td>{cand.compEndCand}</td>
                                    <td>{cand.telCand}</td>
                                    <td>{cand.emailCand}</td>
                                    <td>{cand.dataNascCand}</td>
                                    <td className="btns">
                                        <button className="edit"><Link to={"/candidato/" + cand.idCand}>📝</Link></button>
                                        <button onClick={handleDelete.bind(this, cand.idCand)} className="del">❌</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot><tr><td colSpan="4">Candidatos no Banco de Dados</td></tr></tfoot>
                </table>
            </DivLista>
        </>
    )
}

export default Candidatos