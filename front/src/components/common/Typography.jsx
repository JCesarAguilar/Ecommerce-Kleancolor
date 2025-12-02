export const Title = ({ children, className }) => {
  return (
    <h2
      className={`lg:text-6xl  font-cursive  font-light font-lavishly text-[45px] ${className}`}
    >
      {children}
    </h2>
  );
};

export const P1 = ({ children, className }) => {
  return (
    <p
      className={`lg:text-[16px] text-[14px] leading-relaxed lg:tracking-wide tracking-normal ${className}`}
    >
      {children}
    </p>
  );
};
