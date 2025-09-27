import React, { useState } from "react";

// Example renters with profile pics
const renters = [
  { id: 1, name: "Juan Dela Cruz", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Maria Santos", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "Pedro Reyes", avatar: "https://i.pravatar.cc/40?img=3" },
  { id: 4, name: "Ana Lopez", avatar: "https://i.pravatar.cc/40?img=4" },
  { id: 5, name: "Mark Villanueva", avatar: "https://i.pravatar.cc/40?img=5" },

];

// Example conversations per renter
const initialMessages = {
  1: [
    { id: 1, sender: "landlord", text: "Hi Juan, please don’t forget the rent." },
    { id: 2, sender: "renter", text: "Yes po, will pay tomorrow." },
  ],
  2: [
    { id: 1, sender: "landlord", text: "Hello Maria, kumusta po?" },
    { id: 2, sender: "renter", text: "Okay lang po, thanks!" },
  ],
  3: [
    { id: 1, sender: "landlord", text: "Pedro, update on your contract?" },
    { id: 2, sender: "renter", text: "Mag renew po ako next week." },
  ],
  4: [
    { id: 1, sender: "landlord", text: "Hi Ana, are you available to talk later?" },
    { id: 2, sender: "renter", text: "Yes po, around 6PM." },
  ],
  5: [
    { id: 1, sender: "landlord", text: "Mark, when is your next payment?" },
    { id: 2, sender: "renter", text: "This Friday po." },
  ],
  
};

const BranchAdminAccountChattingSection = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [activeRenter, setActiveRenter] = useState(null); // null = no chat opened on mobile
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: messages[activeRenter].length + 1,
      sender: "landlord",
      text: input,
    };

    setMessages({
      ...messages,
      [activeRenter]: [...messages[activeRenter], newMessage],
    });

    setInput("");
  };

  return (
   <div className="flex justify-center bg-gray-100 px-2 py-6 h-screen">
  <div className="w-full max-w-6xl flex border rounded-lg shadow-lg overflow-hidden md:mx-auto"
       style={{ height: "650px" }}  // 👈 fixed height (like Messenger desktop)
  >  
        {/* Sidebar (renters list) */}
        <div
          className={`
            w-full md:w-64 bg-white border-r overflow-y-auto scrollbar-none
            ${activeRenter && "hidden md:block"}  // hide when chat is open on mobile
          `}
        >
          <div className="sticky top-0 bg-green-500 text-white px-4 py-3 font-semibold">
            Renters
          </div>
          <ul>
            {renters.map((renter) => (
              <li
                key={renter.id}
                onClick={() => setActiveRenter(renter.id)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors
                  hover:bg-green-800 ${
                    activeRenter === renter.id ? "bg-green-500 text-black" : ""
                  }`}
              >
                <img
                  src={renter.avatar}
                  alt={renter.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <span className="truncate text-black">{renter.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat panel */}
        <div
          className={`
            flex-1 flex flex-col bg-white
            ${!activeRenter ? "hidden md:flex" : "flex"} // hide if no renter selected on mobile
          `}
        >
          {/* Chat header */}
          <div className="bg-green-500 text-white px-4 py-3 font-semibold flex items-center justify-between">
            <span>
              Chat with {renters.find((r) => r.id === activeRenter)?.name}
            </span>
            {/* Back button (mobile only, now on RIGHT) */}
            <button
              onClick={() => setActiveRenter(null)}
              className="md:hidden bg-white text-green-600 px-2 py-1 rounded"
            >
             →
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 scrollbar-none">
            {messages[activeRenter]?.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "renter" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.sender === "renter"
                      ? "bg-gray-200 text-black rounded-bl-none"
                      : "bg-green-500 text-white rounded-br-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input box */}
          {activeRenter && (
            <div className="border-t flex items-center p-3 bg-white">
              <input
                type="text"
                className="flex-1 border border-gray-300 bg-white rounded-full px-4 py-2 text-sm focus:outline text-black"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="ml-3 px-4 py-2 bg-green-500 text-white text-sm rounded-full hover:bg-green-800"
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BranchAdminAccountChattingSection;
