import Navigation from "@/components/Navigation";
import ConsultationCard from "@/components/ConsultationCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source
                src="https://videos.pexels.com/video-files/4772531/4772531-uhd_2560_1440_24fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-start">
                <ConsultationCard />
              </div>

              <div className="space-y-8">
                <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in">
                  Redefine Your<br />
                  Beauty.
                </h1>
                <Button
                  className="bg-purple hover:bg-purple-dark text-white font-medium px-8 py-6 text-lg rounded-full transition-colors animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Begin Your Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-display text-purple font-bold mb-8">
              Our Signature Treatments
            </h2>
            <p className="text-lg font-body text-dark-green max-w-2xl mx-auto mb-12">
              We offer the latest in aesthetic and wellness treatments to help you look and feel your best.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Cosmetic Injectables",
                  image: "https://images.pexels.com/photos/7582560/pexels-photo-7582560.jpeg",
                },
                {
                  title: "Skin Rejuvenation",
                  image: "https://dermindy.com/wp-content/uploads/2016/03/ThinkstockPhotos-187923649.jpg",
                },
                {
                  title: "Wellness Services",
                  image: "https://images.pexels.com/photos/16571736/pexels-photo-16571736/free-photo-of-lights-in-room.jpeg",
                },
                {
                  title: "Hair & Body Treatments",
                  image: "https://images.pexels.com/photos/19239092/pexels-photo-19239092/free-photo-of-laser-hair-removal-in-the-beauty-salon-woman-having-professional-laser-epilation-procedure-of-arm.jpeg",
                },
              ].map((service, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <h3 className="text-white text-2xl font-display font-bold">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-display text-purple font-bold text-center mb-8">
              Why Choose Examplus Med Spa?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "State-of-the-Art Technology",
                  image: "https://images.pexels.com/photos/16131207/pexels-photo-16131207/free-photo-of-woman-during-facial-treatment.jpeg",
                  description:
                    "We utilize the latest advancements in medical aesthetics to provide the highest level of care.",
                },
                {
                  title: "Expert Professionals",
                  image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg",
                  description:
                    "Our highly trained medical professionals deliver top-tier treatments with precision and care.",
                },
                {
                  title: "Customized Treatment Plans",
                  image: "https://images.pexels.com/photos/7088483/pexels-photo-7088483.jpeg",
                  description:
                    "Every client is unique, and we tailor each treatment plan to your specific goals and needs.",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                  />
                  <h3 className="text-2xl font-display text-light-brown font-bold mb-2">{feature.title}</h3>
                  <p className="text-lg font-body text-dark-green">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-display text-purple font-bold mb-8">
              What Our Clients Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah L.",
                  text: "“Examplus Medical Spa transformed my skin! The staff is so welcoming and knowledgeable. Highly recommend!”",
                },
                {
                  name: "Jason M.",
                  text: "“Best medspa experience ever. The treatments were luxurious and effective. I'll definitely be back!”",
                },
                {
                  name: "Emily R.",
                  text: "“Amazing results! My skin has never felt better. The personalized care is unmatched.”",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <p className="text-lg font-body text-dark-green italic">{testimonial.text}</p>
                  <p className="text-light-brown font-display font-bold mt-4">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-light-brown text-black py-16 text-center">
          <h2 className="text-4xl font-display mb-4">Experience Luxury & Wellness</h2>
          <p className="text-xl font-body mb-6 max-w-2xl mx-auto">
            Take the first step in your beauty and wellness journey. Book a consultation with one of our experts today.
          </p>
          <Button className="bg-dark-brown hover:bg-dark-brown/90 text-purple font-medium px-8 py-6 text-lg rounded-full transition-colors">
            Schedule a Consultation
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Index;
