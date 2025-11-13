
type ContactCardProps = {
  title: string;
  phone: string;
  email: string;
  linkedin: string;
};

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  phone,
  email,

}) => {
  return (
    <div className="relative shadow-sm top-[60px] h-[70%] min-h-[350px] w-[80%] min-w-[330px] bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 p-6 text-white text-xl font-bold overflow-hidden transition-all duration-200 animate-showup z-10 flex flex-col justify-center items-center">
      
      {/* Título */}
      <div className="flex w-[80%] h-[20%]  xl:text-8xl text-[45px] font-extrabold flex-col ">
        {title}
      </div>

      {/* Teléfono */}
      <div className="flex w-[80%] h-[15%] text-white lg:text-3xl text-[16px] font-semibold items-center gap-2">
        <img className=" hover:scale-110 transition-transform duration-200  md:w-8 md:h-8 w-6 h-6 invert dark:invert-0" src="https://simpleicons.org/icons/whatsapp.svg"></img>

        <a
          href={`tel:${phone}`}
          className="hover:text-gray-300 transition-all duration-200"
        >
          {phone}
        </a>
      </div>

      {/* Correo */}
      <div className="flex w-[80%] h-[15%] text-white lg:text-3xl text-[16px] font-semibold  items-center gap-2">
        <img className=" hover:scale-110 transition-transform duration-200 md:w-8 md:h-8 w-6 h-6 invert dark:invert-0" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"></img>
        <a
          href={`mailto:${email}`}
          className="hover:text-gray-300 transition-all duration-200 "
        >
          {email}
        </a>
      </div>
      <div className="flex w-[80%] h-[15%] text-white lg:text-3xl text-[16px] font-semibold  items-center gap-2 border-b md:border-white/50">
        <img className=" hover:scale-110 transition-transform duration-200 md:w-8 md:h-8 w-6 h-6 invert dark:invert-0" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"></img>
        <a
          href="https://www.linkedin.com/in/randy-arteaga-85b009349/"  target="_blank"
          className="hover:text-gray-300 transition-all duration-200 "
        >
          Randy Arteaga
        </a>
      </div>
      
       
    
    </div>
  );
};

export default ContactCard;

