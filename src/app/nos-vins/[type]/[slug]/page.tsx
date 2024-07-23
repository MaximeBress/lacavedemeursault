import Image from 'next/image';
import Link from 'next/link';
import fs from 'node:fs';

import { Designation } from '@/app/typing/designation';
import { Wine } from '@/app/typing/wine';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const jsonWines = fs.readFileSync('src/app/datas/wines.json', 'utf8');
  const wines: Wine[] = JSON.parse(jsonWines);

  return wines.map((wine) => ({
    slug: wine.slug,
    type: wine.type
  }));
}

export function generateMetadata({ params: { slug } }: Props) {
  const jsonWines = fs.readFileSync('src/app/datas/wines.json', 'utf8');
  const wine: Wine = JSON.parse(jsonWines).find((wine: Wine) => wine.slug === slug);

  return {
    title: wine.name,
    description: wine.shortDescription
  };
}

export default function WinePage({ params: { slug } }: Props) {
  const jsonDesignation = fs.readFileSync('src/app/datas/designation.json', 'utf8');
  const jsonWines = fs.readFileSync('src/app/datas/wines.json', 'utf8');
  const wine: Wine = JSON.parse(jsonWines).find((wine: Wine) => wine.slug === slug);
  const designation: Designation = JSON.parse(jsonDesignation).find(
    (designation: Designation) => designation.slug === wine.type
  );

  return (
    <div className="wrapper !bg-[#ffffff]">
      <figure className="!mb-8 !rounded-[.4rem] md:!mb-[3.5rem] lg:!mb-[3.5rem] xl:!mb-[3.5rem]">
        <Image src="/img/illustration/vineyard5.jpg" alt={wine.name} width={3000} height={600} />
      </figure>
      <div className="xl:!pb -24 container !pb-[4.5rem] md:!pb-24  lg:!pb-24">
        <section className="wrapper !bg-[#ffffff]">
          <div className="container pb-[4.5rem]">
            <div className="mx-[-15px] mt-[-30px] flex flex-wrap items-center md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px]">
              <div className="!mx-auto mt-[30px] w-full max-w-full flex-[0_0_auto] px-[15px] md:w-8/12 lg:w-6/12 lg:px-[20px] xl:w-6/12 xl:px-[35px]">
                <div className="img-mask">
                  <Image src="/img/wines/pommard.jpg" alt={wine.name} width={400} height={200} />
                </div>
              </div>
              <div className="mt-[30px] w-full max-w-full flex-[0_0_auto] px-[15px] lg:w-6/12 lg:px-[20px] xl:w-6/12 xl:px-[35px]">
                <h2 className="font-great-vibes text-gold text-[calc(1.295rem_+_0.54vw)] font-semibold !leading-[1.25] tracking-[normal] xl:text-[1.7rem]">
                  {wine.name} {wine.vintage && `- ${wine.vintage}`} {wine.grapeVariety && `- ${wine.grapeVariety}`}
                </h2>
                <h4 className="font-montserrat mb-5 mt-2">{wine.floors && `Sols ${wine.floors}`}</h4>
                <p className="!mb-6" dangerouslySetInnerHTML={{ __html: wine.description }} />
                {wine.winemakingMethod && (
                  <>
                    <h3 className="font-montserrat !text-[1.15rem] font-semibold !leading-[1.4]">
                      MÉTHODE DE VINIFICATION
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: wine.winemakingMethod }} />
                  </>
                )}
                {wine.tasting && (
                  <>
                    <h3 className="font-montserrat !text-[1.15rem] font-semibold !leading-[1.4]">Dégustation</h3>
                    <p dangerouslySetInnerHTML={{ __html: wine.tasting }} />
                  </>
                )}
                {wine.pairings && (
                  <>
                    <h3 className="font-montserrat !text-[1.15rem] font-semibold !leading-[1.4]">Accords Met et vin</h3>
                    <p dangerouslySetInnerHTML={{ __html: wine.pairings }} />
                  </>
                )}
                <Link href={`/nos-vins/${wine.type}`} className="btn btn-outline-primary-dark mt-2 !rounded-[50rem]">
                  <span>Retour vers les {designation.name}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
