import React from 'react';

const Home = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:mt-0 mb-4 lg:mr-9 lg:col-span-5 lg:flex">
            <img src="https://pbs.twimg.com/media/GKksGqRXIAAbxaU?format=jpg&name=large" alt="mockup" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Empowering Youth and Young Adults</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Join us at RCCG Living Seed Church, where we are dedicated to raising kingdom generals and ambassadors among the youth and young adults. Experience a community anointed for dominance and transformation.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get Involved
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
          
        </div>
      </section>

      {/* Our Ministries Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">Our Ministries</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/500" alt="Youth Fellowship" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Youth Fellowship</h3>
                <p className="text-gray-600 dark:text-gray-300">Our vibrant youth fellowship provides a dynamic environment for young people to grow in their faith, build meaningful relationships, and impact their community.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/500" alt="Young Adult Bible Study" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Young Adult Bible Study</h3>
                <p className="text-gray-600 dark:text-gray-300">Our young adult Bible study offers a space for deep exploration of Scripture, meaningful discussions, and spiritual growth among young adults.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/500" alt="Community Outreach" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Community Outreach</h3>
                <p className="text-gray-600 dark:text-gray-300">Our community outreach initiatives aim to make a tangible difference in the lives of those in need, demonstrating God's love through acts of service and compassion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
