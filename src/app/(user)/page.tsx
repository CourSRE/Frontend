export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="font-bold">
              Logo
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard Page</h1>

        {/* New Section with Different Color Palette */}
        <section className="bg-green-200 p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-center space-x-8">
            {/* Photo Panel */}
            <div>
              <img
                src="https://placekitten.com/450/300"
                alt="Course Photo"
                className="w-48 h-32 object-cover mb-4 rounded-md"
              />
            </div>

            {/* Text Bundle */}
            <div>
              <h2 className="text-xl font-bold mb-2">Course Title</h2>
              <p className="text-sm">
                Description of the course goes here. You can provide additional
                information or details about the course in this section.
              </p>
            </div>
          </div>
        </section>

        {/* Related Courses Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Join now!</h2>
            <button className="text-blue-500 hover:underline">
              View All &rarr;
            </button>
          </div>

          {/* Panels with Stock Images */}
          <div className="flex space-x-4 overflow-x-auto">
            {/* Panel 1 - Panel 6 (Previous panels) */}
          </div>
        </section>

        {/* Related Courses Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Related Courses</h2>
            <button className="text-blue-500 hover:underline">
              View All &rarr;
            </button>
          </div>

          {/* Panels with Stock Images */}
          <div className="flex space-x-4 overflow-x-auto">
            {/* Panel 1 */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://placekitten.com/200/300"
                alt="Course 1"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <p className="text-sm">Course 1 Description</p>
            </div>

            {/* Panel 2 */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://placekitten.com/201/301"
                alt="Course 2"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <p className="text-sm">Course 2 Description</p>
            </div>

            {/* Panel 3 */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://placekitten.com/202/302"
                alt="Course 3"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <p className="text-sm">Course 3 Description</p>
            </div>

            {/* Panel 4 */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://placekitten.com/203/303"
                alt="Course 4"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <p className="text-sm">Course 4 Description</p>
            </div>

            {/* Panel 5 */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://placekitten.com/204/304"
                alt="Course 5"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <p className="text-sm">Course 5 Description</p>
            </div>

            {/* Panel 6 */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://placekitten.com/205/305"
                alt="Course 6"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <p className="text-sm">Course 6 Description</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white p-4 text-center">
        &copy; SRE. All rights reserved.
      </footer>
    </div>
  );
}
