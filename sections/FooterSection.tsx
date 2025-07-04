import SocialLinks from "@/components/SocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-4 md:gap-8 justify-center p-4 md:pb-[60px] pb-[120px] text-center mt-auto">
      <SocialLinks />
      <div className="text-primary-white text-xs md:text-sm">
        Developed in{" "}
        <a
          className="underline text-lavender hover:font-bold cursor-pointer"
          href="https://github.com/DylanPina/neovim-config"
        >
          neovim
        </a>{" "}
        btw
      </div>
    </footer>
  );
};

export default Footer;
