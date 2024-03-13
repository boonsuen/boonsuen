export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-main py-10 mt-auto">
      <div className="layout-container">
        <div className="flex flex-col items-start gap-2">
          <a
            className="text-sm text-white/60"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/boonsuen"
          >
            GitHub
          </a>
          <a
            className="text-sm text-white/60"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/_wnxn"
          >
            Twitter
          </a>
          <a
            className="text-sm text-white/60"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/boonsuen/"
          >
            LinkedIn
          </a>
        </div>
        <hr className="border-white/20 mt-9 mb-5" />
        <p className="text-sm text-white/40">&copy; {year} Boonsuen Oh</p>
      </div>
    </footer>
  );
};
