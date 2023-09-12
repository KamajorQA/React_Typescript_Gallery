import { Button } from './Button';
import plus from '../assets/Plus.svg';

interface ModalSwitchProps {
  onClick: () => void;
}
function ModalSwitch({ onClick }: ModalSwitchProps) {
  const btnBgClasses =
    'bg-gradient-to-r from-indigo-400/50 to-yellow-500/50 duration-500';
  const btnMainClasses =
    'rounded-full h-10 w-10 flex justify-center items-center';
  const btnHoverClasses = 'hover:bg-indigo-400/50';
  const btnClasses = `${btnBgClasses} ${btnHoverClasses} ${btnMainClasses}`;

  return (
    <section className="fixed bottom-7 right-7">
      <Button
        btnType="button"
        btnClasses={btnClasses}
        handleButtonClick={onClick}
        btnText={<img src={plus} alt={'Add Product Button'}></img>}
      />
    </section>
  );
}

export { ModalSwitch };
