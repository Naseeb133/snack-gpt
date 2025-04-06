
import { Flame, Brain, Star, IceCream, Trophy } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: Flame,
      title: "Roast My Plate",
      description: "Upload your meal, get a savage AI roast that will make you laugh and think twice about your food choices."
    },
    {
      icon: Brain,
      title: "Smart Meal Plans",
      description: "Daily meals built for your goals, from weight loss to muscle gain, personalized to your preferences."
    },
    {
      icon: Star,
      title: "Eat Like a Celebrity",
      description: "AI recreates diet plans of celebs, adapted to your body type, budget, and lifestyle."
    },
    {
      icon: IceCream,
      title: "Cook with What's In Your Fridge",
      description: "Give it ingredients, get a recipe. Simple, efficient, and no more food waste."
    },
    {
      icon: Trophy,
      title: "Challenge Mode",
      description: "Take snack challenges. Climb the leaderboard. Improve your roast score and your diet at once."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SnackGPT Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Roast your food, get personalized meal plans, and have fun with your diet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
