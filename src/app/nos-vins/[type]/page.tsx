import Link from 'next/link';
import fs from 'node:fs';

import SliderWines from '@/app/components/SliderWines';
import { Designation } from '@/app/typing/designation';
import { Wine } from '@/app/typing/wine';

export async function generateStaticParams() {
  const jsonDesignation = fs.readFileSync('src/app/datas/designation.json', 'utf8');

  const designations: Designation[] = JSON.parse(jsonDesignation);

  return designations.map((designation) => ({
    type: designation.slug
  }));
}

export default function WinePage({ params: { type } }: { params: { type: string } }) {
  const jsonDesignation = fs.readFileSync('src/app/datas/designation.json', 'utf8');
  const jsonWines = fs.readFileSync('src/app/datas/wines.json', 'utf8');
  const designation: Designation = JSON.parse(jsonDesignation).find(
    (designation: Designation) => designation.slug === type
  );
  const wines: Wine[] = JSON.parse(jsonWines).filter((wine: Wine) => wine.type === type);

  return (
    <>
      <div
        className="swiper-slide bg-overlay bg-overlay-400  bg-image !h-[750px] bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-['']"
        style={{ backgroundImage: "url('/img/illustration/vineyard3.jpg')" }}
      >
        <div className="container !h-full">
          <div className="mx-[-15px] flex !h-full flex-wrap">
            <div className="w-full max-w-full flex-[0_0_auto] items-start justify-center self-center px-[15px] md:!ml-[8.33333333%] md:w-10/12 lg:!ml-0 lg:w-8/12 lg:text-left xl:w-8/12 xl:text-left xxl:w-8/12">
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
            <SliderWines wines={wines} type={type} />
          </div>
        </div>
      </div>
    </>
  );
}
