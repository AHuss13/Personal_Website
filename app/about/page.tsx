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
          I am a web developer with a passion for building products that solve
          real-world problems. I am a quick learner and always looking to expand
          my skill set.
        </p>

        <p className="mb-4">
          Although I&apos;m relatively new to coding with about a year of
          experience, I&apos;ve already worked on several personal and
          collaborative projects that have helped me grow as a developer. I have
          much less care for how I can financially benefit from a project, and
          more care for how I can learn from it or help others with it.
        </p>

        <p className="mb-4">
          Honesty and truth are the most important values to me.
        </p>

        <p className="mb-4">
          I am a firm believer in the power of collaboration and the importance
          of building products that are accessible to everyone.
        </p>

        <p className="mb-4">
          I would love to work with a team of like-minded individuals to build
          products that are functional, fun, and easy to use.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
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
