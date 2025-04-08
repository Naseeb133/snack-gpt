
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const CTASection = () => {
  useEffect(() => {
    // This will load the Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-dark to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15),transparent)] pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto text-white animate-slide-up">
          Ready to get roasted?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Sign up to be the first to experience SnackGPT.
        </p>
        
        <div className="max-w-2xl mx-auto animate-slide-up bg-black/40 p-4 rounded-xl border border-white/10" style={{ animationDelay: "0.2s" }}>
          <iframe 
            data-tally-src="https://tally.so/embed/3jzKPR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height="500" 
            frameBorder="0" 
            title="SnackGPT Waitlist"
            className="rounded-lg"
          ></iframe>
          <p className="text-sm text-gray-400 mt-3">
            No spam, just snacks. We'll notify you when we launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
