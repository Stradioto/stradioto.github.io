import { FunctionComponent } from 'preact'
import { Github, Linkedin,  } from 'preact-feather'

const About: FunctionComponent = () => {
  return (
    <div>
      <div class="flex gap-6 items-center justify-center">
        <a
          href="https://www.linkedin.com/in/stradioto"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-blue-400 transition-colors"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="https://github.com/Stradioto"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-gray-400 transition-colors"
        >
          <Github size={32} />
        </a>
      </div>
    </div>
  )
}

export default About



