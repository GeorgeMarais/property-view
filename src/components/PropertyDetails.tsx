import * as React from "react";

interface PropertyDetailsProps {
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

const PropertyDetails: React.FC<PropertyDetailsProps> = ({
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
    <div className="flex flex-col w-full sm:max-w-3xl mx-auto mt-4 md:mt-0">
      <div className="flex flex-col p-4 sm:p-6 w-full bg-white rounded-md border border-solid border-neutral-400">
        <h1 className="text-2xl sm:text-3xl text-black font-[350] break-words">{title}</h1>
        <div className="mt-2 text-sm sm:text-base font-light text-black break-words">
          {reference}
        </div>

        <div className="flex flex-wrap gap-2 items-center mt-4">
          <div className="text-xl sm:text-2xl font-semibold text-black">{rentPrice}</div>
          <div className="text-base sm:text-lg text-zinc-500">{rentPerWeek}</div>
          <i className="fa fa-info-circle text-zinc-500 text-lg sm:text-xl cursor-help"></i>
        </div>

        <div className="flex gap-6 mt-5">
          <button className="hover:opacity-80 transition-opacity" aria-label="Share property">
            <i className="fa fa-share-alt text-black text-2xl sm:text-3xl"></i>
          </button>
          <button className="hover:opacity-80 transition-opacity" aria-label="Save to favorites">
            <i className="fa fa-star-o text-black text-2xl sm:text-3xl"></i>
          </button>
        </div>

        <hr className="my-6 border-neutral-400" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 px-2 sm:px-3">
          <div className="flex flex-col items-center text-center text-black">
            <i className="fa fa-bed text-black text-2xl sm:text-3xl mb-2"></i>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-sm sm:text-base">
              <span className="font-light">Bedrooms:</span>
              <span className="font-bold">{bedrooms}</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center text-black">
            <i className="fa fa-bath text-black text-2xl sm:text-3xl mb-2"></i>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-sm sm:text-base">
              <span className="font-light">Bathrooms:</span>
              <span className="font-bold">{bathrooms}</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center text-black col-span-2 sm:col-span-1">
            <i className="fa fa-users text-black text-2xl sm:text-3xl mb-2"></i>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-sm sm:text-base">
              <span className="font-light">Max Tenants:</span>
              <span className="font-bold">{maxTenants}</span>
            </div>
          </div>
        </div>

        <hr className="my-6 border-neutral-400" />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div className="flex items-center gap-3">
            <i className="fa fa-check-circle text-green-600 text-xl flex-shrink-0"></i>
            <span className="text-sm sm:text-base text-black">No admin fees</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fa fa-check-circle text-green-600 text-xl flex-shrink-0"></i>
            <span className="text-sm sm:text-base text-black">No hidden charges</span>
          </div>
        </div>

        <button
          className="w-full px-6 py-3 mt-6 text-lg text-black sm:text-xl font-bold text-white rounded-md bg-[#498EC9] hover:bg-[#3c7eb9] transition-colors"
        >
          Rent Now
        </button>
      </div>

      <div className="flex flex-col p-4 sm:p-6 mt-4 w-full bg-white text-black rounded-md border border-solid border-neutral-400">
        <h2 className="text-xl sm:text-2xl font-[350]">Meet the landlord</h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <img
            loading="lazy"
            src={landlord.imgSrc}
            alt={`Landlord ${landlord.name}`}
            className="w-20 sm:w-[100px] aspect-square rounded-full object-cover self-center sm:self-start"
          />
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <div className="text-lg sm:text-xl">{landlord.name}</div>
            <div className="text-sm sm:text-base">Response Rate: {landlord.responseRate}</div>
            <div className="text-sm sm:text-base">Response Time: {landlord.responseTime}</div>
          </div>
        </div>

        <button
          className="w-full px-6 py-3 mt-6 text-lg sm:text-xl font-bold text-black rounded-md border-2 border-black hover:bg-gray-50 transition-colors"
        >
          Message the landlord
        </button>
      </div>

      <hr className="my-8 border-neutral-400" />

      <button className="flex gap-3 items-center justify-center text-lg text-black sm:text-xl mx-auto">
        <i className="fa fa-warning"></i>
        <span>Report Listing</span>
      </button>
    </div>
  );
};

export default PropertyDetails;
