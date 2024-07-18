'use client';

import { Wine } from '@/typing/wine';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderWines = ({ wines, type }: { wines: Wine[]; type: string }) => (
  <Swiper
    modules={[Pagination, Navigation]}
    pagination={{ clickable: true }}
    className="swiper-container blog grid-view !mb-6"
    spaceBetween={30}
    slidesPerView={5}
    navigation
  >
    {wines.map((wine: Wine) => (
      <SwiperSlide key={wine.slug}>
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
            <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full bg-[rgba(30,34,40,.2)] p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
              <h5 className="absolute left-0 top-2/4 !mb-0 w-full translate-y-[-80%] p-[.75rem_1rem]">
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
              <Link href={`/nos-vins/${type}/${wine.slug}`} className="text-[#343f52] hover:text-[#816a4c]">
                {wine.name}
              </Link>
            </h2>
            <p>
              <Link href={`/nos-vins/${type}/${wine.slug}`} className="text-[#aab0bc] hover:text-[#816a4c]">
                {wine.shortDescription}
              </Link>
            </p>
          </div>
        </article>
      </SwiperSlide>
    ))}
  </Swiper>
);
export default SliderWines;
