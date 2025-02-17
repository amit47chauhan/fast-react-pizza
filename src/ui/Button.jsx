import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to }) {
  const className =
    'duration-3 sm-py-4 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6';
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <div disabled={disabled} className={className}>
      {children}
    </div>
  );
}
