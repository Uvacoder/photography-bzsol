import Footer from "./Footer";

const HeroAbout = () => {
    return (
        <div>
            <section id="haikei" >
                <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-5 space-y-0 md:space-y-0 p-20">
                    <div className="flex flex-col mb-32 space-y-12 md:w-4/5">
                        <h1 className="max-w-md text-4xl text-slate-900 font-bold text-center  md:text-5xl md:text-left">
                            Svetz Ádám
                        </h1>
                        <p className="text-slate-800 font-semibold text-2xl text-center md:text-left max-w-sm">Fotográfus</p>
                    </div>
                    <div className="rounded-xl md:w-1/5 ">
                        
                    </div>
                </div>

            </section>
            <div className="flex flex-col mr-5 ml-5 mt-10 mb-16  md:grid grid-cols-3 gap-10 content-center md:ml-20 md:mr-20 md:mt-20">
                
            </div>
            <Footer></Footer>
        </div>
    );
}

export default HeroAbout;