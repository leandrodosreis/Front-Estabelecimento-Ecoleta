import { useState, useEffect } from 'react';
import "./recuperar.css";
import logo from "../../assets/logo-login.png"


export function Recuperar() {
    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <>

            <main className="main-recuperar">   

                <div className="card">


                    <div className="login-container">
                        <h1 className='recuperar'>Recuperar senha</h1>
                        <img className="logo" src={logo} alt="" />
                        <div className="card-login">
                            <h1 className="email">Email</h1>
                            <input className="campo-login" type="text" />
                        </div>




                            <h2 className="aviso">Informe seu e-mail para receber um link
                                de redefinição de senha.</h2>

                                <button className="botao-confirmar"><h2 className="confirmar">Confirmar</h2></button>

                                <h2 className="voltar-login"><a href="http://localhost:5173/login">Voltar para o login</a></h2>
                            

                        </div>
                    </div>

                
            </main>



        </>



    );
}


