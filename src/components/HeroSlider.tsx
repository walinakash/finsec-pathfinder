import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCyber from "@/assets/hero-cyber-1.jpg";
import heroFintech from "@/assets/hero-fintech.jpg";
import heroNetwork from "@/assets/hero-network.jpg";

const slides = [
  {
    id: 1,
    image: heroCyber,
    title: "Protect Your Digital Future",
    subtitle: "Advanced Cybersecurity Solutions for Modern Threats",
    description: "Stay ahead of cyber criminals with our comprehensive security awareness training and cutting-edge protection strategies.",
  },
  {
    id: 2,
    image: heroFintech,
    title: "Secure Financial Technology",
    subtitle: "Banking & Payment Security Excellence",
    description: "Learn essential security practices for digital banking, mobile payments, and blockchain technologies to protect your financial assets.",
  },
  {
    id: 3,
    image: heroNetwork,
    title: "Network Security Mastery",
    subtitle: "Build Unbreachable Digital Defenses",
    description: "Master the fundamentals of network security, threat detection, and incident response to safeguard your organization.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <div className="relative h-full w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent animate-fade-in">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6 animate-fade-in">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                    <Button 
                      size="lg" 
                      className="bg-gradient-cyber hover:shadow-glow-cyber transition-all duration-300"
                    >
                      Start Learning
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-primary/50 hover:bg-primary/10"
                    >
                      Watch Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/20 hover:bg-background/40 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/20 hover:bg-background/40 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary shadow-glow-cyber"
                : "bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;