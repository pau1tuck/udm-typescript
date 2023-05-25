import { ITrackRowDataProps } from "@/types/track.types";

const TrackRowData = (props: { trackRowDataProps: ITrackRowDataProps }) => {
    const { number, image, titleArtist, label, controls, duration } =
        props.trackRowDataProps;
};
