import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <div className="text-center">
      <h1
        className="text-white text-9xl italic"
        style={{ fontFamily: "'EB Garamond', serif" }}
      >
        BHAIRAVI VERNU
      </h1>{" "}
      <br />
      <p
        className="text-gray-300 text-2xl"
        style={{ fontFamily: "'EB Garamond', serif" }}
      >
        UC Irvine Alumn | Software Dev | Sunset Connoisseur
      </p>{" "}
      <br />
      <div className="flex gap-4 justify-center">
        <a
          href="https://github.com/bvernu"
          className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110 text-white"
        >
          <FaGithub className="w-9 h-9" />
        </a>

        <a
          href="https://linkedin.com/in/bhairavi-vernu/"
          className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110 text-white"
        >
          <FaLinkedin className="w-10 h-10" />
        </a>

        <a
          href="mailto:bhairavivernu@gmail.com"
          className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110 text-white"
        >
          <MdEmail className="w-10 h-10" />
        </a>

        <a
          href="https://open.spotify.com/user/bhairavivernu"
          className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110 text-white"
        >
          <FaSpotify className="w-9 h-9" />
        </a>
      </div>
    </div>
  );
}
