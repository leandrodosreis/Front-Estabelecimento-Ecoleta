import { useState, useEffect } from 'react';
import "./login.css";
import logo from "../../assets/logo-login.png"


export function Login() {
    const [cnpj, setCnpj] = useState('');

    const handleInputChange = (event) => {
        setCnpj(event.target.value);
    };

    return (
        <>

            <main className="main-login">   

                <div className="card">


                    <div className="login-container">
                        <h1 className='entrar'>Entrar</h1>
                        <img className="logo" src={logo} alt="" />
                        <div className="card-login">
                            <h1 className="cnpj">CNPJ</h1>
                            <input className="campo-login" type="text" />
                        </div>


                        <div className="senha">
                            <h1 className="sua-senha">Senha</h1>
                            <input className="campo-senha" type="password"/>
                            <h2 className='esqueceu-senha'><a href="http://localhost:5173/recuperar">Esqueceu a senha?</a></h2>


                            <h2 className="cadastro ">Não possui conta? <a href="http://localhost:5173/">Cadastre-se</a></h2>

                                <button className="botao-entrar"><h2 className="login-entrar">Entrar</h2></button>
                            

                        </div>
                    </div>

                </div>

            </main>



        </>



    );
}


