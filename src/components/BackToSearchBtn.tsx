import * as React from "react";

const SearchBackLink: React.FC = () => {
  return (
    <button className="flex gap-4 items-center mt-8 ml-6 text-xl font-semibold text-black max-md:ml-2.5">
      <i className="fa fa-chevron-left object-contain shrink-0 self-stretch my-auto aspect-[0.65] w-[13px]"></i>
      <div className="self-stretch my-auto">Back to search</div>
    </button>
  );
};

export default SearchBackLink;
