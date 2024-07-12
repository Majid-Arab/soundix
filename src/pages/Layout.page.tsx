import './globals.css';
import Navbar from '../components/navbar/index';
import Sidebar from '../components/sidebar/index';
import AsideBar from '../components/asidebar/index';
import Home from './Home';

export function HomePage() {
  return (
    <html lang="en">
      <body className="h-screen flex">
        {/* <!-- Sidebar --> */}
        <div className="h-full w-72 text-white flex-shrink-0 py-3">
          <Sidebar />
        </div>

        <div className="flex flex-col w-full gap-3">
          {/* <!-- Header --> */}
          <header className="h-16 w-full py-3">
            <Navbar />
          </header>

          <div className="flex flex-grow">
            {/* <!-- Main Content --> */}
            <main className="flex-grow">
              <Home />
            </main>

            {/* <!-- Aside --> */}
            <aside className="h-full w-96 flex-shrink-0">
              <AsideBar />
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
