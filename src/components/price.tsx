const Price: React.FC = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                    Simple pricing.
                </h2>

                <p className="text-neutral-600 max-w-2xl mx-auto mb-16">
                    Choose the plan that matches your flow.
                </p>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Free */}
                    <div className="border border-neutral-200 rounded-3xl p-10 text-left">
                        <h3 className="text-xl font-medium mb-4">Free</h3>
                        <p className="text-4xl font-semibold mb-6">$0</p>
                        <ul className="space-y-4 text-neutral-600 mb-8">
                            <li>Core messaging</li>
                            <li>Smart organization</li>
                            <li>Basic context tools</li>
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-neutral-900 text-white">
                            Get Started
                        </button>
                    </div>

                    {/* Pro — Highlighted */}
                    <div className="rounded-3xl p-10 text-left shadow-xl shadow-red-500/10 border border-red-100 relative">

                        <div className="absolute top-6 right-6 text-xs bg-red-600 text-white px-3 py-1 rounded-full">
                            Most Popular
                        </div>

                        <h3 className="text-xl font-medium mb-4">Pro</h3>
                        <p className="text-4xl font-semibold mb-6">$12<span className="text-lg text-neutral-500">/mo</span></p>

                        <ul className="space-y-4 text-neutral-700 mb-8">
                            <li>Advanced context intelligence</li>
                            <li>Priority flow controls</li>
                            <li>Custom workflows</li>
                        </ul>

                        <button className="w-full py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 transition">
                            Upgrade to Pro
                        </button>
                    </div>

                    {/* Team */}
                    <div className="border border-neutral-200 rounded-3xl p-10 text-left">
                        <h3 className="text-xl font-medium mb-4">Team</h3>
                        <p className="text-4xl font-semibold mb-6">$29<span className="text-lg text-neutral-500">/user</span></p>
                        <ul className="space-y-4 text-neutral-600 mb-8">
                            <li>Shared conversations</li>
                            <li>Team intelligence</li>
                            <li>Priority support</li>
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-neutral-900 text-white">
                            Start Team Plan
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Price;