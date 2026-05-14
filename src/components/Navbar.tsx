import { useEffect, useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu mobile ketika pindah halaman
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Promo', href: '/promo' },
    { name: 'Produk', href: '/produk' },
    { name: 'Outlet', href: '/outlet' },
    { name: 'Tentang Kami', href: '/tentang' }
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-sand/95 backdrop-blur-md shadow-md py-2'
            : 'bg-brand-sand py-3 border-b border-brand-brown/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center flex-shrink-0"
            >
              <img
                src="/LOOGO_BLUDER.png"
                alt="Bluder Cokro Logo"
                className="
                  h-12
                  sm:h-14
                  md:h-16
                  w-auto
                  object-contain
                  drop-shadow-md
                "
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`
                    relative
                    px-3
                    lg:px-4
                    py-2
                    text-sm
                    uppercase
                    tracking-wider
                    rounded-lg
                    transition-all
                    duration-300
                    font-medium
                    ${
                      isActive(link.href)
                        ? 'text-brand-red'
                        : 'text-brand-brown/70 hover:text-brand-brown'
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      h-0.5
                      bg-brand-red
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isActive(link.href)
                          ? 'w-6'
                          : 'w-0'
                      }
                    `}
                  />
                </Link>
              ))}

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 sm:gap-5">

              {/* Cart */}
              <Link
                to="/cart"
                className="
                  relative
                  text-brand-brown
                  hover:text-brand-red
                  transition-colors
                "
              >
                <ShoppingCart size={23} />

                {cart.length > 0 && (
                  <span
                    className="
                      absolute
                      -top-2
                      -right-2
                      min-w-[18px]
                      h-[18px]
                      flex
                      items-center
                      justify-center
                      bg-brand-red
                      text-white
                      text-[10px]
                      rounded-full
                      font-bold
                      px-1
                    "
                  >
                    {cart.length}
                  </span>
                )}
              </Link>

              {/* Desktop Button */}
              <a
                href="https://wa.me/6281391233000"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden
                  md:flex
                  items-center
                  bg-brand-brown
                  text-brand-cream
                  px-5
                  lg:px-6
                  py-2.5
                  rounded-full
                  font-medium
                  hover:bg-brand-red
                  transition-all
                  duration-300
                  shadow-md
                  whitespace-nowrap
                "
              >
                Pesan Sekarang
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() =>
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }
                className="
                  md:hidden
                  text-brand-brown
                  p-2
                  rounded-lg
                  hover:bg-brand-brown/5
                  transition
                "
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X size={28} />
                ) : (
                  <Menu size={28} />
                )}
              </button>

            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              isMobileMenuOpen
                ? 'max-h-screen opacity-100'
                : 'max-h-0 opacity-0'
            }
          `}
        >
          <div
            className="
              bg-brand-sand
              border-t
              border-brand-brown/10
              shadow-xl
              px-5
              py-5
              flex
              flex-col
              gap-2
            "
          >

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`
                  py-3
                  px-4
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    isActive(link.href)
                      ? 'bg-brand-red/10 text-brand-red'
                      : 'text-brand-brown/80 hover:bg-brand-brown/5'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile WA Button */}
            <a
              href="https://wa.me/6281391233000"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-3
                bg-brand-brown
                text-brand-cream
                text-center
                py-3
                rounded-xl
                font-semibold
                hover:bg-brand-red
                transition-all
                duration-300
              "
            >
              Pesan Sekarang
            </a>

          </div>
        </div>
      </nav>

      {/* Spacer supaya konten tidak ketiban navbar */}
      <div className="h-[76px] sm:h-[84px] md:h-[92px]" />
    </>
  );
}