import SocialLinks from "@/components/SocialLinks";
import { SiNeovim } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-6 justify-center p-4 py-[90px] text-center mt-auto">
      <SocialLinks />
      <div className="text-primary-white text-sm md:text-base">
        Developed in{" "}
        <a
          className="underline text-lavender hover:font-bold cursor-pointer"
          href="https://github.com/DylanPina/neovim-config"
        >
          neovim
        </a>{" "}
        btw by Dylan Pina
      </div>
    </footer>
  );
};

export default Footer;
