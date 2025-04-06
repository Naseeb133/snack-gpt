
const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-gray-900">Snack<span className="text-primary">GPT</span></h2>
            <p className="text-gray-600 mt-1">© {new Date().getFullYear()} SnackGPT. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-gray-600 hover:text-primary">About</a>
            <a href="#" className="text-gray-600 hover:text-primary">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-primary">Terms</a>
            <a href="#" className="text-gray-600 hover:text-primary">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
