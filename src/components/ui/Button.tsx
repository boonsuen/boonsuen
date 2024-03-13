import clsx from 'clsx';
import Link from 'next/link';

export const Button = ({
  children,
  className,
  href,
  isExternal = false,
  ...props
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  href?: string;
  isExternal?: boolean;
}>) => {
  const defaultClassName =
    'px-4 py-[10px] border border-main/20 rounded-full text-sm';

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(defaultClassName, className)}
          {...props}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          href={href}
          className={clsx(defaultClassName, className)}
          {...props}
        >
          {children}
        </Link>
      );
    }
  }

  return (
    <button className={clsx(defaultClassName, className)} {...props}>
      {children}
    </button>
  );
};
