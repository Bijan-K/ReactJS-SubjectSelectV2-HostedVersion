import { useContext } from 'react';
import SaveContext from '../../../context/SaveContext';

const Omomi = (props) => {
  const { btnClicked, HoverEv, HoverC, hoverV } = useContext(SaveContext);

  const Mabani = [
    {
      id: 'and1',
      name: 'اندیشه اسلامی1',
      vhd: 2,
    },
    {
      id: 'and2',
      name: 'اندیشه اسلامی2',
      vhd: 2,
      r_name: ['اندیشه اسلامی1'],
    },
    {
      id: 'ensan',
      name: 'انسان در اسلام',
      vhd: 2,
    },
    {
      id: 'hogh',
      name: 'حقوق اجتماعی و سیاسی اسلام',
      vhd: 2,
    },
  ];
  const Akhlagh = [
    {
      id: 'fal',
      name: 'فلسفه اخلاق',
      vhd: 2,
    },
    {
      id: 'akh',
      name: 'اخلاق اسلامی',
      vhd: 2,
    },
    {
      id: 'ayin',
      name: 'آئین زندگی',
      vhd: 2,
    },
    {
      id: 'erfan',
      name: 'عرفان عملی اسلامی',
      vhd: 2,
    },
  ];
  const Ashnayi = [
    {
      id: 'tafsir-q',
      name: 'تفسیر موضوعی قرآن ',
      vhd: 2,
    },
    {
      id: 'tafsir-n',
      name: 'تفسیر موضوعی نهج البلاغه',
      vhd: 2,
    },
  ];
  const Tarikh = [
    {
      id: 'emam',
      name: 'تاریخ امامت',
      vhd: 2,
    },
    {
      id: 'tarikhtahlil',
      name: 'تاریخ تحلیلی صدر اسلام',
      vhd: 2,
    },
  ];
  const Farhang = [
    {
      id: 'tarikh',
      name: 'تاریخ فرهنگ و تمدن اسلامی',
      vhd: 2,
    },
  ];
  const Danesh = [
    {
      id: 'danesh',
      name: 'دانش خانواده و جمعیت',
      vhd: 2,
    },
  ];
  const Enghlab = [
    {
      id: 'englab',
      name: 'انقلاب اسلامی ایران',
      vhd: 2,
    },
    {
      id: 'ashnayi',
      name: 'آشنایی با قانون اساسی',
      vhd: 2,
    },
    {
      id: 'andishe',
      name: 'اندیشه سیاسی امام خمینی',
      vhd: 2,
    },
  ];
  const Koliha = [
    {
      id: 'fa',
      name: 'زبان فارسی',
      vhd: 3,
    },
    {
      id: 'eng',
      name: 'زبان انگلیسی',
      vhd: 3,
    },
    {
      id: 'tar1',
      name: 'تربیت بدنی 1',
      vhd: 1,
    },
    {
      id: 'tar2',
      name: 'تربیت بدنی 2',
      r_name: ['تربیت بدنی 1'],
      vhd: 1,
    },
  ];

  const jadaval2 = [
    {
      id: 'emamkho',
      name: 'اندیشه ها و وصایای امام خمینی',
      vhd: 1,
    },
    {
      id: 'quran',
      name: 'انس با قران',
      vhd: 1,
    },
  ];

  return (
    <div
      dir="rtl"
      className="landscape:grid landscape:grid-cols-2  flex flex-col animate-fadein gap-5 mx-8"
    >
      {/* first table */}
      <div className="bg-slate-800 rounded flex flex-col relative pb-2">
        <div
          id="hoverMouse1"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Mabani}></HoverC>
        </div>
        <div className="bg-black p-1 text-center">مبانی نظری اسلام | 2 درس</div>
        {/* the content */}
        <div className="grid grid-cols-3 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center mr-1">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div
          id="1t"
          className="grid grid-cols-3 content-center text-white gap-3 mt-2"
        >
          {/* the thing */}

          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Mabani[0].id}`}
          >
            {Mabani[0].name}
          </button>
          <p
            id={`b${Mabani[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Mabani[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Mabani[1].id}`}
          >
            {Mabani[1].name}
          </button>

          <p
            id={`b${Mabani[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Mabani[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Mabani[2].id}`}
          >
            {Mabani[2].name}
          </button>
          <p
            id={`b${Mabani[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Mabani[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Mabani[3].id}`}
          >
            {Mabani[3].name}
          </button>
          <p
            id={`b${Mabani[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3"
          >
            {Mabani[3].vhd}
          </p>
        </div>
      </div>
      {/* second table */}
      <div className="bg-slate-800 rounded flex flex-col relative pb-2">
        <div
          id="hoverMouse2"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Akhlagh}></HoverC>
        </div>
        <div className="bg-black p-1 text-center"> اخلاق اسلامی | 1 درس</div>
        {/* the content */}
        <div className="grid grid-cols-3 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div
          id="2t"
          className="grid grid-cols-3 content-center text-white gap-2 mt-2"
        >
          {/* the thing */}
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Akhlagh[0].id}`}
          >
            {Akhlagh[0].name}
          </button>
          <p
            id={`b${Akhlagh[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Akhlagh[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Akhlagh[1].id}`}
          >
            {Akhlagh[1].name}
          </button>

          <p
            id={`b${Akhlagh[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Akhlagh[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Akhlagh[2].id}`}
          >
            {Akhlagh[2].name}
          </button>
          <p
            id={`b${Akhlagh[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Akhlagh[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Akhlagh[3].id}`}
          >
            {Akhlagh[3].name}
          </button>
          <p
            id={`b${Akhlagh[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3"
          >
            {Akhlagh[3].vhd}
          </p>
        </div>
      </div>
      {/* third table */}
      <div className="bg-slate-800 rounded flex flex-col relative pb-2">
        {/* the content */}
        <div className="bg-black p-1 text-center">
          آشنایی با مبانی اسلامی | 1 درس
        </div>
        <div className="grid grid-cols-3 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>
        <div className="grid grid-cols-3 content-center text-white gap-2 mt-2">
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Ashnayi[0].id}`}
          >
            {Ashnayi[0].name}
          </button>
          <p
            id={`b${Ashnayi[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Ashnayi[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Ashnayi[1].id}`}
          >
            {Ashnayi[1].name}
          </button>

          <p
            id={`b${Ashnayi[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Ashnayi[1].vhd}
          </p>
        </div>
      </div>
      {/* forth table */}
      <div className="bg-slate-800 rounded flex flex-col relative pb-2">
        {/* the content */}
        <div className="bg-black p-1 text-center">
          تاریخ و تمدن اسلامی | 1 درس
        </div>
        <div className="grid grid-cols-3 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div className="grid grid-cols-3 content-center text-white gap-2 mt-2">
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Tarikh[0].id}`}
          >
            {Tarikh[0].name}
          </button>
          <p
            id={`b${Tarikh[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Tarikh[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Tarikh[1].id}`}
          >
            {Tarikh[1].name}
          </button>

          <p
            id={`b${Tarikh[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Tarikh[1].vhd}
          </p>
        </div>
      </div>
      {/* Fith table */}
      <div className="bg-slate-800 rounded flex flex-col relative mb-auto pb-2">
        <div className="bg-black p-1 text-center">
          {' '}
          تاریخ فرهنگ و تمدن اسلام و ایران | 1 درس
        </div>
        {/* the content */}
        <div className="grid grid-cols-3 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div className="grid grid-cols-3 content-center text-white gap-2 mt-2">
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Farhang[0].id}`}
          >
            {Farhang[0].name}
          </button>
          <p
            id={`b${Farhang[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Farhang[0].vhd}
          </p>
        </div>
      </div>
      {/* sixth table */}
      <div className="bg-slate-800 rounded flex flex-col relative mb-auto pb-2">
        {/* the content */}
        <div className="bg-black p-1 text-center">
          {' '}
          دانش خانواده و جمعیت | 1 درس
        </div>
        <div className="grid grid-cols-3 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div className="grid grid-cols-3 content-center text-white gap-2 mt-2">
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Danesh[0].id}`}
          >
            {Danesh[0].name}
          </button>
          <p
            id={`b${Danesh[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Danesh[0].vhd}
          </p>
        </div>
      </div>
      {/* seven table */}
      <div className="bg-slate-800 rounded flex flex-col relative pb-2 ">
        {/* the content */}
        <div className="bg-black p-1 text-center">
          {' '}
          آشنایی با مبانی اسلامی | 1 درس
        </div>
        <div className="grid grid-cols-3 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div className="grid grid-cols-3 content-center text-white gap-2 mt-2">
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Enghlab[0].id}`}
          >
            {Enghlab[0].name}
          </button>
          <p
            id={`b${Enghlab[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Enghlab[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Enghlab[1].id}`}
          >
            {Enghlab[1].name}
          </button>

          <p
            id={`b${Enghlab[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Enghlab[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Enghlab[2].id}`}
          >
            {Enghlab[2].name}
          </button>

          <p
            id={`b${Enghlab[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Enghlab[2].vhd}
          </p>
        </div>
      </div>
      {/* eigth Table */}
      <div className="bg-slate-800 rounded flex flex-col relative mb-auto pb-2">
        <div
          id="hoverMouse6"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded "
        >
          <HoverC id={hoverV} table={Koliha}></HoverC>
        </div>
        <div className="bg-black p-1 text-center">هر 4 درس الزامی هستند</div>
        {/* the content */}
        <div className="grid grid-cols-3 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div
          id="6t"
          className="grid grid-cols-3 content-center text-white gap-2 pb-3 mt-2"
        >
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Koliha[0].id}`}
          >
            {Koliha[0].name}
          </button>
          <p
            id={`b${Koliha[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Koliha[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Koliha[1].id}`}
          >
            {Koliha[1].name}
          </button>

          <p
            id={`b${Koliha[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Koliha[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Koliha[2].id}`}
          >
            {Koliha[2].name}
          </button>
          <p
            id={`b${Koliha[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Koliha[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${Koliha[3].id}`}
          >
            {Koliha[3].name}
          </button>
          <p
            id={`b${Koliha[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3"
          >
            {Koliha[3].vhd}
          </p>
        </div>
      </div>
      {/* ninith Table */}
      <div className="bg-slate-800 rounded flex flex-col relative mb-5 pb-2">
        {/* the content */}
        <div className="bg-black p-1 text-center">
          دیگر معارف های الزامی | 2 درس
        </div>
        <div className="grid grid-cols-3 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>
        <div className="grid grid-cols-3 content-center text-white gap-2 mt-2">
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${jadaval2[0].id}`}
          >
            {jadaval2[0].name}
          </button>
          <p
            id={`b${jadaval2[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {jadaval2[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer mr-2"
            id={`${jadaval2[1].id}`}
          >
            {jadaval2[1].name}
          </button>

          <p
            id={`b${jadaval2[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {jadaval2[1].vhd}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Omomi;
