
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-8 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-900">Snack<span className="text-primary">GPT</span></h1>
      </div>
      <div>
        <Button variant="ghost" className="mr-2 hidden md:inline-flex">About</Button>
        <Button variant="ghost" className="mr-2 hidden md:inline-flex">How it Works</Button>
        <Button className="bg-primary hover:bg-primary/90">Join Waitlist</Button>
      </div>
    </nav>
  );
};

export default Navbar;
