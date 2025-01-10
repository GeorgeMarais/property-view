import React, { useState } from "react";
import GridRow from "./GridRow";

const TransportGrid = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {isExpanded && (
                <>
                    <GridRow label={<span className="font-semibold">Station</span>} value={<span className="font-semibold">Time From Property</span>} />
                    <GridRow label={<>
                        <img src="//staticcdn.openrent.co.uk/images/Transport/nationalrail_24.png" className="w-[24px] sm:float-left sm:mr-3" alt="National Rail" />
                        <span className="font-normal sm:ml-[2rem]">Clapham Junction</span>
                    </>} value={<span className="font-normal">10 minute walk</span>} evenRow />
                    <GridRow label={<>
                        <img src="//staticcdn.openrent.co.uk/images/Transport/nationalrail_24.png" className="w-[24px] sm:float-left sm:mr-3" alt="National Rail" />
                        <span className="font-normal sm:ml-[2rem]">Wandsworth Town</span>
                    </>} value={<span className="font-normal">24 minute walk</span>} />
                    <GridRow label={<>
                        <img src="//staticcdn.openrent.co.uk/images/Transport/nationalrail_24.png" className="w-[24px] sm:float-left sm:mr-3" alt="National Rail" />
                        <span className="font-normal sm:ml-[2rem]">Battersea Park</span>
                    </>} value={<span className="font-normal">27 minute walk</span>} evenRow />
                </>
            )}

            <div className="flex gap-3 items-center justify-center py-1 mt-4 cursor-pointer text-black" onClick={toggleExpand}>
                <div className="text-center">{isExpanded ? "Hide local transport" : "Show local transport"}</div>
                <i className={`fa ${isExpanded ? "fa-chevron-up" : "fa-chevron-down"} text-black w-[13px] sm:w-[16px]`}></i>
            </div>
        </>
    );
};

export default TransportGrid;
