import { h } from 'preact';
import About from './about';

export default function Home() {
  return (
    <div class="container mx-auto px-4 py-8 text-white"
    style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./src/components/images/incorporating.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Welcome to My Personal Website</h1>
        <p class="text-xl mb-6">Hi, I'm Pedro Stradioto. I'm an Information Technology Engineer.</p>
        <div class="flex justify-center items-center mb-8">
          <img
            src="./src/assets/0.jpg"
            alt="Pedro Stradioto"
            class="w-40 h-40 rounded-full object-cover"
          />
        </div>
      </div>
      <div class="flex justify-center items-center mb-8 container mx-auto px-4 py-0 text-white">
        <About />
      </div>

      <div class="max-w-3xl mx-auto text-justify">
        <p class="mb-4">
          I have a diverse educational background and professional experience. My education includes studies in IT engineering, game programming, law, and police sciences, along with IT certifications. Throughout my career, I have taken on various roles, from police commander to freelancer, demonstrating adaptability and a willingness to learn.
        </p>
        <p class="mb-4">
          I have worked on a range of IT projects, including mobile and web applications, as well as desktop and browser games. I am familiar with programming languages like C#, JavaScript, Java, Python, and Kotlin, and have used development tools and frameworks such as Unity, React.js, Flutter, and Android Studio. Additionally, I have experience with design tools like Inkscape, Adobe Photoshop, and Blender.
        </p>
        <p class="mb-4">
          I am proficient in Portuguese and English, have good command of Spanish, and know the basics of Swedish. My career in both military and civilian roles has helped me develop strong leadership and problem-solving skills. I am always looking to expand my knowledge and am open to new opportunities, particularly in thesis work, internships or entry positions.
        </p>
      </div>
    </div>
  );
}





