export const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Add this div to ensure space below navbar */}
            <div className="pt-24 flex-grow max-w-7xl mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold text-[#351108]">About Us</h1>
                <p className="mt-4 text-gray-600">
                    Welcome to Spicelore! We specialize in premium quality spices that bring flavor and aroma to your dishes.
                    Our mission is to provide fresh, organic, and ethically sourced spices from around the world.
                </p>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;
