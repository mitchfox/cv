import Image from 'next/image'
import ChameleonCV from '../public/images/chameleoncv.png';
import ArgonautIcon from '../public/images/argonauticon.png';

export default function SideHustles() {
  const items = [
    {
      title: "Argonaut",
      link: "",
      icon: <Image alt='logo' style={{ height: 'auto', width: '20px', maxWidth: '20px', margin: 'auto' }} src={ArgonautIcon}/>,
      description: "A travel journal app integrating written diaries with geolocation and mapping.",
    },
    {
      title: "Chameleon CV",
      link: "https://www.chameleoncv.com/",
      icon: <Image alt='logo' style={{ height: 'auto', width: '24px', maxWidth: '24px', margin: 'auto' }} src={ChameleonCV}/>,
      description: "AI powered resume tool for improving and managing collections of resumes.",
    },
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Personal Projects
      </h2>
      <div className="grid min-[580px]:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <article
            key={index}
            className="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group"
          >
            <div
              className="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
              aria-hidden="true"
            >
              <svg
                className="fill-current opacity-80 dark:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
              >
                <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
              </svg>
            </div>
            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm mb-4">
              {item.icon}
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                <a className="before:absolute before:inset-0" target="_blank" href={item.link}>
                  {item.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
