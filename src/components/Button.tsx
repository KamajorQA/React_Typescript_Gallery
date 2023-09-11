import { MouseEventHandler } from 'react';

interface ButtonProps {
  btnClasses: string;
  handleButtonClick: MouseEventHandler;
  btnText: string;
  btnType: 'button' | 'reset' | 'submit' | undefined;
}

function Button({
  btnClasses,
  handleButtonClick,
  btnText,
  btnType,
}: ButtonProps) {
  return (
    <button className={btnClasses} onClick={handleButtonClick} type={btnType}>
      {btnText}
    </button>
  );
}

export { Button };
