import { useState, ChangeEvent, FormEvent } from "react";
import { cn } from "../lib/utils";
import { Check } from "lucide-react";
import { FadeUp } from "../components/ui/FadeUp";
import { Magnetic } from "../components/ui/Magnetic";

const pricing = [
  {
    name: "Visiteur",
    price: "Gratuit",
    desc: "Accès standard au site de l'événement.",
    features: ["Accès aux keynotes", "Visite des stands", "Badge numérique"],
    type: "visiteur",
  },
  {
    name: "Visiteur Pro",
    price: "10 000 FCFA",
    desc: "L'expérience optimale avec accès prioritaires.",
    features: ["Goodies", "Places VIP keynotes", "Cocktail networking"],
    type: "visiteur",
    popular: true
  },
  {
    name: "Formations",
    price: "10 000 FCFA",
    desc: "Participez aux ateliers guidés par des experts.",
    features: ["Accès à 1 atelier pratique", "Support de cours", "Attestation de participation"],
    type: "formation",
  },
  {
    name: "Compétition",
    price: "20 000 FCFA",
    desc: "Réservé aux candidats sélectionnés par équipe.",
    features: ["Accès cloud illimité", "Mentoring dédié", "Hébergement & Restauration"],
    type: "competition",
  }
];

export function Registration() {
  const [activeForm, setActiveForm] = useState<"visiteur" | "formation" | "competition">("visiteur");
  const [formData, setFormData] = useState({ nom: "", email: "", extra: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Inscription envoyée ! Nous vous contacterons bientôt.");
    setFormData({ nom: "", email: "", extra: "", message: "" });
  };

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Header Pricing */}
      <section className="w-full max-w-[1000px] mx-auto px-6 pt-32 pb-16 text-center">
        <FadeUp>
          <h2 className="text-[#86868b] font-semibold text-lg md:text-xl tracking-tight mb-2 mt-12">Inscriptions</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#1d1d1f] mb-6">
            Rejoignez le mouvement.
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] font-medium leading-snug max-w-3xl mx-auto">
            Choisissez le pass qui correspond à votre profil d'innovation.
          </p>
        </FadeUp>
      </section>

      {/* Pricing Grid */}
      <section className="w-full bg-[#f5f5f7] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((plan, idx) => (
              <FadeUp key={plan.name} delay={idx * 0.1} className={`bg-white rounded-3xl p-8 flex flex-col shadow-sm relative transition-transform hover:scale-[1.02] duration-300 ${plan.popular ? 'ring-2 ring-[#06c]' : ''}`}>
                {plan.popular && (
                   <span className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-[#06c] text-white text-xs font-bold rounded-full">
                     Recommandé
                   </span>
                )}
                <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f] mb-2">{plan.name}</h3>
                <p className="text-[#86868b] text-sm font-medium leading-relaxed mb-6 h-12">{plan.desc}</p>
                
                <div className="mb-6 pb-6 border-b border-[#d2d2d7]">
                  <div className="text-3xl font-bold tracking-tight text-[#1d1d1f]">
                    {plan.price}
                  </div>
                </div>

                <ul className="mb-8 space-y-4 flex-1">
                  {plan.features.map(feat => (
                    <li key={feat} className="flex items-start text-sm text-[#1d1d1f] font-medium">
                      <Check className="w-4 h-4 mr-3 text-[#06c] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Magnetic>
                  <button 
                    onClick={() => {
                      setActiveForm(plan.type as any);
                      document.getElementById('registration-forms')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-3 rounded-full text-sm font-medium transition-colors ${plan.popular ? 'bg-[#06c] text-white hover:bg-[#005bb5]' : 'bg-[#e8e8ed] text-[#1d1d1f] hover:bg-[#d2d2d7]'}`}
                  >
                    Sélectionner
                  </button>
                </Magnetic>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Forms */}
      <section id="registration-forms" className="w-full py-24 bg-white">
         <div className="max-w-[800px] mx-auto px-6">
            <FadeUp className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f] mb-4">
                Formulaire.
              </h2>
              <p className="text-xl text-[#86868b] font-medium">Remplissez le formulaire selon la catégorie choisie.</p>
            </FadeUp>

            {/* Form Tabs */}
            <FadeUp delay={0.1} className="flex bg-[#f5f5f7] p-1 rounded-full mb-12">
              <button 
                onClick={() => setActiveForm("visiteur")}
                className={cn("flex-1 py-2 text-sm font-medium rounded-full transition-colors", activeForm === "visiteur" ? "bg-white text-[#1d1d1f] shadow-sm" : "text-[#86868b] hover:text-[#1d1d1f]")}
              >
                Visiteur
              </button>
              <button 
                onClick={() => setActiveForm("formation")}
                className={cn("flex-1 py-2 text-sm font-medium rounded-full transition-colors", activeForm === "formation" ? "bg-white text-[#1d1d1f] shadow-sm" : "text-[#86868b] hover:text-[#1d1d1f]")}
              >
                Formation
              </button>
              <button 
                onClick={() => setActiveForm("competition")}
                className={cn("flex-1 py-2 text-sm font-medium rounded-full transition-colors", activeForm === "competition" ? "bg-white text-[#1d1d1f] shadow-sm" : "text-[#86868b] hover:text-[#1d1d1f]")}
              >
                Compétition
              </button>
            </FadeUp>

            {/* Dynamic Form */}
            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
              {activeForm === "visiteur" && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Nom complet</label>
                      <input 
                        type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-colors text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email</label>
                      <input 
                        type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-colors text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="hello@exemple.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Choix du Pass</label>
                    <select 
                      required 
                      value={formData.extra} 
                      onChange={e => setFormData({...formData, extra: e.target.value})}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-colors text-[#1d1d1f] text-base appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Sélectionnez un pass</option>
                      <option value="gratuit">Pass Gratuit</option>
                      <option value="goodies">Pass Pro (10 000 FCFA)</option>
                    </select>
                  </div>
                </>
              )}

              {activeForm === "formation" && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Nom complet</label>
                      <input 
                        type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-colors text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email</label>
                      <input 
                        type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-colors text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="hello@exemple.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Choix de la formation</label>
                    <select 
                      required 
                      value={formData.extra} 
                      onChange={e => setFormData({...formData, extra: e.target.value})}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-colors text-[#1d1d1f] text-base appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Sélectionnez une formation</option>
                      <option value="prompt">Prompt Engineering</option>
                      <option value="vibecoding">Vibecoding</option>
                      <option value="agents">Création d'agents IA</option>
                      <option value="content">Automatisation de contenu</option>
                    </select>
                  </div>
                </>
              )}

              {activeForm === "competition" && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Nom de l'équipe</label>
                      <input 
                        type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-colors text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Les Innovateurs"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email du représentant</label>
                      <input 
                        type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-colors text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="chef@exemple.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Thématique du projet</label>
                    <select 
                      required 
                      value={formData.extra} 
                      onChange={e => setFormData({...formData, extra: e.target.value})}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-colors text-[#1d1d1f] text-base appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Sélectionnez un thème</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="energie">Énergie</option>
                      <option value="transport">Transport</option>
                      <option value="ressources">Gestion des ressources</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Description courte du projet</label>
                    <textarea 
                      required rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-colors text-[#1d1d1f] text-base placeholder:text-[#86868b] resize-none" 
                      placeholder="Décrivez votre idée en quelques mots..."
                    />
                  </div>
                </>
              )}

              <div className="pt-8 flex justify-center">
                <Magnetic>
                  <button type="submit" className="w-full sm:w-auto px-12 py-4 bg-[#06c] text-white font-medium text-sm hover:bg-[#005bb5] transition-colors rounded-full">
                    Confirmer l'inscription
                  </button>
                </Magnetic>
              </div>
            </form>
            </FadeUp>
         </div>
      </section>
    </div>
  );
}
