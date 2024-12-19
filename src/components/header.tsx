export default function Header() {
  return (
    <header class="bg-gray-800 text-white">
      <nav class="container mx-auto px-6 py-4">
        <ul class="flex space-x-4">
          <li><a href="#home" class="hover:text-gray-300">Home</a></li>
          <li><a href="#projects" class="hover:text-gray-300">Projects</a></li>
          <li><a href="#education" class="hover:text-gray-300">Education</a></li>
          <li><a href="#workexperience" class="hover:text-gray-300">Experience</a></li>
        </ul>
      </nav>
    </header>
  )
}

