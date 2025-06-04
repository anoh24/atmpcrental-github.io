
import React, { useState } from 'react';

const messagesData = [
  { id: 1, sender: "landlord", text: "Hi! Just checking in about the rent." },
  { id: 2, sender: "renter", text: "Hi, I’ll pay it this week po." },
  { id: 3, sender: "landlord", text: "Okay, no worries. Thank you!" },
];

const CustomerAdminAccountChattingSection = () => {
  const [messages, setMessages] = useState(messagesData);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([
      ...messages,
      { id: messages.length + 1, sender: "renter", text: input },
    ]);
    setInput("");
  };

  return (
    <div className="mt-28 max-w-3xl mx-3 lg:mx-auto md:mx-auto  font-oswald px-4">
      <div className="bg-black text-white w-full px-4 py-3 text-lg font-semibold rounded-md ">
        Chat with Landlord
      </div>

      <div className="h-96 overflow-y-auto p-4 bg-gray-50 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "renter" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.sender === "renter"
                  ? "bg-black text-white rounded-br-none"
                  : "bg-gray-200 text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t flex items-center p-3 bg-white">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none text-black"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-3 px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CustomerAdminAccountChattingSection;
