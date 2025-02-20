import { h } from "preact"
import { useState, useEffect } from "preact/hooks"
import { Filter, Search } from "lucide-preact"
import backgroundImage from "../assets/incorporating.webp"

export default function WorkExperience() {
  const experiences = [
    {
      company: "Sparv Embedded",
      position: "Thesis Worker",
      duration: "Jan 2025 - Current",
      location: "Linköping, Östergötland County, Sweden",
      type: "Hybrid",
      description: "Title: Data visualization for real-time sensor data",
      skills: ["Preact.js", "Sensor data", "Real-time data", "Simulation"],
    },
    {
      company: "IoTriggers",
      duration: "Sep 2024 - Dec 2024",
      location: "Sollentuna, Sweden (Remote)",
      type: "Internship",
      positions: [
        {
          position: "Full-stack Developer",
          duration: "Nov 2024 - Dec 2024",
          description: "Web service design and development.",
          skills: ["Spring Boot", "React.js", "PostgreSQL", "Java", "Swagger API"],
        },
        {
          position: "API Developer",
          duration: "Sep 2024 - Oct 2024",
          description: "API integration, coding, debugging and documentation.",
          skills: ["Spring Boot", "Java", "Swagger API"],
        },
      ],
    },
    {
      company: "Transperfect/MoGi Group/Testlio",
      position: "Tester",
      duration: "Mar 2023 - Jan 2024",
      location: "Remote",
      type: "Freelancer",
      description: "Translation, manual and gameplay tests",
      skills: ["Attention to detail", "Time management"],
    },
    {
      company: "Deno Group AB",
      position: "Ranger",
      duration: "Mar 2024 - Jul 2024",
      location: "Linköping, Östergötland County, Sweden",
      type: "Contract",
      description: "Providing service to Tier Mobility",
      skills: ["Logistic Support"],
    },
    {
      company: "TIER Mobility",
      position: "M&R Associate",
      duration: "Apr 2023 - Aug 2023",
      location: "Oulu, North Ostrobothnia, Finland",
      type: "Full-time",
      description: "Maintenance and repair of electric scooters and bikes.",
      skills: ["Warehouse Operations", "Mechanics", "Batteries"],
    },
    {
      company: "Voi Technology",
      position: "Fleet Specialist",
      duration: "Apr 2022 - Oct 2022",
      location: "Oulu, North Ostrobothnia, Finland",
      type: "Full-time",
      description: "Managing and maintaining electric scooter fleet.",
      skills: ["Warehouse Operations", "Mechanics", "Logistic Support", "Batteries", "Workplace Safety"],
    },
    {
      company: "Fellowship of the Game",
      position: "Game Developer",
      duration: "Aug 2021 - Jul 2022",
      location: "Remote",
      type: "Apprenticeship",
      description: "Developing games using Unity and Blender.",
      skills: ["Blender", "Unity", "C#", "3D Modeling"],
    },
    {
      company: "Military Police of São Paulo State",
      duration: "Feb 2013 - Jan 2020",
      location: "São Paulo, Brazil",
      type: "Full-time",
      positions: [
        {
          position: "First Lieutenant",
          duration: "Aug 2017 - Jan 2020",
          location: "São Carlos, São Paulo, Brazil",
          description: "38° BPM/I and 51° BPM/I",
          skills: [
            "Operations Management",
            "Logistics Management",
            "Law",
            "Public Administration",
            "Human Resources (HR)",
            "Training and Development (HR)",
            "Debriefing",
          ],
        },
        {
          position: "Second Lieutenant",
          duration: "Aug 2016 - Aug 2017",
          location: "São Carlos, São Paulo, Brazil",
          description: "38° BPM/I and 14° BPM/I",
          skills: [
            "Operations Management",
            "Logistics Management",
            "Law",
            "Public Administration",
            "Human Resources (HR)",
            "Training and Development (HR)",
            "Debriefing",
          ],
        },
        {
          position: "Officer Candidate",
          duration: "Dec 2015 - Aug 2016",
          location: "Greater São Paulo Area",
          description: "50° BPM/M and 33° BPM/M",
          skills: ["Operations Management", "Logistics Management", "Law", "Public Administration", "Debriefing"],
        },
        {
          position: "Police Cadet (Third Year)",
          duration: "Jan 2015 - Dec 2015",
          location: "São Paulo, São Paulo, Brazil",
          description: "Third Year Police Cadet",
          skills: ["Law", "Public Administration", "Civil-military Operations", "Military Logistics"],
        },
        {
          position: "Police Cadet (Second Year)",
          duration: "Jan 2014 - Jan 2015",
          location: "São Paulo, São Paulo, Brazil",
          description: "Second Year Police Cadet",
          skills: ["Law", "Civil-military Operations", "Military Logistics", "Public Administration"],
        },
        {
          position: "Police Cadet (World Cup Security)",
          duration: "May 2014 - Jun 2014",
          location: "Guarulhos, São Paulo, Brazil",
          description: "Airport Security and Translator",
          skills: ["English", "Translator", "Spanish", "Private Security"],
        },
        {
          position: "Police Cadet (First Year)",
          duration: "Feb 2013 - Jan 2014",
          location: "São Paulo, São Paulo, Brazil",
          description: "First Year Police Cadet",
          skills: ["Law", "Public Administration", "Military Logistics", "Civil-military Operations"],
        },
      ],
    },
    {
      company: "Eastfield College Police Department",
      position: "Intern",
      duration: "jul 2014",
      location: "Mesquite, Texas, USA",
      type: "Internship",
      description: "Technical-Cultural Internship",
      skills: ["Police Training", "English", "Law Enforcement"],
    },
    {
      company: "Military Police of São Paulo State",
      position: "911 Operator",
      duration: "2007 - 2008",
      location: "Campinas, São Paulo, Brazil",
      type: "Soldier",
      description: "Emergency services attendant",
      skills: ["Problem Solving", "Phone Etiquette", "Communication"],
    },
  ]

  const [filteredExperiences, setFilteredExperiences] = useState(experiences)
  const [searchTerm, setSearchTerm] = useState("")
  const [experienceFilter, setExperienceFilter] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    filterExperiences(searchTerm, experienceFilter)
  }, [searchTerm, experienceFilter])

  const filterExperiences = (search, filter) => {
    const filtered = experiences.filter((exp) => {
      const matchesSearch =
        exp.company.toLowerCase().includes(search.toLowerCase()) ||
        (exp.position && exp.position.toLowerCase().includes(search.toLowerCase())) ||
        (exp.positions && exp.positions.some((pos) => pos.position.toLowerCase().includes(search.toLowerCase()))) ||
        (exp.description && exp.description.toLowerCase().includes(search.toLowerCase())) ||
        (exp.skills && exp.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))) ||
        (exp.positions &&
          exp.positions.some((pos) => pos.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))))

      let matchesFilter = false
      if (filter === "all") {
        matchesFilter = true
      } else if (filter === "IT") {
        matchesFilter =
          (exp.position &&
            ["developer", "tester", "programmer"].some((term) => exp.position.toLowerCase().includes(term))) ||
          (exp.positions &&
            exp.positions.some((pos) =>
              ["developer", "tester", "programmer"].some((term) => pos.position.toLowerCase().includes(term)),
            ))
      } else if (filter === "Police") {
        matchesFilter =
          exp.company.toLowerCase().includes("police") ||
          (exp.position && exp.position.toLowerCase().includes("police")) ||
          (exp.positions && exp.positions.some((pos) => pos.position.toLowerCase().includes("police")))
      } else if (filter === "Others") {
        matchesFilter =
          !(
            exp.position &&
            ["developer", "tester", "programmer"].some((term) => exp.position.toLowerCase().includes(term))
          ) &&
          !(
            exp.positions &&
            exp.positions.some((pos) =>
              ["developer", "tester", "programmer"].some((term) => pos.position.toLowerCase().includes(term)),
            )
          ) &&
          !exp.company.toLowerCase().includes("police") &&
          !(exp.position && exp.position.toLowerCase().includes("police")) &&
          !(exp.positions && exp.positions.some((pos) => pos.position.toLowerCase().includes("police")))
      }

      return matchesSearch && matchesFilter
    })
    setFilteredExperiences(filtered)
  }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
    if (!isFilterOpen) {
      setIsSearchOpen(false)
      setSearchTerm("")
    }
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setIsFilterOpen(false)
    }
  }

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm)
    filterExperiences(newSearchTerm, experienceFilter)
  }

  const handleFilterChange = (filter) => {
    setExperienceFilter(filter)
    setIsFilterOpen(false)
    filterExperiences(searchTerm, filter)
  }

  return (
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="w-full sm:w-1/3"></div>
        <h2 className="text-3xl font-bold text-white text-center mb-4 sm:mb-0 w-full sm:w-1/3">Work Experience</h2>
        <div className="flex gap-4 items-center justify-center sm:justify-end w-full sm:w-1/3">
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
                    All Experiences
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFilterChange("IT")}
                  >
                    IT
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFilterChange("Police")}
                  >
                    Police
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFilterChange("Others")}
                  >
                    Others
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
                placeholder="Search experiences..."
                value={searchTerm}
                onChange={handleSearch}
                onClick={() => {
                  setExperienceFilter("all")
                  filterExperiences(searchTerm, "all")
                }}
                className="absolute right-0 top-8 w-48 px-2 py-1 bg-white text-gray-800 rounded-md shadow-lg z-10"
              />
            )}
          </div>
        </div>
      </div>
      <div class="space-y-6">
        {filteredExperiences.map((exp) => (
          <div key={exp.company} class="bg-gray-800 p-6 rounded-lg shadow">
            <h3 class="text-2xl font-semibold mb-2 text-white">{exp.company}</h3>
            {exp.positions ? (
              <div>
                <p class="text-gray-400 mb-2">{exp.duration}</p>
                <p class="text-gray-400 mb-2">{exp.location}</p>
                <p class="text-gray-400 mb-4">{exp.type}</p>
                {exp.positions.map((pos, index) => (
                  <div key={pos.position} class={`mb-4 ${index !== 0 ? "border-t border-gray-700 pt-4" : ""}`}>
                    <h4 class="text-xl text-white mb-2">{pos.position}</h4>
                    <p class="text-gray-400 mb-1">{pos.duration}</p>
                    {pos.location && <p class="text-gray-400 mb-1">{pos.location}</p>}
                    <p class="text-gray-300 mb-2">{pos.description}</p>
                    <div>
                      <h5 class="text-lg font-semibold mb-2 text-white">Skills:</h5>
                      <div class="flex flex-wrap gap-2">
                        {pos.skills.map((skill) => (
                          <span key={skill} class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h4 class="text-xl text-white mb-2">{exp.position}</h4>
                <p class="text-gray-400 mb-2">{exp.duration}</p>
                <p class="text-gray-400 mb-2">{exp.location}</p>
                <p class="text-gray-400 mb-2">{exp.type}</p>
                <p class="text-gray-300 mb-4">{exp.description}</p>
                <div class="mb-4">
                  <h5 class="text-lg font-semibold mb-2 text-white">Skills:</h5>
                  <div class="flex flex-wrap gap-2">
                    {exp.skills &&
                      exp.skills.map((skill) => (
                        <span key={skill} class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}











