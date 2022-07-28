const Features = () => {
    return (
        <section id="features">
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-2xl font-bold text-center md:text-left">
                        Számunkra fontos,hogy meglévő ötletedet teljes mértékben megvalósítsuk
                    </h2>
                    <p className="max-w-sm text-center text-slate-500 md:text-left">
                        Azon leszek hogy saját elképzeléseinkkel új megvilágításba helyezzük koncepciódat.
                    </p>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
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

                        <div className="rounded-l-full bg-orange-200 md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div
                                    className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
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
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, neque facere blanditiis vero asperiores, temporibus ipsam similique reprehenderit dolorum labore ullam iusto porro tenetur a architecto nostrum qui minus commodi!
                            </p>
                        </div>
                    </div>

                    <div
                        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <div className="rounded-l-full bg-orange-200 md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div
                                    className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae fugiat assumenda neque in vel dolores non ex earum nam, doloremque corporis alias voluptas quis sunt sed ratione delectus aperiam?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;