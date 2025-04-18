import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './header.css'
import logo from '../../assets/logo.jpeg'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
    exit: { x: '100%' }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 px-4 sm:px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-semibold text-white">Red Augment</span>
        </div>

        {/* Desktop Navigation - shown on lg screens and above */}
        {/* Desktop Navigation - shown on lg screens and above */}
         <nav className="desktop-nav lg:flex space-x-4 sm:space-x-6 text-white font-light">
        <Link to="/service" className="hover:text-red-400 transition duration-300">Services</Link>
        <Link to="/blog" className="hover:text-red-400 transition duration-300">Blog Page</Link>
        <Link to="/pricing" className="hover:text-red-400 transition duration-300">Pricing Page</Link>
        </nav>

        {/* Mobile Menu Button - shown only on screens smaller than lg */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide Menu - shown only on screens smaller than lg */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-6 z-30 shadow-lg lg:hidden"
          >
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <ul className="space-y-4 text-lg">
              <li><Link to="/service" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog Page</Link></li>
              <li><Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing Page</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;