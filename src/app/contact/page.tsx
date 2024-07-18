import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <div
        className="swiper-slide bg-overlay bg-overlay-400 bg-image !h-[200px] bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-['']"
        style={{ backgroundImage: "url('/img/illustration/header_bg.jpg')" }}
      />
      <section className="wrapper">
        <div className="container pb-16 pt-20 md:pb-20 md:pt-28 lg:pb-20 lg:pt-28 xl:pb-20 xl:pt-28">
          <div className="mx-[-15px] flex flex-wrap">
            <div className="!mx-auto w-full max-w-full flex-[0_0_auto] px-[15px] xl:w-10/12">
              <div className="card">
                <div className="mx-0 flex flex-wrap items-center p-8 md:!p-10 lg:!px-[2.5rem] lg:!py-[3.5rem] xl:!px-[2.5rem] xl:!py-[3.5rem]">
                  <div className="w-full max-w-full flex-[0_0_auto] !self-stretch lg:w-6/12 xl:w-7/12">
                    <h3 className="font-montserrat !mb-3 text-[calc(1.305rem_+_0.66vw)] font-bold leading-[1.3] xl:text-[1rem]">
                      VOUS AVEZ UNE QUESTION ?
                    </h3>
                    <h2 className="text-gold font-montserrat !mb-8 text-[calc(1.305rem_+_0.66vw)] font-bold leading-[1.3] xl:pr-10 xl:text-[1.8rem]">
                      CONTACTEZ-NOUS
                    </h2>
                    <ContactForm />
                  </div>
                  <div className="w-full max-w-full flex-[0_0_auto] lg:w-6/12 lg:px-[3rem] xl:w-5/12 xl:px-[3rem]">
                    <div className="flex flex-row">
                      <div>
                        <div className="icon !mr-4 mt-[-0.25rem] text-[calc(1.265rem_+_0.18vw)] text-[#3f78e0] xl:text-[1.4rem]">
                          <i className="uil uil-location-pin-alt text-gold"></i>
                        </div>
                      </div>
                      <div className="!justify-start !self-start">
                        <h5 className="font-montserrat !mb-1">ADRESSE</h5>
                        <address className="mb-4 not-italic leading-[inherit]">
                          12A Rue du Maréchal de Lattre de Tassigny
                          <br className="hidden md:block lg:block xl:block" />
                          Meursault 21190
                        </address>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div>
                        <div className="icon !mr-4 mt-[-0.25rem] text-[calc(1.265rem_+_0.18vw)] text-[#3f78e0] xl:text-[1.4rem]">
                          <i className="uil uil-phone-volume text-gold"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-montserrat !mb-1">TÉLÉPHONE</h5>
                        <p>(+33) 07 85 98 78 92</p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div>
                        <div className="icon !mr-4 mt-[-0.25rem] text-[calc(1.265rem_+_0.18vw)] text-[#3f78e0] xl:text-[1.4rem]">
                          <i className="uil uil-clock text-gold"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-montserrat !mb-1">Horaires</h5>
                        <p className="!mb-0">
                          Lundi au Vendredi
                          <br />
                          9h-19h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="map map-full h-[350px]">
          <iframe
            style={{ width: '100%', height: '100%', border: 0 }}
            src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=12A Rue du Maréchal de Lattre de Tassigny Meursault 21190&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
      </section>
    </>
  );
}
