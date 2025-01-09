const GridRow: React.FC<{ label: React.ReactNode; value: React.ReactNode; evenRow?: boolean }> = ({ label, value, evenRow }) => (
    <div className={`flex flex-wrap justify-between items-center w-full ${evenRow ? "bg-stone-50" : "bg-white"} max-md:max-w-full`}>
        <div className="flex flex-col self-stretch my-auto text-base font-semibold text-black min-w-[240px] w-[354px] px-4 py-1.5">
            {label}
        </div>
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[354px] text-black px-4 py-1.5">
            {value}
        </div>
    </div>
);

export default GridRow;