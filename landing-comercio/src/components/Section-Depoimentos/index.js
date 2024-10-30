function Depoimentos_section() {
  const testimonials = [
    {
      quote:
        "Serviço incrível! Minha classificação subiu mais rápido do que eu esperava. Profissionalismo e competência totais!",
      author: "Lucas M.",
      role: "Cliente satisfeito",
    },
    {
      quote:
        "Foi uma ótima experiência. O serviço de coaching me ajudou a melhorar minhas habilidades. Recomendo a todos!",
      author: "Carla S.",
      role: "Jogadora",
    },
    {
      quote:
        "Eu não imaginava que pudesse subir de elo tão rápido. Serviço seguro e confiável!",
      author: "Bruno F.",
      role: "Gamer",
    },
  ];

  return (
    <section className="bg-gray-900 py-12" id="depoimentos">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Depoimentos de Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
              <div className="text-white font-semibold">
                {testimonial.author}
              </div>
              <div className="text-blue-400 text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos_section;
