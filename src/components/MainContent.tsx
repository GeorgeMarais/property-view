import * as React from "react";
import ImageGallery from "./ImageGallery";
import Description from "./Description";
import PropertyDetails from "./PropertyDetails";

interface MainContentProps {
  sections: { title: string; iconSrc: string }[];
  images: { src: string; alt: string }[];
  title: string;
  reference: string;
  rentPrice: string;
  rentPerWeek: string;
  bedrooms: number;
  bathrooms: number;
  maxTenants: number;
  landlord: {
    name: string;
    responseRate: string;
    responseTime: string;
    imgSrc: string;
  };
}

const MainContent: React.FC<MainContentProps> = ({
  sections,
  images,
  title,
  reference,
  rentPrice,
  rentPerWeek,
  bedrooms,
  bathrooms,
  maxTenants,
  landlord,
}) => {
  return (
    <div className="z-10 self-center mt-8 max-w-full w-[1201px]">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
          <ImageGallery images={images} />
          <br />
          <Description />
        </div>
        <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
          <PropertyDetails
            title={title}
            reference={reference}
            rentPrice={rentPrice}
            rentPerWeek={rentPerWeek}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            maxTenants={maxTenants}
            landlord={landlord}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
