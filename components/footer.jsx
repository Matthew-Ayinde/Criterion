import Link from "next/link";
import React from "react";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <>
      <div className="bg-[#191919] text-white px-20">
      <div className="flex w-full flex-col lg:flex-row mb-16 pt-[120px]">
        <div className="w-1/2">
          <div className="w-2/3 uppercase italic text-4xl font-light">
            Stay up to date <br /> with our projects <br /> and developments
          </div>
        </div>
        <div className="w-1/2">
          Email Component
        </div>
      </div>

      <hr className="w-full text-white mb-28" />

      <div className="w-full flex flex-col lg:flex-row pb-32">
        <div className="w-1/2">
          <div className="flex lg:flex-row flex-col">
            <div className="flex flex-row lg:flex-col lg:mr-36">
              <div>HOME</div>
              <div>ABOUT US</div>
              <div>CONTACT US</div>
              <div>PROPERTIES</div>
            </div>
            <div className="flex flex-row lg:flex-col">
              <div>+2348058573915</div>
              <div>info@criterionhomesltd.com</div>
              <div>Machima Plaza, Mambolo Junction, </div>
              <div>Wuse Zone 2, FCT Abuja</div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-right">Image component</div>
        </div>
      </div>

      <div className="w-full h-auto bg-[#191919] pb-32">
          <Image
            src={"/footerLogo.svg"}
            width={1000}
            height={20}
            alt="car image"
          />
      </div>
    </div>
    <div className="bg-[#30352F] text-center w-full py-5 text-white">
      © Criterion Homes 2024 | All Rights Reserved
    </div>
    </>
  );
};

export default FooterComponent;
