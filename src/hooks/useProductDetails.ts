import { useState } from 'react';

function useProductDetails() {
  const [details, setDetails] = useState(false);

  const mainBgColorGradient =
    'bg-gradient-to-r from-green-400/50 to-blue-500/50';
  const altBgColorGradient =
    'bg-gradient-to-l from-indigo-400/50 via-purple-500/50 to-pink-500/50';

  const btnBgClassName = !!details ? altBgColorGradient : mainBgColorGradient;

  const btnClassesArray = [
    'py-2 px-4 w-32 border rounded',
    btnBgClassName,
    'hover:from-pink-500 hover:to-yellow-500',
  ];

  const btnClasses = btnClassesArray.join(' ');

  const btnText = !!details ? 'Hide Details' : 'Show Details';

  const handleButtonClick = () => {
    setDetails((details) => !details);
  };

  return { details, btnClasses, btnText, handleButtonClick };
}

export { useProductDetails };
