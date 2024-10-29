import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <Image
        className="mx-5 my-4"
        src="/images/SelfPic.jpg"
        alt="Me"
        width={100}
        height={100}
      />

      <div className="max-w-3xl">
        <p className="mb-4">
          Hi! I&apos;m a passionate software developer with a love for creating
          elegant solutions to complex problems. I specialize in web development
          using modern technologies like React, Next.js, and TypeScript.
        </p>

        <p className="mb-4">
          With several years of experience in the field, I&apos;ve worked on a
          variety of projects ranging from small business websites to
          large-scale enterprise applications. I&apos;m always eager to learn
          new technologies and stay up-to-date with the latest industry trends.
        </p>

        <p className="mb-4">
          When I&apos;m not coding, you can find me exploring new technologies,
          contributing to open-source projects, or sharing my knowledge through
          blog posts and technical tutorials.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>JavaScript/TypeScript</li>
            <li>React & Next.js</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>SQL & NoSQL Databases</li>
            <li>Git & Version Control</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
