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
    name: "Emma Roberts",
    position: "UI Designer",
    description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    image: "/house1.jpg", // Replace with the correct image path
  },
  {
    name: "Emma Roberts",
    position: "UI Designer",
    description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    image: "/house1.jpg", // Replace with the correct image path
  },
  {
    name: "Emma Roberts",
    position: "UI Designer",
    description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    image: "/house1.jpg", // Replace with the correct image path
  },
  {
    name: "Emma Roberts",
    position: "UI Designer",
    description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    image: "/house1.jpg", // Replace with the correct image path
  },
  // Add more team members as needed
];

function Team() {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4 lg:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 mb-8">
            <h2 className="text-4xl font-bold mb-2">Meet Our Executive Team</h2>
            <p className="text-lg text-gray-300">
              Learn more about the talented individuals driving our success.
            </p>
          </div>
          {teamMembers.map((member, index) => (
            <div key={index} className="mb-6 md:mb-0">
              <div className="bg-white p-6 rounded-lg hover:shadow-xl transition duration-300">
                <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                <p className="text-lg text-gray-700 mb-4">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
