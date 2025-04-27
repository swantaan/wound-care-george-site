import { Navigation } from "@/components/Navigation";
import { Reviews } from "@/components/Reviews";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Stethoscope, Bandage, HeartPulse, CreditCard } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Index() {
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observers = cardRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveCard(index);
            }
          });
        },
        {
          threshold: 0.5,
          root: null,
          rootMargin: "0px"
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-brand/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Wound Care Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Specialized wound treatment and management in George
            </p>
            <a href="tel:0441100725">
              <Button className="bg-brand hover:bg-brand-dark">
                <Phone className="mr-2 h-4 w-4" />
                  044 1100 725
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="relative w-full">
            {/* Mobile scroll indicator */}
            <div className="flex items-center justify-center gap-2 mb-6 md:hidden">
              <span className="text-gray-500">←</span>
              <span className="text-sm text-gray-500">Swipe to see more services</span>
              <span className="text-gray-500">→</span>
            </div>
            
            <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 items-stretch px-4 -mx-4 md:mx-0 md:overflow-visible">
              <Card ref={cardRefs[0]} className="border-none shadow-lg flex-shrink-0 w-[85vw] md:w-full snap-center hover:scale-[1.02] transition-transform bg-gray-50 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="pt-6 h-full">
                  <div className="flex flex-col items-center h-full">
                    <Stethoscope className="w-12 h-12 text-brand mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Wound Care</h3>
                    <p className="text-gray-600 text-center">
                      We treat chronic wounds, acute injuries, lower leg ulcers, burns, surgical sites, complicated wounds, and trauma for patients of all ages.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card ref={cardRefs[1]} className="border-none shadow-lg flex-shrink-0 w-[85vw] md:w-full snap-center hover:scale-[1.02] transition-transform bg-gray-50 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="pt-6 h-full">
                  <div className="flex flex-col items-center h-full">
                    <CreditCard className="w-12 h-12 text-brand mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Medical Aid and Payments</h3>
                    <p className="text-gray-600 text-center">
                      We are registered with most medical aids and will submit a plan to obtain wound care authorisation.
                      If you don't have medical aid, we'll gladly help you explore private options.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card ref={cardRefs[2]} className="border-none shadow-lg flex-shrink-0 w-[85vw] md:w-full snap-center hover:scale-[1.02] transition-transform bg-gray-50 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="pt-6 h-full">
                  <div className="flex flex-col items-center h-full">
                    <HeartPulse className="w-12 h-12 text-brand mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Follow-up Care</h3>
                    <p className="text-gray-600 text-center">
                      Continuous monitoring and adjustment of treatment plans to ensure optimal healing outcomes. Regular check-ups and progress tracking for best results.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Scroll progress dots (mobile only) */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeCard === index ? 'bg-brand' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="facility" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-12">Our Facility</h2>
          <div className="relative w-full">
            <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 items-center px-4 -mx-4 md:mx-0 md:overflow-visible">
              <Card className="overflow-hidden flex-shrink-0 w-[80vw] md:w-full snap-center hover:scale-[1.02] transition-transform bg-white">
                <img src="/2.jpg" alt="Clinic exterior" className="w-full h-64 object-cover" />
              </Card>
              <Card className="overflow-hidden flex-shrink-0 w-[80vw] md:w-full snap-center hover:scale-[1.02] transition-transform bg-white">
                <img src="/1.jpg" alt="Treatment room" className="w-full h-64 object-cover" />
              </Card>
              <Card className="overflow-hidden flex-shrink-0 w-[80vw] md:w-full snap-center hover:scale-[1.02] transition-transform bg-white">
                <img src="/3.jpg" alt="Facility entrance" className="w-full h-64 object-cover" />
              </Card>
              <Card className="overflow-hidden flex-shrink-0 w-[80vw] md:w-full snap-center hover:scale-[1.02] transition-transform bg-white">
                <img src="/4.jpg" alt="Treatment equipment" className="w-full h-64 object-cover" />
              </Card>
              <Card className="overflow-hidden flex-shrink-0 w-[80vw] md:w-full snap-center hover:scale-[1.02] transition-transform bg-white">
                <img src="/5.jpg" alt="Consultation room" className="w-full h-64 object-cover" />
              </Card>
              <Card className="overflow-hidden flex-shrink-0 w-[80vw] md:w-full snap-center hover:scale-[1.02] transition-transform bg-white">
                <img src="/6.jpg" alt="Consultation room" className="w-full h-64 object-cover" />
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6">Accessibility & Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-medium mb-4">Accessibility Features</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Wheelchair-accessible car park</li>
                      <li>✓ Wheelchair-accessible entrance</li>
                      <li>✓ Wheelchair-accessible toilet</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-4">Planning Your Visit</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Appointment required</li>
                      <li>✓ Appointments recommended</li>
                      <li>✓ Modern amenities available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                    <div className="space-y-4">
                      <p className="flex items-center text-gray-600">
                        <MapPin className="mr-2 text-brand" />
                        17 Gloucester Ave, George Central, George, Western Cape
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Phone className="mr-2 text-brand" />
                        044 110 0725
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Mail className="mr-2 text-brand" />
                          georgewoundclinic@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-[400px] rounded-lg overflow-hidden shadow">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.794083暫無!2d22.4535!3d-33.9561596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd6054875f255c9%3A0xf7d78f06a7f2de96!2sWOUND%20CLINIC%20GEORGE!5e0!3m2!1sen!2s!4v1682444800000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wound Care Clinic George Location Map"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/27618408472"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg p-4 shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>;
}
