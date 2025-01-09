import { useState } from 'react';

interface DescriptionProps {
  text?: string;
  title?: string;
}

const Description: React.FC<DescriptionProps> = ({
  text = "These chic, self-contained studio apartments, are meticulously crafted to cater to the dynamic lifestyle of young professionals, couples, and students. The studios provide relaxation and functionality, boasting a modern kitchenette, plush bed, substantial wardrobe space, and a flat-screen TV with NETFLIX access—perfect for cosy nights in. Each space is optimised with ample storage and adorned with contemporary artwork that reflects a keen eye for style. The modern ensuite bathroom offers a streamlined experience, ensuring that every inch of the apartment resonates with thoughtful consideration for the urban dweller's needs. Stay connected and productive with high-speed WIFI, or revel in the charm of wooden floors that exude warmth and character. Culinary pursuits are a breeze with a well-appointed communal kitchen featuring a microwave, air fryer, coffee maker and refrigerator. All bills are included in the rent. PLEASE NOTE: There's a £150 per month supplement for double occupancy. Whether you enjoy dinner with friends, a night's clubbing, going to art galleries or chilling out at the park, you will be spoilt for choice in nearby Clapham, Battersea and Wandsworth. Many shops, restaurants and bars can be found within the surrounding Clapham and Battersea area. Clapham Junction station is located less than 10 mins' walk away and connects you to central London via the Overground or National Rail line. DEPOSIT OPTIONS: 1-month refundable deposit (£1625) or 1-week non-refundable deposit replacement insurance (£375)",
  title = "Description"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col p-6 w-full text-black bg-white rounded-lg border border-neutral-400 shadow-sm">
      <h2 className="text-2xl font-normal text-gray-800">{title}</h2>

      <div className="h-px my-4 border border-solid border-neutral-400 w-full" />

      <div className={`prose max-w-none ${!isExpanded && 'line-clamp-3'}`}>
        {text}
      </div>

      <button
        onClick={toggleExpand}
        className="flex items-center gap-2 mx-auto mt-4 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
      >
        <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
        <i className={`fa fa-chevron-down transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

export default Description;
