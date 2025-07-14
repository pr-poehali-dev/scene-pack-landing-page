import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Film" size={28} className="text-orange-500" />
              <span className="text-xl font-bold text-white">CineFrames</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-slate-300 hover:text-orange-500 transition-colors">Главная</a>
              <a href="#catalog" className="text-slate-300 hover:text-orange-500 transition-colors">Каталог</a>
              <a href="#about" className="text-slate-300 hover:text-orange-500 transition-colors">О нас</a>
              <a href="#services" className="text-slate-300 hover:text-orange-500 transition-colors">Услуги</a>
              <a href="#contact" className="text-slate-300 hover:text-orange-500 transition-colors">Контакты</a>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                  🎬 Эксклюзивные коллекции
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Сборники кадров из 
                  <span className="text-orange-500"> легендарных</span> фильмов
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Коллекционные издания с лучшими кинокадрами всех времен. 
                  От классического Голливуда до современного кино.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Создать коллекцию
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-slate-400">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm">Коллекций</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-sm">Кадров</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm">Жанров</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 animate-scale-in">
                <img 
                  src="/img/a1f6e808-0c54-4394-b46e-f218f6aaefb0.jpg"
                  alt="Коллекция кинокадров"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Популярные коллекции</h2>
            <p className="text-xl text-slate-300">Откройте для себя лучшие сборники кинокадров</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-700/50">
              <TabsTrigger value="all" className="data-[state=active]:bg-orange-500">Все</TabsTrigger>
              <TabsTrigger value="classic" className="data-[state=active]:bg-orange-500">Классика</TabsTrigger>
              <TabsTrigger value="modern" className="data-[state=active]:bg-orange-500">Современное</TabsTrigger>
              <TabsTrigger value="exclusive" className="data-[state=active]:bg-orange-500">Эксклюзив</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Золотой век Голливуда",
                    description: "Коллекция кадров из фильмов 1940-1960х годов",
                    image: "/img/bc4a25c1-7f67-4ed9-b864-0443ebc0b279.jpg",
                    price: "15,990 ₽",
                    frames: "120 кадров",
                    category: "Классика"
                  },
                  {
                    title: "Современные блокбастеры",
                    description: "Лучшие кадры из фильмов последних 20 лет",
                    image: "/img/2ad77512-a36f-4203-a013-64f323a05599.jpg",
                    price: "12,990 ₽",
                    frames: "150 кадров",
                    category: "Современное"
                  },
                  {
                    title: "Режиссерские шедевры",
                    description: "Культовые кадры от великих мастеров кино",
                    image: "/img/a1f6e808-0c54-4394-b46e-f218f6aaefb0.jpg",
                    price: "22,990 ₽",
                    frames: "200 кадров",
                    category: "Эксклюзив"
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/80 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover-scale group">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-orange-500/90 text-white">{item.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                          <Icon name="Heart" size={16} />
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white">{item.title}</CardTitle>
                      <CardDescription className="text-slate-300">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-orange-500">{item.price}</span>
                        <span className="text-slate-400">{item.frames}</span>
                      </div>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        В корзину
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">О нашей страсти к кинематографу</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Мы создаем эксклюзивные коллекции кинокадров для истинных ценителей 
                киноискусства. Каждый сборник тщательно отобран и содержит лучшие 
                моменты из истории мирового кинематографа.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <Icon name="Award" size={32} className="text-orange-500 mx-auto mb-2" />
                  <div className="font-semibold text-white">Качество</div>
                  <div className="text-sm text-slate-400">HD качество кадров</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <Icon name="Users" size={32} className="text-orange-500 mx-auto mb-2" />
                  <div className="font-semibold text-white">Сообщество</div>
                  <div className="text-sm text-slate-400">5000+ коллекционеров</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/bc4a25c1-7f67-4ed9-b864-0443ebc0b279.jpg"
                alt="О компании"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-300">Полный спектр услуг для киноманов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Package",
                title: "Готовые коллекции",
                description: "Тематические сборники по жанрам и эпохам"
              },
              {
                icon: "Palette",
                title: "Персональные сборники",
                description: "Создание коллекций по вашим предпочтениям"
              },
              {
                icon: "Search",
                title: "Поиск редких кадров",
                description: "Находим эксклюзивные кадры из любых фильмов"
              },
              {
                icon: "Truck",
                title: "Доставка по миру",
                description: "Быстрая и безопасная доставка в любую точку мира"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-slate-800/80 border-slate-700 text-center hover:border-orange-500/50 transition-all hover-scale">
                <CardHeader>
                  <Icon name={service.icon} size={48} className="text-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-slate-300">Готовы обсудить вашу следующую коллекцию?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Icon name="Mail" size={24} className="text-orange-500" />
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-slate-300">info@cineframes.ru</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={24} className="text-orange-500" />
                <div>
                  <div className="font-semibold text-white">Телефон</div>
                  <div className="text-slate-300">+7 (495) 123-45-67</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" size={24} className="text-orange-500" />
                <div>
                  <div className="font-semibold text-white">Адрес</div>
                  <div className="text-slate-300">Москва, ул. Кинематографистов, 15</div>
                </div>
              </div>
            </div>
            <Card className="bg-slate-800/80 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    className="bg-slate-700 border-slate-600 text-white px-4 py-2 rounded-lg" 
                    placeholder="Имя" 
                  />
                  <input 
                    className="bg-slate-700 border-slate-600 text-white px-4 py-2 rounded-lg" 
                    placeholder="Email" 
                  />
                </div>
                <textarea 
                  className="w-full bg-slate-700 border-slate-600 text-white px-4 py-2 rounded-lg" 
                  rows={4} 
                  placeholder="Сообщение"
                ></textarea>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-6 border-t border-slate-700/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Film" size={24} className="text-orange-500" />
              <span className="text-xl font-bold text-white">CineFrames</span>
            </div>
            <div className="text-slate-400 text-center md:text-right">
              © 2024 CineFrames. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;