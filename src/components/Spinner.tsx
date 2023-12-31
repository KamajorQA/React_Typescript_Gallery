import { Dna } from 'react-loader-spinner';

interface SpinnerProps {
  visible: boolean;
}

function Spinner({ visible }: SpinnerProps) {
  return (
    <div className="grow flex justify-center items-center">
      <Dna width="70" visible={visible} />
    </div>
  );
}

export { Spinner };
