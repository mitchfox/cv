import React from 'react';
import Image from 'next/image';
import ChameleonCV from '../public/images/chameleoncv.png';
import BarChart from './ui/bar-chart';

export default function Skills() {

  const technicalSkills = [
    { name: "ReactJS", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "CSS", value: 90 },
    { name: "TypeScript", value: 90 },
    { name: "HTML", value: 90 },
    { name: "Next.js", value: 90 },
    { name: "CSS", value: 90 },
    { name: "Tailwind", value: 90 },

  ];

  const uiSkills = [
    { name: "Affinity Designer", value: 100 },
    { name: "Adobe XD", value: 90 },
    { name: "Figma", value: 90 },
    { name: "Adobe Photoshop", value: 90 },
    { name: "Canva", value: 90 },
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Skills
      </h2>
      <div className="grid min-[580px]:grid-cols-2 gap-4">
        <BarChart name="Technical Skills" data={technicalSkills} />
        <BarChart name="UI/UX Skills" data={uiSkills} />
      </div>
    </section>
  );
}
