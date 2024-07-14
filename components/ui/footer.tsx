import Signature from '../../public/images/logo.png'
import Image from 'next/image'


export default function Footer() {

  return (
    <footer className="space-y-12 text-center pb-16">
      {/* Initials logo */}
      <div>
        <Image alt='logo' style={{ height: 'auto', width: '80vw', maxWidth: '200px', margin: 'auto' }} src={Signature}/>
        
        {/* <svg
          className="inline-flex fill-gray-800 dark:fill-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          width="201"
          height="93"
        >
          <path d="M91.06.072c2.113 0 3.969.544 5.569 1.632 1.6 1.024 2.4 2.4 2.4 4.128 0 1.19-.213 2.38-.638 3.57a62.948 62.948 0 0 1 7.158-2.802c5.184-1.728 10.304-2.592 15.36-2.592.512.192 1.152.448 1.92.768.832.256 1.888.864 3.168 1.824 1.344.896 2.016 1.728 2.016 2.496s-.16 1.344-.48 1.728c-4.928 4.48-10.464 9.888-16.608 16.224-6.08 6.336-10.752 11.616-14.016 15.84l-6.912 9.024c-.384.576-.576 1.024-.576 1.344v.096l1.536-.768c.128-.064.224-.128.288-.192 23.36-16.448 39.008-28.096 46.944-34.944a.912.912 0 0 1 .768-.384c.32 0 .544.096.672.288.128.192.736.8 1.824 1.824 1.088.96 1.632 1.696 1.632 2.208 0 .448-.192.832-.576 1.152-6.336 6.016-12.8 13.568-19.392 22.656-6.592 9.088-9.888 16.096-9.888 21.024 0 .576.288.864.864.864 1.28 0 4.288-1.728 9.024-5.184 4.736-3.456 10.112-7.84 16.128-13.152 6.08-5.312 12.48-11.808 19.2-19.488 6.784-7.744 12.32-15.264 16.608-22.56a71.66 71.66 0 0 0 1.344-2.976c.32-.832.8-1.248 1.44-1.248.704 0 1.408.96 2.112 2.88.768 1.856 1.152 3.488 1.152 4.896 0 2.24-2.56 6.72-7.68 13.44-5.12 6.72-11.104 13.664-17.952 20.832-6.848 7.168-14.112 13.568-21.792 19.2-7.68 5.568-13.728 8.352-18.144 8.352-2.112 0-4.224-.832-6.336-2.496-2.048-1.664-3.072-4.352-3.072-8.064 0-4.608 1.376-9.344 4.128-14.208a24.086 24.086 0 0 1 3.936-5.184l2.208-2.592.384-.768v-.096c0-.128-.032-.192-.096-.192-.192 0-.48.192-.864.576-14.272 12.544-23.936 20.896-28.992 25.056-5.056 4.096-8.032 6.144-8.928 6.144-.896 0-1.632-.448-2.208-1.344a11.69 11.69 0 0 0-.864-.96c-.256-.384-.448-.64-.576-.768a3.146 3.146 0 0 0-.384-.48 2.86 2.86 0 0 0-.288-.384c-.064-.32-.096-.8-.096-1.44 0-.64.224-1.568.672-2.784.448-1.216.864-2.368 1.248-3.456.448-1.152 1.664-3.52 3.648-7.104 1.984-3.648 4.352-7.296 7.104-10.944 2.752-3.712 6.784-8.224 12.096-13.536 5.312-5.312 11.264-10.432 17.856-15.36 1.216-.96 1.824-1.568 1.824-1.824s-.128-.384-.384-.384c-4.8 0-12.8 3.2-24 9.6l-.722.417c-2.646 4.308-6.147 9.737-10.502 16.287-8.128 12.224-15.264 21.888-21.408 28.992-.256.256-1.376 1.504-3.36 3.744a184.301 184.301 0 0 1-5.28 5.76c-1.536 1.664-3.68 3.712-6.432 6.144-2.688 2.432-5.216 4.448-7.584 6.048-2.304 1.664-4.896 3.072-7.776 4.224-2.944 1.216-5.696 1.824-8.256 1.824-4.032 0-6.048-1.408-6.048-4.224 0-3.136 1.888-6.72 5.664-10.752 3.712-3.968 8-7.328 12.864-10.08 4.8-2.752 8.768-4.128 11.904-4.128.384 0 .576.16.576.48 0 .32-.128.576-.384.768-.256.192-1.056.608-2.4 1.248-3.776 1.92-8.544 5.728-14.304 11.424-5.824 5.696-8.736 9.6-8.736 11.712 0 .256.128.384.384.384 2.688 0 8.48-4.736 17.376-14.208C47.7 65.992 55.06 57.64 61.205 50.088A4287.35 4287.35 0 0 0 78.558 29c-2.586 2.12-4.405 4.029-5.457 5.728-.192.576-.48.864-.864.864s-.576-.48-.576-1.44.832-2.656 2.496-5.088c1.664-2.496 4.064-5.152 7.2-7.968 2.852-2.567 5.984-5.007 9.395-7.32 1.91-2.522 3.037-4.178 3.38-4.968.577-.768.865-1.312.865-1.632 0-.384-.16-.576-.48-.576-4.096 0-8.992 1.632-14.688 4.896A88.464 88.464 0 0 0 64.277 22.92c-4.672 4.288-8.672 8.576-12 12.864-3.328 4.224-4.992 7.328-4.992 9.312 0 .256.096.384.288.384 2.048 0 9.216-5.184 21.504-15.552 1.216-1.28 1.984-1.92 2.304-1.92.32 0 .48.128.48.384 0 .192-.416.896-1.248 2.112C60.5 45.16 52.597 52.488 46.9 52.488c-2.048 0-3.68-.832-4.896-2.496-1.152-1.728-1.728-4-1.728-6.816 0-2.88 1.472-6.752 4.416-11.616 3.008-4.864 6.816-9.632 11.424-14.304 4.608-4.672 10.08-8.704 16.416-12.096C78.933 1.768 85.109.072 91.06.072Zm95.063 41.76-10.848-.192c-1.088 0-1.696.064-1.824.192l-.96 5.472c0 .64.064 1.056.192 1.248.128.128.384.192.768.192.448 0 .928-.096 1.44-.288 2.368.064 10.304.224 23.808.48 1.344-.32 2.016-1.248 2.016-2.784 0-.64-.256-1.28-.768-1.92-1.024-1.984-2.432-2.976-4.224-2.976-.448 0-.896.096-1.344.288-2.688.192-5.44.288-8.256.288Zm-171.716 0L3.559 41.64c-1.088 0-1.696.064-1.824.192l-.96 5.472c0 .64.064 1.056.192 1.248.128.128.384.192.768.192.448 0 .928-.096 1.44-.288 2.368.064 10.304.224 23.808.48 1.344-.32 2.016-1.248 2.016-2.784 0-.64-.256-1.28-.768-1.92-1.024-1.984-2.432-2.976-4.224-2.976-.448 0-.896.096-1.344.288-2.688.192-5.44.288-8.256.288Z" />
        </svg> */}
      </div>
      <div className="space-y-6">
        {/* Social icons */}
        <ul className="inline-flex gap-4">
          <li>
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href="#0"
              aria-label="X"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
              >
                <path d="M16 14h-4.938L7.197 9.108 2.771 14H.316l5.736-6.342L0 0h5.063l3.496 4.476L12.601 0h2.454L9.697 5.932 16 14Zm-4.26-1.422h1.36L4.323 1.347H2.865l8.875 11.231Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href="#0"
              aria-label="GitHub"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.994-2.683-.994-.398-.894-.895-1.192-.895-1.192-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.894 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.976 0-.894.298-1.59.795-2.087-.1-.198-.397-.993.1-2.086 0 0 .695-.2 2.186.795a6.408 6.408 0 0 1 1.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.796 2.186-.796.398 1.094.199 1.889.1 2.087.496.597.795 1.292.795 2.087 0 3.081-1.889 3.677-3.677 3.876.298.398.596.895.596 1.59v2.187c0 .198.1.496.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href="#0"
              aria-label="Facebook"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="15"
              >
                <path d="m2.834 15-.022-6.563H0V5.626h2.813V3.75C2.813 1.22 4.38 0 6.636 0c1.081 0 2.01.08 2.281.116v2.645H7.353c-1.228 0-1.466.584-1.466 1.44v1.424h3.488l-.938 2.813h-2.55V15H2.834Z" />
              </svg>
            </a>
          </li>
        </ul>
        {/* Copyright notes */}
        <p className="text-sm text-gray-400 dark:text-gray-600">
          &copy; Mitchell Fox. All rights reserved.
        </p>
      </div>
    </footer>
  );
}