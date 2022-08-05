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
                        <img className="rounded-full shadow-2xl" src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-1/286359524_2231945443630121_2665830751799325574_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=VD6DB-1rhEwAX9EjsYz&_nc_ht=scontent-vie1-1.xx&oh=00_AT_bcGIzOJ6GSGNBot0EhFlo_cflFeMrYoIfOkV_vuoT7A&oe=62F1A922" height={300} width={300} alt='me'></img>
                    </div>
                </div>

            </section>
            <div className="flex flex-col mr-5 ml-5 mt-10 mb-16  md:grid grid-cols-3 gap-10 content-center md:ml-20 md:mr-20 md:mt-20">
                <p>Csak a kézzel fogható, gyakorlatias témák foglaltak le igazán. Így tizenöt éves koromtól kezdődően a fotózás volt az egyetlen, ami lekötött, ami igazán érdekelt. Mindent megtettem annak érdekében, hogy az álmom valóra váljon és a hobbimból karriert építsek.

                    Azóta csapattá fejlődtünk, szálloda fotózásra specializálódva hatékony fotók készítésével foglalkozunk a megbízóink részére.

                    Egy reklámzajjal teli világban, ahol a néző figyelmének felkeltésére, meggyőzésére csak másodperceink vannak, a hatékony fotók a szállodák számára érték. Különösen odafigyelünk, hogy ez a felépített, tökéletes pillanat ne csak esztétikus legyen, de megjelenjen rajta minden olyan üzenet, ami a szálloda marketingcéljai számára lényeges. Kattintani ugyanis könnyű, míg egy olyan beállítást megtalálni és felépíteni, ami képes egy üzenetet átadni, jóval időigényesebb. </p>
                    <p>Kezeiben válnak a pixelek vizuális entitássá. Csapat női tagjaként igyekszik kordában tartani a fiúkat. Sikertelenül. De cserébe közben nagyon jól szórakozik.

Hobbi-barista. A kávé zamata inspirálja. Ilyenkor korlátlan boldogság tölti el.

Tudatalattiját meditációval és jógával szelídíti.</p>
<p>
A rosszul álló székek elleni harcosok legnagyobbika. Gyűrőtt ágyneműk ádáz ellensége. Rosszul lelogó függönyök rekonstruktőre. Hajnali fotózásokra nehézkes felébreszteni, de ha sikerült, akkor ébren van. Fáradhatatlanül jókedvű és szeret pizsamában lenni.

A gasztró élményekért dolgozik csak velünk. Szereti a hasát.
Mi meg őt.  
</p>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default HeroAbout;