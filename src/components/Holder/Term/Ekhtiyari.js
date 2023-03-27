import { useContext } from 'react';
import SaveContext from '../../../context/SaveContext';

const Ekhtiyari = (props) => {
  const { btnClicked, HoverEv, HoverC, hoverV } = useContext(SaveContext);

  const ekhtiyari = [
    {
      id: 'defa',
      name: 'معارف دفاع مقدس(الزامی)',
      r_name: [''],
      vhd: 2,
    },
    {
      id: 'azmadelec',
      name: 'آزمایشگاه مدارهاي الکتریکی',
      r_name: ['(مدارهای الکتریکی)'],
      vhd: 1,
    },
    {
      id: 'az-narmafzar',
      name: 'آزمایشگاه مهندسی نرم افزار',
      r_name: ['(تحلیل و طراحی سیستمها)'],
      vhd: 1,
    },
    {
      id: 'az-data',
      name: 'آزمایشگاه پایگاه داده',
      r_name: ['(پایگاه داده)'],
      vhd: 1,
    },
    {
      id: 'karkah-matlab',
      name: 'کارگاه برنامه نویسی متلب',
      r_name: ['(سیگنال ها و سیستم ها)'],
      vhd: 1,
    },
    {
      id: 'dorosvije1',
      name: 'مباحث ویژه 1',
      r_name: [''],
      vhd: 3,
    },
    {
      id: 'dorosvije2',
      name: 'مباحث ویژه 2',
      r_name: [''],
      vhd: 3,
    },
    {
      id: 'osoletlaat',
      name: 'اصول فناوري اطلاعات',
      r_name: ['تحلیل و طراحی سیستم ها'],
      vhd: 3,
    },
    {
      id: 'modiryat',
      name: 'مدیریت پروژههاي فناوري اطلاعات',
      r_name: ['تحلیل و طراحی سیستم ها'],
      vhd: 3,
    },
    {
      id: 'raneshamn',
      name: 'مبانی رایانش امن',
      r_name: ['شبکههاي کامپیوتري'],
      vhd: 3,
    },
    {
      id: 'amiyadshab',
      name: 'امنیت شبکه',
      r_name: ['شبکههاي کامپیوتري'],
      vhd: 3,
    },
    {
      id: 'hoshmoha',
      name: 'مبانی هوش محاسباتی',
      r_name: ['برنامهسازي پیشرفته'],
      vhd: 3,
    },
    {
      id: 'algopish',
      name: 'الگوریتمهاي پیشرفته',
      r_name: ['طراحی الگوریتمها'],
      vhd: 3,
    },
    {
      id: 'tarashibazi',
      name: 'طراحی بازيهاي کامپیوتري',
      r_name: ['برنامهسازي پیشرفته'],
      vhd: 3,
    },
    {
      id: 'graphiccom',
      name: 'گرافیک کامپیوتري',
      r_name: ['برنامهسازي پیشرفته'],
      vhd: 3,
    },
    {
      id: 'piyadsys',
      name: 'پیادهسازي سیستم پایگاه داده',
      r_name: ['پایگاه داده'],
      vhd: 3,
    },
    {
      id: 'dadekavi',
      name: 'مبانی داده کاوي',
      r_name: ['ساختمانهاي داده', 'پایگاه داده'],
      vhd: 3,
    },
  ];
  // THE FUNCTIONS

  return (
    <div
      dir="rtl"
      className="flex landscape:flex-row flex-col animate-fadein gap-5 h-full mb-28 "
    >
      <div className="bg-slate-800 rounded flex flex-col relative">
        <div className="col-span-5 rounded text-center bg-black text-white text-xl p-3">
          توضیحات
        </div>
        <div className="grid col-span-5 btnfont text-xl justify-start text-white gap-2 p-4">
          8 واحد در کل، 2واحد باید *حتما* آز یا کارگاه باشد
          <br />
          به نسبت اینکه چطور دروس را انتخاب می کنید <br /> به یکی از این دو حالت
          باید برسید:
          <br />
          <br />
          144 اگر اختیاری به صورت یک 3 واحدی <br /> + دفاع مقدس + 3 از یا کارگاه
          <br />
          <br />
          146 اگر اختیاری به صورت دو سه واحدی <br /> + دفاع مقدس+ دو از یا
          کارگاه
          <br />
          <br />
          این جدول مخلوطی از جدول 93 و جدول
          <br />
          94 است. خودتون هم پی دی اف ها رو
          <br />
          به نظرم مطالعه کنید
        </div>
      </div>

      {/* first table */}
      <div className="bg-slate-800 rounded flex flex-col relative">
        <div
          id="hoverMouse1"
          className="hidden landscape:inline-flex absolute flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-48 w-[10rem] z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={ekhtiyari}></HoverC>
        </div>

        {/* the content */}

        <div className="grid grid-cols-5 items-center rounded-t text-white bg-black content-center p-3">
          <div className="col-span-4 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>
        <div className="grid grid-cols-5 ">
          <div
            id="1t"
            className="col-span-5 grid grid-cols-5 content-center text-white gap-2 p-4 "
          >
            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[0].id}`}
            >
              {ekhtiyari[0].name}
            </button>
            <p
              id={`b${ekhtiyari[0].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[0].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[1].id}`}
            >
              {ekhtiyari[1].name}
            </button>
            <p
              id={`b${ekhtiyari[1].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[1].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[2].id}`}
            >
              {ekhtiyari[2].name}
            </button>
            <p
              id={`b${ekhtiyari[2].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[2].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[3].id}`}
            >
              {ekhtiyari[3].name}
            </button>
            <p
              id={`b${ekhtiyari[3].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[3].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[4].id}`}
            >
              {ekhtiyari[4].name}
            </button>
            <p
              id={`b${ekhtiyari[4].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[4].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[5].id}`}
            >
              {ekhtiyari[5].name}
            </button>
            <p
              id={`b${ekhtiyari[5].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[5].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[6].id}`}
            >
              {ekhtiyari[6].name}
            </button>
            <p
              id={`b${ekhtiyari[6].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[6].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[7].id}`}
            >
              {ekhtiyari[7].name}
            </button>
            <p
              id={`b${ekhtiyari[7].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[7].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[8].id}`}
            >
              {ekhtiyari[8].name}
            </button>
            <p
              id={`b${ekhtiyari[8].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[8].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[9].id}`}
            >
              {ekhtiyari[9].name}
            </button>
            <p
              id={`b${ekhtiyari[9].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[9].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[10].id}`}
            >
              {ekhtiyari[10].name}
            </button>
            <p
              id={`b${ekhtiyari[10].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[10].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[11].id}`}
            >
              {ekhtiyari[11].name}
            </button>
            <p
              id={`b${ekhtiyari[11].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[11].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[12].id}`}
            >
              {ekhtiyari[12].name}
            </button>
            <p
              id={`b${ekhtiyari[12].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[12].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[13].id}`}
            >
              {ekhtiyari[13].name}
            </button>
            <p
              id={`b${ekhtiyari[13].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[13].vhd}
            </p>

            <button
              onClick={btnClicked}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[14].id}`}
            >
              {ekhtiyari[14].name}
            </button>
            <p
              id={`b${ekhtiyari[14].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[14].vhd}
            </p>

            <button
              onClick={btnClicked}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[15].id}`}
            >
              {ekhtiyari[15].name}
            </button>
            <p
              id={`b${ekhtiyari[15].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {ekhtiyari[15].vhd}
            </p>

            <button
              onClick={btnClicked}
              className="rounded col-span-4 block text-center z-20 p-1 cursor-pointer"
              id={`${ekhtiyari[16].id}`}
            >
              {ekhtiyari[16].name}
            </button>
            <p
              id={`b${ekhtiyari[16].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3"
            >
              {ekhtiyari[16].vhd}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ekhtiyari;
