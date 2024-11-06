import ProfilePic from "../../assets/cat1.jpg"; // Imagem opcional

function AboutMeSection() {
  return (
    <section className="bg-gray-900 py-12" id="sobre-mim">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
        {/* Seção de imagem */}
        <div className="flex justify-center md:justify-end w-full md:w-1/3">
          <img
            src={ProfilePic}
            alt="Imagem de perfil"
            className="rounded-full shadow-lg w-48 h-48 object-cover border-4 border-blue-500"
          />
        </div>

        {/* Seção de texto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-lg text-gray-300 mb-4">
            Olá! Meu nome é dark_9820, e eu sou um especialista em elojob com
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
