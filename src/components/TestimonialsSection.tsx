
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "SnackGPT gave my lunch a C- and my ego a slap.",
      author: "@gymrat_jake"
    },
    {
      quote: "It's like ChatGPT, but it bullies my diet into shape.",
      author: "Sara M., SnackGPT beta tester"
    },
    {
      quote: "I asked for a The Rock meal plan. Now I'm eating 6 times a day.",
      author: "@foodie_fail"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-primary/5 to-black/0 pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Users Are Saying</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Early access users are already loving the roasts (and results).
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
              <TestimonialCard 
                quote={testimonial.quote} 
                author={testimonial.author} 
                index={index} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
