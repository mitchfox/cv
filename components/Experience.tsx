import Image from 'next/image';
import FitWith from '../public/images/FitWithLogo.png';
import WithMe from '../public/images/WithMeLogo.webp';
import BlueJay from '../public/images/BlueJay.svg';
import { FaHandHoldingHeart } from "react-icons/fa";

export default function Experience() {
  const items = [
    {
      title: "Frontend Developer Lead @ WithMe",
      link: "#0",
      icon: <Image alt='logo' style={{ height: 'auto', width: '20px', maxWidth: '20px', margin: 'auto' }} src={WithMe}/>,
      date: "Dec 2023 - Current",
      location: "London, UK (Remote)",
      description:
        "Led the design and delivery of high-impact projects including live streams, user onboarding processes, site rebranding, referral schemes, checkouts, and content displays. Developed functional and class-based React components optimised for web and mobile browsing. Supported mobile app development using React Native. Managed third-party integrations such as Google Analytics, Intercom, and Facebook Ads. Onboarded and mentored new team members, fostering a collaborative and growth-oriented environment.",
      bullets: {
        bullet1: "JavaScript",
        bullet2: "ReactJS",
        bullet3: "CSS",
        bullet4: "Django",
        bullet5: "React Native",
      }, 
    },
    {
      title: "Frontend Developer @ FitWith",
      // link: "#0",
      icon: <Image alt='logo' style={{ height: 'auto', width: '16px', maxWidth: '16px', margin: 'auto' }} src={FitWith}/>,
      date: "May 2022 - Dec 2023",
      location: "London, UK",
      description:
        "Designed and delivered large-scale, time-critical projects similar to those at WithMe. Created functional and class-based React components optimised for web and mobile. Supported mobile app development using React Native. Managed third-party integrations. Ensured seamless integration of new team members, promoting effective communication and teamwork.",
      bullets: {
        bullet1: "ReactJS",
        bullet2: "React Native",
        bullet3: "Google Analytics",
        bullet4: "Intercom",
        bullet5: "Facebook Ads",
      }, 
    },
    {
      title: "Frontend Developer @ BlueJäy AI",
      // link: "#0",
      icon: <Image alt='logo' style={{ height: 'auto', width: '24px', maxWidth: '24px', margin: 'auto' }} src={BlueJay}/>,
      date: "May 2022 - Feb 2023",
      location: "Sydney, AU (Remote)",
      description:
        "Created and updated front-end components based on design requirements. Collaborated closely with backend developers to ensure seamless integration of components. Proposed and implemented UX/UI improvements to enhance design and usability.",
      bullets: {
        bullet1: "Typescript",
        bullet2: "SCSS",
        bullet3: "ReactJS",
      }, 
    },
    {
      title: "Junior Web Developer @ Health Professional Solutions",
      // link: "#0",
      icon: <FaHandHoldingHeart style={{ height: 'auto', width: '16px', maxWidth: '16px', margin: 'auto', color: '#222' }}/>,
      date: "April 2017 - April 2018",
      location: "Brisbane, AU",
      description:
        "Edited and customised WordPress and Magento themes to meet specific business needs. Updated HTML and CSS to enhance the visual appeal and functionality of websites. Assisted in troubleshooting and resolving website issues, ensuring optimal performance. Gained foundational experience in web development, while learning third party advertising tools.",
      bullets: {
        bullet1: "WordPress",
        bullet2: "Magento",
        bullet3: "HTML",
        bullet4: "CSS",
      }, 
    },
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Commercial Experience
      </h2>
      <div className="space-y-1">
        {items.map((item, index) => (
          <article
            key={index}
            className="p-5 border-b border-gray-200 dark:border-gray-600"
                        // odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]"

          >
            <div className="sm:flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-300 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm max-sm:mb-3 sm:mt-5">
                {item.icon}
              </div>
              <div>
                <div className="space-y-1.5 mb-3">
                  <div className="text-[13px] italic text-gray-500/70">
                    {item.date}
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                    <a
                      className="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </h3>
                  <div className="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                    {item.location}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                <div className='mt-3' style={{ display: 'flex' }}>
                  {Object.values(item.bullets).map((bullet, index) => (
                    <div style={{ backgroundColor: '#E9F7FE', color: '#0CA5E9', padding: '2px 7px' }} className="text-[12px] font-medium text-gray-600 dark:text-gray-400 mr-3 rounded-full" key={index}>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
