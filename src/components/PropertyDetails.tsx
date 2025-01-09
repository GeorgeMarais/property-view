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
    <div className="flex flex-col w-full max-md:mt-8">
      <div className="flex flex-col px-4 py-6 w-full bg-white rounded-md border border-solid border-neutral-400">
        <div className="text-3xl text-black font-[350]">{title}</div>
        <div className="self-start mt-2 text-base font-light text-black">
          {reference}
        </div>
        <div className="flex gap-2 self-start mt-4 font-semibold">
          <div className="grow text-2xl text-black">{rentPrice}</div>
          <div className="text-lg text-zinc-500 mt-1">{rentPerWeek}</div>
          <i className="fa fa-info-circle text-zinc-500 w-[18px] h-[18px] mt-3"></i>
        </div>
        <div className="flex gap-4 items-start self-start mt-5">
          <i className="fa fa-share-alt text-black w-[30px] h-[30px]"></i>
          <i className="fa fa-star-o text-black w-[30px] h-[30px]"></i>
        </div>
        <div className="shrink-0 mt-6 h-px border border-solid border-neutral-400" />
        <div className="flex gap-8 items-start mx-3 mt-5 text-base text-black max-md:mx-2.5">
          <div className="flex flex-col flex-1 self-stretch my-auto whitespace-nowrap">
            <i className="fa fa-bed text-black text-2xl self-center"></i>
            <div className="flex gap-2 mt-2">
              <div className="grow font-light">Bedrooms:</div>
              <div className="font-bold">{bedrooms}</div>
            </div>
          </div>
          <div className="flex flex-col flex-1 self-stretch my-auto whitespace-nowrap">
            <i className="fa fa-bath text-black text-2xl self-center"></i>
            <div className="flex gap-2 mt-2">
              <div className="grow font-light">Bathrooms:</div>
              <div className="font-bold">{bathrooms}</div>
            </div>
          </div>
          <div className="flex flex-col flex-1 self-stretch my-auto whitespace-nowrap">
            <i className="fa fa-users text-black text-2xl self-center"></i>
            <div className="flex gap-2 mt-2">
              <div className="grow font-light">Max Tenants:</div>
              <div className="font-bold">{maxTenants}</div>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-4 h-px border border-solid border-neutral-400" />
        <div className="flex gap-8 self-start mt-6 text-base text-black">
          <div className="flex gap-3">
            <i className="fa fa-check-circle text-green-600 text-lg mt-1"></i>
            <div>No admin fees</div>
          </div>
          <div className="flex gap-3">
            <i className="fa fa-check-circle text-green-600 text-lg mt-1"></i>
            <div>No hidden charges</div>
          </div>
        </div>
        <button
          className="gap-2.5 self-stretch px-20 py-3 mt-6 text-xl font-bold text-white rounded-md max-md:px-5"
          style={{ backgroundColor: "#498EC9" }}
        >
          Rent Now
        </button>
      </div>
      <div className="flex flex-col items-start px-4 py-4 mt-4 w-full text-black bg-white rounded-md border border-solid border-neutral-400">
        <div className="text-2xl font-[350]">Meet the landlord</div>
        <div className="flex gap-4 mt-3 text-sm font-light">
          <img
            loading="lazy"
            src={landlord.imgSrc}
            alt={`Landlord ${landlord.name}`}
            className="object-contain shrink-0 max-w-full rounded-full aspect-square w-[100px]"
          />
          <div className="flex flex-col items-start my-auto">
            <div className="text-xl">{landlord.name}</div>
            <div>Response Rate: {landlord.responseRate}</div>
            <div className="self-stretch">Response Time: {landlord.responseTime}</div>
          </div>
        </div>
        <button
          className="gap-2.5 self-stretch px-20 py-3 mt-6 text-xl font-bold rounded-md border border-black border-solid max-md:px-5"
          tabIndex={0}
          role="button"
        >
          Message the landlord
        </button>
      </div>
      <br />
      <div className="mt-5 w-full border border-solid border-neutral-400 min-h-[1px]" />
      <div className="flex gap-4 items-center self-center mt-8 text-xl text-black">
        <i className="fa fa-warning"></i>
        <div>Report Listing</div>
      </div>
    </div>
  );
};

export default PropertyDetails;
