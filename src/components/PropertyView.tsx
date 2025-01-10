import * as React from "react";
import Header from "./Header";
import SearchBackLink from "./BackToSearchBtn";
import MainContent from "./MainContent";
import Footer from "./Footer";
import TransportGrid from "./TransportGrid";
import GridRow from "./GridRow";
import mainImage from "../images/main.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import mapImage from "../images/Location Map.png"
import landlordImage from "../images/Ellipse 10.png"

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
      src: mainImage.src,
      alt: "Primary Image",
    },
    {
      src: image2.src,
      alt: "Secondary Image",
    },
    {
      src: image3.src,
      alt: "Tertiary Image",
    },
    {
      src: image4.src,
      alt: "Quaternary Image",
    },
  ];

  const landlordDetails = {
    name: "John T.",
    responseRate: "100%",
    responseTime: "21 Hours",
    imgSrc: landlordImage.src,
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white min-h-screen">
      <div className="flex flex-col items-start mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
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

        <div className="w-full mt-8 bg-white rounded-lg border border-neutral-400 p-6">
          <section className="mb-8">
            <h2 className="text-2xl text-black font-normal mb-5">Price & Bills</h2>
            <div className="border-b border-neutral-400 mb-5" />
            <div className="space-y-2">
              <GridRow label="Deposit" value="£1,625" evenRow />
              <GridRow label="Bills Included" value={<i className="fa fa-check-circle text-green-600 text-lg" />} />
              <GridRow label="Broadband" value={<a href="#" className="text-blue-600 hover:underline">View Offers</a>} evenRow />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-black font-normal mb-5">Tenant Preferences</h2>
            <div className="border-b border-neutral-400 mb-5" />
            <div className="space-y-2">
              <GridRow label="Student Friendly" value={<i className="fa fa-check-circle text-green-600 text-lg" />} evenRow />
              <GridRow label="Families Allowed" value={<i className="fa fa-times-circle text-red-700 text-lg" />} />
              <GridRow label="Pets Allowed" value={<i className="fa fa-times-circle text-red-700 text-lg" />} evenRow />
              <GridRow label="Smokers Allowed" value={<i className="fa fa-times-circle text-red-700 text-lg" />} />
              <GridRow label="DSS/LHA Covers Rent" value={<i className="fa fa-times-circle text-red-700 text-lg" />} evenRow />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-black font-normal mb-5">Availability</h2>
            <div className="border-b border-neutral-400 mb-5" />
            <div className="space-y-2">
              <GridRow label="Available From" value="26 January 2024" evenRow />
              <GridRow label="Minimum Tenancy" value="3 Months" />
              <GridRow label="Online Viewings" value={<i className="fa fa-check-circle text-green-600 text-lg" />} evenRow />
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-black font-normal mb-5">Features</h2>
            <div className="border-b border-neutral-400 mb-5" />
            <div className="space-y-2">
              <GridRow label="Garden" value={<i className="fa fa-check-circle text-green-600 text-lg" />} evenRow />
              <GridRow label="Parking" value={<i className="fa fa-times-circle text-red-700 text-lg" />} />
              <GridRow label="Fireplace" value={<i className="fa fa-times-circle text-red-700 text-lg" />} evenRow />
              <GridRow label="Furnishing" value="Furnished" />
              <GridRow label="EPC Rating" value="0" evenRow />
            </div>
          </section>
        </div>

        <div className="w-full mt-8 bg-white rounded-lg border border-neutral-400 p-6">
          <img
            loading="lazy"
            src={mapImage.src}
            alt="Local Area Image"
            className="w-full rounded-lg object-cover aspect-[2.02]"
          />
          <div className="mt-6">
            <TransportGrid />
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="mx-auto mt-14 mb-8 px-8 py-3 text-xl font-bold text-white rounded-md"
          style={{ backgroundColor: "#498EC9" }}
        >
          Back to top
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyView;