import * as React from "react";
import Header from "./Header";
import SearchBackLink from "./BackToSearchBtn";
import MainContent from "./MainContent";
import Footer from "./Footer";
import TransportGrid from "./TransportGrid";
import GridRow from "./GridRow";

const PropertyView: React.FC = () => {
  const headerSections = [
    {
      title: "About",
      iconSrc: "fa fa-chevron-down",
      altText: "About Icon",
    },
    {
      title: "Pricing & Services",
      iconSrc: "fa fa-chevron-down",
      altText: "Pricing & Services Icon",
    },
  ];

  const imageGallery = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ca1fb172daae92fb7f6d8e30e1fef158cea24ee5b35fbedf35bc911cc85bd45?placeholderIfAbsent=true&apiKey=7237da01b9c1409282f3e05fd83b86f3",
      alt: "Primary Image",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/74b70e017b77428dd419555c52111f74ab29dbab5d609f3235b97bc4cbecedf2?placeholderIfAbsent=true&apiKey=7237da01b9c1409282f3e05fd83b86f3",
      alt: "Secondary Image",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/63105166c49b8e4fd81842a1c0942323f38051112b50bf9050b9d3547f72bedb?placeholderIfAbsent=true&apiKey=7237da01b9c1409282f3e05fd83b86f3",
      alt: "Tertiary Image",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2c9b851bc2a01fae78ab53e2a8f6586b4d7423509982a9e4a04e2e27449770a?placeholderIfAbsent=true&apiKey=7237da01b9c1409282f3e05fd83b86f3",
      alt: "Quaternary Image",
    },
  ];

  const landlordDetails = {
    name: "John T.",
    responseRate: "100%",
    responseTime: "21 Hours",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ebbf14df0bdea6199ad67b60ca055568421a2708cfb2d01ff5a188a3796b3f38?placeholderIfAbsent=true&apiKey=7237da01b9c1409282f3e05fd83b86f3",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col items-start self-center max-w-full w-[1250px]">
        <Header sections={headerSections} />
        <SearchBackLink />
        <MainContent
          sections={headerSections}
          images={imageGallery}
          title="Studio Flat, Battersea High Street, London, SW11"
          reference="Property Ref: 26723236"
          rentPrice="£1,625 pcm"
          rentPerWeek="£375 pw"
          bedrooms={1}
          bathrooms={1}
          maxTenants={1}
          landlord={landlordDetails}
        />
        <br />
        <div className="flex flex-col px-4 py-6 mt-0 ml-6 max-w-full bg-white rounded-md border border-solid border-neutral-400 min-h-[856px] max-sm:mx-4">
          <div className="text-2xl text-black font-[350]">Price & Bills</div>
          <div className="mt-5 w-full border border-solid border-neutral-400 min-h-[1px]" />

          <div className="flex flex-col mt-5 w-full sm:max-w-full">
            <GridRow label="Deposit" value="£1,625" evenRow />
            <GridRow label="Bills Included" value={<i className="fa fa-check-circle text-green-600 text-lg mt-1"></i>} />
            <GridRow label="Broadband" value={<a href="#" style={{ color: "#498EC9" }}>View Offers</a>} evenRow />
          </div>

          <div className="mt-5 text-2xl text-black font-[350]">
            Tenant Preferences
          </div>
          <div className="mt-5 w-full border border-solid border-neutral-400 min-h-[1px]" />
          <div className="flex flex-col mt-5 w-full sm:max-w-full">
            <GridRow label="Student Friendly" value={<i className="fa fa-check-circle text-green-600 text-lg mt-1"></i>} evenRow />
            <GridRow label="Families Allowed" value={<i className="fa fa-times-circle text-red-700 text-lg mt-1"></i>} />
            <GridRow label="Pets Allowed" value={<i className="fa fa-times-circle text-red-700 text-lg mt-1"></i>} evenRow />
            <GridRow label="Smokers Allowed" value={<i className="fa fa-times-circle text-red-700 text-lg mt-1"></i>} />
            <GridRow label="DSS/LHA Covers Rent" value={<i className="fa fa-times-circle text-red-700 text-lg mt-1"></i>} evenRow />
          </div>

          <div className="mt-5 text-2xl text-black font-[350]">
            Availability
          </div>
          <div className="mt-5 w-full border border-solid border-neutral-400 min-h-[1px]" />
          <div className="flex flex-col mt-5 w-full sm:max-w-full">
            <GridRow label="Available From" value="26 January 2024" evenRow />
            <GridRow label="Minimum Tenancy" value="3 Months" />
            <GridRow label="Online Viewings" value={<i className="fa fa-check-circle text-green-600 text-lg mt-1"></i>} evenRow />
          </div>

          <div className="mt-5 text-2xl text-black font-[350]">
            Features
          </div>
          <div className="mt-5 w-full border border-solid border-neutral-400 min-h-[1px]" />
          <div className="flex flex-col mt-5 w-full sm:max-w-full">
            <GridRow label="Garden" value={<i className="fa fa-check-circle text-green-600 text-lg mt-1"></i>} evenRow />
            <GridRow label="Parking" value={<i className="fa fa-times-circle text-red-700 text-lg mt-1"></i>} />
            <GridRow label="Fireplace" value={<i className="fa fa-times-circle text-red-700 text-lg mt-1"></i>} evenRow />
            <GridRow label="Families Allowed" value="Furnished" />
            <GridRow label="EPC Rating" value="0" evenRow />
          </div>
        </div>


        <div className="flex flex-col items-center px-5 py-4 mt-8 mx-6 sm:mx-6 max-w-full text-base font-semibold text-black bg-white rounded-md border border-solid border-neutral-400 min-h-[434px] sm:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a61c00a205185824e1aa89aaeef73f1a6008432edd552a06744250835b1efe03?placeholderIfAbsent=true&apiKey=7237da01b9c1409282f3e05fd83b86f3"
            alt="Local Area Image"
            className="object-contain w-full rounded-md aspect-[2.02]"
          />
          <br />
          <TransportGrid />
        </div>

        <button className="gap-2.5 self-center px-8 py-3 mt-14 text-xl font-bold text-white rounded-md max-md:px-5 max-md:mt-10" style={{ backgroundColor: "#498EC9" }} onClick={scrollToTop}>
          Back to top
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyView;
