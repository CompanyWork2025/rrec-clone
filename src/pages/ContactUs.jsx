import React from 'react';

function ContactUs() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">
        Get in touch with us for more information about studying in Russia. We are here to answer your questions!
      </p>
      <form className="mt-6">
        <label className="block text-lg">Name</label>
        <input type="text" className="w-full p-2 border" />
        
        <label className="block text-lg mt-4">Email</label>
        <input type="email" className="w-full p-2 border" />
        
        <label className="block text-lg mt-4">Message</label>
        <textarea className="w-full p-2 border"></textarea>
        
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
