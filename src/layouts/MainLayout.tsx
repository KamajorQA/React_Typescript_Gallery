import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

function MainLayout() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export { MainLayout };
