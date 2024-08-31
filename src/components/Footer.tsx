export const Footer = () => { 
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
        <div className="flex-shrink-0 flex items-center">
            <img src="/logo.svg" alt="My Icon" width={50} height={50} />
            <img className="ml-2" src="/text_logo.svg" alt="My Icon" width={80} height={80} />
            </div>
          <p className="mt-4 text-gray-300">
            A new way to make the payments easy, reliable, and secure.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Useful Links</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Community</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Partner</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Our Partner</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 flex justify-between items-center border-t border-gray-700 pt-4">
        <p className="text-gray-400">© 2021 HooBank. All Rights Reserved.</p>
        <div className="flex space-x-4 items-center">
          {/* Replace "#" with actual social media links */}
          <a href="#" className="text-gray-400">
          <img src="/instagram.svg" alt="My Icon" width={15} height={15} />
          </a>
          <a href="#" className="text-gray-400">
          <img src="/facebook.svg" alt="My Icon" width={15} height={15} />
          </a>
          <a href="#" className="text-gray-400">
           <img src="/twitter.svg" alt="My Icon" width={15} height={15} />
          </a>
          <a href="#" className="text-gray-400">
           <img src="/linkedin.svg" alt="My Icon" width={15} height={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}