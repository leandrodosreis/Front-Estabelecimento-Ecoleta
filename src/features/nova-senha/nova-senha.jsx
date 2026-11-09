import { useState, useEffect } from 'react';
import "./nova-senha.css";


export function NovaSenha() {
    const [senha, setSenha] = useState('');

    const handleInputChange = (event) => {
        setSenha(event.target.value);
    };

    return (
        <>

            <main className="main-nova-senha">

                <div className="card-senha  ">


                    <div className="nova-senha-container">
                        <h1 className='new-password'>Nova senha</h1>
                        <div className="card-nova-senha">
                            <h1 className="codigo-senha">Codigo do email</h1>
                            <input className="campo-trocar-senha" type="text" />
                        </div>


                        <div className="input-senha">
                            <h1 className="definir-senha">Nova senha</h1>
                            <input className="nova-senha" type="password" />

                            <h1 className="confirmar-senha">Confirmar senha</h1>
                            <input className="campo-confirmar" type="password" />


                            <button className="botao-redefinir-senha"><h2 className="redefinir-senha"><a className='a-link'  href="http://localhost:5173/login">Redefinir senha</a></h2></button>

                            <h2 className="voltar-para-login"><a className='voltar-para-o-login' href="http://localhost:5173/login">Voltar para o login</a></h2>



                        </div>
                    </div>

                </div>

            </main>



        </>



    );
}


