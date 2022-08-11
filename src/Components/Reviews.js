function getPic(){
    return `https://randomuser.me/api/portraits/${(Math.round(Math.random())) ? "women" : "men"}/${Math.floor(Math.random() * (50 - 1 + 1) ) + 1}.jpg`
}

const Reviews = () => {
    return (
        <section id="reviews">
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                <h2 className="text-4xl font-bold text-center">
                    Vélemények rólam ⭐
                </h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <div className="flex flex-col items-center p-6 mt-16 space-y-6 bg-white rounded-lg border border-gray-200 shadow-md md:w-1/3">
                        <img src={getPic()} className="w-20 -mt-14 rounded-full left-4" alt="" />
                        <h5 className="text-lg font-bold">Suq Madik</h5>
                        <p className="text-sm text-slate-500">
                            “My iPhone is better than your 3k$+-DSLR — and no I’m not trying to hate on your profession or your gear.”
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 mt-16 space-y-6 bg-white rounded-lg border border-gray-200 shadow-md md:w-1/3">
                        <img src={getPic()} className="w-20 -mt-14 rounded-full left-4" alt="" />
                        <h5 className="text-lg font-bold">Justin Case</h5>
                        <p className="text-sm text-slate-500">
                        Nagyon bátor turulbaszó csicskamagyarok lehettek. Csak tudnám, hogy belém miért nem mer sosem egy ilyen turulcsicska sem belémkötni. Pedig nem vagyok egy Schwarzenegger
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 space-y-6 mt-16 bg-white rounded-lg border border-gray-200 shadow-md md:w-1/3">
                        <img src={getPic()} className="w-20 -mt-14 rounded-full left-4" alt="" />
                        <h5 className="text-lg font-bold">Jenna Tolls</h5>
                        <p className="text-sm text-slate-500">
                        Hé! Figyu már! Van egy csodás üzleti ajánlatom. Tudom, tudom, nap mint nap látod ezeket, az egyik cukorkákat, másik olajokat, harmadik tudatalattirezgető appot árul. Unalmasak, mi? Na, mi nem vagyunk ilyenek. Gondolnád, hogy egy piramisjátékba hívlak be, de az lehetetlen, mert van Termék. Érted, TERMÉK VAN!!!!!
                        </p>
                    </div>
                </div>
                <div className="mt-16"></div>
            </div>

        </section>
    );
}

export default Reviews;