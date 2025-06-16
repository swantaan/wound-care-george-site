import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Building } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="logo.png" alt="Wound Clinic George Logo" className="h-12" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-brand">
              Services
            </button>
            <button onClick={() => scrollToSection('facility')} className="text-gray-700 hover:text-brand">
              Our Facility
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-brand">
              Contact
            </button>
            <a href="tel:0448740377">
              <Button variant="default" className="bg-brand hover:bg-brand-dark">
                <Phone className="mr-2 h-4 w-4" />
                044 874 0377
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-brand">
                Services
              </button>
              <button onClick={() => scrollToSection('facility')} className="text-gray-700 hover:text-brand">
                Our Facility
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-brand">
                Contact
              </button>
              <div className="flex justify-center">
                <a href="tel:0441100725">
                  <Button variant="default" className="bg-brand hover:bg-brand-dark">
                    <Phone className="mr-2 h-4 w-4" />
                    044 1100 725
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
