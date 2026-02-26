import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Target, CheckCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import QuoteForm from "@/components/QuoteForm";
import heroChamber from "@/assets/hero-chamber.jpg";
import vibrationImg from "@/assets/vibration-testing.jpg";
import thermalShockImg from "@/assets/thermal-shock.jpg";
import humidityImg from "@/assets/humidity-chamber.jpg";
import shockImg from "@/assets/shock-testing.jpg";
import quoteBg from "@/assets/quote-bg.jpg";

const highlights = [
  { icon: Shield, title: "Independent & Confidential", desc: "Based in Hyderabad, NEPPHNU TECHNOLOGIES PVT. LTD. provides rigorous and confidential testing solutions." },
  { icon: Target, title: "Precision-Driven Testing", desc: "Advanced equipment for accurate environmental and reliability testing." },
  { icon: CheckCircle, title: "Compliance-Focused Approach", desc: "Adherence to international standards and client requirements." },
];

const services = [
  { image: vibrationImg, title: "Environmental Simulation Testing", desc: "Controlled atmospheres and climatic conditions for accurate environmental testing." },
  { image: thermalShockImg, title: "Reliability & Stress Testing", desc: "Advanced equipment for accurate environmental and reliability testing." },
  { image: shockImg, title: "Mechanical & Vibration Testing", desc: "Simulated transport and operational vibration for reliability analysis." },
  { image: humidityImg, title: "Customized Test Programs", desc: "Tailored testing protocols aligned with client requirements and standards." },
];

import defenceIcon from "@/assets/defence-testing.jpg";
import electronicsIcon from "@/assets/electronics-testing.jpg";
import automotiveIcon from "@/assets/automotive-testing.jpg";
import industrialIcon from "@/assets/industrial-testing.jpg";
import aerospaceIcon from "@/assets/aerospace-testing.jpg";

const industries = [
  { image: defenceIcon, title: "Defence & Aerospace" },
  { image: electronicsIcon, title: "Electronics & Systems" },
  { image: automotiveIcon, title: "Automotive Components" },
  { image: industrialIcon, title: "Industrial Equipment" },
  { image: aerospaceIcon, title: "Aerospace & Avionics" },
];

const Home = () => {
  const handleQuoteClick = () => {
    window.open("https://wa.me/919133316688?text=Hello, I'd like to request a quotation for testing services.", "_blank");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroChamber} alt="Environmental Test Chamber" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-display font-bold text-4xl md:text-6xl text-primary-foreground leading-tight mb-6">
              Environmental & Reliability Testing Laboratory
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-4">
              Precision-Engineered Testing Solutions for Defence, Aerospace and Industrial Applications.
            </p>
            <p className="text-primary-foreground/60 text-sm md:text-base mb-8 max-w-xl">
              NEPPHNU TECHNOLOGIES PVT. LTD. delivers controlled environmental simulation and reliability testing services designed to validate product durability, performance and operational readiness under defined stress conditions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-blue-bright transition-colors">
                Our Services
              </Link>
              <Link to="/contact" className="px-6 py-3 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <h.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-2">{h.title}</h3>
                <p className="text-muted-foreground text-sm">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Services</h2>
            <div className="heading-line" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} image={s.image} title={s.title} description={s.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading-light">Industries We Serve</h2>
            <div className="heading-line-light" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {industries.map((ind) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent/30">
                  <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" />
                </div>
                <span className="text-primary-foreground font-display font-semibold text-sm text-center">{ind.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0">
          <img src={quoteBg} alt="Laboratory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
