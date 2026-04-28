import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg shadow-primary-500/20',
  secondary:
    'bg-secondary-800 text-white hover:bg-secondary-900 shadow-md hover:shadow-lg',
  outline:
    'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  to,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5';
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal link
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // Button
  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
