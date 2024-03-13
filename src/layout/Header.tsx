import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div className="layout-container layout-grid-container py-5">
        {/* grid span 4-5 */}
        <nav className="col-[5_/_6]">
          <ul className="flex flex-col">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/writing">Writing</Link>
            </li>
            <li>
              <Link href="/lists">Lists</Link>
            </li>
          </ul>
        </nav>
        {/* <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div> */}
      </div>
    </header>
  );
};
