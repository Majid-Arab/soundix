import '../globals.css';
import Navbar from '@/components/navbar/index';
import Sidebar from '@/components/sidebar/index';
import AsideBar from '@/components/asidebar/index';
import Footer from '@/components/footer';
import Home from './Home.page';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export function HomePage() {
  return (
    <html lang="en">
      <body className="h-screen max-w-max mx-auto flex font-sans">
        {/* <!-- Sidebar --> */}
        <div className="h-full lg:w-72">
          <Sidebar />
        </div>

        <div className="flex flex-col w-full gap-3 flex-grow">
          {/* <!-- Header --> */}
          <nav className="h-16 w-full py-3">
            <Navbar />
          </nav>

          <div className="block md:flex">
            {/* <!-- Main Content --> */}
            <main className="flex-grow pt-5">
              <Home />
            </main>

            {/* <!-- Aside --> */}
            <aside className="h-full flex-shrink-0">
              <AsideBar />
            </aside>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <footer className="fixed w-full bottom-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
