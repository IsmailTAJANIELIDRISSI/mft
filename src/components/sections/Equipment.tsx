import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Droplets, GaugeCircle, ShieldAlert } from 'lucide-react';

const Equipment = () => {

  const eqCategories = [
    { icon: <Fuel className="w-8 h-8" />, name: "Distributeurs de carburant" },
    { icon: <Droplets className="w-8 h-8" />, name: "Pompes & tuyauteries" },
    { icon: <GaugeCircle className="w-8 h-8" />, name: "Systèmes de jaugeage" },
    { icon: <ShieldAlert className="w-8 h-8" />, name: "Équipements de sécurité" }
  ];

  return (
    <section id="equipement" className="py-24 lg:py-32 bg-mft-bg">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block tracking-widest">ÉQUIPEMENTS</span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-mft-dark mb-6">
            Équipements certifiés, fiables et performants
          </h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eqCategories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:shadow-mft-dark/5 transition-all group hover:-translate-y-1"
            >
              <div className="w-20 h-20 rounded-full bg-mft-bg flex items-center justify-center text-mft-dark mb-6 group-hover:bg-mft-orange group-hover:text-white transition-all duration-300 shadow-inner">
                {cat.icon}
              </div>
              <h4 className="font-heading font-bold text-lg text-mft-dark">{cat.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
