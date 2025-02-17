import { h } from "preact"
import { useState, useEffect } from "preact/hooks"
import backgroundImage from "../assets/incorporating.webp"
import personalImage from "../assets/personal.png"
import supportImage from "../assets/support.png"
import uwbImage from "../assets/uwb.png"
import voiImage from "../assets/voi.png"
import usImage from "../assets/us.png"
import su2Image from "../assets/su2.png"
import foodImage from "../assets/food.png"
import websiteImage from "../assets/website.png"
import bootImage from "../assets/boot.png"
import multiplayerImage from "../assets/multiplayer.png"
import vrShooterImage from "../assets/vr-shooter.png"
import passTheGasImage from "../assets/passthegas.png"
import asteroidImage from "../assets/asteroid.png"
import tankImage from "../assets/tank.png"
import froggerImage from "../assets/frogger.png"
import alienImage from "../assets/alien.png"
import platatataImage from "../assets/platatata.png"
import minefieldImage from "../assets/minefield.png"
import platform2dImage from "../assets/plaform2d.png"
import platform2dimgImage from "../assets/platform2dimg.png"
import windapp from "../assets/windapp.png"
import signsystem from "../assets/signsystem.png"
import gameapi from "../assets/gameapi.png"
import apiscreen from "../assets/apiscreen.png"
import researchprofile from "../assets/researchprofile.png"
import { Filter, Search } from "lucide-preact"

const webProjects = [
  {
    name: "Professional website",
    description: "Preact.js research profile for a Professor",
    purpose: "Own Project",
    kind: "Individual Project",
    role: "All",
    link: "Deployment",
    address: "https://diamo98.github.io/profile/",
    image: researchprofile,
    videoAddress: "In development",
    videoLink: "",
  },
  {
    name: "Preact Development Tool",
    description: "Web-Based Interface for Real-Time Atmospheric Data Visualization",
    purpose: "University Discipline: Thesis Work",
    kind: "Individual Project",
    role: "All",
    link: "In development",
    address: "",
    image: windapp,
    videoAddress: "In development",
    videoLink: "",
  },
  {
    name: "Professional website",
    description: "Preact.js website",
    purpose: "Own Project",
    kind: "Individual Project",
    role: "All",
    link: "Deployment",
    address: "https://stradioto.github.io/#home",
    image: personalImage,
    videoAddress: "",
    videoLink: "",
  },
  {
    name: "eSignature Service",
    description: "React.js/Node.js esignature Service",
    purpose: "IoTriggers",
    kind: "Individual Project",
    role: "All",
    link: "Github",
    address: "",
    image: signsystem,
  },
  {
    name: "Game Quiz",
    description: "React.js/SpringBoot/PostgreSQL Game Service",
    purpose: "IoTriggers",
    kind: "Individual Project",
    role: "API development/Front-End",
    link: "Github",
    address: "",
    image: gameapi,
  },
  {
    name: "API Integration Project",
    description: "Java/SpringBoot API",
    purpose: "Company-Oriented Product III discipline at OAMK",
    kind: "Individual Project",
    role: "API Development",
    link: "Github",
    address: "",
    image: apiscreen,
  },
  {
    name: "Desk help webservice prototype",
    description: "React.JS and Firestore Helpdesk Service",
    purpose: "Company-Oriented Product II discipline at OAMK",
    kind: "Individual Project",
    role: "All",
    link: "Github",
    address: "https://github.com/Stradioto/HelpDeskAPP/tree/master",
    image: supportImage,
    videoAddress: "https://www.youtube.com/watch?v=XtJlCZfzOak",
    videoLink: "Video",
  },
  {
    name: "UWB Tracker",
    description: "Data Visualization with Typescript and Python",
    purpose: "Company-Oriented Product I discipline at OAMK",
    kind: "Group Project",
    role: "Front-End",
    link: "Github",
    address: "https://github.com/orgs/DIN-3/repositories",
    image: uwbImage,
  },
  {
    name: "Spare Parts Controller",
    description: "Made with Flutter/Dart to store and access data",
    purpose: "Mobile Project discipline at OAMK",
    kind: "Individual Project",
    role: "All",
    link: "Github",
    address: "https://github.com/Stradioto/sparepartscontrol",
    image: voiImage,
    videoAddress: "https://www.youtube.com/watch?v=6ghUTbtxe9E",
    videoLink: "Video",
  },
  {
    name: "Flutter APP",
    description: "Flutter/Dart personal app",
    purpose: "web-and hybrid technologies in mobile programming discipline at OAMK",
    kind: "Group Project",
    role: "All",
    link: "Github",
    address: "https://github.com/Stradioto/stradiotouselessapp2",
    image: usImage,
  },
  {
    name: "KOTLIN APP",
    description: "Android Studio/Kotlin personal app",
    purpose: "Web Programming with Native Technologies discipline at OAMK",
    kind: "Individual Project",
    role: "All",
    link: "Github",
    address: "https://github.com/Stradioto/androidstudioproject",
    image: su2Image,
    videoAddress: "https://github.com/Stradioto/androidstudioproject/blob/main/Documentation%20APP.pdf",
    videoLink: "Docs",
  },
  {
    name: "Express Food",
    description: "React.js/Spring Boot food delivery service",
    purpose: "Advanced Web-Development Project discipline at OAMK",
    kind: "Group Project",
    role: "Front-End",
    link: "Github",
    address: "https://github.com/AWAProject-Group33/AWA-Frontend",
    image: foodImage,
  },
  {
    name: "Stonks",
    description: "React.js and SQL reactive website",
    purpose: "Web Programming Project discipline at OAMK",
    kind: "Group Project",
    role: "Front-End",
    link: "Github",
    address: "https://github.com/Jerzke/WPP_2021",
    image: websiteImage,
    videoAddress: "https://jerzke.github.io/WPP_2021/",
    videoLink: "Deployment",
  },
  {
    name: "Boots shop",
    description: "Static website",
    purpose: "HTML and CSS Project discipline at OAMK",
    kind: "Group Project",
    role: "Html/CSS",
    link: "Github",
    address:
      "https://github.com/Stradioto/OAMK-Information-Technology-Engineering/tree/main/HTML%20and%20CSS%20Programming",
    image: bootImage,
    videoAddress: "https://stradioto.github.io/bootshop/",
    videoLink: "Deployment",
  },
]

