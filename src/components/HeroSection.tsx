import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section
  id="home"
  className="
    relative
    overflow-hidden
    bg-brand-cream

    pt-20
    sm:pt-24
    md:pt-32

    pb-10
    sm:pb-14
    md:pb-24
  "
>

      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden -z-10">

        <div
          className="
            absolute
            top-[-10%]
            right-[-10%]
            w-[300px]
            sm:w-[400px]
            md:w-[500px]
            h-[300px]
            sm:h-[400px]
            md:h-[500px]
            rounded-full
            bg-brand-sand/40
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-10%]
            left-[-10%]
            w-[250px]
            sm:w-[350px]
            md:w-[400px]
            h-[250px]
            sm:h-[350px]
            md:h-[400px]
            rounded-full
            bg-brand-sand/40
            blur-3xl
          "
        />

      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="
              max-w-xl
              mx-auto
              lg:mx-0
              text-center
              lg:text-left
            "
          >

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-1.5
                rounded-full
                bg-brand-sand
                text-brand-brown
                text-xs
                sm:text-sm
                font-medium
                mb-6
              "
            >
              <Star
                size={14}
                className="fill-brand-gold text-brand-gold"
              />

              <span>Resep Asli Sejak 1989</span>
            </div>

            {/* Heading */}
            <h1
              className="
                font-playfair
                font-bold
                text-brand-brown
                leading-tight
                mb-6

                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Rasa Tradisi yang
              <br />

              <span className="text-brand-red italic">
                Tak Pernah Hilang
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                text-base
                sm:text-lg
                text-brand-brown/80
                leading-relaxed
                mb-8
              "
            >
              Bluder Cokro menghadirkan kelembutan roti
              legendaris khas Madiun. Dibuat dengan resep
              warisan keluarga dan bahan premium untuk
              menjaga cita rasa otentik di setiap gigitan.
            </p>

            {/* Buttons */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                lg:justify-start
                gap-4
              "
            >

              <Link
                to="/produk"
                className="
                  w-full
                  sm:w-auto
                  text-center
                  px-8
                  py-3.5
                  rounded-full
                  border-2
                  border-brand-brown
                  text-brand-brown
                  font-semibold
                  hover:bg-brand-brown
                  hover:text-brand-cream
                  transition-all
                  duration-300
                "
              >
                Lihat Produk
              </Link>

              <a
                href="https://wa.me/6281391233000"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  sm:w-auto
                  text-center
                  px-8
                  py-3.5
                  rounded-full
                  bg-brand-brown
                  text-brand-cream
                  font-semibold
                  hover:bg-brand-red
                  transition-all
                  duration-300
                  shadow-lg
                  hover:shadow-xl
                "
              >
                Pesan Sekarang
              </a>

            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="
              relative
              flex
              items-center
              justify-center
            "
          >

            <div
             className="
              relative
              w-full

              max-w-[280px]
              sm:max-w-sm
              md:max-w-md
              lg:max-w-lg

              mx-auto
            "
            >

              {/* Background Shape */}
              <div
                className="
                  absolute
                  inset-0
                  bg-brand-sand
                  rounded-[2rem]
                  sm:rounded-full
                  scale-105
                  -rotate-6
                  -z-10
                "
              />

              {/* Main Image */}
              <img
                src="/foto/Bluder cokro.jpeg"
                alt="Koleksi Bluder Cokro"
                className="
                relative
                z-10
                w-full

                aspect-[4/5]

                object-cover

                rounded-[2rem]

                shadow-2xl
              "
              />

              {/* Floating Mascot */}
              <motion.div
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: 'easeInOut'
                }}
                className="
                  absolute
                  bottom-2
                  sm:bottom-4
                  md:bottom-6

                  left-1/2
                  -translate-x-1/2

                  sm:left-0
                  sm:-translate-x-8

                  z-20
                  flex
                  flex-col
                  items-center
                "
              >

                {/* Mascot */}
                <img
                  src="/foto/maskot.png"
                  alt="Maskot Cokro"
                  className="
                    w-16
                    sm:w-20
                    md:w-24
                    drop-shadow-lg
                  "
                />

                {/* Bubble */}
                <div
                  className="
                    relative
                    bg-white
                    px-3
                    py-1.5
                    rounded-full
                    shadow-md
                    text-[11px]
                    sm:text-xs
                    text-brand-brown
                    font-medium
                    mt-2
                    whitespace-nowrap
                  "
                >
                  Halo Sobat Cokro! 🤎

                  <div
                    className="
                      absolute
                      left-4
                      -top-1
                      w-2.5
                      h-2.5
                      bg-white
                      rotate-45
                    "
                  />
                </div>

              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}