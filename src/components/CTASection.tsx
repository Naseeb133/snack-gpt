
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto">
          Stop guessing your diet. Start snacking smarter—with AI.
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
          SnackGPT launches soon. Be first to roast your meals and fix your plate.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
              Join the Waitlist
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            No spam, just snacks. We'll notify you when we launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
