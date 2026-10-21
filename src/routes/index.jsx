
// Este arquivo define QUAL TELA aparece em QUAL ENDEREÇO (rota).
// Exemplo: http://localhost:5173/coletas mostra a tela de Coletas.
import { Routes, Route, Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Cadastro } from '../features/cadastro/Cadastro';
import { TelaResiduos } from '../features/tela-Residuos/Tela-residuos';

// Tela provisória, só mostra um título.
// Quando criar a tela de verdade, troque o element da rota pelo componente dela.
function EmBreve({ titulo }) {
  return <h1 style={{ padding: 24 }}>{titulo}</h1>;
}

// Layout = "moldura" das telas: Header em cima e Footer embaixo.
// O <Outlet /> é o lugar onde a tela da rota atual é desenhada.
function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export function Rotas() {
  return (
    <Routes>
      {/* Telas SEM Header e Footer */}
      <Route path="/" element={<Cadastro />} />

      {/* Telas COM Header e Footer (dentro do Layout) */}
      <Route element={<Layout />}>
        <Route path="/inicio" element={<EmBreve titulo="Início" />} />
        <Route path="/residuos" element={<TelaResiduos/>} />
        <Route path="/historico" element={<EmBreve titulo="Histórico" />} />
        <Route path="/perfil" element={<EmBreve titulo="Perfil" />} />
      </Route>
    </Routes>
  );
}