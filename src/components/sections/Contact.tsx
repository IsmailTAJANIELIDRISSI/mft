import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import EnergyLines from "../ui/EnergyLines";

const contactInfo = [
  {
    icon: <MapPin size={22} />,
    title: "Siège Social",
    lines: ["257, Zone 1 Sud-Ouest,", "Mohammedia — Maroc"],
  },
  {
    icon: <Phone size={22} />,
    title: "Téléphone",
    lines: ["+212 5 23 30 25 86", "+212 5 23 30 00 22"],
  },
  {
    icon: <Mail size={22} />,
    title: "Email",
    lines: ["mft@mft.ma"],
  },
  {
    icon: <Globe size={22} />,
    title: "Site Web",
    lines: ["www.mft.ma"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Merci ! Votre demande a été envoyée avec succès.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-mft-dark overflow-hidden relative"
    >
      <EnergyLines lineCount={10} baseHue={20} hueRange={50} opacity={0.08} />
      <div className="absolute inset-0 bg-gradient-to-b from-mft-dark to-[#111111]" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-mft-orange/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block"
            >
              CONTACT
            </motion.span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Parlons de votre{" "}
              <motion.span
                initial={{ backgroundSize: "0% 3px" }}
                whileInView={{ backgroundSize: "100% 3px" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #E87722, #F4A543)",
                  WebkitBackgroundClip: "text",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 100%",
                }}
              >
                prochain projet
              </motion.span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-lg leading-relaxed">
              Nos experts sont à votre disposition pour analyser vos besoins et
              vous proposer les solutions techniques les plus adaptées.
            </p>

            <ul className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-mft-orange shrink-0 group-hover:bg-mft-orange group-hover:text-white group-hover:border-mft-orange transition-all duration-300"
                    style={{
                      animation: `glow-pulse 4s ease-in-out ${i * 0.5}s infinite`,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm mb-1">
                      {item.title}
                    </h4>
                    {item.lines.map((line) => (
                      <p key={line} className="text-white/50 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-mft-orange/8 rounded-bl-[80px] pointer-events-none" />
              {/* Subtle animated border glow on the form card */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  padding: "1px",
                  background:
                    "linear-gradient(135deg, rgba(232,119,34,0.3), transparent 40%, transparent 60%, rgba(244,165,67,0.2))",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <h3 className="font-heading font-bold text-xl text-mft-dark mb-8">
                Envoyez-nous un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-mft-grey-dark mb-2 uppercase tracking-wider"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none text-sm"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold text-mft-grey-dark mb-2 uppercase tracking-wider"
                    >
                      Société
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none text-sm"
                      placeholder="Nom de l'entreprise"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-mft-grey-dark mb-2 uppercase tracking-wider"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none text-sm"
                      placeholder="jean@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-mft-grey-dark mb-2 uppercase tracking-wider"
                    >
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none text-sm"
                      placeholder="+212 6 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold text-mft-grey-dark mb-2 uppercase tracking-wider"
                  >
                    Type de service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none cursor-pointer appearance-none text-sm"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1em",
                    }}
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="installation">
                      Installation & Mise en service
                    </option>
                    <option value="maintenance">Maintenance & Dépannage</option>
                    <option value="etudes">Études Techniques</option>
                    <option value="formation">Formation</option>
                    <option value="equipement">Achat d'Équipement</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-mft-grey-dark mb-2 uppercase tracking-wider"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none resize-y text-sm"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn w-full py-4 rounded-xl bg-mft-orange text-white font-bold text-base transition-all hover:bg-mft-orange-light hover:shadow-[0_20px_40px_-12px_rgba(232,119,34,0.4)] active:translate-y-0 flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Envoyer la demande
                    <Send size={18} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
