import useTypewriter from "react-typewriter-hook";

const Slogan: React.FC = () => {
    const slogan = "Delivering the finest new house and techno.";
    const typewriter = useTypewriter(slogan);

    return <div className="font-cursive text-tertiary">{typewriter}</div>;
};

export default Slogan;
