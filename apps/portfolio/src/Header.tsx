import { RiGithubFill } from 'react-icons/ri';

export default function Header() {
  return (
    <header className="h-16 w-full p-8 flex gap-2 items-center justify-between border-b-2 absolute top-0">
      <a href="/">
        <div className="w-32 m-4 text-xl">
          <span>Bundler UI</span>
        </div>
      </a>
      <div className="m-8 flex gap-12 lg:gap-16 flex-row flex-grow justify-end items-center">
        <input
          type="text"
          placeholder="Search abstractions, patterns, tooling"
          className=" text-sm h-10 w-[300px] mt-1 p-2 sm rounded-2xl border-2 hover:border-purple-500 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
        />
        <nav>
          <div>
            <ul className="h-8 flex gap-5 items-center">
              <li>
                <a
                  className="py-2 px-5 border-zinc-200 border-2 rounded-xl shadow-md hover:shadow-sm"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="py-2 px-5 border-zinc-200 border-2 rounded-xl shadow-md hover:shadow-sm"
                  href="/about"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <a href="https://github.com/clay-curry/bundler-ui" className="p-2">
            <RiGithubFill style={{ height: '32px', width: '32px' }} />
          </a>
        </div>
      </div>
    </header>
  );
}
