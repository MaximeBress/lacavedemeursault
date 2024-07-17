export default function Legal() {
  return (
    <>
      <div
        className="swiper-slide bg-overlay bg-overlay-400  bg-image !h-[200px] bg-[#21262c] !bg-cover !bg-[center_center] opacity-100 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.4)] before:content-['']"
        data-image-src="/img/illustration/header_bg.jpg"
      />
      <section className="wrapper">
        <div className="container p-16 md:p-20 lg:p-20 xl:p-20">
          <h1 className="font-montserrat mb-5">MENTIONS LÉGALES</h1>
          <p>
            <strong>Dénomination sociale :</strong> MNH et Cie S.A.R.L.
            <br />
            <strong>Siège social :</strong> 20, chemin des Ronces 21190 Meursault
            <br />
            <strong>Tél. :</strong> +33(0)80.62.32.53
            <br />
            <strong>E-mail :</strong> mnh.tiroul@gmail.com
            <br />
            <strong>Site web :</strong> www.lacavedemeursault.com
          </p>
        </div>
      </section>
    </>
  );
}
