import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import { CartProvider } from './context/CartContext';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HampersSection } from './components/HampersSection';
import { ProductsSection } from './components/ProductsSection';
import { OutletsSection } from './components/OutletsSection';
import { CTASection } from './components/CTASection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { MarketplaceSection } from './components/MarketplaceSection';
import { Footer } from './components/Footer';
import PromoPage from './pages/PromoPage';
import { ProductsPage } from './pages/ProductsPage';
import { OutletPage } from './pages/OutletPage';
import { TentangPage } from './pages/TentangPage';
import { CartPage } from './pages/CartPage';
import { Toaster } from 'react-hot-toast';

// ======================
// SCROLL HANDLER
// ======================

function ScrollHandler() {

  const { pathname, hash } = useLocation();

  useEffect(() => {

    // Scroll ke element hash
    if (hash) {

      const scrollToHash = () => {

        const el = document.querySelector(hash);

        if (el) {

          // offset navbar
          const navbarOffset = 100;

          const elementPosition =
            el.getBoundingClientRect().top +
            window.pageYOffset;

          const offsetPosition =
            elementPosition - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

      // Delay supaya DOM selesai render
      setTimeout(scrollToHash, 120);

    } else {

      // Scroll top saat pindah page
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    }

  }, [pathname, hash]);

  return null;
}


// ======================
// HOMEPAGE
// ======================

function HomePage() {

  return (
    <main
      className="
        overflow-hidden
      "
    >

      <HeroSection />

      <HampersSection />

      <ProductsSection />

      <OutletsSection />

      <CTASection />

      <SocialMediaSection />

      <MarketplaceSection />

    </main>
  );
}


// ======================
// APP
// ======================

export function App() {

  return (
    <CartProvider>

      <div
        className="
          min-h-screen
          bg-brand-cream

          text-brand-brown

          overflow-x-hidden

          selection:bg-brand-brown
          selection:text-brand-cream
        "
      >

        {/* NAVBAR */}
        <Navbar />

        {/* SCROLL */}
        <ScrollHandler />

        {/* ROUTES */}
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/home"
            element={<HomePage />}
          />

          {/* PAGES */}
          <Route
            path="/promo"
            element={<PromoPage />}
          />

          <Route
            path="/produk"
            element={<ProductsPage />}
          />

          <Route
            path="/outlet"
            element={<OutletPage />}
          />

          <Route
            path="/tentang"
            element={<TentangPage />}
          />

          <Route
            path="/cart"
            element={<CartPage />}
          />

        </Routes>

        {/* FOOTER */}
        <Footer />

        {/* TOASTER */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2500,

            style: {
              borderRadius: '14px',
              fontSize: '14px',
              padding: '14px 16px',
            },
          }}
        />

      </div>

    </CartProvider>
  );
}