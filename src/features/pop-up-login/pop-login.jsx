import { Link } from "react-router-dom";
import "./pop-login.css";
import verificado from "../../assets/verificado.png";

export function PopLogin() {
  return (
    <main className="main-pop-up">
      <section className="card-pop-up">
        <div className="icone-verificado">
          <img src={verificado} alt="" />
        </div>

        <h1 className="notificacao">Email enviado!</h1>

        <p className="alerta">Verifique seu e-mail para redefinir sua senha.</p>

        <button type="button" className="botao-redefinir">
          <a className="link-redefinir-senha" href="http://localhost:5173/nova-senha">
          Abrir redefinição</a>
        </button>

        <Link to="/login" className="voltar-pop-up">
          Voltar para o login
        </Link>
      </section>
    </main>
  );
}
