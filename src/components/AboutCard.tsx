type SocialLink = {
  href: string;
  icon: string;
  alt: string;
};

type AboutCardProps = {
  title: string;
  name: string;
  description: string;
  socialLinks: SocialLink[];
};

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  name,
  description,
  socialLinks,
}) => {
  return (
    <div className="relative shadow-sm top-[60px] h-[70%] min-h-[350px] w-[80%] min-w-[330px] bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-6 text-white text-xl font-bold overflow-hidden transition-all duration-200 animate-showup z-10 flex flex-col justify-center items-center">
      {/* Título */}
      <div className="flex w-[80%] h-[20%] justify-center xl:text-8xl text-[45px] font-extrabold flex-col">
        {title}
      </div>

      {/* Nombre */}
      <div className="flex w-[80%] h-[10%] text-sky-300 lg:text-4xl text-[25px] font-bold">
        {name}
      </div>

      {/* Descripción */}
      <div className="flex w-[80%] h-[55%] lg:h-[40%] text-white md:text-[1.5rem] lg:text-3xl sm:text-[1.2rem] text-[1rem] font-normal border-b md:border-white/50">
        {description}
      </div>

      {/* Redes sociales */}
      <div className="flex w-[80%] md:h-[10%] h-[20%] text-white text-4xl font-normal justify-center items-center">
        <div className="flex gap-6 justify-start mt-6 w-full flex-row">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src={link.icon}
                alt={link.alt}
                className="md:w-8 md:h-8 w-5 h-5 invert dark:invert-0"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
