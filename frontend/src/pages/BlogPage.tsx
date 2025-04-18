import Header from '../components/commen/header';
import './BlogPage.css';
import SearchBox from '../components/commen/SearchBox';
import pensilIon from '../assets/pensle.png'
import Footer from '../components/commen/footer';

const BlogPage = () => {
     const blogPosts = [
    { id: 1, image: pensilIon, date: "02/12/2025", category: "TECHNOLOGY", title: "Architectural Design" },
    { id: 1, image: pensilIon, date: "02/12/2025", category: "TECHNOLOGY", title: "Architectural Design" },
    { id: 1, image: pensilIon, date: "02/12/2025", category: "TECHNOLOGY", title: "Architectural Design" },
    { id: 4, image: pensilIon },
    { id: 5, image: pensilIon },
    { id: 6, image: pensilIon },
    { id: 7, image: pensilIon },
    { id: 8, image: pensilIon },
    { id: 9, image: pensilIon },
    { id: 10, image: pensilIon },
    { id: 11, image: pensilIon },
    { id: 12, image: pensilIon },
  ];
  return (
    <>
      <Header />
      <div>
        <div className="blog-page-container ">
          {/* Background Image with Blur Effect */}
          <div className="blog-page-image"></div>
          {/* Second Image on the Right Top */}
          <div className="blog-page-image-right"></div>
          {/* Third Image on the Left Bottom */}
          <div className="blog-page-image-left"></div>{" "}
          {/* Add this div for bottom-left image */}
          {/* Content on top of the blurred image */}
          {/* Content on top of the blurred image */}
          <div className="text-4xl md:text-6xl font-[Montserrat] mb-4 text-center leading-tight">
            <h3>Discover Blogs With</h3>
            <h3 className="">the Best Lorem</h3>
          </div>
          {/* Search Box with Arrow Inside */}
          <SearchBox placeholder="Search Blogs..." />
          <hr className="md:mt-[203px] mt-12 mb-4 border-t-2 border-gray-900 w-full max-w-8xl mx-auto" />
          {/* Centered Text */}
          <div className="blogs-case-studies text-2xl">
            Blogs & Case Studies
          </div>
          {/* Second Line */}
          <hr className="border-t-2 mt-5 border-gray-900 w-full max-w-8xl mx-auto" />
          <div className="ml-0 sm:ml-4 md:ml-16 lg:ml-80">
            {" "}
            {/* This creates approximately 300px left margin */}
            <div className="custom-grid">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="w-72 h-80 rounded shadow-md overflow-hidden border border-gray-900 transition-transform duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-orange-600"
                >
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <img src={post.image} alt="Icon" className="w-8 h-8" />
                      <span className="text-sm text-gray-500">02/12/2025</span>
                    </div>
                    <div className="mt-auto">
                      {/* mt-auto pushes content to the bottom */}
                      <p className="text-xs text-gray-500 tracking-wide blog-category transition-colors duration-300 hover:text-white">
                        TECHNOLOGY
                      </p>
                      <h3 className="text-base font-semibold blog-title transition-colors duration-300 hover:text-white">
                        Architectural Design
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </>
  );
};

export default BlogPage;
