import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (

        <>
            <Navbar />
            <div className="p-10">
                <h1 className="text-3xl">Welcome to Spicelore</h1>
                <p className="mt-4 text-gray-600">We specialize in premium quality spices that bring flavor and aroma to your dishes.</p>
                <div className="h-96"></div>
            </div>

            <Footer />

        </>
    );
};

export default Home;
