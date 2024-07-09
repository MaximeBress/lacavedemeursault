import Image from "next/image";
import Link from "next/link";

const Footer = () => (
    <footer className="bg-[#21262c] opacity-100 text-[#cacaca]">
        <div className="container py-8 xl:!py-10 lg:!py-10 md:!py-10">
            <div className="flex flex-wrap mx-[-15px] mt-[-30px] xl:mt-0 lg:mt-0">
                <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:mt-[30px] sm:mt-[30px] xsm:mt-[30px]">
                    <div className="widget">
                        <Image className="!mb-4" src="/logo.png" alt="logo" width={250} height={150} />
                        <p className="!mb-4">
                            © {new Date().getFullYear()} La cave de Meursault. Tous droits réservés.
                        </p>
                    </div>
                </div>
                <div className="md:w-8/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:mt-[30px] sm:mt-[30px] xsm:mt-[30px]">
                    <div className="widget">
                        <h4 className="widget-title text-white !mb-3">En savoir plus</h4>
                        <ul className="pl-0 list-none !mb-0">
                            <li>
                                <Link className="text-[#cacaca] hover:text-[#3f78e0]" href="/cgu">
                                    CGU
                                </Link>
                            </li>
                            <li className="mt-[0.35rem]">
                                <Link className="text-[#cacaca] hover:text-[#3f78e0]" href="/mentions-legales">
                                    Mentions Légales
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-8/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:mt-[30px] sm:mt-[30px] xsm:mt-[30px]">
                    <div className="widget">
                        <h4 className="widget-title text-white !mb-3">Rester en contact</h4>
                        <address className=" not-italic leading-[inherit] mb-4">
                            12A Rue du Maréchal de Lattre de Tassigny<br />
                            21190 Meursault<br/>
                            France
                        </address>
                        (+33) 07 85 98 78 92
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;
