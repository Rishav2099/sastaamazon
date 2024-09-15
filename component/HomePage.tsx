'use client'
import { useSuperbase } from "@/lib/superbase/hooks/useSuperbase";
import Image from "next/image";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CategoryWiseProduct from "./shared/CategoryWiseProduct";

const HomePage = () => {
  const { getMensClothing, mensProduct, getWomensClothing, WomensProduct } =
    useSuperbase();

  useEffect(() => {
    getMensClothing();
    getWomensClothing();
  }, []);

  // Slick Carousel Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Banner Carousel Section */}
      <div className="relative w-full">
        <Slider {...settings}>
          {/* Carousel Images */}
          <div>
            <Image
              src="https://thecosmiccircus.com/wp-content/uploads/2023/07/Marvels-Spiderman-2-banner-e1690742326962-640x336.webp"
              width={1920}
              height={600}
              className="w-full object-cover h-[300px] md:h-[450px] lg:h-[600px]"
              alt="banner-1"
            />
          </div>
          <div>
            <Image
              src="https://4.imimg.com/data4/PA/CS/MY-11499143/hayabusa-bikes.jpg"
              width={1920}
              height={600}
              className="w-full object-cover h-[300px] md:h-[450px] lg:h-[600px]"
              alt="banner-2"
            />
          </div>
          <div>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKS0_y8-a24671mvyYly7olssVBlKUVxCig&s"
              width={1920}
              height={600}
              className="w-full object-cover h-[300px] md:h-[450px] lg:h-[600px]"
              alt="banner-3"
            />
          </div>
          <div>
            <Image
              src="data:image/jpeg;base64,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"
              width={1920}
              height={600}
              className="w-full object-cover h-[300px] md:h-[450px] lg:h-[600px]"
              alt="banner-4"
            />
          </div>
        </Slider>
      </div>

      {/* Products Section */}
      <div className="w-[90%] lg:w-[80%] mx-auto mt-12">
        {/* Men's Clothing */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Men's Clothing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mensProduct.map((product: any) => (
              <div key={product.id}>
                <CategoryWiseProduct product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Women's Clothing */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Women's Clothing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {WomensProduct.map((product: any) => (
              <div key={product.id}>
                <CategoryWiseProduct product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
