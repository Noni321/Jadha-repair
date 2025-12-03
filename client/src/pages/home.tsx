import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Shield, Clock, CheckCircle, Wrench, Droplets, Volume2, Lock, Vibrate, RotateCcw, ArrowLeft } from "lucide-react";

import heroBackground from "@assets/Untitledgg-1536x637_1764788221851.png";
import washingMachines from "@assets/Image-of-clothes-washing-machine-we-repair_1764788221827.jpg";
import ctaGraphic from "@assets/dfg-1536x567_1764788221866.png";
import appliancesImage from "@assets/HTB16tm3SpXXXXcLXVXXq6xXFXXXJ_1764788221879.jpg";

const PHONE_NUMBER = "0554276643";
const PHONE_LINK = `tel:${PHONE_NUMBER}`;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <h1
          className={`text-xl md:text-2xl font-bold transition-colors ${
            isScrolled ? "text-primary" : "text-white"
          }`}
          data-testid="text-logo"
        >
          صيانة غسالات جدة
        </h1>
        <a
          href={PHONE_LINK}
          className={`flex items-center gap-2 text-lg md:text-xl font-bold transition-colors ${
            isScrolled ? "text-primary" : "text-white"
          }`}
          data-testid="link-phone-header"
        >
          <Phone className="w-5 h-5" />
          <span dir="ltr">{PHONE_NUMBER}</span>
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/80" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-headline">
          صيانة غسالات اتوماتيك جدة
        </h2>
        <p className="text-xl md:text-2xl mb-4 opacity-90" data-testid="text-hero-subheadline">
          اتصل بنا لإصلاح غسالتك اليوم!
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
          خدمة إصلاح وصيانة الغسالات الأوتوماتيكية في جدة. نقوم بإصلاح الغسالات الأوتوماتيكية لجميع الماركات تقريباً.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            asChild
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-bold shadow-xl"
            data-testid="button-hero-cta"
          >
            <a href={PHONE_LINK} className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span>اتصل الآن</span>
              <span dir="ltr">{PHONE_NUMBER}</span>
            </a>
          </Button>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Shield className="w-5 h-5 text-green-300" />
            <span>ضمان 30 يوم</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="w-5 h-5 text-yellow-300" />
            <span>خدمة في نفس اليوم</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Wrench className="w-5 h-5 text-blue-300" />
            <span>+10 سنوات خبرة</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowLeft className="w-8 h-8 text-white rotate-[-90deg]" />
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "ضمان 30 يوم",
      description: "نقدم ضمان لمدة 30 يومًا. إذا حدثت نفس المشكلة مرة أخرى في غضون 30 يومًا. سنقوم بإصلاحه دون أي تكاليف إضافية.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Clock,
      title: "خدمة في نفس اليوم",
      description: "نحن نفهم أهمية الغسالة في منزلك. لذلك نقدم خدمة سريعة في نفس اليوم لإصلاح غسالتك.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-features">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-features-title">
          لماذا تختارنا؟
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 text-center border-none shadow-lg"
              data-testid={`card-feature-${index}`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.bgColor} flex items-center justify-center`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const problems = [
    { icon: Droplets, text: "دورات الغسيل تترك البقع على الملابس" },
    { icon: Droplets, text: "الماء لا يستنزف بشكل صحيح" },
    { icon: Volume2, text: "الغسالات المزعجة" },
    { icon: Lock, text: "الباب محشور" },
    { icon: Vibrate, text: "الاهتزاز المفرط" },
    { icon: RotateCcw, text: "قضايا الغزل" },
    { icon: Droplets, text: "تسرب الماء" },
    { icon: Wrench, text: "و أكثر من ذلك بكثير" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-services">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-foreground" data-testid="text-services-title">
          المشاكل التي نقوم بإصلاحها
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          نقوم بإصلاح الأنواع التالية من مشاكل مجفف الملابس والغسالات
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-card-border shadow-sm"
              data-testid={`item-problem-${index}`}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <problem.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium" data-testid={`text-problem-${index}`}>{problem.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-primary" data-testid="section-cta-mid">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src={ctaGraphic}
            alt="اتصل بنا"
            className="max-w-full md:max-w-md h-auto"
            data-testid="img-cta-graphic"
          />
          <div className="text-center md:text-right">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              اتصل بنا الآن
            </h3>
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-bold"
              data-testid="button-cta-mid"
            >
              <a href={PHONE_LINK} className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <span dir="ltr">{PHONE_NUMBER}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandsSection() {
  const brands = [
    "ويرلبول",
    "ميتاج",
    "سامسونج",
    "جنرال اليكتريك",
    "اريستون",
    "هاير",
    "ال جي",
    "بوش",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-brands">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-foreground" data-testid="text-brands-title">
          الماركات التي نقوم بإصلاحها
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          نقوم بإصلاح الغسالات الأوتوماتيكية لجميع الماركات تقريباً
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          <img
            src={washingMachines}
            alt="أنواع الغسالات التي نقوم بإصلاحها"
            className="w-full h-auto rounded-lg shadow-lg"
            data-testid="img-washing-machines"
          />
          <img
            src={appliancesImage}
            alt="الأجهزة المنزلية التي نقوم بإصلاحها"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            data-testid="img-appliances"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-card rounded-lg border border-card-border shadow-sm font-medium text-foreground"
              data-testid={`badge-brand-${index}`}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SEOContentSection() {
  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-seo-content">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-lg text-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">
            خدمة شاملة لصيانة الغسالات في جدة
          </h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              اتصل بنا لإصلاح غسالتك اليوم. خدمة إصلاح وصيانة الغسالات الأوتوماتيكية في جدة. نقوم بإصلاح الغسالات الأوتوماتيكية لجميع الماركات تقريبًا. يتمتع الفني لدينا بأكثر من 10 سنوات من الخبرة.
            </p>
            
            <p>
              الغسالة الأوتوماتيكية مهمة جدًا في المنزل. لهذا السبب نقدم خدمة صيانة الغسالات في نفس اليوم. نحن نفهم مدى أهمية غسالتك في حياتك اليومية.
            </p>
            
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-foreground">خدماتنا تشمل:</h3>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>صيانة مجفف ويرلبول</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>صيانة غسالات ميتاج في جدة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>صيانة نشافة ويرلبول جدة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>صيانة نشافة جنرال اليكتريك</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>صيانة نشافة اريستون جدة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>صيانة نشافة سامسونج</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>صيانة مجفف الملابس</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>تصليح نشافة ملابس</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-12" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-xl font-bold mb-4">صيانة غسالات جدة</h3>
            <p className="text-background/70 leading-relaxed">
              خدمة إصلاح وصيانة الغسالات الأوتوماتيكية في جدة. نقوم بإصلاح جميع الماركات مع ضمان 30 يوم.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 text-2xl font-bold text-background hover:text-primary-foreground transition-colors"
              data-testid="link-phone-footer"
            >
              <Phone className="w-6 h-6" />
              <span dir="ltr">{PHONE_NUMBER}</span>
            </a>
            <p className="text-background/70 mt-2">متاح 7 أيام في الأسبوع</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">منطقة الخدمة</h3>
            <p className="text-background/70">جدة وضواحيها</p>
            <p className="text-background/70 mt-2">خدمة في نفس اليوم</p>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © {new Date().getFullYear()} صيانة غسالات جدة - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}

function FinalCTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-l from-primary to-blue-600" data-testid="section-final-cta">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          هل تحتاج لإصلاح غسالتك؟
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          اتصل بنا الآن للحصول على خدمة سريعة وموثوقة. فنيون محترفون بخبرة أكثر من 10 سنوات.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-white text-primary hover:bg-white/90 text-xl px-10 py-7 font-bold shadow-xl"
          data-testid="button-final-cta"
        >
          <a href={PHONE_LINK} className="flex items-center gap-3">
            <Phone className="w-7 h-7" />
            <span>اتصل الآن</span>
            <span dir="ltr">{PHONE_NUMBER}</span>
          </a>
        </Button>
      </div>
    </section>
  );
}

function FloatingCallButton() {
  return (
    <a
      href={PHONE_LINK}
      className="fixed bottom-6 left-6 z-50 md:hidden flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full shadow-2xl font-bold text-lg animate-pulse-glow hover:scale-105 transition-transform"
      data-testid="button-floating-call"
    >
      <Phone className="w-6 h-6" />
      <span>اتصل الآن</span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <CTASection />
        <BrandsSection />
        <SEOContentSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
