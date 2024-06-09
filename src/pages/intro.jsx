export default function Intro() {
    return (
      <div className="relative flex flex-col items-center bg-black">
        <div className="absolute bottom-0 w-full h-1/2 z-10">
          <div className="bg-black bg-opacity-55 h-full" style={{ clipPath: 'polygon(0 40%, 120% 0, 100% 100%, 0% 100%)' }}>
            <div className="text-white p-8" style={{ transform: 'translateY(90%)' }}>
              <p>Hi, I'm</p>
              <p>Ariel Zakly P.</p>
              <p>Fullstack Web Developer</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-1/2 z-0">
          <div className="bg-white h-full" style={{ clipPath: 'polygon(0 40%, 120% 0, 100% 100%, 0% 100%)' }}></div>
        </div>
        <img 
          src="https://i.imgur.com/a5Jyj5e.png" 
          className="relative z-5 mt-4"
          alt="Intro Image" 
        />
      </div>
    );
  }
  