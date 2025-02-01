import * as React from "react";
import { GalleryGrid } from "./GalleryGrid";

export const Gallery = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 max-md:flex-col bg-white pt-4 py-4">
        {/* header */}
        <div className="capitalize font-bold text-xl text-[#4D4D4D] underline decoration-dashed underline-offset-8 px-[150px]">
          Let's check our photo <span className="text-[#F82BA9]">gallery</span>
        </div>
        <div className="flex gap-5 max-md:flex-col px-36">

          <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full p-2">
            <div className="flex relative flex-col grow items-start px-3 pt-3.5 rounded-lg aspect-[0.544] pb-[524px] max-md:pr-5 max-md:pb-24 max-md:mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/043c21303e938a2c91bf238ef96a858822a675868e83c85fb05e20df2a3d1542?placeholderIfAbsent=true&apiKey=de1e03a0cce54c778b42c3ba4cd32194"
                alt=""
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col justify-center p-2.5 bg-white rounded-full min-h-[35px] w-[39px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec845fc20cd47a59b7385f203ca92fb3125f5a7052f82a88f99cac174141a39d?placeholderIfAbsent=true&apiKey=de1e03a0cce54c778b42c3ba4cd32194"
                  alt=""
                  className="object-contain w-full aspect-[1.11]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full justify-center items-center ">
            <GalleryGrid />
          </div>
        </div>

      </div>
    </div>
  );
};
