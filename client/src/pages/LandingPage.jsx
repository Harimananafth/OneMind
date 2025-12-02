import { useEffect, useState } from "react";
import StandardLayout from "../layouts/StandardLayout";
import { Award, Briefcase, Check, Compass, Feather, MessageSquare, Users, Zap } from "lucide-react";

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

  // Liste des avantages clés
  const serviceHighlights = [
    {
      title: "Vibe Check & Mood",
      description:
        "Notre IA capte l'ambiance que tu veux (chill, épic, rétro) et crée un moodboard instantané.",
      icon: <Check className="w-8 h-8 text-white" />,
    },
    {
      title: "Zéro Stress",
      description:
        "Laisse l'IA gérer le 'boring stuff'. Tu as juste à t'occuper du fun et des invités.",
      icon: <Feather className="w-8 h-8 text-white" />,
    },
    {
      title: "Co-Op Instantanée",
      description:
        "Partage le plan avec tes potes, assigne les tâches. Organiser, c'est mieux ensemble.",
      icon: <Users className="w-8 h-8 text-white" />,
    },
  ];

  // Composant pour les étapes du parcours (Frise temporelle)
  const TimelineStep = ({
    number,
    title,
    description,
    icon,
    color,
    accent,
    delay,
  }) => (
    <div className="relative w-full md:w-1/4 text-center p-4 bg-base-200 rounded-lg shadow-xl border-t-4 border-primary transition-all duration-300 hover:shadow-primary/30 hover:-translate-y-1 animate-on-scroll pop-in">
      <div
        className={`mx-auto w-12 h-12 flex items-center justify-center rounded-full ${color} text-base-content mb-3 shadow-md`}
      >
        {icon}
      </div>
      <p className={`text-sm font-black uppercase ${accent}`}>ÉTAPE {number}</p>
      <h3 className="text-lg font-extrabold text-base-content mt-1 mb-2">
        {title}
      </h3>
      <p className="text-xs text-neutral/90">{description}</p>
    </div>
  );

  // Composant pour un élément de tâche stylisé (dans la maquette)
  const TaskItem = ({ title, status, color }) => (
    <div className="flex justify-between items-center p-3 mb-2 rounded border border-base-300 bg-base-300 shadow-sm transition-all duration-300 hover:bg-base-200">
      <span className="text-base-content  font-medium">{title}</span>
      <span
        className={`px-3 py-1 text-xs font-bold rounded-full text-base-content ${color}`}
      >
        {status}
      </span>
    </div>
  );

  // Composant pour les points clés (utilisé dans la section 'Tableau de Bord')
  const FeatureBullet = ({ text, color, delay }) => (
    <div
      className="flex items-start space-x-3 animate-on-scroll fade-in-right"
      style={{ transitionDelay: delay }}
    >
      <span className={`${color} font-extrabold text-2xl`}>✓</span>
      <p className="text-lg text-base-content">{text}</p>
    </div>
  );

  return (
    <StandardLayout>
      {/* Hero section */}
      <section className="flex flex-col items-center justify-center py-16 gap-3 pt-18 md:pt-32 border-b-5 border-neutral/50 min-h-screen">
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

      {/* Fundamentals */}
      <section className="min-h-screen text-center py-18 border-b border-neutral/50 flex flex-col gap-4 items-center justify-center">
        <h3 className="text-lg font-extrabold text-primary uppercase tracking-widest">
          C'est simple. C'est stylé.
        </h3>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-5">
          L'assistant événementiel du moment
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {serviceHighlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl border-b-4 border-primary bg-base-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2"
            >
              <div className="mb-4 p-4 rounded-full bg-primary transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-base-content mb-3">
                {item.title}
              </h3>
              <p className="text-base-content/50 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-24 bg-deep-navy text-base-content border-b border-neutral/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll fade-in-up">
            <span className="text-base sm:text-lg font-bold uppercase text-warning tracking-widest mb-2 block">
              Le Processus Express
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              De l'Idée au 'Go' en Quatre Étapes.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-4 relative">
            <div
              className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-primary mx-8 lg:mx-16 xl:mx-20 animate-on-scroll fade-in"
              style={{ transitionDelay: "400ms" }}
            ></div>

            <TimelineStep
              number="1"
              title="Brainstorm"
              description="Une phrase, c'est tout ce qu'il faut pour commencer."
              icon={<MessageSquare className="w-8 h-8 text-white" />}
              color="bg-rose-500"
              accent="text-primary"
              delay="100ms"
            />
            <TimelineStep
              number="2"
              title="Générer l'IA"
              description="On reçoit le plan, le thème et le moodboard en un éclair."
              icon={<Zap className="w-8 h-8 text-white" />}
              color="bg-indigo-500"
              accent="text-primary"
              delay="200ms"
            />
            <TimelineStep
              number="3"
              title="Customiser"
              description="Tweak le plan, invite tes co-organisateurs, délègue les tâches."
              icon={<Compass className="w-8 h-8 text-white" />}
              color="bg-amber-500"
              accent="text-primary"
              delay="300ms"
            />
            <TimelineStep
              number="4"
              title="Lancer"
              description="Follow-up facile, partage le lien de l'événement et kiffe."
              icon={<Award className="w-8 h-8 text-white" />}
              color="bg-cyan-500"
              accent="text-primary"
              delay="400ms"
            />
          </div>
        </div>
      </section>

      {/* Section dashboard*/}
      <section className="py-16 sm:py-24 border-t-4 border-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1 animate-on-scroll fade-in-right">
              <span className="text-base sm:text-lg font-bold uppercase text-warning tracking-widest mb-2 block">
                Le Power-Up
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-6">
                Simplicité <span className="text-primary">+</span> Vitesse{" "}
                <span className="text-primary">=</span> Succès.
              </h2>
              <p className="text-lg sm:text-xl text-base-content mb-8">
                OneMind c'est la fusion entre un pro du planning et le feed
                Pinterest parfait. Zéro effort, max impact.
              </p>
              <div className="space-y-4">
                <FeatureBullet
                  text="Moodboard visuel et cohérent pour chaque projet."
                  color="text-primary"
                  delay="100ms"
                />
                <FeatureBullet
                  text="Frise chronologique et vue Kanban des tâches."
                  color="text-primary"
                  delay="200ms"
                />
                <FeatureBullet
                  text="Suggestions de playlist et de lieux stylés (futur)."
                  color="text-primary"
                  delay="300ms"
                />
              </div>
            </div>

            {/* Mockup (carte)*/}
            <div className="relative p-6 sm:p-8 bg-base-100 rounded-lg border-4 border-primary shadow-neon transform rotate-1 order-1 lg:order-2 animate-on-scroll fade-in-left transition-all duration-300 hover:scale-[1.02] hover:rotate-0">
              <h3 className="text-xl sm:text-2xl font-bold text-base-content mb-4 flex items-center justify-center lg:justify-start">
                <Briefcase className="w-6 h-6 text-primary mr-2" />
                Projet : Chill Weekend à la Plage ☀️
              </h3>
              <TaskItem
                title="Faire le sondage 'Qui vient ?'"
                status="100%"
                color="bg-green-600"
              />
              <TaskItem
                title="Créer la playlist du week-end (IA)"
                status="60%"
                color="bg-blue-600"
              />
              <TaskItem
                title="Acheter les boissons/snacks"
                status="À faire"
                color="bg-red-600"
              />
            </div>
          </div>
        </div>
      </section>
    </StandardLayout>
  );
}
