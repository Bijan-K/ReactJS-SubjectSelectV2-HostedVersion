import { useContext } from 'react';
import SaveContext from '../../../context/SaveContext';

const Ekhtesasi = (props) => {
  const { btnClicked, HoverEv, HoverC, hoverV } = useContext(SaveContext);

  const Paye = [
    {
      id: 'rz1',
      name: 'ریاضی عمومی  1',
      r_name: '',
      vhd: 3,
    },
    {
      id: 'rz2',
      name: 'ریاضی عمومی 2',
      r_name: ['ریاضی عمومی 1'],
      vhd: 3,
    },
    {
      id: 'fz1',
      name: 'فیزیک 1',
      r_name: '',
      vhd: 3,
    },
    {
      id: 'fz2',
      name: 'فیزیک 2',
      r_name: ['ریاضی 1'],
      vhd: 3,
    },
    {
      id: 'amar',
      name: 'آمار و احتمالات مهندسی',
      r_name: ['ریاضی عمومی 2'],
      vhd: 3,
    },
    {
      id: 'dif',
      name: 'معادلات دیفرانسیل',
      r_name: ['ریاضی عمومی 1'],
      vhd: 3,
    },
    {
      id: 'kargha-com',
      name: 'کارگاه کامپیوتر',
      r_name: ['مبانی کامپیوتر و برنامه سازي'],
      vhd: 1,
    },
    {
      id: 'az-fz2',
      name: 'آزمایشگاه فیزیک 2',
      r_name: ['فیزیک 2'],
      vhd: 1,
    },
  ];
  const Tamarkoz = [
    {
      id: 'tamol',
      name: 'تعامل انسان و کامپیوتر',
      r_name: ['تحلیل و طراحی سیستم ها'],
      vhd: 3,
    },
    {
      id: 'azmon-narm',
      name: 'آزمون نرم افزار',
      r_name: ['تحلیل و طراحی سیستم ها'],
      vhd: 3,
    },
    {
      id: 'ravesh-rasmi',
      name: 'روشهاي رسمی در مهندسی نرم افزار',
      r_name: ['تحلیل و طراحی سیستم ها'],
      vhd: 3,
    },
    {
      id: 'objector',
      name: 'طراحی شی گراي سیستم ها',
      r_name: ['برنامه سازي پیشرفته'],
      vhd: 3,
    },
  ];
  const tamarkozAI = [
    {
      id: 'hoshmoha',
      name: 'مبانی هوش محاسباتی',
      r_name: ['برنامه سازي پیشرفته'],
      vhd: 3,
    },
    {
      id: 'mbnbinayi',
      name: 'مبانی بینایی کامپیوتر',
      r_name: ['مبانی هوش محاسباتی'],
      vhd: 3,
    },
    {
      id: 'mbnpardazesh',
      name: 'مبانی پردازش زبان و گفتار',
      r_name: ['آمار و احتمال مهندسی', 'سیگنال ها و سیستم ها'],
      vhd: 3,
    },
    {
      id: 'osolrobot',
      name: 'اصول رباتیکز',
      r_name: ['سیگنال ها و سیستم ها'],
      vhd: 3,
    },
  ];
  const Takhsosi = [
    {
      id: 'tahlil-sys',
      name: 'تحلیل و طراحی سیستم ها',
      r_name: ['برنامه سازي پیشرفته'],
      vhd: 3,
    },
    {
      id: 'pdata',
      name: 'پایگاه داده ها',
      r_name: ['ساختمان هاي داده'],
      vhd: 3,
    },
    {
      id: 'trahi-zaban',
      name: 'طراحی زبان هاي برنامه سازي',
      r_name: ['اصول طراحی کامپایلر'],
      vhd: 3,
    },
    {
      id: 'moh-narm',
      name: 'مهندسی نرم افزار',
      r_name: ['تحلیل و طراحی سیستم ها'],
      vhd: 3,
    },
    {
      id: 'moh-net',
      name: 'مهندسی اینترنت',
      r_name: ['شبکه هاي کامپیوتري', '(پایگاه داده ها)'],
      vhd: 3,
    },
    {
      id: 'karamozi',
      name: 'کارآموزي',
      r_name: ['80 واحد'],
      vhd: 1,
    },
    {
      id: 'proj',
      name: 'پروژه نرم افزار',
      r_name: ['100 واحد'],
      vhd: 3,
    },
  ];
  const Asli1 = [
    {
      id: 'mbn',
      name: 'مبانی کامپیوتر و برنامه سازي',
      r_name: '',
      vhd: 3,
    },
    {
      id: 'mad_elc',
      name: 'مدارهاي الکتریکی',
      r_name: ['معادلات دیفرانسیل'],
      vhd: 3,
    },
    {
      id: 'gos',
      name: 'ریاضیات گسسته',
      r_name: ['(ریاضی عمومی 1)', '(مبانی کامپیوتر و برنامه سازي)'],
      vhd: 3,
    },
    {
      id: 'pish',
      name: 'برنامه سازي پیشرفته',
      r_name: ['مبانی کامپیوتر و برنامه سازي'],
      vhd: 3,
    },
    {
      id: 'sdata',
      name: 'ساختمان هاي داده',
      r_name: ['ریاضیات گسسته', 'برنامه سازي پیشرفته'],
      vhd: 3,
    },
    {
      id: 'mad_man',
      name: 'مدارهاي منطقی',
      r_name: ['(ریاضیات گسسته)'],
      vhd: 3,
    },
    {
      id: 'nazar',
      name: 'نظریه زبان ها و ماشین ها',
      r_name: ['ساختمان هاي داده'],
      vhd: 3,
    },
    {
      id: 'engt',
      name: 'زبان تخصصی',
      r_name: ['زبان انگلیسی'],
      vhd: 2,
    },
    {
      id: 'ravesh',
      name: 'روش پژوهش و ارائه',
      r_name: ['زبان تخصصی'],
      vhd: 2,
    },
    {
      id: 'moh',
      name: 'ریاضیات مهندسی',
      r_name: ['ریاضی عمومی 2', 'معادلات دیفرانسیل'],
      vhd: 3,
    },
    {
      id: 'memar',
      name: 'معماري کامپیوتر',
      r_name: ['مدارهاي منطقی'],
      vhd: 3,
    },
    {
      id: 'sys-amel',
      name: 'سیستم هاي عامل',
      r_name: ['ساختمان هاي داده', 'معماري کامپیوتر'],
      vhd: 3,
    },
    {
      id: 'algo',
      name: 'طراحی الگوریتم ها',
      r_name: ['ساختمان هاي داده'],
      vhd: 3,
    },
    {
      id: 'tarhsystem',
      name: 'طراحی کامپیوتری سیستم های دیجیتال',
      r_name: ['معماري کامپیوتر'],
      vhd: 3,
    },
    {
      id: 'signal',
      name: 'سیگنال ها و سیستم ها',
      r_name: ['ریاضیات مهندسی'],
      vhd: 3,
    },
    {
      id: 'rizpar',
      name: 'ریز پردازنده و زبان اسمبلی',
      r_name: ['معماري کامپیوتر'],
      vhd: 3,
    },
    {
      id: 'shabake',
      name: 'شبکههاي کامپیوتري',
      r_name: ['سیستمهاي عامل'],
      vhd: 3,
    },
    {
      id: 'ai-sys',
      name: 'هوش مصنوعی و سیستم هاي خبره',
      r_name: ['ساختمان هاي داده'],
      vhd: 3,
    },
    {
      id: 'osolcomplier',
      name: 'اصول طراحی کامپایلر',
      r_name: ['ساختمان هاي داده'],
      vhd: 3,
    },
    {
      id: 'az-sys-amel',
      name: 'آزمایشگاه سیستم هاي عامل',
      r_name: ['(سیستمهاي عامل)'],
      vhd: 1,
    },
    {
      id: 'az-man-memari',
      name: 'از مدار منطقی و معماری کامپیوتر',
      r_name: ['مدارهاي منطقی', '(معماري کامپیوتر)'],
      vhd: 1,
    },
    {
      id: 'az-rizpar',
      name: 'آزمایشگاه ریزپردازنده',
      r_name: ['ریزپردازنده و زبان اسمبلی'],
      vhd: 1,
    },
    {
      id: 'az-shabake',
      name: 'آزمایشگاه شبکه هاي کامپیوتري',
      r_name: ['(شبکه هاي کامپیوتري)'],
      vhd: 1,
    },
  ];

  return (
    <div className="landscape:grid landscape:grid-cols-3 gap-5 flex flex-col m-2 animate-fadein">
      {/* first table */}
      <div className="bg-slate-800 col-start-1 row-start-1 row-end-3 rounded flex flex-col relative mb-auto">
        <div
          id="hoverMouse1"
          className="hidden landscape:inline-flex absolute flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-48 w-40 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Asli1}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          دروس اصلی
        </div>
        <div className=" grid grid-cols-6 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-5 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>
        <div
          id="1t"
          className="grid grid-cols-6 content-center text-white gap-2 p-2"
        >
          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[0].id}`}
          >
            {Asli1[0].name}
          </button>
          <p
            id={`b${Asli1[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[1].id}`}
          >
            {Asli1[1].name}
          </button>
          <p
            id={`b${Asli1[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[2].id}`}
          >
            {Asli1[2].name}
          </button>
          <p
            id={`b${Asli1[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[3].id}`}
          >
            {Asli1[3].name}
          </button>
          <p
            id={`b${Asli1[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[3].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[4].id}`}
          >
            {Asli1[4].name}
          </button>
          <p
            id={`b${Asli1[4].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[4].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[5].id}`}
          >
            {Asli1[5].name}
          </button>
          <p
            id={`b${Asli1[5].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[5].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[6].id}`}
          >
            {Asli1[6].name}
          </button>
          <p
            id={`b${Asli1[6].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[6].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[7].id}`}
          >
            {Asli1[7].name}
          </button>
          <p
            id={`b${Asli1[7].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[7].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[8].id}`}
          >
            {Asli1[8].name}
          </button>
          <p
            id={`b${Asli1[8].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[8].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[9].id}`}
          >
            {Asli1[9].name}
          </button>
          <p
            id={`b${Asli1[9].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[9].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[10].id}`}
          >
            {Asli1[10].name}
          </button>
          <p
            id={`b${Asli1[10].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[10].vhd}
          </p>
        </div>
      </div>
      {/* 2nd table */}
      <div className="bg-slate-800 col-start-1 row-start-2  landscape:mt-32 rounded flex flex-col relative mb-auto">
        <div
          id="hoverMouse9"
          className="hidden landscape:inline-flex absolute flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-48 w-40 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Asli1}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          ادامه دروس اصلی
        </div>
        <div className=" grid grid-cols-6 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-5 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>
        <div
          id="9t"
          className="grid grid-cols-6 content-center text-white gap-2 p-2"
        >
          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[11].id}`}
          >
            {Asli1[11].name}
          </button>
          <p
            id={`b${Asli1[11].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[11].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[12].id}`}
          >
            {Asli1[12].name}
          </button>
          <p
            id={`b${Asli1[12].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[12].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[13].id}`}
          >
            {Asli1[13].name}
          </button>
          <p
            id={`b${Asli1[13].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[13].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[14].id}`}
          >
            {Asli1[14].name}
          </button>
          <p
            id={`b${Asli1[14].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[14].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[15].id}`}
          >
            {Asli1[15].name}
          </button>
          <p
            id={`b${Asli1[15].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[15].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[16].id}`}
          >
            {Asli1[16].name}
          </button>
          <p
            id={`b${Asli1[16].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[16].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[17].id}`}
          >
            {Asli1[17].name}
          </button>
          <p
            id={`b${Asli1[17].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[17].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[18].id}`}
          >
            {Asli1[18].name}
          </button>
          <p
            id={`b${Asli1[18].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[18].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[19].id}`}
          >
            {Asli1[19].name}
          </button>
          <p
            id={`b${Asli1[19].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[19].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[20].id}`}
          >
            {Asli1[20].name}
          </button>
          <p
            id={`b${Asli1[20].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[20].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[21].id}`}
          >
            {Asli1[21].name}
          </button>
          <p
            id={`b${Asli1[21].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[21].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Asli1[22].id}`}
          >
            {Asli1[22].name}
          </button>
          <p
            id={`b${Asli1[22].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Asli1[22].vhd}
          </p>
        </div>
      </div>
      {/* third table */}
      <div className="bg-slate-800 col-start-2 row-start-1 row-end-2 rounded flex flex-col relative mb-auto">
        <div
          id="hoverMouse3"
          className="hidden landscape:inline-flex absolute flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-48 w-40 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Paye}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          دروس پایه
        </div>
        <div className=" grid grid-cols-6 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-5 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>
        <div
          id="3t"
          className="grid grid-cols-6 content-center text-white gap-2 p-2"
        >
          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Paye[0].id}`}
          >
            {Paye[0].name}
          </button>
          <p
            id={`b${Paye[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Paye[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Paye[1].id}`}
          >
            {Paye[1].name}
          </button>
          <p
            id={`b${Paye[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Paye[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Paye[2].id}`}
          >
            {Paye[2].name}
          </button>
          <p
            id={`b${Paye[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Paye[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Paye[3].id}`}
          >
            {Paye[3].name}
          </button>
          <p
            id={`b${Paye[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Paye[3].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Paye[4].id}`}
          >
            {Paye[4].name}
          </button>
          <p
            id={`b${Paye[4].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Paye[4].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Paye[5].id}`}
          >
            {Paye[5].name}
          </button>
          <p
            id={`b${Paye[5].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Paye[5].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Paye[6].id}`}
          >
            {Paye[6].name}
          </button>
          <p
            id={`b${Paye[6].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Paye[6].vhd}
          </p>
          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Paye[7].id}`}
          >
            {Paye[7].name}
          </button>
          <p
            id={`b${Paye[7].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Paye[7].vhd}
          </p>
        </div>
      </div>

      {/* forth table */}
      <div className="bg-slate-800 col-start-2 row-start-2 row-end-3 rounded flex flex-col relative mb-auto">
        <div
          id="hoverMouse4"
          className="hidden landscape:inline-flex absolute flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-48 w-40 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Takhsosi}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          درس هاي تخصصی گرایش نرم افزار
        </div>
        <div className=" grid grid-cols-6 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-5 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>
        <div
          id="4t"
          className="grid grid-cols-6 content-center text-white gap-2 p-2"
        >
          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Takhsosi[0].id}`}
          >
            {Takhsosi[0].name}
          </button>
          <p
            id={`b${Takhsosi[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Takhsosi[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Takhsosi[1].id}`}
          >
            {Takhsosi[1].name}
          </button>
          <p
            id={`b${Takhsosi[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Takhsosi[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Takhsosi[2].id}`}
          >
            {Takhsosi[2].name}
          </button>
          <p
            id={`b${Takhsosi[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Takhsosi[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Takhsosi[3].id}`}
          >
            {Takhsosi[3].name}
          </button>
          <p
            id={`b${Takhsosi[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Takhsosi[3].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Takhsosi[4].id}`}
          >
            {Takhsosi[4].name}
          </button>
          <p
            id={`b${Takhsosi[4].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Takhsosi[4].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Takhsosi[5].id}`}
          >
            {Takhsosi[5].name}
          </button>
          <p
            id={`b${Takhsosi[5].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Takhsosi[5].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Takhsosi[6].id}`}
          >
            {Takhsosi[6].name}
          </button>
          <p
            id={`b${Takhsosi[6].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Takhsosi[6].vhd}
          </p>
        </div>
      </div>

      {/* fifth table */}
      <div className="bg-slate-700 p-5 col-start-3 row-start-1 row-end-3 rounded flex flex-col relative mb-auto ">
        <div className="text-center">
          انگار که از بین این دوتا <br></br> باید نرم افزار رو برداریم
        </div>
        {/* narm */}
        <div className="bg-slate-800  col-start-3 row-start-1 rounded flex flex-col relative m-2 ">
          <div
            id="hoverMouse5"
            className="hidden landscape:inline-flex absolute flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-48 w-40 z-30 bg-slate-800 left-0 rounded"
          >
            <HoverC id={hoverV} table={Tamarkoz}></HoverC>
          </div>

          {/* the content */}
          <div className=" text-center rounded-t text-white bg-black p-1">
            درس هاي تمرکز تخصصی اختیاري <br></br> سیستم هاي نرم افزاري
          </div>
          <div className=" grid grid-cols-6 items-center rounded-t text-white bg-black content-center p-1">
            <div className="col-span-5 text-center">درس</div>
            <div className="col-span-1 text-center">واحد</div>
          </div>
          <div
            id="5t"
            className="grid grid-cols-6 content-center text-white gap-2 p-2"
          >
            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
              id={`${Tamarkoz[0].id}`}
            >
              {Tamarkoz[0].name}
            </button>
            <p
              id={`b${Tamarkoz[0].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {Tamarkoz[0].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
              id={`${Tamarkoz[1].id}`}
            >
              {Tamarkoz[1].name}
            </button>
            <p
              id={`b${Tamarkoz[1].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {Tamarkoz[1].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
              id={`${Tamarkoz[2].id}`}
            >
              {Tamarkoz[2].name}
            </button>
            <p
              id={`b${Tamarkoz[2].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {Tamarkoz[2].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
              id={`${Tamarkoz[3].id}`}
            >
              {Tamarkoz[3].name}
            </button>
            <p
              id={`b${Tamarkoz[3].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {Tamarkoz[3].vhd}
            </p>
          </div>
        </div>
        {/* AI */}
        <div className="bg-slate-800  col-start-3 row-start-1 rounded flex flex-col relative m-2 ">
          <div
            id="hoverMouse8"
            className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-48 w-40 z-30 bg-slate-800 left-0 rounded"
          >
            <HoverC id={hoverV} table={tamarkozAI}></HoverC>
          </div>

          {/* the content */}
          <div className=" text-center rounded-t text-white bg-black p-1">
            درس هاي تمرکز تخصصی اختیاري <br></br> هوش مصنوعی{' '}
          </div>
          <div className=" grid grid-cols-6 items-center rounded-t text-white bg-black content-center p-1">
            <div className="col-span-5 text-center">درس</div>
            <div className="col-span-1 text-center">واحد</div>
          </div>
          <div
            id="8t"
            className="grid grid-cols-6 content-center text-white gap-2 p-2"
          >
            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
              id={`${tamarkozAI[0].id}`}
            >
              {tamarkozAI[0].name}
            </button>
            <p
              id={`b${tamarkozAI[0].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {tamarkozAI[0].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
              id={`${tamarkozAI[1].id}`}
            >
              {tamarkozAI[1].name}
            </button>
            <p
              id={`b${tamarkozAI[1].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {tamarkozAI[1].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
              id={`${tamarkozAI[2].id}`}
            >
              {tamarkozAI[2].name}
            </button>
            <p
              id={`b${tamarkozAI[2].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {tamarkozAI[2].vhd}
            </p>

            <button
              onClick={btnClicked}
              onMouseEnter={HoverEv}
              onMouseLeave={HoverEv}
              className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
              id={`${tamarkozAI[3].id}`}
            >
              {tamarkozAI[3].name}
            </button>
            <p
              id={`b${tamarkozAI[3].id}`}
              className="rounded col-span-1 p-1 place-self-center text-center px-3 "
            >
              {tamarkozAI[3].vhd}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ekhtesasi;
