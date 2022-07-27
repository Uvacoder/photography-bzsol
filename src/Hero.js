import image from "./img/background_image.jpg"

const Hero = () => {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 p-12">
                <div className="flex flex-col mb32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                        Legyen önnek a legjobb fotója!🚀
                    </h1>
                    <p className="max-w-sm text-center text-slate-500 md:text-left">
                    Számunkra fontos,hogy meglévő ötletedet teljes mértékben megvalósítsuk, emellett mi azon leszünk hogy saját elképzeléseinkkel új megvilágításba helyezzük koncepciódat.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img src={image} alt="Foto" />
                </div>
            </div>
        </section>
    );
}
 
export default Hero;