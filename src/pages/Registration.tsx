import { useState, ChangeEvent, FormEvent } from "react";
import { cn } from "../lib/utils";
import { Check, Ticket, BookOpen, Gamepad2, Trophy, CreditCard, Smartphone } from "lucide-react";
import { FadeUp } from "../components/ui/FadeUp";
import { Magnetic } from "../components/ui/Magnetic";

const pricing = [
  {
    name: "Visiteur Gratuit",
    price: "Gratuit",
    desc: "Vivez l'événement de l'intérieur.",
    features: [
      "Accès aux Keynotes",
      "Accès aux Panels et conférences",
      "Accès au Pitch Final des compétiteurs"
    ],
    type: "visiteur",
    buttonLabel: "S'inscrire gratuitement",
    icon: Ticket
  },
  {
    name: "Formation Adulte",
    price: "10 000 FCFA",
    desc: "Développez vos compétences en IA.",
    features: [
      "Accès à toutes les formations",
      "Accès à 1 atelier au choix",
      "Certificat de participation (optionnel)"
    ],
    type: "formation_adulte",
    buttonLabel: "Payer 10 000 FCFA",
    icon: BookOpen
  },
  {
    name: "Formation Kids",
    price: "5 000 FCFA",
    desc: "Une initiation ludique pour les jeunes.",
    features: [
      "Accès à 1 atelier adapté aux enfants",
      "Goûter inclus",
      "Encadrement par des formateurs"
    ],
    type: "formation_kids",
    buttonLabel: "Payer 5 000 FCFA",
    icon: Gamepad2
  },
  {
    name: "Compétiteur",
    price: "20 000 FCFA",
    desc: "Vivez l'expérience complète en équipe.",
    features: [
      "Accès à toutes les activités",
      "Participation à toutes les compétitions",
      "Accès aux formations et ateliers",
      "Participation au Pitch Final"
    ],
    type: "competition",
    popular: true,
    buttonLabel: "Payer 20 000 FCFA",
    icon: Trophy
  }
];

function PaymentLogo({ type }: { type: string }) {
  switch (type) {
    case "wave":
      return (
        <div className="w-12 h-12 bg-[#1bd7e4] rounded-2xl flex items-center justify-center shadow-sm mb-3">
           <span className="text-white font-bold text-xl tracking-tighter">wave</span>
        </div>
      );
    case "orange":
      return (
        <div className="w-12 h-12 rounded-2xl flex flex-col items-center justify-center shadow-sm relative overflow-hidden bg-black mb-3 border border-[#ff7900]/20">
           <div className="absolute inset-0 flex flex-col">
             <div className="flex-1 bg-[#ff7900]"></div>
             <div className="flex-1 bg-black"></div>
           </div>
           <span className="relative z-10 text-white font-black text-[9px] leading-tight text-center">orange<br/>money</span>
        </div>
      );
    case "mtn":
      return (
        <div className="w-12 h-12 bg-[#ffcc00] rounded-full flex flex-col items-center justify-center shadow-sm border-[3px] border-white mb-3">
           <span className="text-[#004f71] font-black text-[13px] leading-none tracking-tighter">MTN</span>
           <span className="text-[#004f71] font-bold text-[7px] leading-none mt-0.5">MoMo</span>
        </div>
      );
    case "card":
      return (
        <div className="w-12 h-12 bg-[#1d1d1f] rounded-2xl flex items-center justify-center shadow-sm mb-3">
           <div className="flex -space-x-3 opacity-90">
             <div className="w-6 h-6 rounded-full bg-[#ff5f00] mix-blend-screen"></div>
             <div className="w-6 h-6 rounded-full bg-[#f2a900] mix-blend-screen"></div>
           </div>
        </div>
      );
  }
  return null;
}

