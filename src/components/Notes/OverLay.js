import { useContext } from 'react';
import SaveContext from '../../context/SaveContext';

const OverLay = ({ setOverlayState }) => {
  const { Save } = useContext(SaveContext);

  return (
    <div className="absolute w-full h-full flex flex-col justify-center items-center">
      <div
        onClick={() => setOverlayState(false)}
        className="fixed bg-slate-900 bg-opacity-60 w-full h-screen z-40"
      ></div>

      <div className="fixed z-50 flex flex-col p-3 w-1/2 h-3/4 border-neutral-800  border-2 rounded bg-stone-800">
        <div dir="rtl" className="bg-slate-500 h-full overflow-y-auto">
          <div className="flex flex-col btnfont text-2xl h-full">
            <ul className="text-center mt-2">
              <li className="text-pink-900">
                بهتر است واحد ها رو به ترتیب بردارید به خاطره مدلی که کد نوشته
                شده است.
              </li>
            </ul>
            <p className="mx-4 mt-2 text-black text-center">
              * بعضی گزینه ها در جدول های 93 هیچ کاری انجام نمی دهند و فقط حکم
              placeholder دارند
            </p>
            <p className="mx-3 mt-2 text-black text-center">
              مانند عمومی و اختیاري
            </p>
            <p className="mx-3 mt-2 text-black text-center">
              * در اخر باید 144 یا 146 واحد داشته باشید(واحد های الزامی را هم
              برداشته باشید)
            </p>

            <div className="mx-3 mt-auto text-black  text-right text-base">
              این وبسایت کوچک توسط بیژن نوشته شده است
            </div>
          </div>
        </div>
        <i className="text-white text-center mt-4 bottom-0">
          <span className="bg-slate-700 rounded p-2 hover:bg-slate-600 cursor-default">
            {`${Save[Save.length - 1].vhd}`}
          </span>
        </i>
      </div>
    </div>
  );
};

export default OverLay;
