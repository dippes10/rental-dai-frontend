import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sirak Shrestha",
    position: "UI/UX Designer",
    description: "Passionate about creating visually appealing and user-friendly interfaces. Sirak brings a unique blend of creativity and functionality to our design team.",
    image: "/sirak-shrestha.jpeg",
  },
  {
    name: "Jwalan Chand",
    position: "Back-End Developer",
    description: "A skilled back-end developer, Jwalan is dedicated to building robust and scalable solutions. He ensures the seamless functioning of our platform's core functionalities.",
    image: "/jwalan-chand.jpeg",
  },
  {
    name: "Dipesh Sanjel",
    position: "Front-End Developer",
    description: "Dipesh is our front-end wizard, turning design concepts into interactive and responsive user interfaces. With a keen eye for detail, he enhances the user experience on our platform.",
    image: "/dipesh-sanjel.jpeg",
  },
  // Add more team members as needed
];

function Team() {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4 lg:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 mb-8">
            <h2 className="text-4xl text-white font-bold mb-2">Meet Our Executive Team</h2>
            <p className="text-lg text-gray-300">
              Learn more about the talented individuals driving our success.
            </p>
          </div>
          {teamMembers.map((member, index) => (
            <div key={index} className="mb-6 md:mb-0 flex items-center">
              <div className="relative h-40 w-1/3 mr-6 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="md:w-2/3">
                <div className="bg-white p-6 rounded-lg hover:shadow-xl transition duration-300">
                  <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                  <p className="text-lg text-gray-700 mb-4">{member.position}</p>
                  <p className="text-gray-600 text-justify">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
