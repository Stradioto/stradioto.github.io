import { h } from 'preact';

export default function Education() {
  const educations = [
    {
      name: 'Oulu University of Applied Sciences',
      degree: 'Bachelor\'s degree, Information Technology Engineering',
      duration: '2020 - 2025',
      description: 'Expected Graduation: 2025',
      skills: ['PostgreSQL', 'Spring Framework', 'Python', 'Web Development', 'CSS', 'C++', 'SQL', 'HTML', 'Linux', 'Amazon Web Services (AWS)', 'Jira', 'Unity', 'React.js', 'Java', 'JavaScript', 'Test Cases']
    },
    {
      name: 'National Commercial Apprenticeship Service',
      degree: 'Technician, Digital Game Programming',
      duration: '2018 - 2020',
      description: 'Graduated: 2020',
      skills: ['Bug Tracking', 'Bugzilla', 'Git', 'Unity', 'C#']
    },
    {
      name: 'Cruzeiro do Sul University',
      degree: 'Bachelor\'s degree, Law',
      duration: '2016 - 2019',
      description: 'Completed: 2019',
      skills: ['Law']
    },
    {
      name: 'Cruzeiro do Sul University',
      degree: 'Specialization, Legal Sciences',
      duration: '2016 - 2016',
      description: 'Completed: 2016',
      skills: ['Criminal Law']
    },
    {
      name: 'Barro Branco Military Police Academy',
      degree: 'Bachelor\'s degree, Police Sciences and Public Order',
      duration: '2013 - 2015',
      description: 'Completed: 2015',
      skills: ['Law Enforcement', 'Public Administration', 'Administrative Law', 'Police Sciences']
    },
    {
      name: 'Mackenzie University',
      degree: 'Unfinished, Law',
      duration: 'Feb 2011 - Jul 2012',
      description: 'Law bachelor\'s degree (unfinished)',
      skills: []
    },
    {
      name: 'Federal University of Paraná',
      degree: 'Unfinished, Manufacture Technology',
      duration: 'Jan 2010 - Jan 2011',
      description: 'Technology in Construction of Musical Instruments bachelor\'s degree(unfinished)',
      skills: []
    }
  ];

  return (
    <div class="container mx-auto px-4 py-8 text-white" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./src/components/images/incorporating.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <h2 class="text-3xl font-bold mb-6 text-white flex justify-center items-center mb-8">Education</h2>
      <div class="space-y-6">
        {educations.map((education) => (
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
  );
}



