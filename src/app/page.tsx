'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  return (
    <>
      <Swiper
        className="swiper-container swiper-hero dots-over relative z-10"
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 7000 }}
        pagination={{ clickable: true }}
        navigation
        loop
      >
        <SwiperSlide
          style={{ backgroundImage: "url('/img/homepage/homepage1.jpg')" }}
          className="bg-overlay bg-overlay-400 bg-image !h-[750px] bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-['']"
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
          className="bg-overlay bg-overlay-400 bg-image !h-[750px] bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-['']"
        >
          <div className="container !h-full">
            <div className="mx-[-15px] flex !h-full flex-wrap">
              <div className="!mx-auto w-full max-w-full flex-[0_0_auto] justify-center self-center px-[15px] !text-center md:w-11/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12">
                <h2 className="font-great-vibes animate__animated animate__slideInDown animate__delay-500ms mb-4 text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] text-white xl:text-[2.8rem]">
                  Notre philosophie du vin
                </h2>
                <p className="lead animate__animated animate__slideInRight animate__delay-1s mb-7 text-[1.15rem] leading-normal text-white">
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
          className="bg-overlay bg-overlay-400 bg-image !h-[750px] bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-['']"
        >
          <div className="container !h-full">
            <div className="mx-[-15px] flex !h-full flex-wrap">
              <div className="w-full max-w-full flex-[0_0_auto] items-start justify-center self-center px-[15px] text-center md:!ml-[8.33333333%] md:w-10/12 lg:!ml-0 lg:w-7/12 lg:text-left xl:w-6/12 xl:text-left">
                <h2 className="font-great-vibes animate__animated animate__slideInDown animate__delay-500ms mb-4 text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] text-white xl:text-[2.8rem]">
                  À votre service
                </h2>
                <p className="lead animate__animated animate__slideInRight animate__delay-1s mb-7 text-[1.15rem] leading-normal text-white">
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
      </Swiper>
      <section className="wrapper">
        <div className="container pb-[4.5rem] pt-14 md:pb-24 md:pt-[4.5rem] lg:pb-24 lg:pt-[4.5rem] xl:pb-24 xl:pt-[4.5rem]">
          <div className="mx-[-15px] mt-[-30px] flex flex-wrap items-center md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px]">
            <div className="!mx-auto w-full max-w-full flex-[0_0_auto] px-[15px] md:w-8/12 lg:w-6/12 lg:px-[20px] xl:w-6/12 xl:px-[35px]">
              <div className="img-mask mask-1">
                <Image src="/img/homepage/homepage4.jpg" width="800" height="800" alt="Les terroirs" />
              </div>
            </div>
            <div className="w-full max-w-full flex-[0_0_auto] px-[15px] lg:w-6/12 lg:px-[20px] xl:w-6/12 xl:px-[35px]">
              <h2 className="font-great-vibes text-gold mb-5 text-[calc(1.295rem_+_0.54vw)] font-semibold !leading-[1.25] tracking-[normal] xl:text-[2.5rem]">
                Les Terroirs
              </h2>
              <p className="!mb-6">
                Les vins que nous vous proposons sont issus d’une viticulture réfléchie. Une importance particulière est
                accordée au respect des terroirs. Nous élevons la plupart des appellations d’origine contrôlées (AOC)
                bourguignonnes et bordelaises avec autant de plaisir. <br />
                <br />
                Notre souci permanent est de vous offrir des vins élégants, fins et structurés. Des vins qui respectent
                le terroir de leurs villages et qui, tant durant leur vinification que durant leur élevage en cuve et/ou
                en fûts de chêne, seront travaillés de manière à ce qu’ils vous donnent le meilleur d’eux-mêmes. <br />
                <br />
                Car n’oublions pas que pour faire du bon vin, il faut avant toute autre chose du bon raisin et que
                respecter la nature est le meilleur moyen de transmettre de génération en génération un outil de travail
                performant.
              </p>
            </div>
          </div>
          <div className="mx-[-15px] mt-[-30px] flex flex-wrap !text-center md:mt-0 lg:mx-[-20px] lg:mt-0 xl:mx-[-35px] xl:mt-0">
            <Link
              href="/qui-sommes-nous"
              className="w-full max-w-full flex-[0_0_auto] px-[15px] sm:mt-[30px] md:w-6/12 lg:w-4/12 lg:px-[20px] xl:w-4/12 xsm:mt-[30px]"
            >
              <i className="text-gold uil uil-home text-[2.6rem] hover:text-[#7e664c]" />
              <h4 className="font-montserrat">GITE</h4>
              <p className="!mb-2 text-[#60697b] hover:text-[#b2936d]">
                Gîte de charme, 4 chambres pour 8 personnes à Nuits-Saint-Georges
              </p>
            </Link>
            <Link
              href="/nos-vins"
              className="w-full max-w-full flex-[0_0_auto] px-[15px] sm:mt-[30px] md:w-6/12 lg:w-4/12 lg:px-[20px] xl:w-4/12 xsm:mt-[30px]"
            >
              <i className="text-gold uil uil-glass-martini text-[2.6rem] hover:text-[#7e664c]" />
              <h4 className="font-montserrat">NOS VINS</h4>
              <p className="!mb-2 text-[#60697b] hover:text-[#b2936d]">
                Les vins que nous vous proposons sont issus d’une viticulture réfléchie.
              </p>
            </Link>
            <Link
              href="/qui-sommes-nous"
              className="w-full max-w-full flex-[0_0_auto] px-[15px] sm:mt-[30px] md:w-6/12 lg:w-4/12 lg:px-[20px] xl:w-4/12 xsm:mt-[30px]"
            >
              <i className="text-gold uil uil-trees text-[2.6rem] hover:text-[#7e664c]" />
              <h4 className="font-montserrat">NOS VIGNES</h4>
              <p className="!mb-2 text-[#60697b] hover:text-[#b2936d]">
                Domaine Boyer-Bouanich Propriétaire récoltant, à Meursault
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
