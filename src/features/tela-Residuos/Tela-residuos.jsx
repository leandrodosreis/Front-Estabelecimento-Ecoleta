import "./tela-residuos.css";
import lupa from "../../assets/Lupa.png"





export function TelaResiduos() {
    return (

            <main className="main">

                <h1 className="painel-estabelecimento">PAINEL DO ESTABLECIMENTO</h1>
                <h1 className="meus-residos">Meus resíduos</h1>
                <h1 className="gerencie">Gerencie e acompanhe suas operações na Ecoleta.</h1>

                <div className="busca">
                    <img className="lupa" src={lupa} alt="" />
                    <input className="barra-pesquisa" type="text"
                        placeholder="Buscar por material" />

                </div>

                <div className="filtro-tipo">
                    <label className="filtrar-tipo">
                        Todos os tipos
                    </label>


                    <div className="filtro-status">
                        <label className="filtrar ">
                            Todos os status
                        </label>

                        <button className="botao-filtrar">
                            <p>Filtrar</p>
                        </button>

                        <h1 className="teste">  abc</h1>


                    </div>


                </div>

            </main>

    );
}   