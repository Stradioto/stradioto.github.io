import { h } from "preact"
import { useState, useEffect } from "preact/hooks"
import { Filter, Search } from "lucide-preact"
import backgroundImage from "../assets/incorporating.webp"

export default function Education() {
  const [educations, setEducations] = useState([
    {
      name: "Oulu University of Applied Sciences",
      degree: "Bachelor's degree, Information Technology Engineering",
      duration: "2020 - 2025",
      description: "Expected Graduation: 2025",
      skills: [
        "PostgreSQL",
        "Spring Framework",
        "Python",
        "Web Development",
        "CSS",
        "C++",
        "SQL",
        "HTML",
        "Linux",
        "Amazon Web Services (AWS)",
        "Jira",
        "Unity",
        "React.js",
        "Java",
        "JavaScript",
        "Test Cases",
      ],
      type: "Bachelor's",
    },
    {
      name: "National Commercial Apprenticeship Service",
      degree: "Technician, Digital Game Programming",
      duration: "2018 - 2020",
      description: "Graduated: 2020",
      skills: ["Bug Tracking", "Bugzilla", "Git", "Unity", "C#"],
      type: "Technician",
    },
    {
      name: "Cruzeiro do Sul University",
      degree: "Bachelor's degree, Law",
      duration: "2016 - 2019",
      description: "Completed: 2019",
      skills: ["Law"],
      type: "Bachelor's",
    },
    {
      name: "Cruzeiro do Sul University",
      degree: "Specialization, Legal Sciences",
      duration: "2016 - 2016",
      description: "Completed: 2016",
      skills: ["Criminal Law"],
      type: "Specialization",
    },
    {
      name: "Barro Branco Military Police Academy",
      degree: "Bachelor's degree, Police Sciences and Public Order",
      duration: "2013 - 2015",
      description: "Completed: 2015",
      skills: ["Law Enforcement", "Public Administration", "Administrative Law", "Police Sciences"],
      type: "Bachelor's",
    },
    {
      name: "Mackenzie University",
      degree: "Unfinished, Law",
      duration: "Feb 2011 - Jul 2012",
      description: "Law bachelor's degree (unfinished)",
      skills: [],
      type: "Bachelor's",
    },
    {
      name: "Federal University of Paraná",
      degree: "Unfinished, Manufacture Technology",
      duration: "Jan 2010 - Jan 2011",
      description: "Technology in Construction of Musical Instruments bachelor's degree(unfinished)",
      skills: [],
      type: "Bachelor's",
    },
  ])

  const [filteredEducations, setFilteredEducations] = useState(educations)
  const [searchTerm, setSearchTerm] = useState("")
  const [educationFilter, setEducationFilter] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    filterEducations(searchTerm, educationFilter)
  }, [searchTerm, educationFilter]) // Removed unnecessary dependency: educations

  const filterEducations = (search, filter) => {
    const filtered = educations.filter((education) => {
      const matchesSearch =
        education.name.toLowerCase().includes(search.toLowerCase()) ||
        education.degree.toLowerCase().includes(search.toLowerCase()) ||
        education.description.toLowerCase().includes(search.toLowerCase())

      const matchesFilter = filter === "all" || education.type.toLowerCase() === filter.toLowerCase()

      return matchesSearch && matchesFilter
    })
    setFilteredEducations(filtered)
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
  }

  const handleFilterChange = (filter) => {
    setEducationFilter(filter)
    setIsFilterOpen(false)
    filterEducations(searchTerm, filter)
  }

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
      <div className="flex justify-between items-center mb-8">
        <div className="w-1/3"></div>
        <h2 className="text-3xl font-bold text-white text-center w-1/3">Education</h2>
        <div className="flex gap-4 items-center w-1/3 justify-end mr-5">
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
                    All Education
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFilterChange("Bachelor's")}
                  >
                    Bachelor's
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFilterChange("Specialization")}
                  >
                    Specialization
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleFilterChange("Technician")}
                  >
                    Technician
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
                placeholder="Search education..."
                value={searchTerm}
                onChange={handleSearch}
                onClick={() => {
                  setEducationFilter("all")
                  filterEducations(searchTerm, "all")
                }}
                className="absolute right-0 top-8 w-48 px-2 py-1 bg-white text-gray-800 rounded-md shadow-lg z-10"
              />
            )}
          </div>
        </div>
      </div>
      <div class="space-y-6">
        {filteredEducations.map((education) => (
          <div key={education.name + education.degree} class="bg-gray-800 p-6 rounded-lg shadow">
            <h3 class="text-2xl font-semibold mb-2 text-white">{education.name}</h3>
            <h4 class="text-xl text-gray-300 mb-2">{education.degree}</h4>
            <p class="text-gray-400 mb-2">{education.duration}</p>
            <p class="text-gray-400 mb-4">{education.description}</p>
            {education.skills.length > 0 && (
              <div>
                <h5 class="text-lg font-semibold mb-2 text-white">Skills:</h5>
                <div class="flex flex-wrap gap-2">
                  {education.skills.map((skill) => (
                    <span key={skill} class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