export function Registration() {
  const [activeForm, setActiveForm] = useState<"visiteur" | "formation_adulte" | "formation_kids" | "competition">("visiteur");
  const [formData, setFormData] = useState({ nom: "", email: "", extra: "", message: "" });
  const [paymentMethod, setPaymentMethod] = useState<"wave" | "orange" | "mtn" | "card" | "">("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (activeForm !== "visiteur" && !paymentMethod) {
      alert("Veuillez sélectionner un moyen de paiement.");
      return;
    }
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
              <FadeUp key={plan.name} delay={idx * 0.1} className={`bg-white/70 backdrop-blur-md rounded-3xl p-8 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative transition-transform hover:scale-[1.02] duration-300 border border-white/50 ${plan.popular ? 'ring-2 ring-[#06c]' : ''}`}>
                {plan.popular && (
                   <span className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-[#06c] to-[#005bb5] text-white text-xs font-bold rounded-full shadow-md">
                     Populaire
                   </span>
                )}
                <div className="w-14 h-14 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white">
                  <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-[#06c]' : 'text-[#1d1d1f]'}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f] mb-2">{plan.name}</h3>
                <p className="text-[#86868b] text-sm font-medium leading-relaxed mb-6 h-12">{plan.desc}</p>
                
                <div className="mb-6 pb-6 border-b border-[#d2d2d7]">
                  <div className="text-3xl font-bold tracking-tight text-[#1d1d1f] bg-clip-text text-transparent bg-gradient-to-r from-[#1d1d1f] to-[#434353]">
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
                    className={`w-full py-4 rounded-full text-sm font-bold transition-all shadow-sm flex items-center justify-center group ${plan.popular ? 'bg-gradient-to-r from-[#06c] to-[#005bb5] text-white hover:shadow-lg hover:scale-[1.02]' : 'bg-white border border-[#d2d2d7] text-[#1d1d1f] hover:border-[#1d1d1f] hover:bg-gray-50'}`}
                  >
                    {plan.buttonLabel}
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
            <FadeUp delay={0.1} className="flex flex-wrap md:flex-nowrap bg-[#f5f5f7] p-1 rounded-full mb-12 gap-1 md:gap-0">
              <button 
                type="button"
                onClick={() => setActiveForm("visiteur")}
                className={cn("w-full md:flex-1 py-3 px-4 text-sm font-medium rounded-full transition-all duration-300", activeForm === "visiteur" ? "bg-white text-[#1d1d1f] shadow-md" : "text-[#86868b] hover:text-[#1d1d1f] hover:bg-gray-200/50")}
              >
                Visiteur Gratuit
              </button>
              <button 
                type="button"
                onClick={() => setActiveForm("formation_adulte")}
                className={cn("w-full md:flex-1 py-3 px-4 text-sm font-medium rounded-full transition-all duration-300", activeForm === "formation_adulte" ? "bg-white text-[#1d1d1f] shadow-md" : "text-[#86868b] hover:text-[#1d1d1f] hover:bg-gray-200/50")}
              >
                Formation Adulte
              </button>
              <button 
                type="button"
                onClick={() => setActiveForm("formation_kids")}
                className={cn("w-full md:flex-1 py-3 px-4 text-sm font-medium rounded-full transition-all duration-300", activeForm === "formation_kids" ? "bg-white text-[#1d1d1f] shadow-md" : "text-[#86868b] hover:text-[#1d1d1f] hover:bg-gray-200/50")}
              >
                Formation Kids
              </button>
              <button 
                type="button"
                onClick={() => setActiveForm("competition")}
                className={cn("w-full md:flex-1 py-3 px-4 text-sm font-medium rounded-full transition-all duration-300", activeForm === "competition" ? "bg-white text-[#1d1d1f] shadow-md" : "text-[#86868b] hover:text-[#1d1d1f] hover:bg-gray-200/50")}
              >
                Compétiteur
              </button>
            </FadeUp>

            {/* Dynamic Form */}
            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 sm:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#f5f5f7]">
              {activeForm === "visiteur" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Nom complet</label>
                      <input 
                        type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email</label>
                      <input 
                        type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="hello@exemple.com"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeForm === "formation_adulte" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Nom complet</label>
                      <input 
                        type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email</label>
                      <input 
                        type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="hello@exemple.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Atelier au choix</label>
                    <select 
                      required 
                      value={formData.extra} 
                      onChange={e => setFormData({...formData, extra: e.target.value})}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Sélectionnez un atelier</option>
                      <option value="prompt">Prompt Engineering avancé</option>
                      <option value="vibecoding">Vibecoding de A à Z</option>
                      <option value="agents">Création d'agents intelligents</option>
                    </select>
                  </div>
                </div>
              )}

              {activeForm === "formation_kids" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Nom de l'enfant</label>
                      <input 
                        type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Léo Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email du parent</label>
                      <input 
                        type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="parent@exemple.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Âge de l'enfant</label>
                    <input 
                      type="number" required 
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                      placeholder="Âge"
                      min="6" max="15"
                    />
                  </div>
                </div>
              )}

              {activeForm === "competition" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Nom de l'équipe</label>
                      <input 
                        type="text" required value={formData.nom} onChange={e => setFormData({...formData, nom: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
                        placeholder="Les Innovateurs"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email du représentant</label>
                      <input 
                        type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b]" 
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
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base appearance-none cursor-pointer"
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
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#06c] focus:bg-white rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(6,102,204,0.1)] text-[#1d1d1f] text-base placeholder:text-[#86868b] resize-none" 
                      placeholder="Décrivez votre idée en quelques mots..."
                    />
                  </div>
                </div>
              )}

              {/* Payment Section for Paid Plans */}
              {activeForm !== "visiteur" && (
                <div className="pt-8 border-t border-[#d2d2d7]/50 mt-8">
                  <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f] mb-6">Moyen de paiement</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { id: "wave", label: "Wave", activeClass: "border-[#1bd7e4] bg-[#1bd7e4]/5" },
                      { id: "orange", label: "Orange Money", activeClass: "border-[#ff7900] bg-[#ff7900]/5" },
                      { id: "mtn", label: "MTN MoMo", activeClass: "border-[#ffcc00] bg-[#ffcc00]/5" },
                      { id: "card", label: "Carte Bancaire", activeClass: "border-[#1d1d1f] bg-[#1d1d1f]/5" }
                    ].map(pm => (
                      <label 
                        key={pm.id} 
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${paymentMethod === pm.id ? pm.activeClass + ' scale-[1.02] shadow-sm' : 'border-transparent bg-[#f5f5f7] hover:bg-[#e8e8ed]'}`}
                      >
                        <input 
                          type="radio" 
                          name="payment" 
                          value={pm.id} 
                          checked={paymentMethod === pm.id}
                          onChange={() => setPaymentMethod(pm.id as any)}
                          className="hidden" 
                        />
                        <PaymentLogo type={pm.id} />
                        <span className={`text-xs font-bold text-center ${paymentMethod === pm.id ? 'text-[#1d1d1f]' : 'text-[#86868b]'}`}>{pm.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-8 flex justify-center">
                <Magnetic>
                  <button type="submit" className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-[#06c] to-[#005bb5] shadow-lg shadow-[#06c]/20 text-white font-bold text-base hover:scale-[1.02] transition-all rounded-full flex items-center justify-center group">
                    {activeForm === "visiteur" ? "Confirmer l'inscription" : "Procéder au paiement"}
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
