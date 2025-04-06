
interface TestimonialCardProps {
  quote: string;
  author: string;
  index: number;
}

const TestimonialCard = ({ quote, author, index }: TestimonialCardProps) => {
  const bgColors = ["bg-primary/10", "bg-secondary/10", "bg-health/10"];
  const borderColors = ["border-primary/20", "border-secondary/20", "border-health/20"];
  
  return (
    <div className={`p-6 rounded-xl ${bgColors[index % 3]} border ${borderColors[index % 3]}`}>
      <p className="text-lg mb-4 italic">"{quote}"</p>
      <p className="font-semibold text-gray-800">{author}</p>
    </div>
  );
};

export default TestimonialCard;
