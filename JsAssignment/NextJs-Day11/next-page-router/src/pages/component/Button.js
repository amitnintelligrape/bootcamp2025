import style from './Button.module.css';
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={style.button}>{children}</button>
  );
};

export default Button;
