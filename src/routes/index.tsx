import { createFileRoute } from "@tanstack/react-router";
import { Sun, TrendingUp, Leaf, ShieldCheck, Wallet, ArrowRight, MessageCircle, Instagram, MapPin, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero-solar.jpg";
import clientesSatisfeitos from "@/assets/clientes-satisfeitos.png.asset.json";

const WHATSAPP_URL = "https://wa.me/5585986446487?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20um%20or%C3%A7amento%20de%20energia%20solar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eco Sistema Solares | Energia Solar no Ceará" },
      { name: "description", content: "Mais de 800 sistemas instalados. Solicite uma simulação gratuita e descubra quanto você pode economizar com energia solar." },
      { property: "og:title", content: "Eco Sistema Solares | Energia Solar no Ceará" },
      { property: "og:description", content: "Mais de 800 sistemas instalados. Solicite uma simulação gratuita e descubra quanto você pode economizar com energia solar." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap" },
    ],
  }),
  component: LandingPage,
});

function CTAButton({ children, variant = "primary", className = "" }: { children: React.ReactNode; variant?: "primary" | "outline"; className?: string }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";
  const styles = variant === "primary"
    ? "text-white shadow-[var(--shadow-brand)] hover:shadow-2xl"
    : "border-2 border-white/80 text-white hover:bg-white hover:text-[color:var(--brand-dark)]";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
      style={variant === "primary" ? { background: "var(--gradient-brand)" } : undefined}
    >
      {children}
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}

function LandingPage() {
  const benefits = [
    { icon: Wallet, title: "Economia Garantida", desc: "Reduza drasticamente sua conta de energia." },
    { icon: TrendingUp, title: "Valorização do Imóvel", desc: "Seu patrimônio se torna mais moderno e valorizado." },
    { icon: Leaf, title: "Sustentabilidade", desc: "Produza energia limpa e ajude o meio ambiente." },
    { icon: ShieldCheck, title: "Investimento Seguro", desc: "Equipamentos de alta durabilidade e excelente retorno." },
  ];

  const steps = [
    { n: "01", title: "Análise do Consumo", desc: "Avaliamos seu perfil de consumo para dimensionar o sistema ideal." },
    { n: "02", title: "Projeto Personalizado", desc: "Engenharia sob medida para sua residência ou empresa." },
    { n: "03", title: "Instalação Profissional", desc: "Equipe técnica certificada e equipamentos premium." },
    { n: "04", title: "Economia Todos os Meses", desc: "Comece a economizar imediatamente após a ativação." },
  ];

  const indicators = [
    "+800 Sistemas Eco Instalados",
    "Atendimento em Todo Ceará",
    "Energia Limpa e Sustentável",
    "Projeto Eco Sob Medida",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <img src={logo} alt="Eco Sistema Solares" className="h-16 w-auto md:h-20 brightness-0 invert" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-5 py-2.5 text-sm font-bold text-white border border-white/20 hover:bg-white hover:text-[color:var(--brand-dark)] transition"
          >
            <MessageCircle className="h-4 w-4" /> (85) 98644-6487
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Instalação de energia solar residencial" width={1536} height={1024} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-wider text-white border border-white/20">
              <Sun className="h-4 w-4" /> Eco Sistema Solares • Energia Solar no Ceará
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05] text-white">
              Economize até 70% com energia solar
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed">
              A Eco Sistema Solares já instalou mais de 800 sistemas fotovoltaicos, levando economia, valorização e sustentabilidade para residências e empresas em todo o Ceará.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton>Solicitar Simulação Gratuita</CTAButton>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
              {indicators.map((i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/15 p-4">
                  <CheckCircle2 className="h-5 w-5 text-[#7FCBFF] shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-white">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <img src={logo} alt="Eco Sistema Solares" className="h-24 w-auto mb-6" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--brand-light)]">Por que a Eco Sistema Solares</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[color:var(--brand-dark)]">
              Por que investir em <span className="text-[color:var(--brand-light)]">Energia Solar?</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground font-medium">
              Transformamos sua conta de luz em economia real, com projetos sob medida e equipamentos premium.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative rounded-2xl bg-white p-8 border border-slate-100 shadow-[var(--shadow-card)] hover:-translate-y-2 transition-all duration-300">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: "var(--gradient-brand)" }}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-[color:var(--brand-dark)]">{title}</h3>
                <p className="mt-3 text-base text-muted-foreground font-medium leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <CTAButton>Falar com a Eco Sistema Solares</CTAButton>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--gradient-brand)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#7FCBFF]">Como Funciona</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white whitespace-pre-line">
              Seu Projeto com&nbsp; a gente&nbsp;{"\n"}em 4 Passos
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-8 hover:bg-white/15 transition">
                <div className="text-5xl font-black text-[#2FA4FF]">{s.n}</div>
                <h3 className="mt-4 text-xl font-extrabold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/80 font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-white/10 backdrop-blur border border-white/20 px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <img src={logo} alt="Eco Sistema Solares" className="h-24 w-auto brightness-0 invert" />
            <p className="text-2xl md:text-3xl font-extrabold text-white">+800 Sistemas Instalados pela Eco Sistema Solares</p>
          </div>

          <div className="mt-12 flex justify-center">
            <CTAButton variant="outline">Falar com Especialista</CTAButton>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <img src={logo} alt="Eco Sistema Solares" className="h-28 w-auto mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-extrabold text-[color:var(--brand-dark)] leading-[1.05]">
            Produza Sua Própria Energia com a <span className="text-[color:var(--brand-light)]">Eco Sistema Solares</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Solicite agora uma simulação gratuita com a Eco Sistema Solares e descubra quanto você pode economizar todos os meses.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton>Solicitar Simulação Gratuita</CTAButton>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white border border-slate-100 p-5 shadow-[var(--shadow-card)] hover:-translate-y-1 transition text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: "var(--gradient-brand)" }}>
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="text-lg font-extrabold text-[color:var(--brand-dark)]">(85) 98644-6487</div>
              </div>
            </a>
            <a href="https://instagram.com/eco_sistemassolares" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white border border-slate-100 p-5 shadow-[var(--shadow-card)] hover:-translate-y-1 transition text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: "var(--gradient-brand)" }}>
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Instagram</div>
                <div className="text-lg font-extrabold text-[color:var(--brand-dark)]">@eco_sistemassolares</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[color:var(--brand-dark)] text-white py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Eco Sistema Solares" className="h-14 w-auto brightness-0 invert" />
          <p className="text-sm font-bold flex items-center gap-2 text-white/80">
            <MapPin className="h-4 w-4" /> Eco Sistema Solares • Atendimento em Todo Ceará
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
