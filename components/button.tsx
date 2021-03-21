const Button = ({
  text,
  primary,
  flat,
  hasBorder,
}: {
  text: string;
  primary?: boolean;
  flat?: boolean;
  hasBorder?: boolean;
}) => {
  const classes = [
    'flex',
    'items-center',
    'justify-center',
    'text-center',
    'mx-2',
    'px-5',
    'py-3',
    'rounded-md',
    'select-none',
    'cursor-pointer',
  ];
  if (!flat) {
    classes.push(
      primary ? 'bg-codelance-blue text-codelance-cream' : 'text-codelance-grey'
    );
    if (hasBorder) {
      classes.push(
        'border' +
          (primary ? ' border-codelance-cream' : ' border-codelance-grey')
      );
    }
  }

  return <div className={classes.join(' ')}>{text}</div>;
};

export default Button;
