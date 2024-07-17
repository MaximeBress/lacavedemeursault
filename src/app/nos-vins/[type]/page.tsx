import { Designation } from '@/typing/designation';
import { Wine } from '@/typing/wine';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'node:fs';

export default function WinePage({ params: { type } }: { params: { type: string } }) {
  const jsonDesignation = fs.readFileSync('src/datas/designation.json', 'utf8');
  const jsonWines = fs.readFileSync('src/datas/wines.json', 'utf8');
  const designation: Designation = JSON.parse(jsonDesignation).find(
    (designation: Designation) => designation.slug === type
  );
  const wines: Wine[] = JSON.parse(jsonWines).filter((wine: Wine) => wine.type === type);

  return (
    <>
      <div
        className="swiper-slide bg-overlay bg-overlay-400  bg-image !h-[750px] bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-['']"
        data-image-src="/img/illustration/vineyard3.jpg"
      >
        <div className="container !h-full">
          <div className="mx-[-15px] flex !h-full flex-wrap">
            <div className="w-full max-w-full flex-[0_0_auto] items-start justify-center self-center px-[15px] text-center md:!ml-[8.33333333%] md:w-10/12 lg:!ml-0 lg:w-8/12 lg:text-left xl:w-8/12 xl:text-left xxl:w-8/12">
              <h2 className="font-great-vibes animate__animated animate__slideInDown animate__delay-500ms mb-4 text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] text-white xl:text-[2rem]">
                {designation.name}
              </h2>
              <p
                className="lead animate__animated animate__slideInRight animate__delay-1s mb-7 text-[1rem] leading-normal text-white"
                dangerouslySetInnerHTML={{ __html: designation.description }}
              />
              <div className="animate__animated animate__slideInUp animate__delay-1500ms">
                <Link
                  href="/nos-vins"
                  className="btn btn-lg btn-outline-white !rounded-[50rem] !border-[2px] !border-white bg-[#ffffff] !text-white hover:border-white hover:bg-[#ffffff] hover:!text-[#343f52] focus:shadow-[rgba(255,255,255,1)] active:border-white active:bg-[#ffffff] active:!text-[#343f52] disabled:border-white disabled:bg-transparent disabled:text-white"
                >
                  Retour vers tous les vins
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="mx-[-15px] mt-[-50px] flex flex-wrap lg:mx-[-20px] lg:mt-0 xl:mx-[-35px] xl:mt-0">
          <div className="w-full max-w-full flex-[0_0_auto] px-[15px] sm:mt-[50px] md:mt-[50px]  xl:px-[35px] xsm:mt-[50px]">
            <div
              className="swiper-container blog grid-view !mb-6"
              data-margin="30"
              data-dots="true"
              data-items-lg="5"
              data-items-md="3"
              data-items-xs="1"
            >
              <div className="swiper">
                <div className="swiper-wrapper">
                  {wines.map((wine: Wine) => (
                    <div key={wine.slug} className="swiper-slide">
                      <article>
                        <figure className="overlay overlay-1 hover-scale group !mb-5 rounded">
                          <Link href={`/nos-vins/${type}/${wine.slug}`}>
                            <Image
                              className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                              src={`/img/wines/pommard.jpg`}
                              alt={wine.name}
                              width={400}
                              height={200}
                            />
                          </Link>
                          <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                            <h5 className="from-top absolute left-0 top-2/4 !mb-0 w-full translate-y-[-80%] p-[.75rem_1rem]">
                              En savoir plus
                            </h5>
                          </figcaption>
                        </figure>
                        <div className="post-header">
                          <div className="relative mb-[.4rem] inline-flex pl-[1.4rem] align-top text-[0.7rem] font-bold uppercase tracking-[0.02rem] before:absolute before:left-0 before:top-2/4 before:inline-block before:h-[0.05rem] before:w-3 before:translate-y-[-60%] before:bg-[#b2936d] before:content-['']">
                            <Link
                              href={`/nos-vins/${type}/${wine.slug}`}
                              className="font-montserrat text-gold hover:text-[#816a4c]"
                              rel="category"
                            >
                              {wine.grapeVariety} {wine.vintage && `- ${wine.vintage}`}
                            </Link>
                          </div>
                          <h2 className="post-title font-great-vibes !mb-3 !mt-1">
                            <Link
                              href={`/nos-vins/${type}/${wine.slug}`}
                              className="text-[#343f52] hover:text-[#816a4c]"
                            >
                              {wine.name}
                            </Link>
                          </h2>
                          <p>
                            <Link
                              href={`/nos-vins/${type}/${wine.slug}`}
                              className="text-[#aab0bc] hover:text-[#816a4c]"
                            >
                              {wine.shortDescription}
                            </Link>
                          </p>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
