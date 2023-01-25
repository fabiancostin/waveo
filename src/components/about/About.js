import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="py-8">
        <div className="h-auto max-w-7xl mx-auto flex flex-col items-center justify-center px-7 py-10">
          <h2 className="font-['Cabin'] text-4xl">About Us</h2>
          <p className="mt-12 max-w-2xl font-['Raleway'] text-center">
            Waveo is an online music collaboration platform that gives you
            access to experienced and talented songwriters, musicians, audio
            engineers, and music producers from all around the world. It's a
            place to unite, socialize, and collaborate in the writing and
            production of original music, all from the comfort of your own home
            studio.
          </p>
          <div className="mt-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around gap-9 group">
            <div className="flex max-w-sm mx-auto group-hover:blur-sm hover:!blur-none transition duration-500">
              <div className="bg-black/10 p-8 rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
                <h3 className="text-xl  font-bold text-center my-3">
                  It all starts with an idea
                </h3>
                <p className="text-sm my-3 font-light opacity-80">
                  Whether it's a guitar riff, drum loop, a vocal a cappella or
                  lyrics - just start your own music collaboration project and
                  upload your idea. Then, wait for others to join in, or send
                  invites to other members. You can also jump in on any other
                  open project by uploading your idea as an audition.
                </p>
              </div>
            </div>

            <div className="flex max-w-sm mx-auto group-hover:blur-sm hover:!blur-none transition duration-500">
              <div className="bg-black/10 p-8 rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 mx-auto"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-bold text-center my-3">
                  Collaborate with other writers and musicians
                </h3>
                <p className="text-sm my-3 font-light opacity-80">
                  All you need is a passion for music, some basic recording
                  equipment, and a willingness to interact and learn. You'll
                  collaborate with others to write the lyrics and music, then
                  record and upload your individual performance to the project
                  area.
                </p>
              </div>
            </div>

            <div className="flex max-w-sm mx-auto group-hover:blur-sm hover:!blur-none transition duration-500">
              <div className="bg-black/10 p-8 rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 mx-auto"
                >
                  <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                </svg>

                <h3 className="text-xl font-bold text-center my-3">
                  Mix and produce your song
                </h3>
                <p className="text-sm my-3 font-light opacity-80">
                  Once a song has taken shape and all collaborators have
                  uploaded and fined tuned their contributions, it's time to
                  mix! And if that ain't your specialty, no worries, you'll find
                  many talented audio engineers on ProCollabs who'll be more
                  than happy to participate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
