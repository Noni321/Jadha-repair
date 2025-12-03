import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Shield, Clock, CheckCircle, Wrench, Droplets, Volume2, Lock, Vibrate, RotateCcw, ArrowLeft, MessageCircle, Send, Star, MapPin, Users, Award, Settings } from "lucide-react";

import washingMachines from "@assets/Image-of-clothes-washing-machine-we-repair_1764788221827.jpg";
import ctaGraphic from "@assets/dfg-1536x567_1764788221866.png";
import appliancesImage from "@assets/HTB16tm3SpXXXXcLXVXXq6xXFXXXJ_1764788221879.jpg";

const PHONE_NUMBER = "0554276643";
const PHONE_LINK = `tel:${PHONE_NUMBER}`;
const WHATSAPP_LINK = `https://wa.me/966${PHONE_NUMBER.slice(1)}?text=${encodeURIComponent("مرحباً، أحتاج إلى خدمة صيانة غسالة")}`;

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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400" />
      
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

const contactFormSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب (حرفين على الأقل)"),
  phone: z.string().min(10, "رقم الهاتف غير صحيح"),
  message: z.string().min(10, "الرسالة قصيرة جداً (10 أحرف على الأقل)"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function AnimatedCountersSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ years: 0, customers: 0, repairs: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (hasAnimated) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          if (observerRef.current && sectionRef.current) {
            observerRef.current.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const targets = { years: 10, customers: 5000, repairs: 15000 };
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      
      setCounts({
        years: Math.round(targets.years * easeOutQuad),
        customers: Math.round(targets.customers * easeOutQuad),
        repairs: Math.round(targets.repairs * easeOutQuad),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(targets);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated]);

  const stats = [
    { icon: Award, value: counts.years, suffix: "+", label: "سنوات خبرة" },
    { icon: Users, value: counts.customers, suffix: "+", label: "عميل سعيد" },
    { icon: Settings, value: counts.repairs, suffix: "+", label: "عملية إصلاح" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-primary text-white"
      data-testid="section-counters"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2" data-testid={`counter-stat-${index}`}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold" data-testid={`counter-value-${index}`}>
                {stat.value.toLocaleString('ar-SA')}{stat.suffix}
              </div>
              <div className="text-lg text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "أحمد محمد",
      rating: 5,
      text: "خدمة ممتازة وسريعة. الفني كان محترف جداً وأصلح الغسالة في نفس اليوم. أنصح الجميع بهم.",
      location: "جدة - حي الروضة",
    },
    {
      name: "سارة عبدالله",
      rating: 5,
      text: "تعاملت معهم مرتين والخدمة دائماً ممتازة. الأسعار معقولة والضمان يعطيك راحة بال.",
      location: "جدة - حي النزهة",
    },
    {
      name: "محمد علي",
      rating: 5,
      text: "أفضل خدمة صيانة غسالات في جدة. سرعة في الاستجابة وجودة عالية في العمل.",
      location: "جدة - حي الصفا",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-foreground" data-testid="text-testimonials-title">
          آراء عملائنا
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          نفخر بثقة عملائنا وآرائهم الإيجابية
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 border-none shadow-lg"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-testimonial-${index}`}>
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {testimonial.location}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "تم إرسال رسالتك بنجاح!",
        description: "سنتواصل معك قريباً إن شاء الله.",
      });
      
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-contact-form">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-foreground" data-testid="text-contact-title">
            اطلب خدمة الصيانة
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            أرسل لنا رسالتك وسنتواصل معك في أقرب وقت
          </p>

          <Card className="p-6 md:p-8 border-none shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الاسم</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="أدخل اسمك الكريم"
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>رقم الهاتف</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="05XXXXXXXX"
                          dir="ltr"
                          className="text-left"
                          {...field}
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>تفاصيل المشكلة</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="صف لنا مشكلة الغسالة..."
                          className="min-h-[120px] resize-none"
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit-form"
                >
                  {isSubmitting ? (
                    "جاري الإرسال..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 ml-2" />
                      إرسال الطلب
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">أو تواصل معنا مباشرة:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="lg" data-testid="button-call-form">
                <a href={PHONE_LINK} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">{PHONE_NUMBER}</span>
                </a>
              </Button>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700" data-testid="button-whatsapp-form">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  const areas = [
    "حي الروضة",
    "حي النزهة",
    "حي الصفا",
    "حي الحمراء",
    "حي السلامة",
    "حي الرحاب",
    "حي المحمدية",
    "حي البساتين",
    "حي الشرفية",
    "حي الأندلس",
    "حي الفيصلية",
    "حي السليمانية",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-service-area">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-foreground" data-testid="text-service-area-title">
          مناطق الخدمة
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          نغطي جميع أحياء جدة وضواحيها
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-lg p-8 border border-card-border">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                جدة - المملكة العربية السعودية
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg"
                  data-testid={`area-item-${index}`}
                >
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-foreground text-sm">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                لا ترى منطقتك؟ اتصل بنا للتأكد من تغطية منطقتك
              </p>
              <Button asChild className="mt-4" data-testid="button-call-service-area">
                <a href={PHONE_LINK} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">{PHONE_NUMBER}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
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

function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-105 transition-all"
      data-testid="button-floating-whatsapp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="hidden sm:inline font-bold">واتساب</span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <main>
        <HeroSection />
        <AnimatedCountersSection />
        <FeaturesSection />
        <ServicesSection />
        <CTASection />
        <BrandsSection />
        <TestimonialsSection />
        <ContactFormSection />
        <ServiceAreaSection />
        <SEOContentSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingCallButton />
      <FloatingWhatsAppButton />
    </div>
  );
}
