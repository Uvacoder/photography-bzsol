const About = () => {
    return (
        <section id="about">
            <h2 className="text-4xl font-bold text-center md:mt-60">
                Magamról 📌
            </h2>
            <div className="container flex flex-col px-4 mx-auto md:mt-40 mt-20 space-y-12 md:space-y-0 md:flex-row">
                <div className="flex flex-col space-y-12 md:w-1/2 ">
                    <img className="rounded-full  shadow-2xl" src="https://img-comment-fun.9cache.com/media/agvm72v/a5jMR2GN_700w_0.jpg" width={400} height={400} alt='me'></img>
                </div>

                <div className="flex flex-col space-y-8 md:w-1/2">

                    <div
                        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
                    >

                        <div className="rounded-l-full bg-orange-200 md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div
                                    className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fast-forward-fill" viewBox="0 0 16 16">
                                        <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
                                        <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Lorem Ipsum
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Lorem Ipsum
                            </h3>
                            <p className="text-slate-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quis labore impedit atque. Illo est fugiat consequatur voluptates suscipit molestias eaque autem. Aliquid amet quae eius, neque voluptas iure sunt!
                            </p>
                        </div>
                    </div>


                    <div
                        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
                    >

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Lorem Ipsum
                            </h3>
                            <p className="text-slate-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, neque facere blanditiis vero asperiores, temporibus ipsam similique reprehenderit dolorum labore ullam iusto porro tenetur a architecto nostrum qui minus commodi!
                            </p>
                        </div>
                    </div>

                    <div
                        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Lorem Ipsum
                            </h3>
                            <p className="text-slate-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae fugiat assumenda neque in vel dolores non ex earum nam, doloremque corporis alias voluptas quis sunt sed ratione delectus aperiam?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;