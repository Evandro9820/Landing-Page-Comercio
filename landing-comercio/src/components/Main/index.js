import ServiceImage from "../../assets/cat1.jpg"; // Alterar para uma imagem mais relevante

function Main() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <figure className="overflow-hidden rounded-lg">
            <img
              src={ServiceImage}
              alt="Imagem ilustrativa dos serviços de elojob"
              className="w-full h-auto max-w-md mx-auto"
            />
            <figcaption className="text-center mt-2 text-sm text-gray-400">
              Imagem ilustrativa dos nossos serviços
            </figcaption>
          </figure>
          <article>
            <h2 className="text-3xl font-bold mb-4">Sobre nossos Serviços</h2>
            <p className="text-lg mb-4">
              No{" "}
              <span className="font-semibold text-blue-500">DARK SERVICES</span>
              , oferecemos uma experiência de elojob segura e profissional.
              Desde impulsionar seu ranqueamento até consultoria personalizada,
              nosso time está pronto para ajudar.
            </p>
            <p className="text-lg mb-6">
              Conte com nossa equipe para oferecer o melhor suporte e garantir
              resultados rápidos e confiáveis. Veja nossos pacotes e descubra
              como podemos ajudar você a alcançar suas metas.
            </p>
            <a
              href="#planos"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
            >
              Comece Agora
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Main;
