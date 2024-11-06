import HeroImage from "../../assets/HeroSection_image.jpeg"; // Altere para uma imagem relevante de gaming ou elojob

function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex items-center">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={HeroImage}
          alt="Imagem de fundo da seção hero"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto relative px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Alcance o Topo com{" "}
          <span className="text-blue-500">DARK SERVICES</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Conquiste novos patamares nos jogos com nosso serviço de elojob
          profissional, seguro e eficiente.
        </p>
        <a
          href="#planos"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Veja nossos Planos
        </a>
        <p className="mt-4 text-gray-300 text-sm">
          Serviço confiável e com entrega rápida
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
