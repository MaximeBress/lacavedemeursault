'use client';

import { useState } from 'react';

import Navbar from '@/app/components/Navigation/Navbar';
import Sidebar from '@/app/components/Navigation/Sidebar';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </header>
  );
};

export default Navigation;
