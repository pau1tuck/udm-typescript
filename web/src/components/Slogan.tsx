import { useViewMode } from "@/utils/ViewModeProvider";
import useTypewriterEffect from "@/utils/typewriter-effect";

const Slogan: React.FC = () => {
    const viewMode = useViewMode();
    const slogan = "Delivering the finest new house and techno.";

    const text = useTypewriterEffect(slogan, viewMode);

    return <div className="font-cursive text-tertiary">{text}</div>;
};

export default Slogan;
