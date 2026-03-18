const bento: React.FC = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-20">
                    From Inbox to Flow.
                </h2>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-3 gap-6 auto-rows-[220px]">

                    {/* OLD — Large Static Inbox Card */}
                    <div className="bg-neutral-100 rounded-3xl p-6 col-span-2 flex flex-col justify-between">
                        <div>
                            <div className="h-4 w-24 bg-neutral-300 rounded mb-6" />
                            <div className="space-y-3">
                                <div className="h-3 bg-neutral-300 rounded w-full" />
                                <div className="h-3 bg-neutral-300 rounded w-5/6" />
                                <div className="h-3 bg-neutral-300 rounded w-4/6" />
                            </div>
                        </div>
                        <div className="text-sm text-neutral-500">
                            Static. Sorted. Administrative.
                        </div>
                    </div>

                    {/* NEW — Highlight Flow Card */}
                    <div className="relative bg-white rounded-3xl p-6 shadow-lg shadow-red-500/10 overflow-hidden hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300">

                        {/* Soft Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.12),transparent_60%)]" />

                        <div className="relative flex flex-col justify-between h-full">
                            <div>
                                <div className="h-4 w-24 bg-neutral-900 rounded mb-6" />
                                <div className="space-y-4">
                                    <div className="bg-neutral-100 px-4 py-2 rounded-2xl w-3/4 text-sm">
                                        Message sent
                                    </div>
                                    <div className="bg-red-600 text-white px-4 py-2 rounded-2xl w-2/3 text-sm animate-pulse">
                                        Reply received
                                    </div>
                                </div>
                            </div>

                            <div className="text-sm text-neutral-700">
                                Fluid. Responsive. Conversational.
                            </div>
                        </div>
                    </div>

                    {/* OLD — Small Card */}
                    <div className="bg-neutral-100 rounded-3xl p-6 flex items-end">
                        <p className="text-neutral-500 text-sm">
                            Manual filtering
                        </p>
                    </div>

                    {/* NEW — Small Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-end">
                        <p className="text-neutral-900 text-sm">
                            Smart context
                        </p>
                    </div>

                    {/* NEW — Small Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-end">
                        <p className="text-neutral-900 text-sm">
                            Unified conversation
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default bento;