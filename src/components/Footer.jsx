import { Heart } from 'lucide-react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-text py-8 border-t border-pink-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="text-lg font-medium text-pink-100 mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/hija-happy" target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/hija-happy" target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://instagram.com/hija_happy" target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="mailto:hijahappy@gmail.com" target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-white transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

      
          <div className="text-center md:text-right">
            <h2 className="font-logo font-bold text-white flex items-center justify-center md:justify-end gap-2">
              <Heart className="text-pink-500" size={20} fill="#fda4af" />
              WedWise
            </h2>
            <p className="text-pink-200 mt-2">Your perfect wedding planning partner</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-pink-800 text-center text-pink-200 text-sm">
          <p>© {new Date().getFullYear()} WedWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
