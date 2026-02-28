import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Merci ! Votre demande a été envoyée avec succès.');
    setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-mft-dark overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-mft-dark to-[#111111] z-0"></div>
      <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-gradient-to-tl from-mft-orange/10 via-transparent to-transparent blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block">CONTACT</span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-8 leading-tight">
              Parlons de votre prochain projet.
            </h2>
            <p className="text-white/70 text-lg mb-12 font-light max-w-lg">
              Nos experts sont à votre disposition pour analyser vos besoins et vous proposer les solutions techniques les plus adaptées.
            </p>

            <ul className="space-y-8">
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mft-orange border border-white/10 group-hover:bg-mft-orange group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-1">Siège Social</h4>
                  <p className="text-white/60">257, Zone 1 Sud-Ouest,<br/>Mohammedia — Maroc</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mft-orange border border-white/10 group-hover:bg-mft-orange group-hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-1">Téléphone</h4>
                  <p className="text-white/60">+212 5 23 30 25 86<br/>+212 5 23 30 00 22</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mft-orange border border-white/10 group-hover:bg-mft-orange group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-1">Email</h4>
                  <p className="text-white/60">mft@mft.ma</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mft-orange border border-white/10 group-hover:bg-mft-orange group-hover:text-white transition-colors duration-300">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-1">Site Web</h4>
                  <p className="text-white/60">www.mft.ma</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mft-orange/10 rounded-bl-[100px] pointer-events-none"></div>

              <h3 className="font-heading font-bold text-2xl text-mft-dark mb-8">Envoyez-nous un message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-mft-grey-dark mb-2">Nom complet *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none" 
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-mft-grey-dark mb-2">Société</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none" 
                      placeholder="Nom de l'entreprise"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-mft-grey-dark mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none" 
                      placeholder="jean.dupont@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-mft-grey-dark mb-2">Téléphone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none" 
                      placeholder="+212 6 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-mft-grey-dark mb-2">Type de service</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none cursor-pointer appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="installation">Installation & Mise en service</option>
                    <option value="maintenance">Maintenance & Dépannage</option>
                    <option value="etudes">Études Techniques</option>
                    <option value="formation">Formation</option>
                    <option value="equipement">Achat d'Équipement</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-mft-grey-dark mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-mft-orange focus:ring-2 focus:ring-mft-orange/20 transition-all outline-none resize-y" 
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-mft-orange text-white font-bold text-lg transition-all hover:bg-mft-orange-light shadow-[0_10px_20px_rgba(232,119,34,0.2)] hover:shadow-[0_15px_30px_rgba(232,119,34,0.3)] hover:-translate-y-1 active:translate-y-0"
                >
                  Envoyer la demande →
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
