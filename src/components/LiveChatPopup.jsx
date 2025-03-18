import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { IoClose, IoSend } from "react-icons/io5";

const LiveChatPopup = ({ isOpen, onClose, whatsappNumber = "917042284508" }) => {
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);

    const sendMessage = () => {
        if (message.trim() === "") return;

        // Update chat history with user message
        const newChat = [...chatHistory, { sender: "user", text: message }];
        setChatHistory(newChat);

        // Open WhatsApp with the pre-filled message
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");

        // Simulate an automated bot reply inside the chat popup
        setTimeout(() => {
            const botReply = {
                sender: "bot",
                text: "We've received your message! We will reply shortly on WhatsApp.",
            };
            setChatHistory([...newChat, botReply]);
        }, 2000);

        setMessage(""); // Clear input after sending
    };

    return isOpen
        ? createPortal(
            <div className="fixed inset-0 z-[9998] flex items-center justify-center">
                <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
                <motion.div
                    className="fixed lg:bottom-40 lg:right-[580px] w-80 bg-white shadow-lg rounded-lg p-4 border border-red-500 z-[9999]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Chat Header */}
                    <div className="flex items-center border-b pb-2">
                        <img src="https://www.pngarts.com/files/3/Red-Headphone-PNG-Transparent-Image.png" alt="Chat Icon" className="w-6 h-6 mr-2" />
                        <h2 className="text-lg font-semibold font-roboto text-red-600">Live Counseling</h2>
                        <IoClose
                            className="text-xl cursor-pointer text-gray-700 hover:text-red-500 ml-auto"
                            onClick={onClose}
                        />
                    </div>


                    {/* Chat Messages */}
                    <div className="h-40 overflow-y-auto mt-2 border p-2 rounded flex flex-col space-y-2">
                        {chatHistory.map((chat, index) => (
                            <div
                                key={index}
                                className={`p-2 text-sm rounded-lg max-w-[80%] ${chat.sender === "user"
                                        ? "bg-green-100 text-green-800 self-end text-right"
                                        : "bg-gray-100 text-gray-800 self-start text-left"
                                    }`}
                            >
                                {chat.text}
                            </div>
                        ))}
                    </div>

                    {/* Message Input */}
                    <div className="mt-2 flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 border p-2 rounded-md text-sm"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-red-600 text-white p-2 rounded-md hover:bg-green-700 transition"
                        >
                            <IoSend className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>,
            document.body
        )
        : null;
};

export default LiveChatPopup;
