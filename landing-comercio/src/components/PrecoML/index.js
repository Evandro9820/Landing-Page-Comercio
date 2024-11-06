import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardPreco from "../Card-Preco/";

function PrecoMobileLegends() {
  const pricingPlans = [
    {
      title: "Plano Básico ML",
      price: "R$ 20,00",
      benefits: ["Qualquer Elo até Mestre"],
    },
    {
      title: "Plano Avançado ML",
      price: "R$ 35,00",
      benefits: ["Boost de Elo Mestre até Lendário"],
    },
    {
      title: "Plano Profissional ML",
      price: "R$ 50,00",
      benefits: ["Boost de Elo Lendário até Mítico"],
    },
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Planos para Mobile Legends</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {pricingPlans.map((plan, idx) => (
            <SwiperSlide key={idx}>
              <CardPreco
                title={plan.title}
                price={plan.price}
                benefits={plan.benefits}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PrecoMobileLegends;
