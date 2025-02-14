import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img 
                src="https://i.imghippo.com/files/hiJv8783zTg.png" 
                alt="Logo" 
                className="h-12"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About Us
              </a>
              <a href="/appointment" className="text-gray-600 hover:text-gray-900 transition-colors">
                Book Appointment
              </a>
              <a href="/wellness" className="text-gray-600 hover:text-gray-900 transition-colors">
                Wellness
              </a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </a>
            </div>
          </div>

          {/* Desktop Button */}
          <Button className="hidden md:block bg-purple-dark hover:bg-purple text-white font-medium px-6 py-2 rounded-full transition-colors">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden">
          <div className="flex flex-col space-y-4 py-6 px-6">
            <a href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About Us
            </a>
            <a href="/appointment" className="text-gray-700 hover:text-gray-900 transition-colors">
              Book Appointment
            </a>
            <a href="/wellness" className="text-gray-700 hover:text-gray-900 transition-colors">
              Wellness
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
              Blog
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
