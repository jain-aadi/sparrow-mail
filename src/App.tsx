import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bento from './components/bento';
import Intro from './components/Intro';
import Price from './components/price';
import Footer from './components/footer';

const App: React.FC = () => {
	return (
		<div className="relative bg-white text-neutral-900 overflow-hidden">
			<Navbar />
			<Hero />
			<Bento />
			<Intro />
			<Price />
			<Footer />
		</div>
	);
};

export default App;