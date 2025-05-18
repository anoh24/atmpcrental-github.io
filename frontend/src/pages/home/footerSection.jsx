import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaGlobe } from 'react-icons/fa';
import {GoogleMap,LoadScript, Marker} from '@react-google-maps/api';

const Footer = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); 

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, message]); 
      setMessage(""); 
    }
  };
  

  return (
    <footer className="bg-black w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-20 sm:gap-20 md:gap-15 lg:gap-2 xl:gap-2 py-20">
          <div className="flex flex-col">
            <h1 className="text-center text-white-700 text-2xl sm:text-base md:text-xl font-semibold mb-4">
              AI Chat Support Inquiry
            </h1>
            <div style={{height:"250px"}} className="flex flex-col w-full max-w-md mx-auto bg-white rounded-lg shadow-md">
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
       
                <div className="flex justify-start">
                  <p className="text-white text-left text-sm py-2 px-4 bg-green-800 rounded-md max-w-xs">
                    Hello! I'm Alnoor, your AI.
                  </p>
                </div>


                {messages.map((msg, index) => (
                  <div className="flex justify-end" key={index}>
                    <p className="text-white text-right text-sm py-2 px-4 bg-green-700 rounded-md max-w-xs">
                      {msg}
                    </p>
                  </div>    
                ))}
              </div>

   
              <div className="flex p-2 bg-green-950">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm rounded-md border-0 focus:outline-none text-black bg-green-800 text-white"
                  placeholder="Type your message..."
                />
                <button
                  onClick={handleSend}
                  className="ml-2 px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md text-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 w-full mx-auto">
            <h1 className="text-white-700 text-2xl sm:text-base md:text-xl font-semibold">Social Media</h1>
            <div className="flex flex-row space-x-5">
              <a href="#" className="text-green-500 hover:text-gray-400 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-green-500 hover:text-gray-400 text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-green-500 hover:text-gray-400 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-green-500 hover:text-gray-400 text-xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-green-500 hover:text-gray-400 text-xl">
                <FaGlobe />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 w-full mx-auto">
            <h1 className="text-white-700 text-2xl sm:text-base md:text-xl font-semibold">Contacts</h1>
            <p className="text-white-200">Marawi Branch Smart : 0908-210-4526</p>
            <p className="text-white-200">CDO Branch Globe : 0908-210-4497</p>
          </div>

          <div className="flex">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455.8424574045857!2d124.65181333438593!3d8.474524852137602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2d1f8010e21%3A0xab6f2003b1593a85!2s85%2022nd%20St%2C%20Cagayan%20de%20Oro%2C%20Misamis%20Oriental!5e1!3m2!1sen!2sph!4v1747266782861!5m2!1sen!2sph" 
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
          </div>
        </div>
        <p className="text-center text-white text-sm">ATMPC all right reserved 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
