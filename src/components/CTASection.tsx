
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-dark to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15),transparent)] pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto text-white animate-slide-up">
          Ready to get roasted?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
          SnackGPT launches soon. Be first to roast your meals and fix your plate.
        </p>
        <div className="max-w-md mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-dark focus:outline-none focus:ring-2 focus:ring-primary text-white"
            />
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
              Join the Waitlist
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            No spam, just snacks. We'll notify you when we launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
