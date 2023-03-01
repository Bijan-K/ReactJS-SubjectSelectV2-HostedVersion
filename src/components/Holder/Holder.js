import { useState, useContext } from 'react';
import DefaultSchedule from './Term/DefaultSchedule';
import Ekhtesasi from './Term/Ekhtesasi';
import Ekhtiyari from './Term/Ekhtiyari';
import Omomi from './Term/Omomi';
import SaveContext from '../../context/SaveContext';

const Holder = () => {
  const { SetEffect, Effect } = useContext(SaveContext);

  const [Foucs, SetFocus] = useState(1);
  const [Tab, setFormerTab] = useState(1);
  const tabClicked = (e) => {
    const FormerTab = document.getElementById(`${Tab}bar`);
    const SelectedTab = document.getElementById(`${e}bar`);

    FormerTab.classList.remove('w-full');
    SelectedTab.classList.remove('w-0');
    SelectedTab.classList.add('w-full');

    setFormerTab(e);
    SetFocus(e);

    SetEffect(Effect + 1);
  };

  return (
    <div className="flex flex-col mt-10 btnfont text-xl justify-center items-center gap-4">
      <div className="mt-5 flex ">
        <button
          id="1tab"
          onClick={() => tabClicked(1)}
          className="rounded-l py-2 px-5 bg-neutral-400 relative overflow-hidden font-medium text-black shadow-inner group border-gray-800 border-r"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-4 border-gray-800 group-hover:w-full ease"></span>
          <span
            id="1bar"
            className="absolute bottom-0 right-0 w-full h-0 transition-all duration-200 border-b-4 border-gray-800 group-hover:w-full ease "
          ></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-500 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            93 برنامه
          </span>
        </button>

        <button
          id="2tab"
          onClick={() => tabClicked(2)}
          className=" py-2 px-5 bg-neutral-400 relative overflow-hidden font-medium text-black shadow-inner group border-gray-800 border-r"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-4 border-gray-800 group-hover:w-full ease"></span>
          <span
            id="2bar"
            className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-4 border-gray-800 group-hover:w-full  ease"
          ></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-500 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            عمومی{' '}
          </span>
        </button>

        <button
          id="3tab"
          onClick={() => tabClicked(3)}
          className=" py-2 px-5 bg-neutral-400 relative overflow-hidden font-medium text-black shadow-inner group border-gray-800 border-r"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-4 border-gray-800 group-hover:w-full ease"></span>
          <span
            id="3bar"
            className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-4 border-gray-800 group-hover:w-full ease"
          ></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-500 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            اختصاصی
          </span>
        </button>

        <button
          id="4tab"
          onClick={() => tabClicked(4)}
          className="rounded-r py-2 px-5 bg-neutral-400 relative overflow-hidden font-medium text-black shadow-inner group border-gray-800"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-4 border-gray-800 group-hover:w-full ease"></span>
          <span
            id="4bar"
            className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-4 border-gray-800 group-hover:w-full ease"
          ></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-500 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            اختیاري
          </span>
        </button>
      </div>

      <div dir="rtl" className="">
        {Foucs === 1 && <DefaultSchedule />}
        {Foucs === 2 && <Omomi />}
        {Foucs === 3 && <Ekhtesasi />}
        {Foucs === 4 && <Ekhtiyari />}
      </div>
    </div>
  );
};

export default Holder;
