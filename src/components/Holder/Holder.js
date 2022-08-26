import { useEffect, useState } from 'react';
import DefaultSchedule from './Term/DefaultSchedule';
import Ekhtesasi from './Term/Ekhtesasi';
import Ekhtiyari from './Term/Ekhtiyari';
import Omomi from './Term/Omomi';

const Holder = (props) => {
  const [Foucs, SetFocus] = useState(1);
  const [Tab, setTab] = useState(1);
  const tabClicked = (e) => {
    const ptab = document.getElementById(`${Tab}tab`);
    const pbar = document.getElementById(`${Tab}bar`);
    const ntab = document.getElementById(`${e}tab`);
    const nbar = document.getElementById(`${e}bar`);

    pbar.classList.remove('w-full');
    nbar.classList.add('w-full');

    setTab(e);
    SetFocus(e);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className=" mt-5 flex">
        <button
          id="1tab"
          onClick={() => tabClicked(1)}
          class="rounded-l py-2 px-5 bg-neutral-400 relative overflow-hidden font-medium text-black shadow-inner group border-gray-800"
        >
          <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-4 border-gray-800 group-hover:w-full ease"></span>
          <span
            id="1bar"
            class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-4 border-gray-800 group-hover:w-full ease"
          ></span>
          <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span class="absolute inset-0 w-full h-full duration-500 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            برنامه
          </span>
        </button>

        <button
          id="2tab"
          onClick={() => tabClicked(2)}
          class=" py-2 px-5 bg-neutral-400 relative overflow-hidden font-medium text-black shadow-inner group border-gray-800"
        >
          <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-4 border-gray-800 group-hover:w-full ease"></span>
          <span
            id="2bar"
            class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-4 border-gray-800 group-hover:w-full  ease"
          ></span>
          <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span class="absolute inset-0 w-full h-full duration-500 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            عمومی{' '}
          </span>
        </button>

        <button
          id="3tab"
          onClick={() => tabClicked(3)}
          class=" py-2 px-5 bg-neutral-400 relative overflow-hidden font-medium text-black shadow-inner group border-gray-800"
        >
          <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-4 border-gray-800 group-hover:w-full ease"></span>
          <span
            id="3bar"
            class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-4 border-gray-800 group-hover:w-full ease"
          ></span>
          <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span class="absolute inset-0 w-full h-full duration-500 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            اختصاصی
          </span>
        </button>

        <button
          id="4tab"
          onClick={() => tabClicked(4)}
          class="rounded-r py-2 px-5 bg-neutral-400 relative overflow-hidden font-medium text-black shadow-inner group border-gray-800"
        >
          <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-4 border-gray-800 group-hover:w-full ease"></span>
          <span
            id="4bar"
            class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-4 border-gray-800 group-hover:w-full ease"
          ></span>
          <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-800 group-hover:h-full ease"></span>
          <span class="absolute inset-0 w-full h-full duration-500 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            اختیاري
          </span>
        </button>
      </div>

      <div dir="rtl" className="">
        {Foucs === 1 && (
          <DefaultSchedule Save={props.Save} SetSave={props.SetSave} />
        )}
        {Foucs === 2 && <Omomi Save={props.Save} SetSave={props.SetSave} />}
        {Foucs === 3 && <Ekhtesasi Save={props.Save} SetSave={props.SetSave} />}
        {Foucs === 4 && <Ekhtiyari Save={props.Save} SetSave={props.SetSave} />}
      </div>
    </div>
  );
};

export default Holder;
