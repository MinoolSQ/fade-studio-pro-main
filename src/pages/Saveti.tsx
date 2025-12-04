import { useState, useEffect, useRef } from "react";
import { ArrowRight, Instagram, Scissors, Droplet, Wind, Sparkles, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavbarSimple from "@/components/NavbarSimple";

// ═══════════════════════════════════════════════════════════════════════════════
// DATA: Tips / Saveti (Expanded with accurate professional information)
// ═══════════════════════════════════════════════════════════════════════════════
const tips = [
    // ═══════════════════════════════════════════════════════════════════════════
    // BRADA (Beard Care) - 6 tips
    // ═══════════════════════════════════════════════════════════════════════════
    {
        tag: "BRADA",
        title: "Kako pravilno oprati bradu",
        teaser: "Perite bradu 2-3 puta nedeljno specijalizovanim šamponom za bradu. Koristite mlaku vodu (oko 38°C) – vruća voda isušuje kožu i dlaku.",
        icon: Droplet,
        timeLabel: "Pranje: 2-3x nedeljno",
    },
    {
        tag: "BRADA",
        title: "Zašto je ulje za bradu obavezno",
        teaser: "Ulje za bradu smanjuje iritaciju kože, čini bradu mekom i sprečava perut. Nanosi se odmah nakon pranja dok su zanoktice otvorene za dublje prodiranje.",
        icon: Droplet,
        timeLabel: "Ulje: dnevno",
    },
    {
        tag: "BRADA",
        title: "Pravilno češljanje brade",
        teaser: "Redovno češljanje sprečava mršenje dlaka. Koristite četku od veprove dlake koja ravnomerno raspoređuje prirodna ulja i proizvode za negu.",
        icon: Scissors,
        timeLabel: "Četkanje: dnevno",
    },
    {
        tag: "BRADA",
        title: "Vosak za oblikovanje brade i brkova",
        teaser: "Vosak daje punoću i volumen bradi, idealan za učvršćivanje oblika. Omekšava dlaku i lako se ispira vodom.",
        icon: Sparkles,
        timeLabel: null,
    },
    {
        tag: "BRADA",
        title: "Nega brade zimi",
        teaser: "Zimi koristite balm za dodatnu zaštitu od hladnoće. Hidratacija kože ispod brade je ključna – suva koža vodi do peruti i svraba.",
        icon: Wind,
        timeLabel: "Balm: dnevno zimi",
    },
    {
        tag: "BRADA",
        title: "Trim brade kod kuće",
        teaser: "Koristite kvalitetan trimer i makaze za precizno oblikovanje. Trim radite na 10-14 dana da održite urednu formu bez odlaska kod frizera.",
        icon: Scissors,
        timeLabel: "Trim: 10–14 dana",
    },
    // ═══════════════════════════════════════════════════════════════════════════
    // FRIZURE (Hairstyles & Fade) - 6 tips
    // ═══════════════════════════════════════════════════════════════════════════
    {
        tag: "FRIZURE",
        title: "Šta je fade frizura",
        teaser: "Fade je postepeno skraćivanje kose od vrha glave ka vratu, stvarajući efekat 'bledenja'. Postoje niski, srednji i visoki fade – svaki daje drugačiji izgled.",
        icon: Scissors,
        timeLabel: null,
    },
    {
        tag: "FRIZURE",
        title: "Koliko traje fade frizura",
        teaser: "Fade najbolje izgleda prvih 5-7 dana. Uz pravilnu negu može trajati do 2 nedelje, ali korekcije preporučujemo svakih 10-14 dana.",
        icon: Clock,
        timeLabel: "Osveženje: 10–14 dana",
    },
    {
        tag: "FRIZURE",
        title: "Kako održati fade kod kuće",
        teaser: "Redovno perite kosu blagim šamponom. Koristite pastu ili kremu za teksturu. Održavajte čiste konture oko vrata i ušiju trimerom.",
        icon: Scissors,
        timeLabel: "Održavanje: dnevno",
    },
    {
        tag: "FRIZURE",
        title: "Styling bez lepljenja kose",
        teaser: "Razradite proizvod u dlanovima pre nanošenja. Koristite minimalnu količinu – manje je više. Matt završnica izgleda prirodnije od sjajne.",
        icon: Wind,
        timeLabel: null,
    },
    {
        tag: "FRIZURE",
        title: "Pravilno sušenje kose fenom",
        teaser: "Koristite srednju temperaturu i maksimalnu brzinu. Usmeravajte fen u pravcu željene frizure. Završite hladnim duvanjem za fiksiranje volumena.",
        icon: Wind,
        timeLabel: null,
    },
    {
        tag: "FRIZURE",
        title: "Izbegavajte uske kape",
        teaser: "Nosite kape povremeno i birajte šire modele. Uski šeširi spljoštavaju frizuru i mogu doprineti gubitku kose dugoročno.",
        icon: Clock,
        timeLabel: null,
    },
    // ═══════════════════════════════════════════════════════════════════════════
    // PROIZVODI (Products) - 6 tips
    // ═══════════════════════════════════════════════════════════════════════════
    {
        tag: "PROIZVODI",
        title: "Matt vs Shiny finish",
        teaser: "Matt deluje prirodno i casual – idealan za svakodnevni izgled. Shiny (pomada) daje wet look za elegantnije prilike.",
        icon: Sparkles,
        timeLabel: null,
    },
    {
        tag: "PROIZVODI",
        title: "Pomada – za koga je",
        teaser: "Pomada pruža elegantan izgled sa sjajem i srednjom do jakom fiksacijom. Idealna za slick-back i pompadour frizure. Postoji na vodenoj ili uljanoj bazi.",
        icon: Droplet,
        timeLabel: null,
    },
    {
        tag: "PROIZVODI",
        title: "Kada koristiti gel, a kada pastu",
        teaser: "Gel naglašava teksturu i daje čvrstoću – odličan za kratke frizure. Pasta daje fleksibilan hold i teksturu bez krutosti.",
        icon: Sparkles,
        timeLabel: null,
    },
    {
        tag: "PROIZVODI",
        title: "Kako izabrati proizvod po tipu kose",
        teaser: "Tanka kosa: laki proizvodi za volumen. Gusta: jači hold. Kovrdžava: kreme za definiciju. Uvek pitajte frizera za preporuku.",
        icon: Droplet,
        timeLabel: null,
    },
    {
        tag: "PROIZVODI",
        title: "Sea Salt Spray za teksturu",
        teaser: "Sprej sa morskom solju daje prirodan, 'beach' izgled. Idealan za srednju dužinu kose i postizanje volumena bez težine.",
        icon: Wind,
        timeLabel: null,
    },
    {
        tag: "PROIZVODI",
        title: "Sastojci koje treba izbegavati",
        teaser: "Izbegavajte sulfate, parabene, teške silikone i velike količine alkohola. Preferirajte proizvode sa arganovim uljem, pantenolom i glinom.",
        icon: Scissors,
        timeLabel: null,
    },
];

// ═══════════════════════════════════════════════════════════════════════════════
// DATA: Products
// ═══════════════════════════════════════════════════════════════════════════════
const products = [
    { name: "Premium Vosak", type: "Kosa", finish: "Strong Hold / Matte" },
    { name: "Matt Pasta", type: "Kosa", finish: "Medium Hold / Matte" },
    { name: "Pomada Classic", type: "Kosa", finish: "Medium Hold / Shiny" },
    { name: "Ulje za Bradu", type: "Brada", finish: "Hydration / Natural Shine" },
    { name: "Balm za Bradu", type: "Brada", finish: "Light Hold / Natural" },
    { name: "Sea Salt Spray", type: "Kosa", finish: "Light Hold / Texture" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// DATA: Quick Tips (for horizontal slider)
// ═══════════════════════════════════════════════════════════════════════════════
const quickTips = [
    "💈 Fade traje 2–3 nedelje, posle toga – vreme za refresh.",
    "🧴 Matt paste rade bolje na suvoj kosi.",
    "✂️ Trim brade svakih 10–14 dana održava formu.",
    "💧 Ulje za bradu nanosi se na vlažnu kožu.",
    "🔥 Nikad ne sušite bradu vrućim fenom direktno.",
];

// ═══════════════════════════════════════════════════════════════════════════════
// DATA: Tutorial Steps
// ═══════════════════════════════════════════════════════════════════════════════
const tutorialSteps = [
    { step: 1, text: "Uzmite malu količinu proizvoda – veličine zrna graška." },
    { step: 2, text: "Razradite proizvod u dlanovima dok ne postane tanak sloj." },
    { step: 3, text: "Nanesite na bradu od korena ka vrhovima, prateći rast dlake." },
    { step: 4, text: "Rasporedite češljem ili četkom za ravnomeran finish." },
];

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENT: Saveti Page
// ═══════════════════════════════════════════════════════════════════════════════
const Saveti = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
    const [currentTutorialStep, setCurrentTutorialStep] = useState(0);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const filteredTips = activeCategory
        ? tips.filter((tip) => tip.tag === activeCategory)
        : tips;

    // Intersection Observer for staggered card reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1) {
                            setTimeout(() => {
                                setVisibleCards((prev) => new Set(prev).add(index));
                            }, index * 120); // 0.12s stagger
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [filteredTips]);

    // Auto-advance tutorial carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTutorialStep((prev) => (prev + 1) % tutorialSteps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <NavbarSimple />

            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            {/* HERO SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 text-center bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background/0 opacity-50 pointer-events-none"></div>

                <div className="container mx-auto relative z-10">
                    <h1
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-foreground mb-4 sm:mb-6 opacity-0 translate-y-8"
                        style={{
                            animation: 'heroFadeSlide 0.6s ease-out forwards',
                        }}
                    >
                        SAVETI IZ <span className="text-gradient-gold">SALONA</span>
                    </h1>

                    <p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2 opacity-0"
                        style={{
                            animation: 'heroFadeSlide 0.6s ease-out 0.2s forwards',
                        }}
                    >
                        Prava nega, pravi produkti, pravi saveti. Bez filtera, samo iskustvo iz frizerske stolice.
                    </p>

                    {/* Category Filter Buttons */}
                    <div
                        className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 opacity-0 px-2"
                        style={{ animation: 'heroFadeSlide 0.6s ease-out 0.4s forwards' }}
                    >
                        {/* Sve (All) Button */}
                        <Button
                            variant={activeCategory === null ? "default" : "outline"}
                            className={`text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 font-heading uppercase tracking-wider transition-all duration-200 hover:scale-103 ${activeCategory === null
                                ? "bg-gold text-black hover:bg-gold-dark shadow-lg shadow-gold/20"
                                : "border-gold/50 text-gold hover:bg-gold hover:text-black"
                                }`}
                            onClick={() => setActiveCategory(null)}
                        >
                            Sve
                        </Button>
                        {/* Category Buttons */}
                        {["Brada", "Frizure", "Proizvodi"].map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat.toUpperCase() ? "default" : "outline"}
                                className={`text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 font-heading uppercase tracking-wider transition-all duration-200 hover:scale-103 ${activeCategory === cat.toUpperCase()
                                    ? "bg-gold text-black hover:bg-gold-dark shadow-lg shadow-gold/20"
                                    : "border-gold/50 text-gold hover:bg-gold hover:text-black"
                                    }`}
                                onClick={() => setActiveCategory(cat.toUpperCase())}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            {/* QUICK TIPS SLIDER */}
            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="py-4 sm:py-6 bg-gold/5 border-y border-gold/10 overflow-hidden">
                <div className="flex animate-marquee">
                    {[...quickTips, ...quickTips].map((tip, i) => (
                        <div key={i} className="flex-shrink-0 px-6 sm:px-12 text-muted-foreground text-base sm:text-lg whitespace-nowrap">
                            {tip}
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            {/* TIPS GRID */}
            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="py-12 sm:py-16 md:py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                            SAVETI & EDUKACIJA
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                            Znanje koje <span className="text-gold">vredi</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredTips.map((tip, index) => (
                            <div
                                key={`${tip.title}-${index}`}
                                ref={(el) => (cardRefs.current[index] = el)}
                                className={`group bg-card border border-border rounded-2xl p-6 sm:p-8 transition-all duration-400 cursor-pointer
                  ${visibleCards.has(index)
                                        ? 'opacity-100 scale-100 translate-y-0'
                                        : 'opacity-0 scale-95 translate-y-4'}
                  hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gold/15 hover:border-gold/30`}
                                style={{ transitionDelay: `${index * 0.12}s` }}
                            >
                                {/* Header: Tag + Icon */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-bold text-gold bg-gold/10 px-3 py-1.5 rounded-full border border-gold/20">
                                            {tip.tag}
                                        </span>
                                        {tip.timeLabel && (
                                            <span className="flex items-center text-xs text-muted-foreground">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {tip.timeLabel}
                                            </span>
                                        )}
                                    </div>
                                    <tip.icon className="w-6 h-6 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3 sm:mb-4 group-hover:text-gold transition-colors duration-300">
                                    {tip.title}
                                </h3>

                                {/* Teaser */}
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {tip.teaser}
                                </p>

                                {/* Link */}
                                <a href="#" className="inline-flex items-center text-gold font-semibold group/link">
                                    <span className="relative overflow-hidden">
                                        <span className="group-hover/link:underline decoration-gold underline-offset-4">Pročitaj više</span>
                                    </span>
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            {/* TUTORIAL BLOCK */}
            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-secondary relative overflow-hidden">
                {/* Animated Swipe Line Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div
                        className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                        style={{
                            animation: 'swipeLine 3s ease-in-out infinite',
                        }}
                    ></div>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
                        {/* Left: Tutorial Carousel */}
                        <div className="relative">
                            <div className="aspect-square bg-card rounded-3xl border border-border overflow-hidden relative">
                                {/* Carousel Content */}
                                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-12">
                                    <div className="text-center">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8 text-gold">
                                            <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold">{currentTutorialStep + 1}</span>
                                        </div>
                                        <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium leading-relaxed px-2">
                                            {tutorialSteps[currentTutorialStep].text}
                                        </p>
                                    </div>
                                </div>

                                {/* Animated Swipe Line Over Carousel */}
                                <div
                                    className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-gold/50 to-transparent"
                                    style={{
                                        animation: 'verticalSwipe 3s ease-in-out infinite',
                                    }}
                                ></div>

                                {/* Progress Dots */}
                                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                                    {tutorialSteps.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentTutorialStep(i)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentTutorialStep ? 'bg-gold w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Tutorial Info */}
                        <div>
                            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                                TUTORIAL
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                                Kako pravilno naneti <span className="text-gold">ulje za bradu</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                                Pravilna tehnika čini razliku između zdrave, meke brade i one koja izgleda zapušteno. Pratite ove korake za savršen rezultat.
                            </p>

                            {/* Step List */}
                            <div className="space-y-3 sm:space-y-4">
                                {tutorialSteps.map((step, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 ${i === currentTutorialStep ? 'bg-gold/10 border border-gold/20' : 'bg-transparent'
                                            }`}
                                    >
                                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-sm ${i === currentTutorialStep ? 'bg-gold text-black' : 'bg-muted text-muted-foreground'
                                            }`}>
                                            {step.step}
                                        </div>
                                        <p className={`text-base sm:text-lg ${i === currentTutorialStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                                            {step.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Related Link */}
                            <div className="mt-10 p-4 bg-card border border-border rounded-xl">
                                <p className="text-muted-foreground text-sm mb-2">Pogledaj i:</p>
                                <a href="#products" className="inline-flex items-center text-gold font-semibold hover:underline">
                                    Ulja koja preporučujemo
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            {/* PRODUCTS SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            <section id="products" className="py-12 sm:py-16 md:py-24 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs sm:text-sm font-semibold mb-3 sm:mb-4 animate-fade-in">
                            DOSTUPNO U SALONU
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
                            Proizvodi koje <span className="text-gold">koristimo i prodajemo</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Premium proizvodi testirani u salonu. Bez kompromisa, samo kvalitet.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="group bg-card border border-border rounded-2xl p-6 sm:p-8 text-center 
                                hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/10 hover:border-gold/30
                                transition-all duration-300"
                                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                            >
                                {/* Icon */}
                                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold group-hover:bg-gold/20 transition-colors">
                                    {product.type === "Brada" ? (
                                        <Droplet className="h-10 w-10" />
                                    ) : (
                                        <Scissors className="h-10 w-10" />
                                    )}
                                </div>

                                {/* Name */}
                                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                                    {product.name}
                                </h3>

                                {/* Type */}
                                <p className="text-gold font-semibold mb-2">{product.type}</p>

                                {/* Finish */}
                                <p className="text-muted-foreground text-sm mb-6">{product.finish}</p>

                                {/* Badge */}
                                <div className="inline-block bg-green-500/10 text-green-500 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                                    ✓ Dostupno u salonu
                                </div>

                                {/* CTA */}
                                <a
                                    href="https://www.instagram.com/frizerskisalonuky"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full py-3 border border-gold/30 text-gold hover:bg-gold hover:text-black rounded-xl transition-all duration-300 font-semibold"
                                >
                                    <Instagram className="w-5 h-5 mr-2" />
                                    Javi se u salonu
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            {/* CUSTOM STYLES (inline for animations) */}
            {/* ═══════════════════════════════════════════════════════════════════════════ */}
            <style>{`
        @keyframes heroFadeSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes swipeLine {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(100%); opacity: 1; }
        }

        @keyframes verticalSwipe {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(400%); opacity: 1; }
        }

        .hover\\:scale-103:hover {
          transform: scale(1.03);
        }
      `}</style>
        </div>
    );
};

export default Saveti;
