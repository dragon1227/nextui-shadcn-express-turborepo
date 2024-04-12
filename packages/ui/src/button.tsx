interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <button className="bg-primary rounded-full border border-white py-2 px-4" {...rest}>{children}</button>;
};
