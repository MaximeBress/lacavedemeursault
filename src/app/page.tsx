import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SliderHomepage from '@/app/components/Sliders/SliderHomepage';

export const metadata: Metadata = {
  title: 'La Cave de Meursault : Vins de Bourgogne d’exception',
  description:
    'La Cave de Meursault propose une sélection exceptionnelle de vins de Bourgogne. Découvrez nos crus de Meursault et commandez en ligne.'
};

export default function Home() {
  return (
    <>
      <SliderHomepage />
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
