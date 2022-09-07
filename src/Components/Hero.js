import Slider from "./Slider";

// 
const Hero = () => {
    return (
        <section id="hero">
            <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-2 space-y-0 md:space-y-0 p-12">
                <div className="flex flex-col mb32 space-y-16 md:w-1/2">
                    <h1 className="max-w-sm text-4xl text-center font-bold  md:text-4xl md:text-left">
                        Segítek hogy a számára fontos pillanatok életre szóló emlékké váljanak!
                    </h1>
                    <p className="max-w-sm text-center text-slate-700 md:text-left font-semibold">
                        
                    </p>
                </div>
                <div className="w-96 md:w-1/2 rounded-xl">
                    <br></br>
                    <Slider className="rounded-xl"></Slider>
                </div>
            </div>
        </section>
    );
}

export default Hero;