import { Instagram, Mail, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 bg-base text-base-content text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">OneMind</h3>
            <p className="text-sm text-gray-400">
              Ton copilote pour des événements impeccables.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Parle-nous
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                harimananafth@gmail.com
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                +261 38 48 742 97
              </p>
              <p className="flex items-center">
                <Instagram className="w-4 h-4 mr-2 text-primary" />
                @harimananafth
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-150"
                >
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-150"
                >
                  Témoignages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-150"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-150"
                >
                  Connecte-toi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">La Vibe</h4>
            <p className="text-sm text-gray-300 italic p-3 border-l-4 border-primary bg-gray-800 rounded-sm transition-transform duration-300 hover:scale-[1.02]">
              « L'organisation de ton événement est maintenant plus simple que
              le choix de ton filtre Instagram. »
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 pt-4">
          <p>
            &copy; {new Date().getFullYear()} OneMind. Tous droits
            réservés. Neovate.
          </p>
        </div>
      </div>
    </footer>
  );
}
