// Nome do CSS em minúsculo, igual ao nome real do arquivo (a caixa precisa bater!)
import "./tela-residuos.css";
// Confira se o arquivo na pasta assets se chama exatamente "Lupa.png"
import lupa from "../../assets/Lupa.png";

export function TelaResiduos() {
    return (
        <main className="main">

            {/* Corrigido o texto: ESTABELECIMENTO */}
            <h1 className="painel-estabelecimento">PAINEL DO ESTABELECIMENTO</h1>
            <h1 className="meus-residos">Meus resíduos</h1>
            <h1 className="gerencie">Gerencie e acompanhe suas operações na Ecoleta.</h1>

            <div className="busca">
                <img className="lupa" src={lupa} alt="" />
                <input
                    className="barra-pesquisa"
                    type="text"
                    placeholder="Buscar por material"
                />
            </div>

            {/* Classe batendo com o CSS: "filtro-tipo" */}
            <div className="filtro-tipo">
                <label className="filtrar-tipo">
                    Todos os tipos
                </label>

                <div className="filtro-status">
                    {/* Removi o espaço extra: "filtrar " -> "filtrar" */}
                    <label className="filtrar">
                        Todos os status
                    </label>

                    <button className="botao-filtrar">
                        <p>Filtrar</p>
                    </button>
                </div>
            </div>

        </main>
    );
}