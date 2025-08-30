import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

function Home() {
  const sections = [
    { title: "About the Project", path: "/about" },
    { title: "Focus", path: "/focus" },
    { title: "Use Cases", path: "/use-cases" },
    { title: "Photos", path: "/photos" },
    { title: "Team Members", path: "/team" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0F2027] to-[#28623A] text-white flex flex-col items-center justify-center p-10 border-t-[30px] border-b-[30px] border-t-[#28623A] border-b-[#0F2027] relative pb-20 overflow-hidden">
      
      {/* --- Subtle animated gradient blobs (behind everything) --- */}
      <motion.div
        className="absolute -top-30 -left-30 w-72 h-72 rounded-full blur-3xl bg-emerald-400/10 pointer-events-none"
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full blur-3xl bg-green-500/10 pointer-events-none"
        animate={{ x: [0, -50, 30, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-teal-400/10 pointer-events-none"
        animate={{ x: [0, 40, -30, 0], y: [0, -15, 25, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* --- Floating glow particles --- */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            className="absolute w-3 h-3 bg-green-300 rounded-full blur-md opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.25, 1] }}
            transition={{ duration: 6 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* --- Tiny leaf textures --- */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.img
            key={`leaf-${i}`}
            src="/photos/leaf-texture.png"
            alt="leaf"
            className="absolute opacity-1"
            style={{
              width: `${20 + Math.random() * 18}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 12, -12, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 12 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* --- Your original content (kept intact) --- */}
      <div className="relative z-10">
        {/* Header Section */}
        <section
          className="flex flex-col items-center justify-start  text-center pt-10"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
        >
          <motion.img
            src="/photos/grow3.png"
            alt="logo"
            className="w-[80%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mb-6 drop-shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
          />
          <h1 className="text-5xl font-orbitron mb-7">SYNAPSZ 2025 </h1>
          <div className="w-full max-w-8xl aspect-[3.5/1] rounded-2xl shadow-2xl overflow-hidden">
            <motion.video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              <source src="/videos/leaf.mp4" type="video/mp4" />
            </motion.video>
          </div>
        </section>

        {/* Project Intro */}
        <section className="flex flex-col items-center py-2">
          <h2 className="text-5xl font-montserrat mt-20">GROWRAXX</h2>
          <h3 className="text-3xl font-montserrat mb-2">By</h3>
          <h2 className="text-3xl font-montserrat mb-2">THΞ GRΞΞN 𝘗𝘙𝘖𝘛𝘖𝘊𝘖𝘓</h2>
          <p className="text-lg italic font-poppins">“Happy Plants Happy Life.”</p>
        </section>

        {/* Blocks Section */}
        <section className="flex flex-col items-center px-10 py-10 gap-8">
          {/* First Row: 3 boxes */}
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            {sections.slice(0, 3).map((sec, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-green-400 text-black cursor-pointer flex flex-col items-center justify-center w-full md:w-64 h-40"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "10px 30px 20px rgba(59, 7, 7, 0.47)" }}
              >
                {sec.path !== "#" ? (
                  <Link to={sec.path} className="block text-center w-full">
                    <h3 className="text-2xl font-semibold">{sec.title}</h3>
                    <p className="text-sm mt-2"> explore more </p>
                  </Link>
                ) : (
                  <>
                    <h3 className="text-2xl font-semibold text-center">{sec.title}</h3>
                    <p className="text-sm mt-2 text-center">Coming soon...</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Second Row: 2 boxes */}
          <div className="flex gap-8 w-full justify-center">
            {sections.slice(3, 5).map((sec, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-green-400 text-black cursor-pointer flex flex-col items-center justify-center w-full md:w-64 h-40"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "10px 30px 20px rgba(59, 7, 7, 0.47)" }}
              >
                {sec.path !== "#" ? (
                  <Link to={sec.path} className="block text-center w-full">
                    <h3 className="text-2xl font-semibold">{sec.title}</h3>
                    <p className="text-sm mt-2"> explore more </p>
                  </Link>
                ) : (
                  <>
                    <h3 className="text-2xl font-semibold text-center">{sec.title}</h3>
                    <p className="text-sm mt-2 text-center">Coming soon...</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Instagram Footer --- */}
        <footer className="flex justify-center items-center py-3">
          <a
            href="https://www.instagram.com/smartzone.iot?igsh=MTVoNzNxaG5sbDg0ag=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-pink-700 transition transform hover:scale-110"
          >
            <FaInstagram size={40} />
          </a>
        </footer>
      </div>
    </div>
  );
}




function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0F2027] to-[#28623A] text-white flex flex-col items-center justify-center p-10 relative overflow-hidden">
      
      {/* Animated background (same as Home) */}
      <motion.div
        className="absolute -top-16 -left-16 w-72 h-72 rounded-full blur-3xl bg-emerald-400/10 pointer-events-none"
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full blur-3xl bg-green-500/10 pointer-events-none"
        animate={{ x: [0, -50, 30, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-teal-400/10 pointer-events-none"
        animate={{ x: [0, 40, -30, 0], y: [0, -15, 25, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`pa-${i}`}
            className="absolute w-3 h-3 bg-green-300 rounded-full blur-md opacity-60"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.25, 1] }}
            transition={{ duration: 6 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.img
            key={`la-${i}`}
            src="/photos/leaf-texture.png"
            alt="leaf"
            className="absolute opacity-60"
            style={{
              width: `${12 + Math.random() * 18}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 12, -12, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 12 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Main Title */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-10 text-center">About GROWRAXX 🌱</h1>

        {/* Idea Card */}
        <div className="bg-[#1C3B2E] p-8 rounded-2xl shadow-lg max-w-3xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Idea</h2>
          <p className="text-lg leading-relaxed">
            GROWRAXX, by THE GREEN PROTOCOL, is an IoT-powered Smart Vertical Garden built to make plant care simple, sustainable, and smarter. It automatically looks after your plants by watering them only when needed, controlling light for healthy growth, and keeping the right temperature – so you can enjoy a thriving garden with minimal effort.
          </p>
          <p className="italic mt-4 text-center">"Happy plants, happy life." 🌿</p>
        </div>

        {/* How It Works Card */}
        <div className="bg-[#1C3B2E] p-8 rounded-2xl shadow-lg max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            GROWRAXX integrates three key IoT sensors and smart automation to create a self-sustaining vertical garden:
          </p>

          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>🌱 <strong>Soil Moisture Sensor:</strong> Measures soil moisture in each pot and activates watering only when necessary, preventing overwatering or underwatering.</li>
            <li>🌡️ <strong>DHT22 Sensor:</strong> Monitors temperature and humidity; when the temperature gets too high, a cooling fan is automatically triggered to maintain ideal growing conditions.</li>
            <li>💡 <strong>LDR (Light Dependent Resistor):</strong> Detects ambient light intensity and controls the grow lights, ensuring plants receive the right amount of light even in dim environments.</li>
          </ul>

          <p className="text-lg leading-relaxed mt-6 text-center">
            By combining these features, GROWRAXX delivers a smart gardening solution that saves water, reduces manual effort, and supports healthier plant growth – making it ideal for homes, hostels, offices, or urban spaces.
          </p>
        </div>
      </div>
    </div>
  );
}

function Focus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0F2027] to-[#28623A] text-white flex flex-col items-center justify-center p-10 relative overflow-hidden">

      {/* Animated background (same set) */}
      <motion.div
        className="absolute -top-16 -left-16 w-72 h-72 rounded-full blur-3xl bg-emerald-400/10 pointer-events-none"
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full blur-3xl bg-green-500/10 pointer-events-none"
        animate={{ x: [0, -50, 30, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-teal-400/10 pointer-events-none"
        animate={{ x: [0, 40, -30, 0], y: [0, -15, 25, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`pf-${i}`}
            className="absolute w-3 h-3 bg-green-300 rounded-full blur-md opacity-60"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.25, 1] }}
            transition={{ duration: 6 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.img
            key={`lf-${i}`}
            src="/photos/leaf-texture.png"
            alt="leaf"
            className="absolute opacity-50"
            style={{
              width: `${12 + Math.random() * 18}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 12, -12, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 12 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Main Title */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-10 text-center">Focus of GROWRAXX 🌿</h1>

        {/* Goal Card */}
        <div className="bg-[#1C3B2E] p-8 rounded-2xl shadow-lg max-w-3xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Goal</h2>
          <p className="text-lg leading-relaxed">
            The focus of GROWRAXX is to bring smart, automated gardening to everyone, making plant care easy, precise, and sustainable. By combining IoT technology with practical gardening solutions, we aim to optimize plant health, conserve resources, and reduce manual effort – whether it’s at home, in offices, or urban spaces.
          </p>
        </div>

        {/* Priorities Card */}
        <div className="bg-[#1C3B2E] p-8 rounded-2xl shadow-lg max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">What We Prioritize</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            GROWRAXX is built around three main priorities:
          </p>

          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>💧 <strong>Water Efficiency:</strong> Using the soil moisture sensor, each pot is watered only when needed, saving water and promoting healthy root growth.</li>
            <li>🌡️ <strong>Climate Control:</strong> The DHT22 sensor ensures temperature and humidity are monitored continuously. The system automatically triggers the fan when temperatures rise, maintaining the ideal conditions for plant growth.</li>
            <li>💡 <strong>Optimal Lighting:</strong> The LDR measures ambient light intensity and controls the grow lights to provide plants with consistent, adequate light, even in low-light environments.</li>
          </ul>

          <p className="text-lg leading-relaxed mt-6 text-center">
            By focusing on these areas, GROWRAXX ensures a smart, self-regulating garden that nurtures plants efficiently while reducing manual intervention.
          </p>
        </div>
      </div>
    </div>
  );
}

function UseCases() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0F2027] to-[#28623A] text-white flex flex-col items-center justify-center p-10 relative overflow-hidden">

      {/* Animated background */}
      <motion.div
        className="absolute -top-16 -left-16 w-72 h-72 rounded-full blur-3xl bg-emerald-400/10 pointer-events-none"
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full blur-3xl bg-green-500/10 pointer-events-none"
        animate={{ x: [0, -50, 30, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-teal-400/10 pointer-events-none"
        animate={{ x: [0, 40, -30, 0], y: [0, -15, 25, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`pu-${i}`}
            className="absolute w-3 h-3 bg-green-300 rounded-full blur-md opacity-60"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.25, 1] }}
            transition={{ duration: 6 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.img
            key={`lu-${i}`}
            src="/photos/leaf-texture.png"
            alt="leaf"
            className="absolute opacity-60"
            style={{
              width: `${12 + Math.random() * 18}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 12, -12, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 12 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Main Title */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-10 text-center">Use Cases of GROWRAXX 🌱</h1>

        {/* Description Card */}
        <div className="bg-[#1C3B2E] p-8 rounded-2xl shadow-lg max-w-3xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Bringing Smart Gardening Everywhere</h2>
          <p className="text-lg leading-relaxed text-center">
            GROWRAXX is designed to make intelligent gardening accessible across a variety of spaces. 
            Whether you’re a busy professional, a student, or simply a plant enthusiast, GROWRAXX adapts 
            to your environment to ensure plants thrive effortlessly.
          </p>
        </div>

        {/* Key Applications Card */}
        <div className="bg-[#1C3B2E] p-8 rounded-2xl shadow-lg max-w-3xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Key Applications</h2>
          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>🏠 <strong>Home Gardening:</strong> Compact vertical garden for apartments or homes, automatically manages watering, lighting, and temperature.</li>
            <li>🏢 <strong>Offices and Workspaces:</strong> Keeps indoor plants healthy without manual attention, improving air quality and greenery.</li>
            <li>🏫 <strong>Hostels and Dormitories:</strong> Perfect for students, ensures plants grow even when busy or away.</li>
            <li>🌆 <strong>Urban Gardening:</strong> Enables vertical gardens in limited outdoor spaces with automated grow lights and climate control.</li>
            <li>🌱 <strong>Educational Use:</strong> Demonstrates IoT applications, sensors, and smart automation in schools and colleges.</li>
          </ul>
        </div>

        {/* Closing Card */}
        <div className="bg-[#1C3B2E] p-8 rounded-2xl shadow-lg max-w-3xl">
          <p className="text-lg leading-relaxed text-center">
            With these use cases, GROWRAXX is not just a garden – it’s a smart ecosystem that brings 
            sustainability, convenience, and technology together.
          </p>
        </div>
      </div>
    </div>
  );
}

function Photos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0F2027] to-[#28623A] text-white flex flex-col items-center justify-center p-10 border-t-[20px] border-b-[20px] border-t-[#28623A] border-b-[#0F2027] relative overflow-hidden">
      
      {/* Animated background */}
      <motion.div
        className="absolute -top-16 -left-16 w-72 h-72 rounded-full blur-3xl bg-emerald-400/10 pointer-events-none"
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full blur-3xl bg-green-500/10 pointer-events-none"
        animate={{ x: [0, -50, 30, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-teal-400/10 pointer-events-none"
        animate={{ x: [0, 40, -30, 0], y: [0, -15, 25, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`pp-${i}`}
            className="absolute w-3 h-3 bg-green-300 rounded-full blur-md opacity-60"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.25, 1] }}
            transition={{ duration: 6 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.img
            key={`lp-${i}`}
            src="/photos/leaf-texture.png"
            alt="leaf"
            className="absolute opacity-60"
            style={{
              width: `${12 + Math.random() * 18}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 12, -12, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 12 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Project Photos</h1>
        <p className="max-w-2xl text-lg text-center mb-6">
          A gallery showcasing our IoT project journey.
        </p>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["/photos/photo1.jpg", "/photos/photo2.jpg", "/photos/photo3.jpg", "/photos/photo4.jpg"].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Sample ${i + 1}`}
              className="rounded-xl shadow-lg cursor-pointer"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const members = [
    { name: "Siddharth Sunil", img: "/photos/sidd.jpg" },
    { name: "Vishak", img: "/photos/visahk.jpg"},
    { name: "Luke", img: "/photos/luke.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0F2027] to-[#28623A] text-white flex flex-col items-center justify-center p-10 border-t-[20px] border-b-[20px] border-t-[#28623A] border-b-[#0F2027] relative overflow-hidden">
      
      {/* Animated background */}
      <motion.div
        className="absolute -top-16 -left-16 w-72 h-72 rounded-full blur-3xl bg-emerald-400/10 pointer-events-none"
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full blur-3xl bg-green-500/10 pointer-events-none"
        animate={{ x: [0, -50, 30, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-teal-400/10 pointer-events-none"
        animate={{ x: [0, 40, -30, 0], y: [0, -15, 25, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`pt-${i}`}
            className="absolute w-3 h-3 bg-green-300 rounded-full blur-md opacity-60"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.25, 1] }}
            transition={{ duration: 6 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.img
            key={`lt-${i}`}
            src="/photos/leaf-texture.png"
            alt="leaf"
            className="absolute opacity-60"
            style={{
              width: `${20 + Math.random() * 18}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 12, -12, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 12 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-10">Team Members</h1>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-6xl">
          {members.map((member, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <p className="mt-4 text-xl font-semibold">{member.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IoTProjectSite() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/team" element={<Team />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

