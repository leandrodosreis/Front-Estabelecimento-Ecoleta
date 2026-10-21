import "./tela-residuos.css";

export function TelaResiduos() {
    return (

            <main className="main">

                <h1 className="painel-estabelecimento">PAINEL DO ESTABLECIMENTO</h1>
                <h1 className="meus-residos">Meus resíduos</h1>
                <h1 className="gerencie">Gerencie e acompanhe suas operações na Ecoleta.</h1>

                <div className="busca">
                    <img class="lupa" src={lupa} alt="" />
                    <input className="barra-pesquisa" type="text"
                        placeholder="Buscar por material" />

                </div>

                <div className="filtro-tipo">
                    <label>
                        Todos os tipos
                    </label>


                    <div className="filtro-status">
                        <label>
                            Todos os status
                        </label>


                    </div>


                </div>

            </main>

    );
}   