const gameProjects = [
  {
    name: "Multiplayer game prototype",
    description: "Unity netcode Multiplayer Project",
    purpose: "Own Project",
    kind: "Individual Project",
    role: "All",
    link: "In development",
    address: "",
    image: multiplayerImage,
    videoAddress: "",
    videoLink: "",
  },
  {
    name: "VR Shooter",
    description: "Unity and HTC Vive VR Pro",
    purpose: "Company-oriented product I discipline at OAMK",
    kind: "Individual Project",
    role: "All",
    link: "Github",
    address: "https://github.com/Stradioto/VR",
    image: vrShooterImage,
  },
  {
    name: "Pass the Gas",
    description: "Unity Iddle/Tyccon Mobile Game",
    purpose: "Oulu Game Lab disciplines at OAMK",
    kind: "Group Project",
    role: "Collaborator (Programmer/UI, Technical Artist, Concept, Test)",
    link: "Google Play",
    address: "https://play.google.com/store/apps/details?id=com.LuckyLanternStudios.PasstheGas&pli=1",
    image: passTheGasImage,
  },
  {
    name: "Tom´s venture",
    description: "Unity Arcade Game",
    purpose: "Game Development discipline at LUT",
    kind: "Individual Project",
    role: "All",
    link: "Play",
    address: "https://stradioto.itch.io/toms-venture-asteroids",
    image: asteroidImage,
    videoAddress: "https://www.youtube.com/watch?v=HEFpG_uxyXk",
    videoLink: "Trailer",
  },
  {
    name: "Retro Tank Shooter",
    description: "Unity WebGL Game",
    purpose: "Introduction to Game Development discipline at LUT",
    kind: "Individual Project",
    role: "All",
    link: "Play",
    address: "https://stradioto.itch.io/tankshooter",
    image: tankImage,
  },
  {
    name: "Frogger Clone",
    description: "JavaScript Canvas Game",
    purpose: "Object-Oriented Programming discipline at OAMK",
    kind: "Individual Project",
    role: "All",
    link: "Play",
    address: "https://stradioto.github.io/bootshop/frogger",
    image: froggerImage,
  },
  {
    name: "Alien Invaders Remake",
    description: "Unity Arcade Game",
    purpose: "Fellowship of the Game extension group",
    kind: "Individual Project",
    role: "All",
    link: "Play",
    address: "https://stradioto.itch.io/te",
    image: alienImage,
  },
  {
    name: "PLATA!TA!TA! FORMA",
    description: "Unity Platform Game",
    purpose: "Fellowship of the Game extension group",
    kind: "Group Project",
    role: "Collaborator (Programmer/UI)",
    link: "Play",
    address: "https://fog-icmc.itch.io/platatataforma",
    image: platatataImage,
  },
  {
    name: "MineField Walker Game",
    description: "JavaScript CLI Game",
    purpose: "Introduction to Programming discipline at OAMK",
    kind: "Individual Project",
    role: "All",
    link: "Github",
    address:
      "https://github.com/Stradioto/OAMK-Information-Technology-Engineering/blob/main/Introduction%20to%20Programming%20and%20Software%20Development/MineFieldWalker.js",
    image: minefieldImage,
  },
  {
    name: "Scout Boy – Prototype",
    description: "Unity Platform Game",
    purpose: "SENAC game development technical course",
    kind: "Individual Project",
    role: "All",
    link: "Play",
    address: "https://stradioto.itch.io/scout-boy-prototype",
    image: platform2dImage,
    videoAddress: "https://www.youtube.com/watch?v=u4SfmrHUB7A",
    videoLink: "Walk-through",
  },
  {
    name: "Scout Boy – Concept",
    description: "Construct2 Platform Game",
    purpose: "SENAC game development technical course",
    kind: "Individual Project",
    role: "All",
    link: "Play",
    address: "https://stradioto.itch.io/scout-boy-concept",
    image: platform2dimgImage,
    videoAddress: "https://www.youtube.com/watch?v=e0V319hr5aM",
    videoLink: "Walk-through",
  },
]

