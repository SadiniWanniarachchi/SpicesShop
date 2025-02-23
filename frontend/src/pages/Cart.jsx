import { useState } from "react";
import { MdDelete } from "react-icons/md"; // Import delete icon
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
    // Sample cart data (replace with your actual cart state)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Turmeric Powder",
            price: 12.99,
            quantity: 2,
            image: "/src/assets/turmeric.jpg",
        },
        {
            id: 2,
            name: "Cloves",
            price: 8.99,
            quantity: 1,
            image: "/src/assets/cloves.jpg",
        },
        {
            id: 3,
            name: "Cinnamon Sticks",
            price: 10.99,
            quantity: 3,
            image: "/src/assets/cinnamon.jpg",
        },
    ]);

    // State for showing payment form
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    // State for payment form fields
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        nameOnCard: "",
    });

    // State for form validation errors
    const [errors, setErrors] = useState({});

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Handle quantity change
    const handleQuantityChange = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Handle item removal
    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Handle payment form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    // Validate payment form
    const validateForm = () => {
        const newErrors = {};

        if (!paymentDetails.cardNumber || paymentDetails.cardNumber.length !== 16) {
            newErrors.cardNumber = "Card number must be 16 digits.";
        }

        if (!paymentDetails.expiryDate || !/^\d{2}\/\d{2}$/.test(paymentDetails.expiryDate)) {
            newErrors.expiryDate = "Expiry date must be in MM/YY format.";
        }

        if (!paymentDetails.cvv || paymentDetails.cvv.length !== 3) {
            newErrors.cvv = "CVV must be 3 digits.";
        }

        if (!paymentDetails.nameOnCard) {
            newErrors.nameOnCard = "Name on card is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Handle checkout
    const handleCheckout = () => {
        if (validateForm()) {
            alert("Payment successful! Thank you for your purchase.");
            // Clear cart and reset form
            setCartItems([]);
            setShowPaymentForm(false);
        }
    };

    return (
        <>
            <Navbar />

            {/* Cart Page Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-[#351108] mb-8">Your Cart</h1>

                {/* Cart Items */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white shadow-lg rounded-lg p-6 mb-6 flex flex-col sm:flex-row items-center justify-between">
                                {/* Product Image */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-lg mb-4 sm:mb-0"
                                />

                                {/* Product Details */}
                                <div className="flex-1 sm:ml-6">
                                    <h3 className="text-xl font-bold text-[#351108]">{item.name}</h3>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center mt-4 sm:mt-0">
                                    <button
                                        className="bg-gray-200 text-[#351108] px-3 py-1 rounded-lg hover:bg-gray-300 transition-all"
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                        disabled={item.quantity === 1}
                                    >
                                        -
                                    </button>
                                    <span className="mx-4 text-lg font-semibold">{item.quantity}</span>
                                    <button
                                        className="bg-gray-200 text-[#351108] px-3 py-1 rounded-lg hover:bg-gray-300 transition-all"
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Remove Button */}
                                <button
                                    className="text-red-600 hover:text-red-800 mt-4 sm:mt-0 sm:ml-6"
                                    onClick={() => handleRemoveItem(item.id)}
                                >
                                    <MdDelete className="w-6 h-6" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white shadow-lg rounded-lg p-6 h-fit">
                        <h2 className="text-2xl font-bold text-[#351108] mb-6">Order Summary</h2>

                        {/* Subtotal */}
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                        </div>

                        {/* Shipping */}
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-semibold">$5.00</span>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between mb-6">
                            <span className="text-gray-600">Total</span>
                            <span className="font-bold text-[#351108]">${(totalPrice + 5).toFixed(2)}</span>
                        </div>

                        {/* Checkout Button */}
                        <button
                            className="w-full bg-[#351108] text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-all"
                            onClick={() => setShowPaymentForm(true)}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>

            {/* Pop-Up Payment Form */}
            {showPaymentForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold text-[#351108] mb-6">Payment Details</h2>

                        {/* Card Number */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={paymentDetails.cardNumber}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#351108]"
                                placeholder="1234 5678 9012 3456"
                            />
                            {errors.cardNumber && <p className="text-red-600 text-sm mt-1">{errors.cardNumber}</p>}
                        </div>

                        {/* Expiry Date */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Expiry Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={paymentDetails.expiryDate}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#351108]"
                                placeholder="MM/YY"
                            />
                            {errors.expiryDate && <p className="text-red-600 text-sm mt-1">{errors.expiryDate}</p>}
                        </div>

                        {/* CVV */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                value={paymentDetails.cvv}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#351108]"
                                placeholder="123"
                            />
                            {errors.cvv && <p className="text-red-600 text-sm mt-1">{errors.cvv}</p>}
                        </div>

                        {/* Name on Card */}
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2">Name on Card</label>
                            <input
                                type="text"
                                name="nameOnCard"
                                value={paymentDetails.nameOnCard}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#351108]"
                                placeholder="John Doe"
                            />
                            {errors.nameOnCard && <p className="text-red-600 text-sm mt-1">{errors.nameOnCard}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            className="w-full bg-[#351108] text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-all"
                            onClick={handleCheckout}
                        >
                            Pay Now
                        </button>

                        {/* Close Button */}
                        <button
                            className="w-full mt-4 text-[#351108] hover:text-amber-900"
                            onClick={() => setShowPaymentForm(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Cart;