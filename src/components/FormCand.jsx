import styled from "styled-components"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const FormStyle = styled.form `
    width: 90%;
    padding: 20px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #2f2f2f;

    input {
        font-size: 18px;
        border-radius: 10px;
        border: none;
        text-align: center;
        padding: 10px;
        margin: 10px auto;
        width: 60%;
    }

    input:focus {
        background-color: #e1e1e1;
    }

    .btns {
        display: flex;
        justify-content: space-evenly;
        width: 60%;
        margin: auto;
        margin-top: 30px;
    }

    .btns button {
        cursor: pointer;
        font-weight: bolder;
        padding: 10px;
        border-radius: 10px;
    }

    .btns button a {
        color: black;
        text-decoration: none;
    }

    .enviar {
        background-color: #00ff2b;
        transition: 150ms;
    }

    .enviar:hover {
        box-shadow: 0 0 10px #00ff2b;
        transition: 150ms;
    }

    .limpar {
        background-color: yellow;
        transition: 150ms;
    }

    .limpar:hover {
        box-shadow: 0 0 10px yellow;
        transition: 150ms;
    }

    .cancelar {
        background-color: red;
        transition: 150ms;
    }

    .cancelar:hover {
        box-shadow: 0 0 10px red;
        transition: 150ms;
    }
`

function FormCand() {
    let {id} = useParams()
    let metodo = "post"
    
    if (id) {
        metodo = "put"
    }

    const [novo, setNovo] = useState({
        "id": id,
        "nome": "",
        "cpf": "",
        "login": "",
        "senha": "",
        "endereco": "",
        "comp_endereco": "",
        "tel": "",
        "email": "",
        "data_nasc": ""
    })

    function handleChange(e) {
        setNovo({...novo, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`http://localhost:8080/10xCoder/rest/candidato/${id ? id : ""}`, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(novo)
        }).then(() => {
            window.location = "/"
        })
    }

    useEffect(() => {
        if (id) {
            fetch("http://localhost:8080/10xCoder/rest/candidato/" + id)
            .then((resp) => {
                return resp.json()
            }).then((data) => {
                setNovo(data)
            })
        }
    })

    return(
        <>
            <FormStyle onSubmit={handleSubmit}>
                <input type={"text"} name="nome" value={novo.nome} placeholder="Nome" onChange={handleChange}/>
                <input type={"text"} name="cpf" value={novo.cpf} placeholder="CPF" onChange={handleChange}/>
                <input type={"text"} name="login" value={novo.login} placeholder="Login" onChange={handleChange}/>
                <input type={"password"} name="senha" value={novo.senha} placeholder="Senha" onChange={handleChange}/>
                <input type={"text"} name="endereco" value={novo.endereco} placeholder="Endereço" onChange={handleChange}/>
                <input type={"text"} name="comp_endereco" value={novo.comp_endereco} placeholder="Complemento do Endereço" onChange={handleChange}/>
                <input type={"tel"} name="tel" value={novo.tel} placeholder="Telefone" onChange={handleChange}/>
                <input type={"email"} name="email" value={novo.email} placeholder="E-mail" onChange={handleChange}/>
                <input type={"date"} name="data_nasc" value={novo.data_nasc} placeholder="Data de Nascimento" onChange={handleChange}/>

                <div className="btns">
                    <button type="submit" className="enviar">Enviar</button>
                    <button type="reset" className="limpar">Limpar</button>
                    <button className="cancelar"><Link to={"/"}>Cancelar</Link></button>
                </div>
            </FormStyle>
        </>
    )
}

export default FormCand