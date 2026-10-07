import banner from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="bg-white">

            <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-5 py-16 lg:flex-row lg:py-20">

                <div className="max-w-2xl">

                    <h1 className="text-4xl font-bold leading-tight text-[#1e293b] md:text-5xl lg:text-6xl">

                        Build Your Ideal

                        <span className="text-brand-gradient block">
                            Development Stack
                        </span>

                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-[#64748b] md:text-lg">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <a
                            href="#technologies"
                            className="brand-gradient rounded-full px-6 py-3 font-semibold text-white shadow-md"
                        >
                            Explore Technologies
                        </a>

                        <a
                            href="#about"
                            className="rounded-full border border-[#d1d5db] px-6 py-3 font-semibold text-[#475569]"
                        >
                            Learn More
                        </a>

                    </div>

                </div>

                <div className="flex justify-center lg:w-1/2">

                    <img
                        src={banner}
                        alt="Development Stack"
                        className="w-full max-w-md"
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;