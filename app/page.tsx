export default function AaghazWebsite() {
  return (
    <div className="min-h-screen bg-[#FFF7ED] text-slate-800 font-sans">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">AAGHAZ</h1>
        <a
          href="#contact"
          className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold"
        >
          Book Trial
        </a>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
        <div>
          <p className="text-sm font-semibold text-orange-600 mb-3">
            Helping your child stay connected to their language and roots
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Fun, Interactive Urdu Learning for Kids
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Learning basic, everyday Urdu through games, stories, and engaging weekly sessions.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold"
            >
              Start Free Trial
            </a>
            <a
              href="#programs"
              className="bg-white border px-6 py-3 rounded-full font-semibold"
            >
              Explore Classes
            </a>
          </div>

          <div className="mt-6">
            <p className="text-sm text-green-600 font-semibold">
              Free trial for first 10 to 15 students only
            </p>
            <p className="text-sm text-red-500 font-semibold">
              Limited spots available
            </p>
          </div>
        </div>

        {/* PLAYFUL VISUAL */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-300 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full"></div>

          <div className="bg-white rounded-3xl p-8 shadow-lg relative z-10">
            <div className="text-5xl mb-4">📚✨🧒</div>
            <p className="text-lg font-semibold">This Week’s Theme</p>
            <h3 className="text-2xl font-bold mt-2">Body Parts in Urdu</h3>
            <p className="mt-3 text-slate-600">
              Games, stories, crafts and speaking activities
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="px-6 py-16">
        <h3 className="text-3xl font-bold text-center">Our Classes</h3>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="text-4xl mb-3 text-center">🎨</div>
            <h4 className="font-bold text-xl text-center">Ages 4 to 6</h4>
            <p className="mt-3 text-slate-600 text-center">
              Play based learning with actions, songs and visuals
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="text-4xl mb-3 text-center">🗣️</div>
            <h4 className="font-bold text-xl text-center">Ages 7 to 10</h4>
            <p className="mt-3 text-slate-600 text-center">
              Conversation, vocabulary and fun activities
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="text-4xl mb-3 text-center">✍️</div>
            <h4 className="font-bold text-xl text-center">Ages 11 to 14</h4>
            <p className="mt-3 text-slate-600 text-center">
              Structured Urdu speaking, reading and writing
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-16 bg-orange-50">
        <h3 className="text-3xl font-bold text-center">Pricing</h3>

        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow mt-10 text-center">
          <p className="text-4xl font-bold">$64</p>
          <p className="text-slate-600 mt-2">£48 | $88 CAD</p>
          <p className="mt-4 text-slate-600">
            Weekly classes on Saturdays and Sundays
          </p>
          <p className="text-sm mt-2">30 mins for 2 kids | 45 mins for 3 to 4 kids</p>

          <div className="mt-5 bg-green-100 p-3 rounded-xl font-semibold">
            10% sibling discount
          </div>

          <div className="mt-4 bg-blue-100 p-3 rounded-xl text-sm">
            Free trial for first 10 to 15 students only. After that, trial classes will be paid.
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-16">
        <h3 className="text-3xl font-bold text-center">What Parents Say</h3>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-3xl shadow">
            <p className="text-4xl mb-3 text-center">⭐</p>
            <p className= "text-center">"My child loves these classes every week."</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow">
            <p className="text-4xl mb-3 text-center">💬</p>
            <p className= "text-center">"Very interactive and engaging."</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow">
            <p className="text-4xl mb-3 text-center">🌱</p>
            <p className= "text-center">"We’ve seen real improvement."</p>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center bg-orange-50 rounded-3xl p-8 shadow">
          <p className="text-3xl mb-3">👩‍🏫</p>
          <h3 className="text-3xl font-bold">Meet Your Instructors</h3>
          <p className="mt-4 text-slate-600">
            Our trained Urdu instructors will be introduced soon. Each instructor will follow a
            structured teaching approach to ensure a fun and consistent learning experience.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16 bg-orange-100 text-center">
        <h3 className="text-3xl font-bold">Get Started</h3>
        <p className="mt-3 text-slate-700">Message on WhatsApp to book a trial</p>

        <a
          href="https://wa.me/923322451745"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-green-500 text-white px-8 py-3 rounded-full font-semibold"
        >
          Chat on WhatsApp
        </a>

        <p className="mt-5 text-slate-700">Email: juweria.n.khan@gmail.com</p>
      </section>

    </div>
  );
}