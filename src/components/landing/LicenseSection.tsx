import { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

interface TopicCard {
  name: string;
  level: string;
  icon: string;
  features: string[];
  highlight?: boolean;
  tag?: string;
  route: string;
}

const topicCards: TopicCard[] = [
  {
    name: "Центральный банк",
    level: "Фундамент",
    icon: "Landmark",
    route: "/central-bank",
    features: [
      "Роль регулятора экономики",
      "Эмиссия денег",
      "Ключевая ставка и её влияние",
      "Надзор за банками",
      "Резервные требования",
      "Валютная политика",
    ],
    tag: "С этого начинают",
  },
  {
    name: "Коммерческие банки",
    level: "Основа",
    icon: "Building2",
    route: "/commercial-banks",
    features: [
      "Как банк зарабатывает деньги",
      "Депозиты и вклады",
      "Кредитование населения",
      "Межбанковский рынок",
      "Банковская маржа",
      "Виды банковских лицензий",
    ],
    highlight: true,
  },
  {
    name: "Деньги и расчёты",
    level: "Механика",
    icon: "Banknote",
    route: "/money",
    features: [
      "Как работает денежная масса",
      "Безналичные расчёты",
      "Платёжные системы",
      "SWIFT и корреспондентские счета",
    ],
  },
  {
    name: "Риски и защита",
    level: "Безопасность",
    icon: "ShieldCheck",
    route: "/risks",
    features: [
      "Страхование вкладов",
      "Банковские риски",
      "Базель и нормативы капитала",
      "Что происходит при банкротстве банка",
      "Как выбрать надёжный банк",
      "АСВ и его роль",
    ],
  },
];

const LicenseSection = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="licenses" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Ключевые темы</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Разберём банковскую систему по блокам — от роли государства до защиты ваших денег
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topicCards.map((card, index) => (
            <div
              key={card.name}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`relative h-full bg-black border-white/10 ${
                  hoveredCard === index ? "scale-105" : "scale-100"
                } transition-all duration-300`}
              >
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-white/20 to-white/0">
                  <div className="absolute inset-0 rounded-lg bg-black"></div>
                </div>

                {card.tag && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                      {card.tag}
                    </span>
                  </div>
                )}

                <CardContent className="relative p-6 rounded-lg h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 rounded-full bg-zinc-900 border border-white/10 mb-4">
                      <Icon name={card.icon} size={24} fallback="BookOpen" className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{card.name}</h3>
                    <div className="text-sm font-medium text-zinc-400">{card.level}</div>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {card.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-white mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full bg-white text-black hover:bg-zinc-200 transition-colors"
                    onClick={() => navigate(card.route)}
                  >
                    Читать статью →
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;