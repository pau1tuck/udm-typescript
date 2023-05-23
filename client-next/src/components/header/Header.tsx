// @/components/header/Header.tsx

import Logo from "@/components/header/Logo";
import Title from "@/components/header/Title";

const Header: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-[-65px] mb-10">
            <Logo />
            <Title />
        </div>
    );
};

export default Header;
