import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-8">
        <div className="w-full sm:w-auto flex items-center mb-4 sm:m-0">
          <h2 className="font-sans text-white tracking-[9px] font-light text-lg">
            Soumik Acharjee
          </h2>
        </div>

        <div>
          <ul className="flex flex-col space-y-2">
            <li className="flex items-center">
              <svg
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M13 13L11 15L9 13"></path>
                <path d="M9 3C7.34315 3 6 4.34315 6 6V14C6 15.6569 7.34315 17 9 17H15C16.6569 17 18 15.6569 18 14V6C18 4.34315 16.6569 3 15 3H9Z"></path>
              </svg>
              <h2 className="text-white"> +91 8910373618</h2>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
