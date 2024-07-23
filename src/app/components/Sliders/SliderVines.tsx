'use client';

import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Vine = {
  name: string;
  nickName: string;
  image: string;
};

const SliderVines = () => {
  const vines: Vine[] = [
    {
      name: 'Monthelie',
      nickName: '« Les Sous-Roches »',
      image: '/img/vines/monthelie.png'
    },
    {
      name: 'Meursault Village',
      nickName: '« Les Charrons »',
      image: '/img/vines/meursault-village.png'
    },
    {
      name: 'Auxey-Duresses',
      nickName: '« Les Ruchottes »',
      image: '/img/vines/auxey-duresses.png'
    },
    {
      name: 'Meursault',
      nickName: '« Les Narvaux »',
      image: '/img/vines/meursault-les-narvaux.png'
    },
    {
      name: 'Savigny les Beaune 1er cru',
      nickName: '« Aux Fourneaux »',
      image: '/img/vines/savigny-les-beaune.png'
    },
    {
      name: 'Chorey-les-Beaune',
      nickName: '« Les Champs Piétants »',
      image: '/img/vines/chorey-les-beaune.png'
    }
  ];

  return (
    <Swiper
      className="swiper-container"
      modules={[Autoplay, Navigation]}
      spaceBetween={30}
      breakpoints={{
        768: {
          slidesPerView: 2
        },
        1280: {
          slidesPerView: 3
        }
      }}
      autoplay={{ delay: 3000 }}
      navigation={{
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      loop
    >
      {vines.map((vine, index) => (
        <SwiperSlide key={`vine-${index}`} className="group">
          <figure className="!mb-6">
            <Image
              className="h-auto max-w-full !rounded-[.4rem]"
              src={vine.image}
              alt={vine.name}
              width={500}
              height={500}
            />
          </figure>
          <div className="project-details flex flex-col justify-center">
            <div className="font-montserrat post-header text-center uppercase">
              <h2 className="h4">{vine.name}</h2>
              <div className="mb-[0.4rem] text-[0.7rem] font-bold tracking-[0.02rem] text-[#9499a3]">
                {vine.nickName}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-controls">
        <div className="swiper-navigation">
          <div className="swiper-button swiper-button-prev" />
          <div className="swiper-button swiper-button-next" />
        </div>
      </div>
    </Swiper>
  );
};

export default SliderVines;
