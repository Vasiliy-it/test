import Head from "next/head";

export default function PremiumQuailLanding() {
  const products = [
    {
      title: "Копчёный перепел",
      desc: "Натуральное горячее копчение на фруктовой щепе.",
      price: "320 грн / кг",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Свежий перепел",
      desc: "Охлажденное мясо фермерского перепела.",
      price: "320 грн / кг",
      image:
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Перепелиные яйца",
      desc: "Свежие фермерские яйца каждый день.",
      price: "от 55 грн / десяток",
      image:
        "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const reviews = [
    {
      name: "Андрей",
      text: "Очень качественное мясо, копчёный перепел просто топ.",
    },
    {
      name: "Ольга",
      text: "Яйца всегда свежие, беру регулярно.",
    },
    {
      name: "Максим",
      text: "Быстрая доставка и премиальная упаковка.",
    },
  ];

  return (
    <>
      <Head>
        <title>Craft Smoked Meat | Luxury Smoke Farm</title>

        <meta
          name="description"
          content="Luxury Smoke Farm. Фермерский перепел, копчёное мясо и премиальные деликатесы."
        />
      </Head>

      <div className="bg-[#090909] text-white min-h-screen overflow-hidden">
        {/* NAVBAR */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-[#2A2A2A]">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <div>
              <h1 className="text-[#C89B5E] text-2xl tracking-[0.25em] font-light">
                CRAFT
              </h1>

              <p className="text-xs uppercase tracking-[0.45em] text-zinc-500 mt-1">
                Smoked Meat
              </p>
            </div>

            <nav className="hidden md:flex gap-10 text-zinc-300 text-sm uppercase tracking-widest">
              <a href="#products" className="hover:text-[#C89B5E] transition">
                Продукция
              </a>

              <a href="#about" className="hover:text-[#C89B5E] transition">
                О ферме
              </a>

              <a href="#reviews" className="hover:text-[#C89B5E] transition">
                Отзывы
              </a>

              <a href="#contact" className="hover:text-[#C89B5E] transition">
                Контакты
              </a>
            </nav>

            <a
              href="https://wa.me/380XXXXXXXXX"
              className="border border-[#C89B5E] text-[#C89B5E] px-6 py-3 rounded-full hover:bg-[#C89B5E] hover:text-black transition duration-300"
            >
              Заказать
            </a>
          </div>
        </header>

        <div className="pt-28">
          {/* HERO */}
          <section className="relative min-h-screen flex items-center">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1800&auto=format&fit=crop')",
              }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75" />

            {/* Wood Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#140F0A]/90 via-black/70 to-black/50" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT */}
              <div>
                <p className="uppercase tracking-[0.45em] text-[#C89B5E] text-sm mb-6">
                  Luxury Smoke Farm
                </p>

                <h1 className="text-6xl md:text-8xl leading-[0.95] font-light mb-8">
                  Craft
                  <span className="block text-[#C89B5E]">Smoked Meat</span>
                </h1>

                <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-10">
                  Премиальный фермерский перепел горячего копчения. Натуральное
                  мясо, древесный дым и настоящее craft-производство.
                </p>

                <div className="flex flex-wrap gap-5">
                  <a
                    href="#products"
                    className="bg-[#C89B5E] text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition"
                  >
                    Смотреть продукцию
                  </a>

                  <a
                    href="https://t.me/your_link"
                    className="border border-zinc-700 px-8 py-4 rounded-full text-zinc-200 hover:border-[#C89B5E] hover:text-[#C89B5E] transition"
                  >
                    Telegram
                  </a>
                </div>

                {/* FEATURES */}
                <div className="grid grid-cols-2 gap-6 mt-16">
                  {[
                    "100% натурально",
                    "Собственное копчение",
                    "Premium качество",
                    "Доставка по Украине",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border border-[#2A2A2A] bg-[#111111]/70 backdrop-blur rounded-2xl p-5"
                    >
                      <div className="text-[#C89B5E] text-xl mb-2">✦</div>

                      <p className="text-sm text-zinc-300 tracking-wide">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE BLOCK */}
              <div className="hidden lg:block relative">
                <div className="absolute -inset-5 bg-[#3A2414]/30 blur-3xl rounded-full" />

                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
                  alt="smoked meat"
                  className="relative rounded-[40px] shadow-2xl border border-[#2A2A2A] object-cover h-[700px] w-full"
                />
              </div>
            </div>
          </section>

          {/* PRODUCTS */}
          <section id="products" className="max-w-7xl mx-auto px-6 py-32">
            <div className="mb-16">
              <p className="uppercase tracking-[0.35em] text-[#C89B5E] text-sm mb-4">
                Premium Collection
              </p>

              <h2 className="text-5xl md:text-6xl font-light">
                Наша продукция
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="group bg-[#111111] border border-[#252525] rounded-[32px] overflow-hidden hover:border-[#C89B5E]/50 transition duration-500"
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="h-80 w-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-light mb-3">
                      {product.title}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {product.desc}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-[#C89B5E] text-lg">
                        {product.price}
                      </span>

                      <a
                        href="https://wa.me/380XXXXXXXXX"
                        className="border border-[#C89B5E] text-[#C89B5E] px-5 py-2 rounded-full hover:bg-[#C89B5E] hover:text-black transition"
                      >
                        Заказать
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ABOUT */}
          <section
            id="about"
            className="bg-[#0E0E0E] border-y border-[#1E1E1E]"
          >
            <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="uppercase tracking-[0.35em] text-[#C89B5E] text-sm mb-5">
                  About Farm
                </p>

                <h2 className="text-5xl font-light mb-8">Luxury Smokehouse</h2>

                <p className="text-zinc-400 leading-relaxed text-lg">
                  Мы выращиваем фермерского перепела в контролируемых условиях
                  без антибиотиков и гормонов роста. Каждая партия проходит
                  ручной отбор, а копчение происходит исключительно на
                  натуральной древесине.
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1400&auto=format&fit=crop"
                alt="farm"
                className="rounded-[40px] border border-[#252525] object-cover h-[500px] w-full"
              />
            </div>
          </section>

          {/* REVIEWS */}
          <section id="reviews" className="max-w-7xl mx-auto px-6 py-32">
            <p className="uppercase tracking-[0.35em] text-[#C89B5E] text-sm mb-4">
              Reviews
            </p>

            <h2 className="text-5xl font-light mb-16">Отзывы клиентов</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="bg-[#111111] border border-[#252525] rounded-[32px] p-8"
                >
                  <div className="text-[#C89B5E] text-3xl mb-6">“</div>

                  <p className="text-zinc-300 leading-relaxed mb-6">{r.text}</p>

                  <span className="text-[#C89B5E] uppercase tracking-widest text-sm">
                    {r.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="max-w-7xl mx-auto px-6 pb-32">
            <div className="relative overflow-hidden bg-[#111111] border border-[#252525] rounded-[50px] p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2B1B0F]/30 via-transparent to-[#2B1B0F]/30" />

              <div className="relative z-10">
                <p className="uppercase tracking-[0.35em] text-[#C89B5E] text-sm mb-4">
                  Contact
                </p>

                <h2 className="text-5xl font-light mb-6">Заказать продукцию</h2>

                <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
                  Напишите нам в Telegram или WhatsApp и получите актуальный
                  прайс и консультацию.
                </p>

                <div className="flex justify-center gap-5 flex-wrap">
                  <a
                    href="https://wa.me/380XXXXXXXXX"
                    className="bg-[#C89B5E] text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition"
                  >
                    WhatsApp
                  </a>

                  <a
                    href="https://t.me/your_link"
                    className="border border-[#C89B5E] text-[#C89B5E] px-8 py-4 rounded-full hover:bg-[#C89B5E] hover:text-black transition"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-[#1E1E1E] py-10 text-center text-zinc-600 text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} Craft Smoked Meat
          </footer>
        </div>
      </div>
    </>
  );
}
