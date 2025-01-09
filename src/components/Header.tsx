import React, { useState } from 'react';

interface HeaderProps {
  sections: { title: string; iconSrc: string }[];
}

interface DropdownItem {
  label: string;
  href: string;
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const aboutDropdownItems: DropdownItem[] = [
    { label: "About OpenRent", href: "#" },
    { label: "Our Story", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Careers", href: "#" }
  ];

  const pricingDropdownItems: DropdownItem[] = [
    { label: "Tenant Fees", href: "#" },
    { label: "Landlord Packages", href: "#" },
    { label: "Additional Services", href: "#" },
    { label: "Special Offers", href: "#" }
  ];

  const handleDropdownClick = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className="relative flex flex-wrap gap-5 justify-between items-center px-5 py-6 w-full text-xl text-black bg-white border-b-[3px] border-blue-500">
      <svg viewBox="130.09 -602.975 1230.273 312.776" xmlns="http://www.w3.org/2000/svg" className="object-contain shrink-0 max-w-full aspect-[4.13] w-[207px]" role="presentation">
        <title>OpenRent</title>

        <defs>
          <mask id="top-spin-mask" x="-0.29" y="0" width="96.33" height="59.43" maskUnits="userSpaceOnUse">
            <g className="top-spin-mask-group">
              <rect className="top-spin-mask-rect" x="4.96" y="9.66" width="57" height="91" transform="matrix(0.53, -0.85, 0.85, 0.53, -8.1, 28.5)"></rect>
            </g>
          </mask>

          <filter id="top-spin-luminosity-noclip" x="-0.29" y="0" width="96.33" height="59.43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-color="#fff" result="bg"></feFlood>
            <feBlend in="SourceGraphic" in2="bg"></feBlend>
          </filter>

          <linearGradient id="top-spin-gradient" x1="156.13" y1="18.17" x2="165.73" y2="2.96" gradientTransform="translate(159.08 208.57) rotate(-122.27)"></linearGradient>

          <mask id="bottom-spin-mask" x="0" y="28.24" width="96.33" height="59.43" maskUnits="userSpaceOnUse">
            <g className="bottom-spin-mask-group">
              <rect className="bottom-spin-mask-rect" x="37.11" y="-20.31" width="57" height="93" transform="translate(-18.26 100.58) rotate(-57.73)"></rect>
            </g>
          </mask>

          <filter id="bottom-spin-luminosity-noclip" x="0" y="28.24" width="96.33" height="59.43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-color="#fff" result="bg"></feFlood>
            <feBlend in="SourceGraphic" in2="bg"></feBlend>
          </filter>

          <linearGradient id="bottom-spin-gradient" x1="9.15" y1="28.42" x2="28.24" y2="13.22" gradientTransform="translate(24.1 -2.09) rotate(57.73)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#999999"></stop>
            <stop offset="0.23" stop-color="#999999"></stop>
            <stop offset="0.6" stop-color="#999999" stop-opacity="0.62"></stop>
            <stop offset="1" stop-color="#999999" stop-opacity="0"></stop>
          </linearGradient>
        </defs>

        <path className="house" d="M153.1,89.5c-0.8-0.7-2.2-0.7-3,0l-43.8,38.8c-0.8,0.7-1.5,2.2-1.5,3.3v54.3c0,1.1,0.9,2,2,2h30.7c1.1,0,2-0.9,2-2v-31.7 c0-1.1,0.9-2,2-2h20.2c1.1,0,2,0.9,2,2v31.7c0,1.1,0.9,2,2,2h30.7c1.1,0,2-0.9,2-2v-54.3c0-1.1-0.7-2.6-1.5-3.3L153.1,89.5z" transform="matrix(1, 0, 0, 1, 139.22650146484375, -586.8326416015625)"></path>

        <g>
          <g transform="matrix(3.15718, 0, 0, 3.15718, 139.149963, -585.997131)">
            <g className="top-spin">
              <path d="M10.27,28.31a3.1,3.1,0,0,0,4.16-1.38A37.51,37.51,0,0,1,85.49,43.48H81.84a.61.61,0,0,0-.6.95L88.15,59c.25.52.65.52.9,0L96,44.42a.61.61,0,0,0-.6-.95H91.69A43.71,43.71,0,0,0,8.89,24.16,3.1,3.1,0,0,0,10.27,28.31Z"></path>
            </g>
            <g className="bottom-spin">
              <path d="M85.77,59.36a3.1,3.1,0,0,0-4.16,1.38A37.51,37.51,0,0,1,10.55,44.2H14.2a.61.61,0,0,0,.6-.95L7.89,28.64c-.25-.52-.65-.52-.9,0L.09,43.25a.61.61,0,0,0,.6.95H4.35a43.71,43.71,0,0,0,82.8,19.32A3.1,3.1,0,0,0,85.77,59.36Z"></path>
            </g>
          </g>
        </g>

        <g transform="matrix(1, 0, 0, 1, 139.117584, -585.896545)">
          <path d="M414.7,204.8c-36.6,0-66.4-29.8-66.4-66.4c0-36.6,29.8-66.4,66.4-66.4c36.6,0,66.4,29.8,66.4,66.4 C481.2,175,451.3,204.8,414.7,204.8z M414.7,89.9c-26.8,0-48.5,21.8-48.5,48.5c0,26.9,21.8,48.7,48.5,48.7 c26.9,0,48.7-21.8,48.7-48.7C463.4,111.6,441.6,89.9,414.7,89.9z"></path>
          <path d="M505.4,234.1c-5.2,0-9.2-3.9-9.2-8.9c0-3.2,1.8-6.3,4.6-7.8v-95.9c-2.8-1.5-4.6-4.5-4.6-7.8c0-5,4.1-8.9,9.2-8.9 c6.9,0,11.9,4.9,12.9,12.5c7.1-7.8,17.5-12.5,28.4-12.5c25.6,0,45.6,22.2,45.6,50.6c0,27.2-20,48.4-45.6,48.4 c-11.2,0-21-3.9-28.2-11v25.5C518.6,227.8,513.3,234.1,505.4,234.1z M546.6,122.7c-17.3,0-28,17.1-28,33c0,15.2,9.6,30.5,28,30.5 c18.2,0,28-15.8,28-30.7C574.6,139.7,563.9,122.7,546.6,122.7z"></path>
          <path d="M655.7,204.8c-26.2,0-46.6-22.2-46.6-50.6c0-24.1,17.8-50.2,46.6-50.2c25.9,0,47,22.5,47,50.2c0,4.9-4.2,9-9.2,9h-65.8 c3.3,12.2,13.9,23.8,28,23.8c10.8,0,19.3-2.9,25-8.7c1.7-1.7,4.1-2.7,6.7-2.7c4.8,0,8.9,3.9,8.9,8.5c0,2.5-0.9,4.7-2.5,6.3 C684.9,200,672.1,204.8,655.7,204.8z M684.1,145.6c-3.2-12.2-13.9-23.8-28.4-23.8c-13,0-25,10.4-28.2,23.8H684.1z"></path>
          <path d="M800.1,203.9c-7.9,0-13.1-6.3-13.1-15.6v-39.6c0-17.5-8.2-26.1-25-26.1c-13.9,0-23.9,9.8-23.9,23.4v42.2 c0,9.4-5.3,15.6-13.1,15.6c-5.2,0-9.2-3.9-9.2-8.9c0-3.2,1.8-6.3,4.6-7.8v-65.3c-2.9-1.6-4.6-4.6-4.6-7.9c0-5.1,4.1-9.2,9-9.2 c6.5,0,11.2,3.8,12.8,10c4.8-4.6,12.9-10,24.5-10c27.2,0,42.7,16.5,42.7,45.2v37.2c2.8,1.5,4.6,4.5,4.6,7.8 C809.3,200.1,805.2,203.9,800.1,203.9z"></path>
          <path d="M986.5,204.8c-26.2,0-46.6-22.2-46.6-50.6c0-24.1,17.8-50.2,46.6-50.2c25.9,0,47,22.5,47,50.2c0,4.9-4.2,9-9.2,9h-65.8 c3.3,12.2,13.9,23.8,28,23.8c10.8,0,19.3-2.9,25-8.7c1.7-1.7,4.1-2.7,6.7-2.7c4.8,0,8.9,3.9,8.9,8.5c0,2.5-0.9,4.7-2.5,6.3 C1015.7,200,1002.9,204.8,986.5,204.8z M1014.9,145.6c-3.2-12.2-13.9-23.8-28.4-23.8c-13,0-25,10.4-28.2,23.8H1014.9z"></path>
          <path d="M1130.9,203.9c-7.9,0-13.1-6.3-13.1-15.6v-39.6c0-17.5-8.2-26.1-25-26.1c-13.9,0-23.9,9.8-23.9,23.4v42.2 c0,9.4-5.3,15.6-13.1,15.6c-5.2,0-9.2-3.9-9.2-8.9c0-3.2,1.8-6.3,4.6-7.8v-65.3c-2.9-1.6-4.6-4.6-4.6-7.9c0-5.1,4.1-9.2,9-9.2 c6.5,0,11.2,3.8,12.8,10c4.8-4.6,12.9-10,24.5-10c27.2,0,42.7,16.5,42.7,45.2v37.2c2.8,1.5,4.6,4.5,4.6,7.8 C1140.1,200.1,1136,203.9,1130.9,203.9z"></path>
          <path d="M838.1,204.1c-5.2,0-9.2-3.9-9.2-8.9c0-3.2,1.8-6.3,4.6-7.8v-98c-2.8-1.5-4.6-4.5-4.6-7.8c0-5,4-8.9,9.2-8.9h47.6 c21.2,0,38.5,17.2,38.5,38.4c0,15.4-9.9,29.7-24,35.4l22.2,38.6l0.6,0.2c4.4,0,8.3,4,8.3,8.5c0,5.7-4.6,9.9-10.6,9.9 c-5,0-10.2-3.3-13.1-8.4l-26.2-46.2h-30.1v39.1C851.3,197.8,846,204.1,838.1,204.1z M885.7,131.7c11.3,0,20.5-9.1,20.5-20.4 c0-11.4-9.2-20.7-20.5-20.7h-34.4c0,0.1,0,41.1,0,41.1H885.7z"></path>
          <path d="M1188.5,203.9c-19.5,0-29.4-12.3-29.4-36.7v-44.6h-2.2c-5,0-8.9-3.8-8.9-8.9c0-4.9,3.7-8.9,8.1-8.9h2.9V94.8 c-2.8-1.5-4.6-4.5-4.6-7.8c0-5,4.1-8.9,9.2-8.9c7.9,0,13.1,6.3,13.1,15.6v11.1h17.2c4.5,0,8.2,4,8.2,8.9c0,5-3.9,8.9-8.9,8.9 h-16.4v44.6c0,13.8,3.1,18.9,11.6,18.9c2.3,0,5.6-0.6,9.3-1.7c1-0.2,1.8-0.3,2.6-0.3c4.1,0,7.7,2.7,8.6,6.5 c1.1,4.1-0.3,9.1-6,10.9C1198.2,203.2,1193.3,203.9,1188.5,203.9z"></path>
        </g>
      </svg>

      <nav className="flex flex-wrap gap-8 items-center self-start max-md:max-w-full">
        <div className="relative">
          <button
            onClick={() => handleDropdownClick('about')}
            className="flex gap-2 items-center"
            aria-expanded={activeDropdown === 'about'}
            aria-haspopup="true"
          >
            <span>About</span>
            <i className={`fa fa-chevron-down transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`}></i>
          </button>
          {activeDropdown === 'about' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
              {aboutDropdownItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => handleDropdownClick('pricing')}
            className="flex gap-2 items-center"
            aria-expanded={activeDropdown === 'pricing'}
            aria-haspopup="true"
          >
            <span>Pricing & Services</span>
            <i className={`fa fa-chevron-down transition-transform ${activeDropdown === 'pricing' ? 'rotate-180' : ''}`}></i>
          </button>
          {activeDropdown === 'pricing' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
              {pricingDropdownItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-4 items-center">
          <button
            className="px-6 py-3 text-white font-bold bg-[#5CB85C] hover:bg-[#4cae4c] rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            type="button"
          >
            Add Listing
          </button>
          <button
            className="px-6 py-3 text-white font-bold bg-[#498EC9] hover:bg-[#3c7ab0] rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="button"
          >
            Sign In
          </button>
        </div>
      </nav>

      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;