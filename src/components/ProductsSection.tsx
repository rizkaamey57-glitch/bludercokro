import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 1,
    name: 'Bluder Standar',
    target: '#standar',
    description:
      'Berbagai varian bluder yang bisa kamu pilih untuk dinikmati sendiri atau bersama keluarga.',
    image: '/foto/bluder-satuan.png',
  },
  {
    id: 2,
    name: 'Bluder Big Size',
    target: '#bigsize',
    description:
      'Ukuran lebih besar untuk kepuasan maksimal dan momen spesial.',
    image: '/foto/bluder-big.png',
  },
  {
    id: 3,
    name: 'Bluder Pouch',
    target: '#pouch',
    description:
      'Kemasan praktis yang mudah dibawa ke mana saja.',
    image: '/foto/bluder-pouch.png',
  }
];

export function ProductsSection() {

  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section
      id="produk"
      className="
        relative
        overflow-hidden
        bg-brand-cream
        py-16
        sm:py-20
        md:py-24
      "
    >

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">

          <motion.h2
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="
              font-playfair
              font-bold
              text-brand-brown
              mb-4

              text-3xl
              sm:text-4xl
              md:text-5xl
            "
          >
            Produk Unggulan
          </motion.h2>

          <div className="w-20 h-1 bg-brand-red mb-6" />

          <p className="text-brand-brown/70 leading-relaxed text-sm sm:text-base">
            Pilihan bluder khas Madiun dengan berbagai ukuran dan kemasan premium.
          </p>

        </div>

        {/* DESKTOP ACCORDION */}
        <div
          className="
            hidden
            md:flex

            w-full
            h-[500px]
            lg:h-[600px]

            overflow-hidden
            rounded-[2.5rem]
            bg-white
            shadow-xl

            p-3
            gap-3
            lg:gap-4
          "
        >

          {PRODUCTS.map((product, index) => {

            const isActive = hoveredIndex === index;

            return (
              <motion.div
                key={product.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className="
                  relative
                  h-full
                  overflow-hidden
                  rounded-[2rem]
                  cursor-pointer
                  shadow-md
                  group
                "
                animate={{
                  width: isActive ? '65%' : '17.5%',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              >

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div
                  className={`
                    absolute
                    inset-0
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? 'bg-gradient-to-t from-brand-brown/90 via-brand-brown/20 to-transparent'
                        : 'bg-black/40'
                    }
                  `}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex items-end">

                  {/* CLOSED */}
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="
                        absolute
                        left-1/2
                        bottom-10
                        -translate-x-1/2

                        whitespace-nowrap

                        text-white
                        font-playfair
                        font-bold
                        uppercase

                        tracking-widest

                        text-lg
                        lg:text-2xl

                        [writing-mode:vertical-lr]
                        rotate-180
                      "
                    >
                      {product.name}
                    </motion.div>
                  )}

                  {/* OPEN */}
                  {isActive && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -20
                      }}
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1
                      }}
                      className="w-full"
                    >

                      <h3
                        className="
                          text-white
                          font-playfair
                          font-bold
                          mb-4

                          text-3xl
                          lg:text-4xl
                        "
                      >
                        {product.name}
                      </h3>

                      <p
                        className="
                          text-white/90
                          leading-relaxed
                          mb-8
                          max-w-md

                          text-base
                          lg:text-lg
                        "
                      >
                        {product.description}
                      </p>

                      <Link
                        to={`/produk${product.target}`}
                        className="
                          inline-block
                          px-7
                          py-3
                          rounded-xl

                          bg-brand-sand
                          text-brand-brown
                          font-bold

                          hover:bg-white

                          transition-all
                          duration-300

                          shadow-lg
                        "
                      >
                        Lihat Detail
                      </Link>

                    </motion.div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE */}
        <div
          className="
            md:hidden
            flex
            flex-col
            gap-5
          "
        >

          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{
                y: -4
              }}
              className="
                relative
                overflow-hidden

                rounded-[2rem]
                shadow-lg

                h-[320px]
                sm:h-[380px]
              "
            >

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  inset-0

                  flex
                  flex-col
                  justify-end

                  p-6
                "
              >

                <h3
                  className="
                    text-white
                    font-playfair
                    font-bold
                    mb-3

                    text-2xl
                    sm:text-3xl
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    text-white/85
                    text-sm
                    sm:text-base
                    mb-5
                    leading-relaxed
                  "
                >
                  {product.description}
                </p>

                <Link
                  to={`/produk${product.target}`}
                  className="
                    w-fit

                    px-5
                    py-2.5

                    rounded-xl

                    bg-brand-sand
                    text-brand-brown
                    font-bold

                    shadow-md
                  "
                >
                  Lihat Detail
                </Link>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}