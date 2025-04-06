
interface TestimonialCardProps {
  quote: string;
  author: string;
  index: number;
}

const TestimonialCard = ({ quote, author, index }: TestimonialCardProps) => {
  const bgColors = ["bg-primary/10", "bg-health/10", "bg-primary/10"];
  const borderColors = ["border-primary/20", "border-health/20", "border-primary/20"];
  
  return (
    <div className={`p-6 rounded-xl ${bgColors[index % 3]} border ${borderColors[index % 3]} bg-black/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
      <p className="text-lg mb-4 italic text-white">"{quote}"</p>
      <p className="font-semibold text-gray-300">{author}</p>
    </div>
  );
};

export default TestimonialCard;
