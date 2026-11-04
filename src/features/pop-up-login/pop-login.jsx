import { useState, useEffect } from 'react';
import "./pop-login.css";
import verificado from "../../assets/verificado.png"


export function PopLogin() {
    const [notificacao, setNotificacao] = useState('');

    const handleInputChange = (event) => {
        setNotificacao(event.target.value);
    };

    return (
        <>

            <main className="main-pop-up">

                <div className="card-pop-up">


                        <div className="pop-up-container">
                        <img className="imagem-verificado" src={verificado} alt="" />
                            <h1 className="notificacao">Email enviado! </h1>

                            </div>



                        <div className="container-info">''


                        <h2 className="alerta">Verifique seu email para redefinir a senha</h2>

                        <button className="botao-redefinir"><h2 className="redefinir">Abrir redefinição</h2></button>

                        <h2 className="voltar-pop-up"><a href="http://localhost:5173/login">Voltar para o login</a></h2>


                    </div>

                </div>



            </main>



        </>



    );
}


