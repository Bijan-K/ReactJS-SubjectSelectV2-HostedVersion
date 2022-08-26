import { useLayoutEffect, useState } from 'react';
import LoadOverlay from './LoadOverlay';

const LoadButton = ({ SetSave }) => {
  const [OverlayLoad, SetOverlayLoad] = useState(false);

  const clickHandler = () => {
    SetOverlayLoad(true);
  };

  return (
    <>
      {OverlayLoad && (
        <LoadOverlay SetOverlayLoad={SetOverlayLoad} SetSave={SetSave} />
      )}
      <a
        onClick={clickHandler}
        href="#"
        className="h-8 mt-1 relative ml-2 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-black group"
      >
        <span className="w-48 h-48 rounded bg-white rotate-[-40deg] absolute bottom-0 left-0 -translate-x-full ease-out duration-200 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
          Load
        </span>
      </a>
    </>
  );
};

export default LoadButton;
