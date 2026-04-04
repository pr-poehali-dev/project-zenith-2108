import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const achievements = [
  { icon: "GraduationCap", label: "Лет изучения финансов", value: "10+" },
  { icon: "BookOpen", label: "Разобранных тем", value: "50+" },
  { icon: "Users", label: "Читателей материала", value: "1000+" },
  { icon: "Star", label: "Положительных отзывов", value: "200+" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: `translateY(${(1 - scrollProgress) * 50}px)` }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-3xl transform -rotate-6"></div>
            <div className="w-full aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl relative z-10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <Icon name="Landmark" size={64} className="text-white" fallback="Building2" />
                </div>
                <p className="text-zinc-400 text-lg">Образовательный проект</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">О проекте</h2>
            <p className="text-lg mb-6 text-zinc-300">
              БанкБаза — образовательный ресурс о том, как на самом деле работает банковская
              система. Здесь нет сложных формул и академического языка — только понятные объяснения
              для тех, кто хочет разобраться в финансах.
            </p>
            <p className="text-lg mb-8 text-zinc-300">
              От того, зачем нужен Центральный банк, до того, как защищены ваши вклады —
              разбираем каждый элемент системы шаг за шагом, чтобы вы могли принимать
              осознанные финансовые решения.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className={`bg-zinc-900/50 rounded-lg p-4 border border-white/10 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-2 text-white">
                      <Icon name={achievement.icon} size={24} fallback="Star" />
                    </div>
                    <div className="text-2xl font-bold text-white">{achievement.value}</div>
                  </div>
                  <div className="text-sm text-zinc-400">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
