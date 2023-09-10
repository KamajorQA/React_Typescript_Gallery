import { Dna } from 'react-loader-spinner';

function Spinner() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Dna width="70" visible={true} />
    </div>
  );
}

export default Spinner;
