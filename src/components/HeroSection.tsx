
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-dark overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white animate-fade-in">
              SnackGPT didn't hold back.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Upload your food pic. Get roasted by AI. Laugh, cry, and get a diet plan that actually works.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">Roast My Plate</Button>
              <Button variant="outline" size="lg" className="text-lg border-white/20 text-white hover:bg-white/10">Join the Waitlist</Button>
            </div>
          </div>
          <div className="flex-1 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-health/20 rounded-xl"></div>
              <div className="relative overflow-hidden bg-black/30 rounded-xl p-6 border-2 border-white/10">
                <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden animate-pulse-subtle">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500">Your food photo here</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-dark rounded-lg border border-white/10">
                  <p className="font-medium text-primary">SnackGPT says:</p>
                  <p className="mt-2 text-white">"This salad looks like it gave up on life halfway. Just like your diet plan."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
