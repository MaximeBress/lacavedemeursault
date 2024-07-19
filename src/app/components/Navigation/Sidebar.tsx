import Image from 'next/image';
import Link from 'next/link';

const Sidebar = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => {
  return (
    <div
      className="fixed left-0 z-20 grid h-full w-full overflow-hidden bg-[#21262c] pt-[120px] text-white"
      style={{
        opacity: `${isOpen ? '1' : '0'}`,
        top: ` ${isOpen ? '0' : '-100%'}`
      }}
    >
      <button className="absolute right-0 top-0 p-5" onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>
      <Link href="/" className="absolute left-0 top-0 p-5">
        <Image src="/logo.png" alt="logo" width={250} height={150} />
      </Link>
      <ul className="w-full text-left">
        <li className="nav-item">
          <Link href="/qui-sommes-nous" className="font-montserrat text-white" onClick={toggle}>
            Qui sommes nous
          </Link>
        </li>
        <li className="nav-item my-6">
          <Link href="/nos-vins" className="font-montserrat text-white" onClick={toggle}>
            Nos vins
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="font-montserrat text-white" onClick={toggle}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
