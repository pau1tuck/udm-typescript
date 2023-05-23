import Image from "next/image";

const Logo: React.FC = () => {
    return (
        <div className="flex items-center">
            <Image
                src="/img/udm-logo.png"
                alt="UDM"
                width={250}
                height={250}
                className="mr-2"
            />
        </div>
    );
};

export default Logo;
