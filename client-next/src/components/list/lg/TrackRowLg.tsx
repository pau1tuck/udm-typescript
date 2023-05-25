import { ITrackRowProps } from "@/components/list/ListView";

const listLgColumnWidths = "grid-cols-[50px,128px,1fr,225px,210px,75px]";

const TrackRowLg = ({ index, track }: ITrackRowProps) => {
    return (
        <div className="max-w-1280 mx-auto mb-2">
            <div
                className="grid gap-0 w-full font-body font-bold bg-customGray text-gray-500"
                style={{ gridTemplateRows: "auto auto" }}
            ></div>
        </div>
    );
};

export default TrackRowLg;
