const Intro: React.FC = () => {
    return (
        <section className="py-40 bg-neutral-50">
            <div className="max-w-4xl mx-auto px-6 text-center">

                {/* Label */}
                <p className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
                    Our Philosophy
                </p>

                {/* Main Statement */}
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight mb-16">
                    Email was built for storage.
                    <br />
                    We built it for conversation.
                </h2>

                {/* Divider */}
                <div className="w-24 h-px bg-neutral-300 mx-auto mb-16" />

                {/* Principles */}
                

            </div>
        </section>
    )
}

export default Intro;