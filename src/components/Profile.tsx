import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <aside className="md:col-span-1">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-full bg-gray-700 flex items-center justify-center overflow-hidden mb-4">
                  Image
                </div>
                <h1 className="text-2xl font-bold">Ronald De Mesa</h1>
                <p className="text-sm text-gray-300 mt-2">Software Developer</p>
                <div className="mt-3 flex gap-2 text-sm text-gray-300">
                  <div>24</div>
                  <div>|</div>
                  <div>San Francisco, CA</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="bg-transparent border border-gray-600 px-3 py-1 rounded text-sm">
                    Edit profile
                  </button>
                  <a className="bg-gray-700 px-3 py-1 rounded text-sm" href="#">
                    Download resume
                  </a>
                </div>
                <div className="mt-4 w-full">
                  <div className="flex justify-between text-sm text-gray-300">
                    <div>
                      <div className="text-white font-semibold">123</div>
                      <div className="text-gray-400">Followers</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">45</div>
                      <div className="text-gray-400">Following</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 w-full text-left">
                  <div className="text-gray-300 text-sm">Achievements</div>
                  <ul className="text-sm text-gray-400 mt-2 space-y-1">
                    <li>Open-source contributor</li>
                    <li>Top project award</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <main className="md:col-span-2">
            <section className="bg-gray-800 p-6 rounded-lg mb-6">
              <h2 className="text-lg font-semibold mb-4">Pinned Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <article className="bg-gray-700 p-4 rounded">
                  <div className="font-semibold">Project One</div>
                  <div className="text-sm text-gray-300 mt-1">
                    Short description of project one.
                  </div>
                </article>
                <article className="bg-gray-700 p-4 rounded">
                  <div className="font-semibold">Project Two</div>
                  <div className="text-sm text-gray-300 mt-1">
                    Short description of project two.
                  </div>
                </article>
                <article className="bg-gray-700 p-4 rounded">
                  <div className="font-semibold">Project Three</div>
                  <div className="text-sm text-gray-300 mt-1">
                    Short description of project three.
                  </div>
                </article>
                <article className="bg-gray-700 p-4 rounded">
                  <div className="font-semibold">Project Four</div>
                  <div className="text-sm text-gray-300 mt-1">
                    Short description of project four.
                  </div>
                </article>
              </div>
            </section>

            <section className="bg-gray-800 p-6 rounded-lg mb-6">
              <h2 className="text-lg font-semibold mb-4">Repositories</h2>
              <div className="space-y-3">
                <div className="p-3 bg-gray-700 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">repo-name</div>
                      <div className="text-sm text-gray-300">
                        A short repo description
                      </div>
                    </div>
                    <div className="text-sm text-gray-300">JavaScript</div>
                  </div>
                </div>
                <div className="p-3 bg-gray-700 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">another-repo</div>
                      <div className="text-sm text-gray-300">
                        Another short description
                      </div>
                    </div>
                    <div className="text-sm text-gray-300">TypeScript</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">
                Contribution Activity
              </h2>
              <div className="text-sm text-gray-400">
                (Contribution graph placeholder)
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
