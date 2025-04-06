
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-8 flex justify-between items-center bg-dark/90 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-white">Snack<span className="text-primary">GPT</span></h1>
      </div>
      <div>
        <Button variant="ghost" className="mr-2 hidden md:inline-flex text-white hover:bg-white/10">About</Button>
        <Button variant="ghost" className="mr-2 hidden md:inline-flex text-white hover:bg-white/10">How it Works</Button>
        <Button className="bg-primary hover:bg-primary/90">Join Waitlist</Button>
      </div>
    </nav>
  );
};

export default Navbar;
