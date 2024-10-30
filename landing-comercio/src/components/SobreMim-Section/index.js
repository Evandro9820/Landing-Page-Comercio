import ProfilePic from "../../assets/cat1.jpg"; // Imagem opcional

function AboutMeSection() {
  return (
    <section className="bg-gray-900 py-12" id="sobre-mim">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Seção de imagem */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={ProfilePic}
            alt="Imagem de perfil"
            className="rounded-lg shadow-lg w-64 h-64 object-cover border-4 border-blue-500"
          />
        </div>

        {/* Seção de texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-lg text-gray-300 mb-4">
            Olá! Meu nome é [Seu Nome], e eu sou um especialista em elojob com
            anos de experiência em jogos competitivos. Minha missão é ajudar
            jogadores a atingirem seu potencial máximo com dedicação e um
            atendimento personalizado.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Ao longo dos anos, desenvolvi uma abordagem única para aprimorar
            habilidades e proporcionar uma experiência de jogo segura e
            agradável para todos os meus clientes.
          </p>
          <p className="text-lg text-gray-300">
            Vamos trabalhar juntos para alcançar os seus objetivos e elevar seu
            jogo a novos patamares!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
