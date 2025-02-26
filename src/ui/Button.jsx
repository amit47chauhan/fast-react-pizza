import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'duration-3 text-sm sm-py-4 inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' md:px-6 md:py-4 px-4 py-3',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round : base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'duration-3 text-sm sm-py-4 inline-block rounded-full border-2 border-stone-300 bg-transparent  font-semibold uppercase tracking-wide text-stone-400 transition-colors hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5 px-4 py-2.5',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  
  if(onClick){
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
