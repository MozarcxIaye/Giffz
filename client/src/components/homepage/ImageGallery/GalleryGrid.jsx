import * as React from "react";
import { ImageCard } from "./ImageCard";

const galleryImages = [
  {
    section: "top",
    images: [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d9c8a9ee4e059542eaf21731e5bc6ba784a08399efc09a1dc18072650c939d0?placeholderIfAbsent=true&apiKey=de1e03a0cce54c778b42c3ba4cd32194", aspectRatio: "1.54", width: "49%" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d180f75c06c93402e40d5aa2fff771ea6454d80b092c5819e0039300b4ef35c3?placeholderIfAbsent=true&apiKey=de1e03a0cce54c778b42c3ba4cd32194", aspectRatio: "1.07", width: "34%" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/61a880651fa612f56344c1f36db13a6a217ece134a44a44d7ab03737218d079e?placeholderIfAbsent=true&apiKey=de1e03a0cce54c778b42c3ba4cd32194", aspectRatio: "0.53", width: "17%" },
    ],
  },
  {
    section: "bottom",
    images: [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/78de86349c46462c26840dcdffcf164e522d5fd3b3970e4f6a3426eafc97b078?placeholderIfAbsent=true&apiKey=de1e03a0cce54c778b42c3ba4cd32194", aspectRatio: "0.88", width: "31%" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e468cf9a91689cf78da52f073219d7a391572c7e4707f021eb87462cfe92521?placeholderIfAbsent=true&apiKey=de1e03a0cce54c778b42c3ba4cd32194", aspectRatio: "0.61", width: "22%" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c35f6b31ad45322ae4409b5ebf7d27c25f7e683f6e39c263b65110ab4d0e2f0?placeholderIfAbsent=true&apiKey=de1e03a0cce54c778b42c3ba4cd32194", aspectRatio: "1.34", width: "47%" },
    ],
  },
];

export const GalleryGrid = () => {
  return (
    <div className="flex flex-col w-full max-md:mt-4 max-md:max-w-full">
      {galleryImages.map((section, sectionIndex) => (
        <div key={section.section} className={`${sectionIndex > 0 ? 'mt-3.5' : ''} max-md:max-w-full`}>
          <div className="flex gap-2 max-md:flex-col">
            {section.images.map((image, index) => (
              <div
                key={image.src}
                className={`flex flex-col ${index > 0 ? 'ml-5' : ''} w-[${image.width}] max-md:ml-0 max-md:w-full`}
              >
                <ImageCard
                  src={image.src}
                  aspectRatio={image.aspectRatio}
                  className="max-md:mt-4"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};