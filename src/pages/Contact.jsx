import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import contact from '../images/contact.jpeg'; 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-headings">Get In Touch</h2>
          <p className="text-menu-muted-wine max-w-2xl mx-auto">
            Have questions about our services or need assistance with your wedding planning? 
            We're here to help! Reach out to us using any of the methods below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Column */}
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden h-full shadow-md">
              <img 
                src={contact}
                alt="Wedding couple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-r from-pink-50 to-amber-50 p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-xl font-semibold text-pink-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-pink-800 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-pink-800 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-pink-800 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-pink-800 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-pink-800 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-menu-muted-wine text-white py-3 px-6 rounded-md hover:bg-pink-700 transition-colors flex items-center justify-center"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-pink-200">
                <h4 className="font-medium text-pink-900 mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="text-pink-500 mr-3" size={18} />
                    <p className="text-pink-800">+1 (888) 123-4567</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-pink-500 mr-3" size={18} />
                    <p className="text-pink-800">contact@wedwise.com</p>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-pink-500 mr-3 mt-1" size={18} />
                    <p className="text-pink-800">123 Wedding Lane, Suite 101<br />Love City, RC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;