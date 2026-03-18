const Footer: React.FC = () => {
    return (
        <section className="bg-neutral-950 text-neutral-300 py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Top Section */}
                <div className="grid md:grid-cols-3 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <h3 className="text-white text-2xl font-semibold mb-4">
                            Sparrow
                        </h3>
                        <p className="text-neutral-400 max-w-sm">
                            The smart, modern way to mail. Built for flow, not folders.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-medium mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-neutral-400">
                            <li>
                                hello@sparrowmail.com
                            </li>
                            <li>
                                Support
                            </li>
                            <li>
                                Twitter / X
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-medium mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3 text-neutral-400">
                            <li>
                                About
                            </li>
                            <li>
                                Privacy
                            </li>
                            <li>
                                Terms
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="h-px bg-neutral-800 mb-8" />

                {/* Bottom Line */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                    <p>
                        © {new Date().getFullYear()} Sparrow. All rights reserved.
                    </p>
                    <p className="mt-4 md:mt-0">
                        Designed for the future of communication.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Footer;