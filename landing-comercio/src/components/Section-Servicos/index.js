import {
  RocketLaunchIcon,
  TrophyIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

function ServicesSection() {
  const services = [
    {
      icon: <RocketLaunchIcon className="h-10 w-10 text-blue-400" />,
      title: "Boost de Elo Rápido",
      description:
        "Com o elojob, jogadores profissionais ajudam você a alcançar o ranking desejado de maneira rápida e segura.",
    },
    {
      icon: <TrophyIcon className="h-10 w-10 text-blue-400" />,
      title: "Melhore Seu Ranking",
      description:
        "Suba nas classificações dos jogos mais populares, como Honor of Kings e Mobile Legends, e alcance novos patamares no jogo.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10 text-blue-400" />,
      title: "Segurança e Confidencialidade",
      description:
        "Garantimos segurança total em nossos serviços de elojob, com métodos profissionais para manter sua conta protegida.",
    },
  ];

  return (
    <section className="bg-gray-900 py-12" id="servicos">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Nossos Serviços</h2>
        <p className="text-lg text-gray-400 mb-8">
          Oferecemos serviços de elojob para os principais jogos MOBA como Honor
          of Kings e Mobile Legends. Conquiste o ranking dos seus sonhos com
          profissionais qualificados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <a
                href="#"
                className="inline-block px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Saiba Mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
