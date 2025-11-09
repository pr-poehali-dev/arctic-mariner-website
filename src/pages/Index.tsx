import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const explorers = [
  {
    name: "Фритьоф Нансен",
    years: "1861–1930",
    achievement: "Первая научная экспедиция через Арктику на судне «Фрам»",
    description: "Норвежский полярный исследователь, учёный и дипломат. Совершил дрейф через Северный Ледовитый океан, достигнув рекордной северной широты.",
    image: "https://cdn.poehali.dev/projects/9bb8dab8-c3b8-44c8-97dd-020472e97422/files/73162059-f15e-42cd-8c0c-897ae2a0fdf0.jpg"
  },
  {
    name: "Руаль Амундсен",
    years: "1872–1928",
    achievement: "Первое плавание по Северо-Западному проходу",
    description: "Норвежский полярный путешественник и рекордсмен. Первым достиг Южного полюса и совершил арктический перелёт на дирижабле.",
    image: "https://cdn.poehali.dev/projects/9bb8dab8-c3b8-44c8-97dd-020472e97422/files/73162059-f15e-42cd-8c0c-897ae2a0fdf0.jpg"
  },
  {
    name: "Георгий Седов",
    years: "1877–1914",
    achievement: "Экспедиция к Северному полюсу на судне «Святой Фока»",
    description: "Русский гидрограф, полярный исследователь. Погиб на пути к Северному полюсу, но его экспедиция внесла огромный вклад в изучение Арктики.",
    image: "https://cdn.poehali.dev/projects/9bb8dab8-c3b8-44c8-97dd-020472e97422/files/73162059-f15e-42cd-8c0c-897ae2a0fdf0.jpg"
  },
  {
    name: "Отто Шмидт",
    years: "1891–1956",
    achievement: "Руководитель первого сквозного плавания Северным морским путём",
    description: "Советский учёный, математик и полярник. Возглавил экспедицию на пароходе «Челюскин», открывшую новую эру освоения Арктики.",
    image: "https://cdn.poehali.dev/projects/9bb8dab8-c3b8-44c8-97dd-020472e97422/files/73162059-f15e-42cd-8c0c-897ae2a0fdf0.jpg"
  }
];

const timelineEvents = [
  { year: 1893, title: "Экспедиция Нансена", description: "Фритьоф Нансен отправляется в дрейф через Арктику на «Фраме»" },
  { year: 1903, title: "Северо-Западный проход", description: "Руаль Амундсен впервые проходит Северо-Западный проход" },
  { year: 1912, title: "Экспедиция Седова", description: "Георгий Седов начинает поход к Северному полюсу" },
  { year: 1932, title: "Ледокол «Сибиряков»", description: "Первое сквозное плавание по Северному морскому пути за одну навигацию" },
  { year: 1937, title: "Станция СП-1", description: "Первая дрейфующая полярная станция под руководством Папанина" },
  { year: 1977, title: "Атомный ледокол «Арктика»", description: "Первое в мире надводное плавание к Северному полюсу" }
];

const galleryImages = [
  { url: "https://cdn.poehali.dev/projects/9bb8dab8-c3b8-44c8-97dd-020472e97422/files/9fb368af-763d-41af-a2bd-c428415c87e0.jpg", title: "Ледокол в арктических льдах", description: "Исторический ледокол пробивается сквозь арктические льды" },
  { url: "https://cdn.poehali.dev/projects/9bb8dab8-c3b8-44c8-97dd-020472e97422/files/a2b618d0-31e8-4ced-b987-9188d2cf3d37.jpg", title: "Северное сияние над Арктикой", description: "Величественное северное сияние освещает ледяные просторы" },
  { url: "https://cdn.poehali.dev/projects/9bb8dab8-c3b8-44c8-97dd-020472e97422/files/9fb368af-763d-41af-a2bd-c428415c87e0.jpg", title: "Экспедиционное судно", description: "Судно полярной экспедиции начала XX века" },
  { url: "https://cdn.poehali.dev/projects/9bb8dab8-c3b8-44c8-97dd-020472e97422/files/a2b618d0-31e8-4ced-b987-9188d2cf3d37.jpg", title: "Айсберги Северного Ледовитого океана", description: "Массивные ледяные образования в холодных водах Арктики" }
];

const expeditionRoutes = [
  {
    name: "Фритьоф Нансен",
    year: "1893-1896",
    route: "Норвегия → Новосибирские острова → Дрейф через Арктику",
    color: "#0EA5E9",
    description: "Дрейф на 'Фраме' через Северный Ледовитый океан"
  },
  {
    name: "Руаль Амундсен",
    year: "1903-1906",
    route: "Гренландия → Канадский архипелаг → Аляска",
    color: "#8B5CF6",
    description: "Первое успешное прохождение Северо-Западного прохода"
  },
  {
    name: "Георгий Седов",
    year: "1912-1914",
    route: "Архангельск → Новая Земля → Земля Франца-Иосифа",
    color: "#F97316",
    description: "Попытка достижения Северного полюса"
  },
  {
    name: "Северный морской путь",
    year: "1932",
    route: "Архангельск → Мурманск → Берингов пролив",
    color: "#10B981",
    description: "Первое сквозное плавание за одну навигацию"
  }
];

