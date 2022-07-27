

const Reviews = () => {
    return (
        <section id="reviews">
            <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
                <h2 class="text-4xl font-bold text-center">
                    Eddigi vélemények rólam:
                </h2>
            </div>
            <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
            <div
            class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src="img/avatar-anisha.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Anisha Li</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
            </div>
        </section>
    );
}

export default Reviews;