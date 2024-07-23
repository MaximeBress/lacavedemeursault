import SliderVines from '@/app/components/Sliders/SliderVines';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Découvrez notre équipe et notre expertise en vins de Meursault',
  description:
    'La Cave de Meursault, c’est bien plus qu’une boutique en ligne de vins de Bourgogne. Découvrez notre histoire, notre savoir-faire et notre amour pour les crus de Meursault.'
};

export default function Us() {
  return (
    <>
      <section className="wrapper">
        <div
          className="swiper-slide bg-overlay bg-overlay-400 bg-image !h-[750px] bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-['']"
          style={{ backgroundImage: "url('/img/illustration/vineyard4.jpg')" }}
        >
          <div className="container !h-full">
            <div className="mx-[-15px] flex !h-full flex-wrap">
              <div className="w-full max-w-full flex-[0_0_auto] items-start justify-center self-center px-[15px] md:!ml-[8.33333333%] md:w-10/12 lg:!ml-0 lg:w-10/12 lg:text-left xl:w-8/12 xl:text-left xxl:w-8/12">
                <h2 className="font-great-vibes animate__animated animate__slideInDown animate__delay-500ms mb-4 text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] text-white xl:text-[2rem]">
                  Propriétaires récoltants négociants éleveurs depuis 3 générations
                </h2>
                <p className="lead animate__animated animate__slideInRight animate__delay-1s mb-7  leading-normal text-white lg:text-[1rem] xl:text-[1rem] xxl:text-[1rem]">
                  Après nos pères, c’est aujourd’hui au tour de nos fils de se lancer et de se préparer à assurer la
                  continuité de la maison Albert David et Fils.
                  <br />
                  Antoine, Alexandre ont donc rejoint notre équipe, tout comme David, c’est notamment le contact humain
                  et la satisfaction de la clientèle qui leur tient le plus à cœur.
                  <br />
                  Pour vous satisfaire, notre souci permanent est de vous offrir des vins élégants, fins et structurés
                  qui respectent le terroir de leurs villages.
                  <br />
                  Durant la vinification et l’élevage en cuve et/ou en fûts de chêne, ils sont travaillés de manière à
                  ce qu’ils vous donnent le meilleur d’eux-mêmes.
                  <span className="hidden lg:flex">
                    <br />
                    Les vins que nous vous proposons sont issus d’une viticulture raisonnée, car respecter la nature est
                    le meilleur moyen de transmettre de génération en génération un outil de travail performant.
                    <br />
                    La satisfaction du client passe aussi par un service impeccable.
                    <br />
                    C’est pourquoi nous avons choisi d’assurer nous même la livraison de vos vins.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="container pb-16 pt-20 md:pb-20 md:pt-28 lg:pb-20 lg:pt-28 xl:pb-20 xl:pt-28">
          <div className="mx-[-15px] mt-[-50px] flex flex-wrap items-center lg:mx-[-20px] xl:mx-[-35px]">
            <div className="!relative mt-[50px] w-full max-w-full flex-[0_0_auto] px-[15px] lg:!order-2 lg:w-6/12 lg:px-[20px] xl:!order-2 xl:w-6/12 xl:px-[35px]">
              <div
                className="shape bg-dot primary rellax absolute z-[1] !h-[10rem] !w-[6rem] bg-[radial-gradient(#b2936d_2px,transparent_2.5px)] opacity-50"
                data-rellax-speed="1"
                style={{ top: '3rem', left: '5.5rem' }}
              ></div>
              <div className="overlap-grid-2 !relative flex flex-wrap">
                <div className="item md:z-[3] md:ml-[30%] md:mt-0 md:w-[70%] lg:z-[3] lg:ml-[30%] lg:mt-0 lg:w-[70%] xl:z-[3] xl:ml-[30%] xl:mt-0 xl:w-[70%]">
                  <figure className="relative !rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]">
                    <Image
                      className="!rounded-[.4rem]"
                      width={500}
                      height={500}
                      src="/img/team/team2.jpg"
                      alt="team1"
                    />
                  </figure>
                </div>
                <div className="item md:z-[4] md:ml-0 md:mt-[-45%] md:w-[55%] lg:z-[4] lg:ml-0 lg:mt-[-45%] lg:w-[55%] xl:z-[4] xl:ml-0 xl:mt-[-45%] xl:w-[55%]">
                  <figure className="relative !rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]">
                    <Image
                      className="!rounded-[.4rem]"
                      width={500}
                      height={500}
                      src="/img/team/team1.jpg"
                      alt="team2"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="mt-[50px] w-full max-w-full flex-[0_0_auto] px-[15px] lg:w-6/12 lg:px-[20px] xl:w-6/12 xl:px-[35px]">
              <h2 className="font-great-vibes text-gold !mb-3 text-[calc(1.305rem_+_0.66vw)] font-bold leading-[1.3] xl:text-[1.8rem]">
                Notre équipe
              </h2>
              <p className="lead !text-[1.05rem] font-medium !leading-[1.6]">
                Au domaine, toutes les décisions sont prises en famille, tant au niveau de l’élaboration des vins que du
                choix des évènements pour présenter notre production.
              </p>
              <p className="!mb-6">
                Néanmoins, à chacun ses préférences : David est en contact direct avec la clientèle alors que Jean et
                Jean-Michel s’occupent plus de la partie viticulture-vinification-élevage.
                <br />
                Même si la maison familiale reste à Nuits Saint Georges et qu’une partie des vins de négoce y sont
                encore vinifiés et élevés, nous avons choisi de regrouper sur un seul site d’exploitation, à Meursault,
                l’ensemble des activités du Domaine Boyer Bouanich.
                <br />
                C’est là qu’une salle de dégustation avec vue panoramique sur le vignoble de Meursault vous attend pour
                partager le verre de l’amitié.
                <br />
                Pour nos amis belges que nous servons depuis plus de 50 ans et qui ne peuvent se rendre en Bourgogne,
                nous avons créé la Grange à Bacchus. Nous y organisons régulièrement des dégustations pour lesquelles
                notre traiteur concocte un magnifique buffet froid aussi frais que varié.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper !bg-[#fff6e9]">
        <div className="overflow-hidden">
          <div className="container py-[4.5rem] md:!py-24 lg:!py-24 xl:!py-24">
            <div className="mx-[-15px] flex flex-wrap">
              <div className="!mx-auto w-full max-w-full flex-[0_0_auto] px-[15px] !text-center lg:w-9/12 xl:w-8/12 xxl:w-7/12">
                <i className="icn-flower text-[calc(1.275rem_+_0.3vw)] text-[#004c25] opacity-25 before:content-['\e907'] xl:!text-[1.5rem]"></i>
                <h1 className="font-great-vibes !mt-2 mb-10 !text-center text-[calc(1.295rem_+_0.54vw)] font-semibold !leading-[1.25] tracking-[normal] xl:text-[1.7rem]">
                  Nos Vignes
                </h1>
              </div>
            </div>

            <SliderVines />
          </div>
        </div>
      </section>
    </>
  );
}
