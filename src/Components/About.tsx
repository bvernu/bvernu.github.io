import PhotoGrid from "./PhotoGrid";

export default function About() {
  return (
    <section id="about" className="text-white">
      {/* First section with profile and text */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 rounded-full overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Bhairavi Vernu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center">
            <h2
              className="text-white text-4xl italic"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Hi! I'm Bhairavi
            </h2>{" "}
            <br />
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Computer Science and Engineering alumn from UC Irvine
              passionate about building meaningful technology. Whether it's
              embedded systems, full-stack development, or data analytics, I
              love diving head first into new challenges and learning along the
              way.
            </p>
            <br />
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I'm contributing as a Software Developer at TrueLeaf
              Digital, where I'm designing full-stack solutions with React,
              TypeScript, and C#. Previously at Skyworks Solutions, I worked on
              data systems and Power BI dashboards that improved workflows and
              decision-making.
            </p>
            <br />
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive in collaborative environments and I'm always eager to
              connect with others who are passionate about using technology to
              solve real problems. Let's build something amazing together!
            </p>
            <br />
            <div className="pt-4">
              <a
                href="projects"
                className="inline-block px-6 py-3  hover:bg-orange-500 rounded-full font-semibold transition-colors"
              >
                Check out my projects →
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Personal Life Section */}
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <br />
        <h2
          className="text-white text-4xl italic"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          Beyond the Code
        </h2>
        <br />
        <div className="flex justify-center mb-12">
          <p className="text-lg  max-w-3xl mx-auto mb-12 leading-relaxed text-gray-300">
            When I'm not coding, you'll find me lost in a good book (anything
            from sappy romances to thrilling adventures), figure skating, or
            discovering new cafes around town. I believe the best ideas come
            when you step away from the screen :). Here's a quick glimpse at
            life this past year!
          </p>
        </div>
        <br />
      </div>
      <div className="flex justify-center">
        <PhotoGrid />
      </div>
    </section>
  );
}
