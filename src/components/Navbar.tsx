import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <header className="wrapper relative">
    <nav className="navbar navbar-expand-lg center-nav transparent navbar-dark caret-none !absolute">
      <div className="container !flex-nowrap items-center lg:flex-row xl:flex-row">
        <div className="navbar-brand w-full">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={250} height={150} />
          </Link>
        </div>
        <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div className="offcanvas-header flex flex-row items-center justify-between p-6 lg:hidden xl:hidden">
            <Image src="/logo.png" alt="logo" width={200} height={150} />
            <button
              type="button"
              className="btn-close btn-close-white m-0 mr-[-0.75rem] border-0 bg-inherit p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out before:m-0 before:flex before:h-[1.8rem] before:w-[1.8rem] before:items-center before:justify-center before:rounded-[100%] before:bg-[rgba(255,255,255,.08)] before:p-0 before:font-Unicons before:text-[1.05rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:content-['\ed3b'] hover:no-underline hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0 motion-reduce:transition-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body flex !h-full flex-col  lg:!ml-auto xl:!ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/qui-sommes-nous" className="nav-link">
                  Qui sommes nous
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/nos-vins" className="nav-link">
                  Nos vins
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/nos-vignes" className="nav-link">
                  Nos vignes
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="navbar-nav !ml-auto !flex-row !items-center">
          <li className="nav-item lg:hidden xl:hidden">
            <button className="hamburger offcanvas-nav-btn">
              <span></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