export default function Projects() {
  const [projectFilter, setProjectFilter] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredWebProjects, setFilteredWebProjects] = useState(webProjects)
  const [filteredGameProjects, setFilteredGameProjects] = useState(gameProjects)

  useEffect(() => {
    filterProjects(searchTerm, projectFilter)
  }, [searchTerm, projectFilter])

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setIsFilterOpen(false)
    }
  }

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm)
  }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
    if (!isFilterOpen) {
      setIsSearchOpen(false)
      setSearchTerm("")
    }
  }

  const filterProjects = (search, filter) => {
    const filteredWeb = webProjects.filter(
      (project) =>
        (filter === "all" || filter === "web") &&
        (project.name.toLowerCase().includes(search.toLowerCase()) ||
          project.description.toLowerCase().includes(search.toLowerCase())),
    )
    const filteredGame = gameProjects.filter(
      (project) =>
        (filter === "all" || filter === "game") &&
        (project.name.toLowerCase().includes(search.toLowerCase()) ||
          project.description.toLowerCase().includes(search.toLowerCase())),
    )
    setFilteredWebProjects(filteredWeb)
    setFilteredGameProjects(filteredGame)
  }

  const handleFilterChange = (filter) => {
    setProjectFilter(filter)
    setIsFilterOpen(false)
    filterProjects(searchTerm, filter)
  }

  const ProjectCard = ({ project }) => (
    <div key={project.name} class="bg-gray-800 p-4 rounded-lg shadow text-gray-400 mb-2 text-left">
      <img
        src={project.image || "/placeholder.svg"}
        alt={project.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <h3 class="text-xl font-semibold mb-2 text-white">{project.name}</h3>
      <p>{project.description}</p>
      <p>{project.purpose}</p>
      <p>{project.kind}</p>
      <p>{project.role}</p>
      <div>
        <a href={project.address} class="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {project.link}
        </a>
        {project.videoLink && (
          <a
            href={project.videoAddress}
            class="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-2"
          >
            {project.videoLink}
          </a>
        )}
      </div>
    </div>
  )

  return (
    <div
      class="container mx-auto px-4 py-8 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="sm:w-1/3"></div>
        <h2 className="text-3xl font-bold text-white text-center mb-4 sm:mb-0">Projects</h2>
        <div className="flex gap-4 items-center justify-center w-full sm:w-1/3 sm:justify-end">
          <div className="relative">
            <Filter
              className="w-6 h-6 text-white cursor-pointer hover:text-blue-500 transition-colors"
              onClick={toggleFilter}
            />
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFilterChange("all")}
                  >
                    All Projects
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFilterChange("web")}
                  >
                    Web Projects
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFilterChange("game")}
                  >
                    Game Projects
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <Search
              className="w-6 h-6 text-white cursor-pointer hover:text-blue-500 transition-colors"
              onClick={toggleSearch}
            />
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearch}
                onClick={() => {
                  setProjectFilter("all")
                  filterProjects(searchTerm, "all")
                }}
                className="absolute right-0 top-8 w-48 px-2 py-1 bg-white text-gray-800 rounded-md shadow-lg z-10"
              />
            )}
          </div>
        </div>
      </div>
      {filteredWebProjects.length > 0 && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">My Web Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredWebProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      )}
      {filteredGameProjects.length > 0 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">My Game Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGameProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}












 
















