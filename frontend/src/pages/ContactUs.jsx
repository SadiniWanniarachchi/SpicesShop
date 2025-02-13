export const ContactUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-[#351108]">Contact Us</h1>
            <p className="mt-4 text-gray-600">Have questions? We'd love to hear from you!</p>
            <form className="mt-8 max-w-lg mx-auto">
                <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg mb-4" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg mb-4" />
                <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg mb-4"></textarea>
                <button className="w-full px-6 py-3 bg-[#351108] text-white rounded-lg hover:bg-amber-700 transition-all">Send Message</button>
            </form>
        </div>
    );
};
export default ContactUs;