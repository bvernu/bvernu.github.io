import MagicBento from "./MagicBento";

export default function Projects() {
  const projects = [
    {
      title: "Full-Stack Warehouse Tracking System",
      description:
        "Shopfloor tracking system built to increase efficiency by finding bottlenecks in the warehouse process, and increasing shopfloor to supervisor communication.",
      label: "React, TypeScript, .NET C#, PostgreSQL",
    },
    {
      title: "Timesheet Application",
      description:
        "Timesheet application where supervisors can view all employee timesheets and employees can view, add, and edit their own timesheets.",
      label: "JavaScript, React, SQL",
    },
    {
      title: "Smart Mirror",
      description:
        "Voice-controlled smart mirror using Raspberry Pi and Amazon Alexa, enabling hands-free interaction with 5+ API integrations.",
      label: "JavaScript, Node.js",
    },
    {
      title: "Air Quality Index Reporter",
      description:
        "Application integrating PurpleAir and Nominatim APIs to perform real-time air quality data analysis based on user-defined location, distance, and AQI thresholds.",
      label: "Python",
    },
    {
      title: "Tone Player/Recorder",
      description:
        "A real-time embedded system with keypad input, tone generation, and EEPROM data storage. Implemented recording/playback functionality with sequence recording, speaker output, and real-time mode switching.",
      label: "C",
    },
    {
      title: "Connect-Four",
      description:
        "Multi-player or Single-player game with GUI built using Python's Tkinter, server connection and communication established with socket programming.",
      label: "Python",
    },
  ];

  return (
    <section id="projects" className="min-h-screen text-white relative z-10">
      <div className="w-full flex flex-col items-center py-24">
        <h2
          className="text-white text-4xl italic"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          Projects
        </h2>
        <br />

        <div className="flex justify-center w-full">
          <MagicBento
            items={projects}
            gridClassName="projects-grid"
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            clickEffect={true}
            enableMagnetism={true}
            glowColor="204, 89, 77"
            textAutoHide={false}
          />
        </div>
      </div>
    </section>
  );
}
