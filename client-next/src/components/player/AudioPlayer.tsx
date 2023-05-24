import ReactPlayer from "react-player";

export const AudioPlayer = () => {
    return (
        <div>
            <ReactPlayer
                url="https://example.com/audio-file.mp3"
                controls={true}
            />
        </div>
    );
};
