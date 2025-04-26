
import { Navigation } from "@/components/Navigation";
import { Reviews } from "@/components/Reviews";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-brand/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <img 
              src="/lovable-uploads/ce40edd0-1681-40ff-a00d-803cba1c767c.png" 
              alt="Wound Clinic George Logo" 
              className="h-32 mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Wound Care Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Specialized wound care treatment and management in George, Western Cape
            </p>
            <Button size="lg" className="bg-brand hover:bg-brand-dark">
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Wound Assessment</h3>
                <p className="text-gray-600">
                  Professional evaluation and diagnosis of various types of wounds to determine the most effective treatment plan.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Wound Treatment</h3>
                <p className="text-gray-600">
                  Specialized care and treatment for acute and chronic wounds using advanced medical techniques.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Follow-up Care</h3>
                <p className="text-gray-600">
                  Continuous monitoring and adjustment of treatment plans to ensure optimal healing outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Reviews />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <MapPin className="mr-2 text-brand" />
                    123 York Street, George, Western Cape
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Phone className="mr-2 text-brand" />
                    044 874 0377
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Mail className="mr-2 text-brand" />
                    info@woundclinicgeorge.co.za
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.794083暫無!2d22.4535!3d-33.9561596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd6054875f255c9%3A0xf7d78f06a7f2de96!2sWOUND%20CLINIC%20GEORGE!5e0!3m2!1sen!2s!4v1682444800000!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
