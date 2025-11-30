import { useEffect, useState } from "react";
import StandardLayout from "../layouts/StandardLayout";

export default function LandingPage() {
  const [typingText, setTypingText] = useState("");
  const initialText = "La plus grande pool party dans un parc aquatique";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypingText((prev) => {
        if (index < initialText.length) {
          index++;
          return initialText.substring(0, index);
        } else {
          clearInterval(interval);
          return initialText;
        }
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <StandardLayout>
      {/* Hero section */}
      <section className="flex flex-col items-center justify-center py-16 gap-3 pt-18 md:pt-32   border-b-5 border-neutral/50 min-h-screen">
        {/* Titre et sous-titre */}
        <h1 className="text-5xl text-center sm:text-6xl md:text-7xl font-black leading-tight text-base-content tracking-tighter">
          Le moyen le plus{" "}
          <span className="text-primary">
            rapide <br />{" "}
          </span>{" "}
          de créer un événement <br />{" "}
          <span className="text-warning">viral</span>.
        </h1>
        <p className="text-lg sm:text-xl text-base-content/50 mb-10 sm:mb-12 text-center max-w-3xl font-light italic">
          Chill out & Plan : OneMind gère les listes, les dates et la vibe. Ta
          seule mission ? Inviter tout le monde.
        </p>

        {/* Simulation de champ utilisateur */}
        <div
          className="flex justify-center px-4 mb-10 sm:mb-12"
          style={{ transitionDelay: "400ms" }}
        >
          <div className=" w-full max-w-2xl  md:w-2xl bg-base-300 p-4 sm:p-5 rounded-xl border-2 border-primary shadow-neon text-left font-mono transition-all duration-300 hover:shadow-lg hover:shadow-neon/50">
            <div className="flex items-center">
              <span className="text-base sm:text-lg font-bold text-warning mr-2 sm:mr-3 whitespace-nowrap">
                IDÉE {" >"}
              </span>
              <p className="text-sm text-base-content whitespace-pre-wrap overflow-hidden">
                {typingText}
                <span className="animate-blink font-bold text-primary">_ </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bouton CTA  */}
        <button className="px-8 sm:px-14 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-xl btn button-neon h-14 shadow-lg uppercase tracking-wide">
          Générer ma vibe &rarr;
        </button>
      </section>
    </StandardLayout>
  );
}
