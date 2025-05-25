const ContactSection: React.FC = () => {
  return (
    <div>
      <section
        id="contact"
        className="flex flex-col gap-8 scroll-mt-[64px] bg-secondary-black px-4 section mx-auto py-12"
      >
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="section-heading text-3xl md:text-4xl text-center font-bold">
            Contact
          </h2>
        </div>
        <p className="mx-auto max-w-2xl lg:leading-loose text-center">
          If you have opportunities or want to collaborate, feel free to reach
          out through email at{" "}
          <a
            className="underline text-lavender hover:font-bold cursor-pointer"
            href="mailto:dylansp.dev@gmail.com"
          >
            dylansp.dev@gmail.com
          </a>
          ,{" "}
          <a
            className="underline text-lavender hover:font-bold cursor-pointer"
            href="https://www.linkedin.com/in/dylan-pina-swe/"
          >
            LinkedIn
          </a>
          , or{" "}
          <a
            className="underline text-lavender hover:font-bold cursor-pointer"
            href="https://discord.com/users/330155644743057408"
          >
            Discord
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default ContactSection;
