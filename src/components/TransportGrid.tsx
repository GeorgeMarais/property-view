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
                        <img src="//staticcdn.openrent.co.uk/images/Transport/nationalrail_24.png" style={{ width: "24px", position: "absolute", float: "left" }} alt="National Rail"></img>
                        <span className="font-normal" style={{ marginLeft: "2rem" }}>Clapham Junction</span>
                    </>} value={<span className="font-normal">10 minute walk</span>} evenRow />
                    <GridRow label={<>
                        <img src="//staticcdn.openrent.co.uk/images/Transport/nationalrail_24.png" style={{ width: "24px", position: "absolute", float: "left" }} alt="National Rail"></img>
                        <span className="font-normal" style={{ marginLeft: "2rem" }}>Wandsworth Town</span>
                    </>} value={<span className="font-normal">24 minute walk</span>} />
                    <GridRow label={<>
                        <img src="//staticcdn.openrent.co.uk/images/Transport/nationalrail_24.png" style={{ width: "24px", position: "absolute", float: "left" }} alt="National Rail"></img>
                        <span className="font-normal" style={{ marginLeft: "2rem" }}>Battersea Park</span>
                    </>} value={<span className="font-normal">27 minute walk</span>} evenRow />
                </>
            )}

            <div className="flex gap-3 items-center py-1 mt-4 cursor-pointer" onClick={toggleExpand}>
                <div className="self-stretch my-auto">{isExpanded ? "Hide local transport" : "Show local transport"}</div>
                <i className={`fa ${isExpanded ? "fa-chevron-up" : "fa-chevron-down"} object-contain shrink-0 self-stretch my-auto aspect-[1.3] w-[13px]`}></i>
            </div>
        </>
    );
};

export default TransportGrid;
