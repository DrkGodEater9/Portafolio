import {age} from "./data";

export default function Hero() {

    return (
        <section className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-7xl w-full flex items-center gap-16">
          {/* Imagen circular */}
          <div className="flex-shrink-0">
            <div className="w-96 h-96 rounded-full overflow-hidden bg-gray-400 border-8 border-white shadow-2xl">
              <img
                src="/imagenAlex.jpg"
                alt="Alexander Morales"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Contenido del hero */}
          <div className="flex-1">
            <h2 className="text-8xl font-bold text-[#274C77] mb-6">
              Hello
            </h2>
            <h3 className="text-3xl font-semibold text-[#274C77] mb-4">
              A bit about me
            </h3>
            <p className="text-lg text-[#274C77] leading-relaxed max-w-2xl">
                I'm Alexander Morales Ujueta, a {age}-year-old programming enthusiast from Colombia. 
                I have a passion for creating innovative solutions and exploring new technologies. 
                In my free time, I enjoy working on personal projects, learning new programming languages, and contributing to open-source communities.
                Welcome to my portfolio where I showcase my work and skills. 
            </p>
          </div>
        </div>
      </section>
        
    );
}