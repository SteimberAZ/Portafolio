

const WaterMark = () => {
  return (
      <div className="w-[30px] h-auto  shadow-sm fixed bottom-1.5 left-1/2 -translate-x-1/2    min-w-[200px]  text-[16px] md:text-xl font-bold overflow-hidden transition-all duration-200 animate-showup z-[1] opacity-40 " >
        <div className="flex gap-3 w-[200px] justify-center items-center">
          <img src="/LogoLight.png" className="w-[30px] h-auto  " ></img>
         <p>SteimberAZ</p>
        </div>
        
      </div>
  )
}

export default WaterMark