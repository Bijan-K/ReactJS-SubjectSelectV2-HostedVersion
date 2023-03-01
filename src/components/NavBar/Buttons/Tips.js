import React from 'react';
import { useContext } from 'react';
import SaveContext from '../../../context/SaveContext';

function Tips({ setOverlayState }) {
  const { finalVhd, SaveWasClicked, SetSaveWasClicked } =
    useContext(SaveContext);

  if (SaveWasClicked) {
    const counter = document.getElementById('TheCounter');
    counter.classList.remove('border-white');
    counter.classList.add('border-emerald-600');
    counter.classList.add('border-r-2');
    counter.classList.add('border-l-2');

    setTimeout(() => {
      counter.classList.remove('border-r-2');
      counter.classList.remove('border-l-2');
      counter.classList.remove('border-emerald-600');
      counter.classList.add('border-white');
      SetSaveWasClicked(false);
    }, 750);
  }

  return (
    <a
      onClick={() => setOverlayState(true)}
      href="#"
      className="relative inline-flex items-center justify-items-center px-6 py-3 overflow-hidden font-medium transition-all bg-black group h-8 mt-1 w-full content-center place-content-center"
    >
      <span
        id="TheCounter"
        className="text-white font-medium border-b-2 border-solid border-white hover:bg-neutral-100 hover:text-black px-3 py-0.5 rounded-lg"
      >
        {`${finalVhd}`}
      </span>
    </a>
  );
}

export default Tips;
