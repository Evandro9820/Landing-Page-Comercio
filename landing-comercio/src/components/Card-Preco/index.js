import React from "react";

function CardPreco({ title, price, benefits }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-4xl font-bold text-blue-400 mb-4">{price}</p>
      <ul className="text-gray-400 mb-6 space-y-2">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center">
            <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="inline-block px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
        aria-label={`Escolher o plano ${title}`}
      >
        Escolher Plano
      </a>
    </div>
  );
}

export default CardPreco;
