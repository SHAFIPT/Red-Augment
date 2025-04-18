import './footer.css'
import logo from '../../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white px-6 py-10 ">
      <div className="max-w-7xl mx-auto responsive-flex">
        {/* Section 1 - Logo + Description */}
        <div>
          <div className="flex items-center space-x-3">
            <img src={logo} alt="RedAugment Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold">RedAugment</span>
          </div>
          <p className="text-sm mt-4 text-gray-300 lg:w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Eu eget sagittis mi odio.
            Eget non ultrices interdum nisl. A euismod nunc proin sed.
          </p>
        </div>

        {/* Section 2 - Services */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Pricing</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Section 3 - About */}
        <div>
          <h4 className="font-semibold text-lg mb-4">About</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Section 4 - Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>contact@redaugment.com</li>
            <li>
              A - 2 Kadipur, Delhi <br />
              New Delhi, 110036, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
        © 2025 - RedAugment
      </div>
    </footer>
  );
};

export default Footer;
