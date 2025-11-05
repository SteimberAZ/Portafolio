import { motion } from "framer-motion";

type Props = {
  texto: string[];
};

function TextoFor({ texto }: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="flex flex-wrap w-[250px] text-white font-bold  text-[25px] md:text-[50px] md:w-[500px] "
    >
      {texto.map((elemento, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: -5 },
            visible: { opacity: 1, y: 0 },
          }}
          className="inline-block"
        >
          {elemento === " " ? "\u00A0" : elemento}
        </motion.span>
       
      ))}
      <motion.span
        variants={{
          hidden: { opacity: 0, y: -5 },
          visible: { opacity: 1, y: 0 },
        }}
        className="animate-bounce mt-[5px] ml-1"
      >
        _
      </motion.span>
    </motion.div>
  );
}

export default TextoFor;
//const frase = "Hola me llamo Randy esta es mi pagina de componentes de React";
//<div className="w-[226px] h-[100px] bg-white border flex border-gray-300 rounded p-4 overflow-hidden m-5">
//<TextoFor texto={frase.split("")} />
//</div>
