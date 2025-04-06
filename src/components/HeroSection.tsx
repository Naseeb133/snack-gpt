
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-6 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
              AI just roasted your snack.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Upload your food pic and let SnackGPT roast it. Then get a personalized diet plan that actually works (and makes you laugh).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">Join the Waitlist</Button>
              <Button variant="outline" size="lg" className="text-lg">Learn More</Button>
            </div>
          </div>
          <div className="flex-1 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-health/20 rounded-xl"></div>
              <div className="relative overflow-hidden bg-secondary/10 rounded-xl p-6 border-2 border-secondary/30">
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden animate-pulse-subtle">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500">Your food photo here</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
                  <p className="font-medium text-primary">SnackGPT says:</p>
                  <p className="mt-2 text-gray-800">"That sandwich looks sadder than my ex's playlist. Is that supposed to be lunch or a cry for help?"</p>
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
