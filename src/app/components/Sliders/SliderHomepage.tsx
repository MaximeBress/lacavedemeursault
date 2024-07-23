'use client';

import Link from 'next/link';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderHomepage = () => {
  return (
    <Swiper
      className="swiper-container swiper-hero dots-over relative z-10"
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      effect={'fade'}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 7000 }}
      pagination={{ clickable: true, el: '.swiper-pagination' }}
      navigation={{
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      loop
    >
      <SwiperSlide
        style={{ backgroundImage: "url('/img/homepage/homepage1.jpg')" }}
        className="bg-overlay bg-overlay-400 bg-image bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-[''] lg:!h-[750px]"
      >
        <div className="container !h-full">
          <div className="mx-[-15px] flex !h-full flex-wrap">
            <div className="w-full max-w-full flex-[0_0_auto] items-start justify-center self-center px-[15px] text-center md:!ml-[8.33333333%] md:w-10/12 lg:!ml-[41.66666667%] lg:w-7/12 lg:text-left xl:!ml-[50%] xl:w-6/12 xl:text-left xxl:!ml-[50%] xxl:w-5/12">
              <h2 className="font-great-vibes animate__animated animate__slideInDown animate__delay-500ms mb-4 text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] text-white xl:text-[3.8rem]">
                Vivre d’amour et de Vins Fins …
              </h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: "url('/img/homepage/homepage2.jpg')" }}
        className="bg-overlay bg-overlay-400 bg-image bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-[''] lg:!h-[750px]"
      >
        <div className="container !h-full">
          <div className="mx-[-15px] flex !h-full flex-wrap">
            <div className="!mx-auto w-full max-w-full flex-[0_0_auto] justify-center self-center px-[15px] !text-center md:w-11/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12">
              <h2 className="font-great-vibes animate__animated animate__slideInDown animate__delay-500ms mb-4 text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] text-white xl:text-[2.8rem]">
                Notre philosophie du vin
              </h2>
              <p className="lead animate__animated animate__slideInRight animate__delay-1s mb-7 leading-normal text-white lg:text-[1.15rem] xl:text-[1.15rem] xxl:text-[1.15rem]">
                Nous partageons avec notre équipe l’envie d’offrir à notre clientèle les meilleurs vins de Bourgogne,
                associés à un service personnalisé.
              </p>
              <div className="animate__animated animate__slideInUp animate__delay-1500ms">
                <Link
                  href="/nos-vins"
                  className="btn btn-lg btn-outline-white !rounded-[50rem] !border-[2px] !border-white bg-[#ffffff] !text-white hover:border-white hover:bg-[#ffffff] hover:!text-[#343f52] focus:shadow-[rgba(255,255,255,1)] active:border-white active:bg-[#ffffff] active:!text-[#343f52] disabled:border-white disabled:bg-transparent disabled:text-white"
                >
                  Voir nos vins
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: "url('/img/homepage/homepage3.jpg')" }}
        className="bg-overlay bg-overlay-400 bg-image bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-[''] lg:!h-[750px]"
      >
        <div className="container !h-full">
          <div className="mx-[-15px] flex !h-full flex-wrap">
            <div className="w-full max-w-full flex-[0_0_auto] items-start justify-center self-center px-[15px] md:!ml-[8.33333333%] md:w-10/12 lg:!ml-0 lg:w-7/12 lg:text-left xl:w-6/12 xl:text-left">
              <h2 className="font-great-vibes animate__animated animate__slideInDown animate__delay-500ms mb-4 text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] text-white xl:text-[2.8rem]">
                À votre service
              </h2>
              <p className="lead animate__animated animate__slideInRight animate__delay-1s mb-7 leading-normal text-white lg:text-[1.15rem] xl:text-[1.15rem] xxl:text-[1.15rem]">
                Vous êtes unique, c’est pourquoi nos vins et notre service le sont également. Que vous soyez livrés en
                fûts ou en bouteilles, notre seul désir : répondre à vos besoins.
                <br />
                Notre souci majeur est d’apprendre à mieux vous connaître pour mieux vous servir. A l’inverse, ce site
                devrait vous permettre de découvrir qui nous sommes.
              </p>
              <div className="animate__animated animate__slideInUp animate__delay-1500ms">
                <Link
                  href="/qui-sommes-nous"
                  className="btn btn-lg btn-outline-white !rounded-[50rem] !border-[2px] !border-white bg-[#ffffff] !text-white hover:border-white hover:bg-[#ffffff] hover:!text-[#343f52] focus:shadow-[rgba(255,255,255,1)] active:border-white active:bg-[#ffffff] active:!text-[#343f52] disabled:border-white disabled:bg-transparent disabled:text-white"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div className="swiper-controls">
        <div className="swiper-navigation">
          <div className="swiper-button swiper-button-prev" />
          <div className="swiper-button swiper-button-next" />
        </div>
        <div className="swiper-pagination" />
      </div>
    </Swiper>
  );
};

export default SliderHomepage;
