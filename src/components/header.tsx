import { h } from "preact"
import { useState, useEffect } from "preact/hooks"
import { Menu } from "lucide-preact"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this value as needed
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header class="bg-gray-800 text-white">
      <nav class="container mx-auto px-6 py-4">
        {isMobile ? (
          <div>
            <button onClick={toggleMenu} class="text-white focus:outline-none">
              <Menu size={24} />
            </button>
            {isMenuOpen && (
              <ul class="mt-4 space-y-2">
                <li>
                  <a href="#home" class="block hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" class="block hover:text-gray-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#education" class="block hover:text-gray-300">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#workexperience" class="block hover:text-gray-300">
                    Experience
                  </a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <ul class="flex space-x-4">
            <li>
              <a href="#home" class="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" class="hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" class="hover:text-gray-300">
                Education
              </a>
            </li>
            <li>
              <a href="#workexperience" class="hover:text-gray-300">
                Experience
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}



