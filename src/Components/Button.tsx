interface Button_Props {
  children: string;
  className: string;
  onClick?: () => void;
}
const Button = ({ children, className, onClick }: Button_Props) => {
  return <button className={className} onClick={onClick} type="button">{children}</button>;
};

export default Button;
