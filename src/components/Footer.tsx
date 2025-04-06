
const Footer = () => {
  return (
    <footer className="w-full py-8 bg-black/80 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white">Snack<span className="text-primary">GPT</span></h2>
            <p className="text-gray-400 mt-1">© {new Date().getFullYear()} SnackGPT. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
