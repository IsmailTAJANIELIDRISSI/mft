import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import EnergyLines from "../ui/EnergyLines";

const Footer = () => {
  return (
    <footer className="bg-mft-dark text-white/80 pt-20 pb-10 relative overflow-hidden">
      <EnergyLines lineCount={15} baseHue={25} hueRange={80} opacity={0.1} />
      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mft-orange via-mft-green to-mft-dark" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-heading font-bold text-3xl text-white tracking-tight">
                MFT
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Votre partenaire de confiance en équipements pétroliers. De
              l'étude technique à la mise en service, nous vous accompagnons à
              chaque étape.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/18GT57nj4P/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mft-orange hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/mft_maroc?igsh=MTdrZHF1ZncxMjQ0Ng%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mft-orange hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/mft0/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mft-orange hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Services quick links
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-mft-orange transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-mft-orange transition-colors"
                >
                  Formations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-mft-orange transition-colors"
                >
                  Équipements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-mft-orange transition-colors"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm hover:text-mft-orange transition-colors"
                >
                  Contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-mft-orange flex-shrink-0 mt-0.5"
                />
                <span className="text-sm">
                  257, Zone 1 Sud-Ouest,
                  <br />
                  Mohammedia — Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-mft-orange flex-shrink-0" />
                <span className="text-sm">
                  +212 5 23 30 25 86 / +212 5 23 30 00 22
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Printer size={18} className="text-mft-orange flex-shrink-0" />
                <span className="text-sm">+212 523 32 55 04</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-mft-orange flex-shrink-0" />
                <span className="text-sm">mft@mft.ma</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Mentions légales / ICE
            </h4>
            <ul className="space-y-4">
              <li>
                <span className="text-sm">S.A.R.L</span>
              </li>
              <li>
                <span className="text-sm">ICE : 000314920000083</span>
              </li>
              <li>
                <span className="text-sm">RC : 15189</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center md:text-left">
            © 2025 Maghreb Fueling Technologies S.A.R.L. Tous droits réservés.
          </p>
          <p className="text-xs text-white/40">Conçu pour l'industrie</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
