"use client";

import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen p-8 container ">
      <Image
        className="mx-5 my-4"
        src="/images/SelfPic.jpg"
        alt="Me"
        width={100}
        height={100}
      />

      {/* About Me */}
      <h1 className="text-4xl font-bold mb-6 underline">About Me</h1>
      <div className="max-w-3xl">
        <ul className="list-inside space-y-4 text-xl font-bold">
          <li className="flex items-start">
            <span>
              - I am a web developer with a passion for building products that
              solve real-world problems. I am a quick learner and always looking
              to expand my skill set.
            </span>
          </li>

          <li className="flex items-start">
            <span>
              - Although I&apos;m relatively new to coding with about a year of
              experience, I&apos;ve already worked on several personal and
              collaborative projects that have helped me grow as a developer.
            </span>
          </li>

          <li className="flex items-start">
            <span>
              - My focus is on learning and creating meaningful impact rather
              than financial gain. I&apos;m driven by the opportunity to help
              others through technology.
            </span>
          </li>

          <li className="flex items-start">
            <span>
              - I value honesty and truth above all else in both my personal and
              professional life.
            </span>
          </li>

          <li className="flex items-start">
            <span>
              - I strongly believe in collaborative development and creating
              accessible products that serve everyone.
            </span>
          </li>

          <li className="flex items-start">
            <span>
              - I aim to join a team of like-minded individuals to build
              functional, engaging, and user-friendly products.
            </span>
          </li>
        </ul>

        {/* Skills */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 underline">Skills</h2>
          <ul className="list-disc list-inside space-y-2 font-bold">
            <li>JavaScript/TypeScript</li>
            <li>React & Next.js</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>SQL & NoSQL Databases</li>
            <li>Python</li>
            <li>Git & Version Control</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
