import { useState, useEffect } from 'react';
import "./login.css";


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
                        <h1>Login</h1>
                        <div className="card-login">
                            <h1 className="cnpj">CNPJ</h1>
                            <input type="text" />
                        </div>


                        <div className="senha">
                            <h1 className="sua-senha">Senha</h1>
                            <input type="password" />

                        </div>
                    </div>

                </div>

            </main>



        </>



    );
}


