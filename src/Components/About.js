import pic from "../img/boss.jpg";
const About = () => {
    return (
        <section id="about">
            <h2 className="text-4xl font-bold text-center md:mt-60">
                Magamról 📌
            </h2>
            <div className="container flex flex-col px-4 mx-auto md:mt-40 mt-10 space-y-12 md:space-y-0 md:flex-row items-center">
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <img className="rounded-2xl w-96  shadow-2xl" src={pic}  alt='me'></img>
                </div>

                <div className="flex flex-col space-y-8 md:w-1/2 text-justify">
                    <div
                        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
                    >

                        <div>
                            <h3 className="hidden mb-10  font-bold md:block text-3xl">
                                Üdv Svetz Ádám vagyok,
                            </h3>
                            <p className="text-slate-700 text-lg">
                            Fotográfus végzettségemet Budapesten szereztem meg és több mint hét éve foglalkozom fotográfiával.
                            Fotóim megjelentek újságokban, hírportálokon
                            Számomra a fotózás a saját szemléletmódom kifejezése, megosztása a külvilággal.
                            </p>
                        </div>
                    </div>

                    <div
                        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                
                            </h3>
                            <p className="text-slate-700 text-lg">
                            A Fotózás számos területén otthonosan mozgok, nem szeretném magam egy adott tematika mellett lekötni,
                            hiszen célom a fejlődés és az új kihívások, illetve szakmai megoldások keresése.
                            Úgy gondolom hogy az egyedi és újszerű ötletek azok amik egy adott koncepcióból nagyszerű végeredményt varázsolnak, ez az amiért elkezdtem fotózni.
                            És ez motivál a mai napig. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;