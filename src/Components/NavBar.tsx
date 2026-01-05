export default function Navbar() {
  return (
    <nav className="relative w-full z-50">
      <div className="w-full px-24 py-10 flex justify-between items-center">
        {/* Left - Initials */}

        <a
          href="/"
          className="text-white text-2xl italic"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          BV
        </a>

        {/* Right - Nav Links */}
        <div className="flex gap-10 items-center">
          <a
            href="/about"
            className="text-white text-xl italic tracking-wide hover:text-gray-300 transition-colors"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
            }}
          >
            About
          </a>

          <a
            href="/projects"
            className="text-white text-xl italic tracking-wide hover:text-gray-300 transition-colors"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
            }}
          >
            Projects
          </a>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vSg7RrKSRqIup-xRdefpeEH0QmLtnLP1TIhCicZUQD_0kquY0eYe0cwMvYCRbDHzLACrVbLsl7csdII/pub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl italic tracking-wide hover:text-gray-300 transition-colors"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
