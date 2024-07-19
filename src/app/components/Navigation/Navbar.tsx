'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <nav className="navbar navbar-expand-lg center-nav transparent navbar-dark caret-none !absolute z-10 w-full">
      <div className="container !flex-nowrap items-center lg:flex-row xl:flex-row">
        <div className="navbar-brand w-full">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={250} height={150} />
          </Link>
        </div>
        <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div className="offcanvas-body flex !h-full flex-col  lg:!ml-auto xl:!ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/qui-sommes-nous" className="nav-link font-montserrat">
                  Qui sommes nous
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/nos-vins" className="nav-link font-montserrat">
                  Nos vins
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link font-montserrat">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="navbar-nav !ml-auto !flex-row !items-center">
          <li className="nav-item lg:hidden xl:hidden">
            <button className="hamburger offcanvas-nav-btn" onClick={toggle}>
              <span></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
