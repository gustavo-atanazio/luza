import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';

function Layout() {
  return (
    <>
      <Header/>

      <main className='flex-grow py-6 px-4'>
        <Outlet/>
      </main>

      <Footer/>
    </>
  );
}

export default Layout;