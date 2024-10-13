import { useState } from 'react';

const App = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [services] = useState([
    { id: 1, title: 'Service 1', description: 'This is service 1' },
    { id: 2, title: 'Service 2', description: 'This is service 2' },
    { id: 3, title: 'Service 3', description: 'This is service 3' },
  ]);

  const [projects] = useState([
    { id: 1, title: 'Project 1', description: 'This is project 1', image: 'https://picsum.photos/200/300' },
    { id: 2, title: 'Project 2', description: 'This is project 2', image: 'https://picsum.photos/200/301' },
    { id: 3, title: 'Project 3', description: 'This is project 3', image: 'https://picsum.photos/200/302' },
    { id: 4, title: 'Project 4', description: 'This is project 4', image: 'https://picsum.photos/200/303' },
  ]);

  return (
    <div className="bg-gradient-to-b from-purple-400 to-blue-500 h-screen overflow-y-scroll">
      <div className="flex justify-center items-center pt-20">
        <div className="relative">
          <div className="w-48 h-48 rounded-full bg-purple-600 flex justify-center items-center text-white font-bold text-2xl animate-rotate-slow">
            Economist & Data Scientist
          </div>
          <img src="https://picsum.photos/200/300" alt="profile" className="w-40 h-40 rounded-full absolute top-4 left-4" />
        </div>
      </div>
      <div className="flex justify-center items-center pt-10">
        <h1 className="text-3xl font-bold text-black">Hudda Luni</h1>
        <button className="ml-10 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => setActiveMenu(!activeMenu)}>
          Menu
        </button>
        {activeMenu && (
          <div className="absolute top-20 right-10 bg-white shadow-md p-4">
            <ul>
              <li className="py-2 hover:bg-purple-100">
                <a href="#about" className="text-black">About</a>
              </li>
              <li className="py-2 hover:bg-purple-100">
                <a href="#services" className="text-black">Services</a>
              </li>
              <li className="py-2 hover:bg-purple-100">
                <a href="#contact" className="text-black">Contact</a>
              </li>
              <li className="py-2 hover:bg-purple-100">
                <a href="#blogs" className="text-black">Blogs</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center pt-20" id="services">
        <h1 className="text-3xl font-bold text-black">Services Provided</h1>
      </div>
      <div className="flex flex-wrap justify-center pt-10">
        {services.map((service) => (
          <div key={service.id} className="w-1/3 p-4 bg-white shadow-md m-4">
            <h2 className="text-2xl font-bold text-black">{service.title}</h2>
            <p className="text-black">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-20" id="projects">
        <h1 className="text-3xl font-bold text-black">My Projects</h1>
      </div>
      <div className="flex flex-wrap justify-center pt-10">
        {projects.map((project) => (
          <div key={project.id} className="w-1/4 p-4 bg-white shadow-md m-4">
            <img src={project.image} alt="project" className="w-full h-48 object-cover" />
            <h2 className="text-2xl font-bold text-black">{project.title}</h2>
            <p className="text-black">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-20" id="contact">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Contact Me
        </button>
      </div>
      <div className="flex justify-center items-center pt-10">
        <p className="text-black">
          Twitter | LinkedIn | Email
        </p>
      </div>
    </div>
  );
};

export default App;