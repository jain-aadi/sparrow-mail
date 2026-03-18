import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-neutral-200/40">
            <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
                
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Sparrow" className="h-6 w-6" />
                    <span className="text-neutral-900 font-medium tracking-tight">
                        Sparrow
                    </span>
                </div>

                {/* Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
                    <a href="#product" className="hover:text-neutral-900 transition-colors">
                        Product
                    </a>
                    <a href="#philosophy" className="hover:text-neutral-900 transition-colors">
                        Philosophy
                    </a>
                    <a href="#pricing" className="hover:text-neutral-900 transition-colors">
                        Pricing
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <a href="/login" className="text-sm text-neutral-600 hover:text-neutral-900">
                        Sign in
                    </a>
                    <a
                        href="/signup"
                        className="text-sm font-medium bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;