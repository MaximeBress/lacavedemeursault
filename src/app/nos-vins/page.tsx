import { Designation } from '@/app/typing/designation';
import Image from 'next/image';
import Link from 'next/link';
import * as fs from 'node:fs';

export default function Wines() {
  const jsonString = fs.readFileSync('src/app/datas/designation.json', 'utf8');
  const designations: Designation[] = JSON.parse(jsonString);

  return (
    <>
      <div
        className="swiper-slide bg-overlay bg-overlay-400  bg-image !h-[750px]  bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-['']"
        style={{ backgroundImage: "url('/img/illustration/vineyard.jpg')" }}
      >
        <div className="container !h-full">
          <div className="mx-[-15px] flex !h-full flex-wrap">
            <div className="w-full max-w-full flex-[0_0_auto] items-start justify-center self-center px-[15px] text-center md:!ml-[8.33333333%] md:w-10/12 lg:!ml-0 lg:w-8/12 lg:text-left xl:w-8/12 xl:text-left xxl:w-8/12">
              <h2 className="font-great-vibes animate__animated animate__slideInDown animate__delay-500ms mb-4 text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] text-white xl:text-[2rem]">
                Nos vins
              </h2>
              <p className="lead animate__animated animate__slideInRight animate__delay-1s mb-7 text-[1rem] leading-normal text-white">
                Nous élevons la plupart des appellations d’origine contrôlées (AOC) bourguignonnes avec autant de
                plaisir. Qu’il s’agisse d’une AOC régionale ou village, d’un Premier Cru ou d’un prestigieux Grand Cru,
                notre souci permanent est de vous offrir des vins élégants, fins et structurés. Des vins qui respectent
                le terroir de leurs villages et qui, tant durant leur vinification que durant leur élevage en cuve et/ou
                en fûts de chêne, seront travaillés de manière à ce qu’ils vous donnent le meilleur d’eux-mêmes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-[4.5rem] pt-9 md:pb-24 md:pt-12 lg:pb-24 lg:pt-12 xl:pb-24 xl:pt-12">
        <div className="projects-overflow mb-10 md:!mt-10 lg:!mb-20 lg:!mt-10 xl:!mb-20 xl:!mt-10">
          <div className="project item">
            <div className="mx-[-15px] flex flex-wrap">
              <figure className="w-full max-w-full flex-[0_0_auto] rounded px-[15px] lg:w-8/12 xl:!ml-[8.33333333%] xl:w-7/12">
                <Image
                  src={`/img/designation/${designations[0].image}`}
                  alt={designations[0].name}
                  width={800}
                  height={600}
                />
              </figure>
              <div
                className="project-details flex flex-col justify-center px-[15px]"
                style={{ right: '10%', bottom: '25%' }}
              >
                <div
                  className="card  rellax shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]"
                  data-rellax-xs-speed="0"
                  data-rellax-mobile-speed="0"
                >
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="post-header">
                      <h1 className="font-great-vibes text-gold post-title !mb-3 leading-[1.35]">
                        {designations[0].name}
                      </h1>
                    </div>
                    <div className="!relative">
                      <p dangerouslySetInnerHTML={{ __html: designations[0].shortDescription }} />
                      <Link
                        href={`/nos-vins/${designations[0].slug}`}
                        className="font-montserrat more hover text-[#b2936d] hover:text-[#b2936d] focus:text-[#b2936d]"
                      >
                        Voir les vins
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project item">
            <div className="mx-[-15px] flex flex-wrap">
              <figure className="w-full max-w-full flex-[0_0_auto] rounded px-[15px] lg:!ml-[41.66666667%] lg:w-7/12 xl:!ml-[41.66666667%] xl:w-6/12">
                <Image
                  src={`/img/designation/${designations[1].image}`}
                  alt={designations[1].name}
                  width={800}
                  height={600}
                />
              </figure>
              <div
                className="project-details flex flex-col justify-center px-[15px]"
                style={{ left: '18%', bottom: '25%' }}
              >
                <div
                  className="card rellax shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]"
                  data-rellax-xs-speed="0"
                  data-rellax-mobile-speed="0"
                >
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="post-header">
                      <h1 className="font-great-vibes text-gold post-title !mb-3 leading-[1.35]">
                        {designations[1].name}
                      </h1>
                    </div>
                    <div className="!relative">
                      <p dangerouslySetInnerHTML={{ __html: designations[1].shortDescription }} />
                      <Link
                        href={`/nos-vins/${designations[1].slug}`}
                        className="font-montserrat more hover text-[#b2936d] hover:text-[#b2936d] focus:text-[#b2936d]"
                      >
                        Voir les vins
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project item">
            <div className="mx-[-15px] flex flex-wrap">
              <figure className="w-full max-w-full flex-[0_0_auto] rounded px-[15px] lg:w-9/12 xl:!ml-[16.66666667%] xl:w-7/12">
                <Image
                  src={`/img/designation/${designations[2].image}`}
                  alt={designations[2].name}
                  width={800}
                  height={600}
                />
              </figure>
              <div
                className="project-details flex flex-col justify-center px-[15px]"
                style={{ right: '3%', bottom: '25%' }}
              >
                <div
                  className="card rellax shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]"
                  data-rellax-xs-speed="0"
                  data-rellax-mobile-speed="0"
                >
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="post-header">
                      <h1 className="font-great-vibes text-gold post-title !mb-3 leading-[1.35]">
                        {designations[2].name}
                      </h1>
                    </div>
                    <div className="!relative">
                      <p dangerouslySetInnerHTML={{ __html: designations[2].shortDescription }} />
                      <Link
                        href={`/nos-vins/${designations[2].slug}`}
                        className="font-montserrat more hover text-[#b2936d] hover:text-[#b2936d] focus:text-[#b2936d]"
                      >
                        Voir les vins
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project item">
            <div className="mx-[-15px] flex flex-wrap">
              <figure className="w-full max-w-full flex-[0_0_auto] rounded px-[15px] lg:!ml-[25%] lg:w-9/12 xl:!ml-[33.33333333%] xl:w-7/12">
                <Image
                  src={`/img/designation/${designations[3].image}`}
                  alt={designations[3].name}
                  width={800}
                  height={600}
                />
              </figure>
              <div
                className="project-details flex flex-col justify-center px-[15px]"
                style={{ left: '6%', bottom: '9%' }}
              >
                <div
                  className="card  rellax shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]"
                  data-rellax-xs-speed="0"
                  data-rellax-mobile-speed="0"
                >
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="post-header">
                      <h1 className="font-great-vibes text-gold post-title !mb-3 leading-[1.35]">
                        {designations[3].name}
                      </h1>
                    </div>
                    <div className="!relative">
                      <p dangerouslySetInnerHTML={{ __html: designations[3].shortDescription }} />
                      <Link
                        href={`/nos-vins/${designations[3].slug}`}
                        className="font-montserrat more hover text-[#b2936d] hover:text-[#b2936d] focus:text-[#b2936d]"
                      >
                        Voir les vins
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
