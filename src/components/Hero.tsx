const Hero: React.FC = () => {
    return (
        <section className="relative pt-40 pb-32 text-center">
  
            {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(220,38,38,0.08),transparent_60%)]"></div> */}
            {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.08),transparent_60%)]"></div> */}

            <div className="max-w-4xl mx-auto px-6">
                
                <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-neutral-900">
                Rethink Email.
                </h1>

                <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                A smarter, more intuitive way to manage conversations in a modern workflow.
                </p>

                <div className="mt-10 flex justify-center gap-4">
                    <a
                        href="#"
                        className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-red-700 transition"
                    >
                        Get Started
                    </a>
                    <a
                        href="#"
                        className="text-neutral-700 text-sm font-medium hover:text-neutral-900 px-6 py-3 rounded-full border border-neutral-300 hover:border-neutral-500 transition"
                    >
                        See how it works
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;