import Image from "next/image";
import Link from "next/link";

const Navbar = () => (
    <header className="relative wrapper">
        <nav className="navbar navbar-expand-lg center-nav transparent !absolute navbar-dark caret-none">
            <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
                <div className="navbar-brand w-full">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={250} height={150} />
                    </Link>
                </div>
                <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                    <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
                        <Image src="/logo.png" alt="logo" width={200} height={150} />
                        <button type="button" className="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
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
                <ul className="navbar-nav !flex-row !items-center !ml-auto">
                    <li className="nav-item xl:hidden lg:hidden">
                        <button className="hamburger offcanvas-nav-btn"><span></span></button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Navbar;
