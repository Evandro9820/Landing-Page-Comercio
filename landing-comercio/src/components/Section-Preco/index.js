function Preco_Section() {
  const pricingPlans = [
    {
      title: "Plano Básico",
      price: "R$ 49,99",
      benefits: [
        "Boost de Elo até Ouro",
        "Acesso a relatórios de progresso",
        "Suporte via chat",
      ],
    },
    {
      title: "Plano Avançado",
      price: "R$ 99,99",
      benefits: [
        "Boost de Elo até Diamante",
        "Relatórios detalhados",
        "Acesso prioritário ao suporte",
        "Coaching mensal",
      ],
    },
    {
      title: "Plano Profissional",
      price: "R$ 199,99",
      benefits: [
        "Boost de Elo até Mestre",
        "Relatórios personalizados",
        "Suporte 24/7",
        "Sessões de coaching semanais",
      ],
    },
  ];

  return (
    <section className="bg-gray-900 py-12" id="precos">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Nossos Planos</h2>
        <p className="text-lg text-gray-400 mb-8">
          Escolha o plano que melhor se adapta às suas necessidades de jogo e
          comece a evoluir!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {plan.title}
              </h3>
              <p className="text-4xl font-bold text-blue-400 mb-4">
                {plan.price}
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Escolher Plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Preco_Section;
