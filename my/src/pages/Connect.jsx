import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Connect.css'

function Connect() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic form validation
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      // Show alert if any field is empty
      toast.error('Please fill in all fields before submitting.');
      return;
    }

    emailjs
      .sendForm('service_oe4sdzm', 'template_emlmiiu', form.current, 'XejmapJ86pj9bpUp-')
      .then(
        (result) => {
          console.log('EmailJS Success:', result);
          toast.success('Email sent successfully!');

          // Clear the form after success
          form.current.reset();
        },
        (error) => {
          console.log('EmailJS Error:', error);
          toast.error(`Failed to send email: ${error.text}`);
        }
      );
  };

  return (
    <div className="bg-[url('/layout.pg')] bg-cover bg-center backdrop-blur-sm">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8 lg:mb-12 text-center">
        LET'S{" "}
        <span className="relative inline-block">
          <span className="absolute inset-x-0 bottom-0 h-4 bg-yellow-400 rounded-full -skew-y-2 -rotate-2"></span>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            CREATE
          </span>
        </span>{" "}
        A WEBSITE
      </h1>
      <div className="flex my-10 justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:ml-20 items-center">
          {/* Left Column: Form */}
          <div className="lg:w-full flex items-center justify-center mt-8 lg:mt-0">
            {/* Form */}
            <form ref={form} onSubmit={sendEmail} className="w-full max-w-xl space-y-6">
              <input
                type="text"
                placeholder="Your name *"
                name="user_name"
                required
                className="w-full border-b-2 border-gray-400 bg-transparent text-lg py-2 text-white placeholder-gray-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your email *"
                name="user_email"
                required
                className="w-full border-b-2 border-gray-400 bg-transparent text-lg py-2 text-white placeholder-gray-500 focus:outline-none"
              />
              <textarea
                placeholder="Your message *"
                name="message"
                required
                className="w-full border-b-2 border-gray-400 bg-transparent text-lg text-white py-2 placeholder-gray-500 focus:outline-none h-24"
              ></textarea>
              <button
                type="submit"
                
                className="btn w-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg transform transition-all hover:shadow-lg mx-auto block"
              >
                Send it
              </button>
            </form>
          </div>

          {/* Right Column: 3D Animated Image */}
          <div className="hidden md:flex justify-center items-center p-4">
            <div className="w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 rounded-lg flex items-center justify-center">
              <img
                src="./neon.png"
                alt="3D Animation"
                className="animate-3d-model"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification container */}
      <ToastContainer />

    </div>
  );
}

export default Connect;
