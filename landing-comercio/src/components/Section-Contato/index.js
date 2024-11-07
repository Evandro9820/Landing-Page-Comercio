import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../Firebase";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [modalMessage, setModalMessage] = useState(null); // Estado para mensagens de modal
  const [isModalVisible, setIsModalVisible] = useState(false); // Controle da visibilidade da modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), formData);
      setModalMessage("Mensagem enviada com sucesso!");
      setIsModalVisible(true); // Exibe a modal de sucesso
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setModalMessage("Erro ao enviar a mensagem. Tente novamente.");
      setIsModalVisible(true); // Exibe a modal de erro
      console.error("Erro ao enviar dados: ", error);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false); // Fecha a modal
    setModalMessage(null); // Limpa a mensagem da modal
  };

  return (
    <section className="bg-gray-900 py-12" id="contato">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Contato
        </h2>

        {/* Formulário de Contato */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>

      {/* Modal de Confirmação */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <p className="text-gray-800 mb-4">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactSection;