export default function Index() {
  const [selectedExplorer, setSelectedExplorer] = useState<number | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<number>(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Anchor" size={28} />
              Мореходы Арктики
            </h1>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("history")}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                История
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection("explorers")}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                Мореплаватели
              </button>
              <button
                onClick={() => scrollToSection("routes")}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                Карта маршрутов
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl font-bold leading-tight">
                Покорители<br />
                <span className="text-primary">Северных морей</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                История великих арктических экспедиций и легендарных мореплавателей, 
                бросивших вызов ледяной стихии Севера
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("explorers")}
                  className="group"
                >
                  Узнать больше
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection("gallery")}
                >
                  <Icon name="Image" size={18} className="mr-2" />
                  Галерея
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="https://cdn.poehali.dev/projects/9bb8dab8-c3b8-44c8-97dd-020472e97422/files/a2b618d0-31e8-4ced-b987-9188d2cf3d37.jpg"
                alt="Arctic Landscape"
                className="rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <Icon name="Thermometer" size={32} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Средняя температура</p>
                    <p className="text-2xl font-bold">-40°C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">История освоения Арктики</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ключевые вехи покорения Северного Ледовитого океана
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-lg">
                    {event.year}
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Уникальные снимки арктических экспедиций и ледяных ландшафтов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Карта маршрутов экспедиций</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Исторические пути великих арктических путешествий
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border animate-fade-in">
              <div className="relative w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl overflow-hidden">
                <svg viewBox="0 0 500 500" className="w-full h-full">
                  <circle cx="250" cy="150" r="120" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="2" />
                  
                  <path d="M 100 200 Q 150 100 250 150" stroke={expeditionRoutes[selectedRoute].color} strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-pulse" />
                  <path d="M 250 150 Q 350 180 400 250" stroke={expeditionRoutes[selectedRoute].color} strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <path d="M 400 250 Q 380 320 320 380" stroke={expeditionRoutes[selectedRoute].color} strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                  
                  <circle cx="100" cy="200" r="8" fill={expeditionRoutes[selectedRoute].color} className="animate-pulse" />
                  <circle cx="250" cy="150" r="10" fill="hsl(var(--primary))" stroke="white" strokeWidth="2" />
                  <circle cx="400" cy="250" r="8" fill={expeditionRoutes[selectedRoute].color} className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <circle cx="320" cy="380" r="8" fill={expeditionRoutes[selectedRoute].color} className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                  
                  <text x="250" y="140" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">Северный полюс</text>
                  <text x="100" y="190" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Старт</text>
                  
                  <g opacity="0.3">
                    <circle cx="250" cy="150" r="140" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3,3" />
                    <circle cx="250" cy="150" r="160" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3,3" />
                  </g>
                  
                  <path d="M 150 300 L 155 295 L 160 300 M 200 350 L 205 345 L 210 350 M 300 280 L 305 275 L 310 280" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.4" />
                </svg>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Ship" size={24} className="text-primary" />
                  <h3 className="text-xl font-bold">{expeditionRoutes[selectedRoute].name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Период:</strong> {expeditionRoutes[selectedRoute].year}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Маршрут:</strong> {expeditionRoutes[selectedRoute].route}
                </p>
                <p className="text-sm">{expeditionRoutes[selectedRoute].description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Выберите экспедицию</h3>
              {expeditionRoutes.map((route, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedRoute === index ? 'ring-2 ring-primary shadow-xl' : ''
                  }`}
                  onClick={() => setSelectedRoute(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                        style={{ backgroundColor: route.color }}
                      ></div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-1">{route.name}</h4>
                        <p className="text-sm text-primary font-semibold mb-2">{route.year}</p>
                        <p className="text-sm text-muted-foreground">{route.description}</p>
                      </div>
                      {selectedRoute === index && (
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="explorers" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Легендарные мореплаватели</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Герои, открывшие человечеству арктические просторы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {explorers.map((explorer, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedExplorer(selectedExplorer === index ? null : index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={explorer.image}
                    alt={explorer.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {explorer.years}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {explorer.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">
                    {explorer.achievement}
                  </p>
                  {selectedExplorer === index && (
                    <p className="text-sm text-muted-foreground leading-relaxed animate-fade-in">
                      {explorer.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center text-sm text-primary">
                    {selectedExplorer === index ? (
                      <>
                        <span>Свернуть</span>
                        <Icon name="ChevronUp" size={16} className="ml-1" />
                      </>
                    ) : (
                      <>
                        <span>Подробнее</span>
                        <Icon name="ChevronDown" size={16} className="ml-1" />
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Anchor" size={32} className="text-primary" />
            <h3 className="text-2xl font-bold">Мореходы Арктики</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Сохраняем память о великих полярных исследователях
          </p>
          <div className="flex justify-center gap-6">
            <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Twitter" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            © 2024 Мореходы Арктики. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}