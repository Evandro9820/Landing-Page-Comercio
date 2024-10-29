import { AcademicCapIcon, RocketLaunchIcon, TrophyIcon } from "@heroicons/react/24/solid";

function ServicesSection() {
  const services = [
    {
      icon: <RocketLaunchIcon className="h-10 w-10 text-blue-400" />,
      title: "Boost de Elo",
      description:
        "Suba de ranking rapidamente com a ajuda de jogadores profissionais.",
    },
    {
      icon: <TrophyIcon className="h-10 w-10 text-blue-400" />,
      title: "Coaching Personalizado",
      description:
        "Aprimore suas habilidades com sessões de coaching adaptadas ao seu estilo.",
    },
    {
      icon: <AcademicCapIcon className="h-10 w-10 text-blue-400" />,
      title: "Consultoria de Jogo",
      description:
        "Receba orientações estratégicas para alcançar melhores resultados.",
    },
  ];

  return (
    <section className="bg-gray-900 py-12" id="servicos">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Nossos Serviços</h2>
        <p className="text-lg text-gray-400 mb-8">
          Oferecemos uma variedade de serviços para melhorar sua experiência no jogo e ajudá-lo a alcançar o próximo nível.
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
