import { useEffect, useState } from 'react';

const DefaultSchedule = (props) => {
  const [hoverV, setHoverV] = useState('');
  const [btnclick, setbtnclick] = useState(0);
  // data points

  const Term1 = [
    {
      id: 'rz1',
      name: ' ریاضی عمومی 1',
      r_name: ['_'],
      vhd: 3,
    },
    {
      id: 'fz1',
      name: 'فیزیک 1',
      r_name: ['_'],
      vhd: 3,
    },
    {
      id: 'mbn',
      name: 'مبانی کامپیوتر و برنامهسازي',
      r_name: ['_'],
      vhd: 3,
    },
    {
      id: 'eng',
      name: 'زبان انگلیسی',
      r_name: ['_'],
      vhd: 2,
    },
    {
      id: 'fa',
      name: 'زبان فارسی',
      r_name: ['_'],
      vhd: 2,
    },
    {
      id: 'omom1',
      name: 'عمومی',
      r_name: ['_'],
      vhd: 2,
    },
  ];
  const Term2 = [
    {
      id: 'rz2',
      name: 'ریاضی عمومی 2',
      r_name: [' ریاضی عمومی 1'],
      vhd: 3,
    },
    {
      id: 'fz2',
      name: 'فیزیک 2',
      r_name: ['ریاضی عمومی 1'],
      vhd: 3,
    },
    {
      id: 'dif',
      name: 'معادلات دیفرانسیل',
      r_name: ['ریاضی عمومی 1'],
      vhd: 3,
    },
    {
      id: 'gos',
      name: 'ریاضیات گسسته',
      r_name: ['ریاضی عمومی 1', 'مبانی کامپیوتر'],
      vhd: 3,
    },
    {
      id: 'pish',
      name: 'برنامه سازي پیشرفته',
      r_name: ['مبانی کامپیوتر'],
      vhd: 3,
    },
    {
      id: 'kargha-com',
      name: 'کارگاه کامپیوتر',
      r_name: ['مبانی کامپیوتر'],
      vhd: 1,
    },
    {
      id: 'tar1',
      name: 'تربیت بدنی 1',
      r_name: ['_'],
      vhd: 1,
    },
  ];
  const Term3 = [
    {
      id: 'moh',
      name: 'ریاضیات مهندسی',
      r_name: ['ریاضی عمومی 2', 'معادلات دیفرانسیل'],
      vhd: 3,
    },
    {
      id: 'az-fz2',
      name: 'آزفیزیک 2',
      r_name: ['فیزیک 2'],
      vhd: 1,
    },
    {
      id: 'mad_elc',
      name: 'مدارهاي الکتریکی',
      r_name: ['معادلات دیفرانسیل'],
      vhd: 3,
    },
    {
      id: 'mad_man',
      name: 'مدارهاي منطقی',
      r_name: ['(ریاضیات گسسته)'],
      vhd: 3,
    },
    {
      id: 'sdata',
      name: 'ساختمانهاي داده',
      r_name: ['ریاضیات گسسته', 'برنامهسازيپیشرفته'],
      vhd: 3,
    },
    {
      id: 'danesh',
      name: 'دانش خانواده و جمعیت',
      r_name: ['_'],
      vhd: 2,
    },
    {
      id: 'engt',
      name: 'زبان تخصصی',
      r_name: ['زبان انگلیسی'],
      vhd: 2,
    },
    {
      id: 'omom3',
      name: 'عمومی',
      r_name: '',
      vhd: 2,
    },
  ];
  const Term4 = [
    {
      id: 'pdata',
      name: 'پایگاه دادهها',
      r_name: ['ساختمانهاي داده'],
      vhd: 3,
    },
    {
      id: 'amar',
      name: 'آمار و احتمالات مهندسی',
      r_name: ['ریاضی عمومی 2'],
      vhd: 3,
    },
    {
      id: 'memar',
      name: 'معماري کامپیوتر',
      r_name: ['مدارهاي منطقی'],
      vhd: 3,
    },
    {
      id: 'nazar',
      name: 'نظریه زبانها و ماشینها',
      r_name: ['ساختمانهاي داده'],
      vhd: 3,
    },
    {
      id: 'algo',
      name: 'طراحی الگوریتمها',
      r_name: ['ساختمانهاي داده'],
      vhd: 3,
    },
    {
      id: 'az-man-memari',
      name: 'آز مدارهاي منطقی و معماري کامپیوتر',
      r_name: ['مدارهاي منطقی', '(معماري کامپیوتر)'],
      vhd: 1,
    },
    {
      id: 'omom4',
      name: 'عمومی',
      r_name: '',
      vhd: 2,
    },
  ];
  const Term5 = [
    {
      id: 'signal',
      name: 'سیگنالها و سیستمها',
      r_name: ['ریاضیات مهندسی'],
      vhd: 3,
    },
    {
      id: 'tarhsystem',
      name: 'طراحی کامپیوتري سیستمهاي دیجیتال',
      r_name: ['معماري کامپیوتر'],
      vhd: 3,
    },
    {
      id: 'sys-amel',
      name: 'سیستمهاي عامل',
      r_name: ['معماري کامپیوتر', 'ساختمانهاي داده'],
      vhd: 3,
    },
    {
      id: 'objector',
      name: 'طراحی شیگراي سیستمها',
      r_name: ['برنامه سازي پیشرفته'],
      vhd: 3,
    },
    {
      id: 'osolcomplier',
      name: 'اصول طراحی کامپایلر',
      r_name: ['ساختمانهاي داده'],
      vhd: 3,
    },
    {
      id: 'rizpar',
      name: 'ریزپردازنده و زبان اسمبلی',
      r_name: ['معماري کامپیوتر'],
      vhd: 3,
    },
  ];
  const Term6 = [
    {
      id: 'ai-sys',
      name: 'هوش مصنوعی و سیستمهاي خبره',
      r_name: ['ساختمانهاي داده'],
      vhd: 3,
    },
    {
      id: 'ravesh',
      name: 'روش پژوهش و ارائه',
      r_name: ['زبان تخصصی'],
      vhd: 3,
    },
    {
      id: 'tahlil-sys',
      name: 'تحلیل و طراحی سیستمها',
      r_name: ['برنامه سازي پیشرفته'],
      vhd: 3,
    },
    {
      id: 'shabake',
      name: 'شبکههاي کامپیوتري',
      r_name: ['سیستمهاي عامل'],
      vhd: 3,
    },
    {
      id: 'trahi-zaban',
      name: 'طراحی زبانهاي برنامه سازي',
      r_name: ['اصول طراحی کامپایلر'],
      vhd: 3,
    },
    {
      id: 'az-sys-amel',
      name: 'آز سیستمهاي عامل',
      r_name: ['(سیستمهاي عامل)'],
      vhd: 1,
    },
    {
      id: 'az-rizpar',
      name: 'آز ریزپردازنده',
      r_name: ['ریزپردازند', 'زبان اسمبلی'],
      vhd: 1,
    },
    {
      id: 'omom6',
      name: 'عمومی',
      r_name: '',
      vhd: 2,
    },
  ];
  const Term7 = [
    {
      id: 'tamol',
      name: 'تعامل انسان و کامپیوتر',
      r_name: ['تحلیل و طراحی سیستمها'],
      vhd: 3,
    },
    {
      id: 'moh-narm',
      name: 'مهندسی نرم افزار',
      r_name: ['تحلیل و طراحی سیستمها'],
      vhd: 3,
    },
    {
      id: 'moh-net',
      name: 'مهندسی اینترنت',
      r_name: ['شبکههاي کامپیوتري', 'پایگاه دادهها'],
      vhd: 3,
    },
    {
      id: 'az-shabake',
      name: 'آز شبکههاي کامپیوتري',
      r_name: ['(شبکههاي کامپیوتري)'],
      vhd: 1,
    },
    {
      id: 'ekh7',
      name: 'اختیاري',
      r_name: '',
      vhd: 3,
    },
    {
      id: 'az-ekh7',
      name: 'یک آز اختیاري',
      r_name: '',
      vhd: 1,
    },
    {
      id: 'tar2',
      name: 'تربیت بدنی 2',
      r_name: ['تربیت بدنی 1'],
      vhd: 1,
    },
    {
      id: 'omom7',
      name: 'عمومی',
      r_name: '',
      vhd: 2,
    },
  ];
  const Term8 = [
    {
      id: 'azmon-narm',
      name: 'آزمون نرم افزار',
      r_name: ['تحلیل و طراحی سیستم ها'],
      vhd: 3,
    },
    {
      id: 'ravesh-rasmi',
      name: 'روشهاي رسمی در مهندسی نرم افزار',
      r_name: ['تحلیل و طراحی سیستمها'],
      vhd: 3,
    },
    {
      id: 'ekh8',
      name: 'اختیاري',
      r_name: '',
      vhd: 3,
    },
    {
      id: 'az-ekh8',
      name: 'یک آز اختیاري',
      r_name: '',
      vhd: 1,
    },
    {
      id: 'karamozi',
      name: 'کارآموزي',
      r_name: [' 80 واحد'],
      vhd: 1,
    },
    {
      id: 'proj',
      name: 'پروژه نرم افزار',
      r_name: ['100 واحد'],
      vhd: 3,
    },
    {
      id: 'omom8',
      name: 'عمومی',
      r_name: '',
      vhd: 2,
    },
  ];

  // THE FUNCTIONS
  const HoverC = (prop) => {
    let textInfo = ['', ''];
    let Truth = [false, false, false];
    let id = prop.id;
    let mabani = prop.table;
    let save = props.Save;

    mabani.forEach((element) => {
      if (element.id == id) {
        save.forEach((element2) => {
          if (element2.id == element.id) {
            if (element2.r_state.length == 1) {
              if (element.r_name[0] == '_') {
                textInfo[0] = element.r_name[0];
                Truth[2] = true;
              } else {
                textInfo[0] = element.r_name[0];
                Truth[0] = element2.r_state[0] == true ? true : false;
                Truth[2] = element2.r_state[0] == true ? true : false;
              }
            } else if (element2.r_state.length == 2) {
              textInfo[0] = element.r_name[0];
              textInfo[1] = element.r_name[1];
              Truth[0] = element2.r_state[0] == true ? true : false;
              Truth[1] = element2.r_state[1] == true ? true : false;
              if (Truth[0] == true && Truth[1] == true) Truth[2] = true;
            }
          }
        });
      }
    });
    return (
      <>
        <div className="top-5 absolute">
          <p className="text-sm">
            {Truth[0] && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#00cc99"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}{' '}
            {textInfo[0]}
          </p>
          <br></br>
          <p className="flex text-sm">
            {textInfo[1]}
            {Truth[1] && (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#00cc99"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </p>
        </div>
        <div className="bottom-5 absolute">
          {Truth[2] && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#00cc99"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          {!Truth[2] && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#bfbfbf"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
      </>
    );
  };
  // Hoverer
  const HoverEv = (e) => {
    let p_id = e.target.parentNode.id;
    let id = e.target.id;
    p_id = p_id.charAt(0);
    const hoverer = document.getElementById(`hoverMouse${p_id}`);
    hoverer.classList.toggle('animate-slidein');
    setHoverV(id);
  };

  const btnClicked = (e) => {
    setbtnclick(btnclick + 1);
    let id = e.target.id;
    let btn = document.getElementById(id);
    let SaveNow = props.Save;
    let vhdd = document.getElementById(`b${id}`);

    // value of clicked button
    SaveNow.forEach((element) => {
      if (element.id == id) {
        if (element.state == true) {
          element.state = false;
          // SaveNow[SaveNow.length - 1].vhd -= element.vhd;
        } else if (element.state == false) {
          element.state = true;
          // SaveNow[SaveNow.length - 1].vhd += element.vhd;
        }
      }
    });
    // value of required state of that id
    SaveNow.forEach((element) => {
      if (element.r_id.length === 1) {
        if (element.r_id[0] == id) {
          element.r_state[0] = true;
        }
      } else {
        if (element.r_id[0] == id) {
          element.r_state[0] = true;
        } else if (element.r_id[1] == id) {
          element.r_state[1] = true;
        }
      }
    });

    // adding color
    if (btn.classList.contains('bg-teal-500')) {
      btn.classList.remove('bg-teal-500');
      vhdd.classList.remove('bg-teal-300');
      vhdd.classList.remove('text-black');
      // EDIT HEEEEEEEEEEEEEEEEERRRRRRRRRREEEEEEEEEEEEEEEEE

      SaveNow.forEach((element) => {
        if (element.r_state.length == 1) {
          if (element.r_id[0] == id) {
            element.r_state[0] = false;
          }
        } else if (element.r_state.length == 2) {
          if (element.r_id[0] == id) {
            element.r_state[0] = false;
          } else if (element.r_id[1] == id) {
            element.r_state[1] = false;
          }
        }
      });
    } else {
      btn.classList.add('bg-teal-500');
      vhdd.classList.add('bg-teal-300');
      vhdd.classList.add('text-black');
    }

    props.SetSave(SaveNow);
  };
  // sassaas
  useEffect(() => {
    let SaveData = props.Save;
    let vhddd = 0;
    SaveData.forEach((element) => {
      // if an id has true state
      if (element.state == true) {
        vhddd += element.vhd;
        let btn1 = document.getElementById(`${element.id}`);
        if (btn1) {
          btn1.classList.add('bg-teal-500');
          let vhdd = document.getElementById(`b${element.id}`);
          vhdd.classList.add('bg-teal-300');
          vhdd.classList.add('text-black');
        }
      } else if (element.state == false) {
        let btn1 = document.getElementById(`${element.id}`);
        if (btn1) {
          btn1.classList.remove('bg-teal-500');
          let vhdd = document.getElementById(`b${element.id}`);
          vhdd.classList.remove('bg-teal-300');
          vhdd.classList.remove('text-black');
        }
      }
      // Shadow
      if (element.r_state.length == 1) {
        if (element.r_state[0] == true) {
          let btn1 = document.getElementById(`${element.id}`);
          if (btn1) {
            btn1.classList.add('shadow-[inset_0px_0px_3px]');
            btn1.classList.add('shadow-teal-500');
          }
        } else if (element.r_state[0] == false) {
          let btn1 = document.getElementById(`${element.id}`);
          if (btn1) {
            if (element.r_id[0] != '') {
              btn1.classList.remove('shadow-[inset_0px_0px_3px]');
              btn1.classList.remove('shadow-teal-500');
              btn1.classList.remove('bg-teal-500');
              element.state = false;
            }
          }
        }
      } else if (element.r_state.length == 2) {
        if (element.r_state[0] == true && element.r_state[1] == true) {
          let btn1 = document.getElementById(`${element.id}`);
          if (btn1) {
            btn1.classList.add('shadow-[inset_0px_0px_3px]');
            btn1.classList.add('shadow-teal-500');
          }
        } else if (element.r_state[0] == false || element.r_state[1] == false) {
          let btn1 = document.getElementById(`${element.id}`);
          if (btn1) {
            btn1.classList.remove('shadow-[inset_0px_0px_3px]');
            btn1.classList.remove('shadow-teal-500');
            btn1.classList.remove('bg-teal-500');
            element.state = false;
          }
        }
      }
      SaveData[SaveData.length - 1].vhd = vhddd;
    });
    props.SetSave(SaveData);
  }, [hoverV, btnclick]);

  return (
    <div
      dir="rtl"
      id="omomi"
      className="grid grid-cols-12 animate-fadein gap-5 h h-max m-2"
    >
      {/* first table */}
      <div className="col-start-1 col-end-5 bg-slate-800 rounded flex flex-col relative">
        <div
          id="hoverMouse1"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Term1}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          Term 1{' '}
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
            id={`${Term1[0].id}`}
          >
            {Term1[0].name}
          </button>
          <p
            id={`b${Term1[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term1[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term1[1].id}`}
          >
            {Term1[1].name}
          </button>
          <p
            id={`b${Term1[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term1[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term1[2].id}`}
          >
            {Term1[2].name}
          </button>
          <p
            id={`b${Term1[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term1[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term1[3].id}`}
          >
            {Term1[3].name}
          </button>
          <p
            id={`b${Term1[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term1[3].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term1[4].id}`}
          >
            {Term1[4].name}
          </button>
          <p
            id={`b${Term1[4].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term1[4].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term1[5].id}`}
          >
            {Term1[5].name}
          </button>
          <p
            id={`b${Term1[5].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term1[5].vhd}
          </p>
        </div>
      </div>

      {/* second term */}
      <div className="col-start-5 col-end-9 bg-slate-800 rounded flex flex-col relative">
        <div
          id="hoverMouse2"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Term2}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          Term 2{' '}
        </div>
        <div className=" grid grid-cols-6 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-5 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>
        <div
          id="2t"
          className="grid grid-cols-6 content-center text-white gap-2 p-2"
        >
          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term2[0].id}`}
          >
            {Term2[0].name}
          </button>
          <p
            id={`b${Term2[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term2[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term2[1].id}`}
          >
            {Term2[1].name}
          </button>
          <p
            id={`b${Term2[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term2[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term2[2].id}`}
          >
            {Term2[2].name}
          </button>
          <p
            id={`b${Term2[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term2[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term2[3].id}`}
          >
            {Term2[3].name}
          </button>
          <p
            id={`b${Term2[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term2[3].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term2[4].id}`}
          >
            {Term2[4].name}
          </button>
          <p
            id={`b${Term2[4].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term2[4].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term2[5].id}`}
          >
            {Term2[5].name}
          </button>
          <p
            id={`b${Term2[5].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term2[5].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term2[6].id}`}
          >
            {Term2[6].name}
          </button>
          <p
            id={`b${Term2[6].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term2[6].vhd}
          </p>
        </div>
      </div>
      {/* term 3 */}
      <div className="col-start-9 col-end-[13] bg-slate-800 rounded flex flex-col relative">
        <div
          id="hoverMouse3"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Term3}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          Term 3{' '}
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
            id={`${Term3[0].id}`}
          >
            {Term3[0].name}
          </button>
          <p
            id={`b${Term3[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term3[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term3[1].id}`}
          >
            {Term3[1].name}
          </button>
          <p
            id={`b${Term3[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term3[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term3[2].id}`}
          >
            {Term3[2].name}
          </button>
          <p
            id={`b${Term3[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term3[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term3[3].id}`}
          >
            {Term3[3].name}
          </button>
          <p
            id={`b${Term3[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term3[3].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term3[4].id}`}
          >
            {Term3[4].name}
          </button>
          <p
            id={`b${Term3[4].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term3[4].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term3[5].id}`}
          >
            {Term3[5].name}
          </button>
          <p
            id={`b${Term3[5].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term3[5].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term3[6].id}`}
          >
            {Term3[6].name}
          </button>
          <p
            id={`b${Term3[6].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term3[6].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term3[7].id}`}
          >
            {Term3[7].name}
          </button>
          <p
            id={`b${Term3[7].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term3[7].vhd}
          </p>
        </div>
      </div>
      {/* term 4 */}
      <div className="col-start-1 col-end-5 bg-slate-800 rounded flex flex-col relative">
        <div
          id="hoverMouse4"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Term4}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          Term 4{' '}
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
            id={`${Term4[0].id}`}
          >
            {Term4[0].name}
          </button>
          <p
            id={`b${Term4[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term4[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term4[1].id}`}
          >
            {Term4[1].name}
          </button>
          <p
            id={`b${Term4[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term4[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term4[2].id}`}
          >
            {Term4[2].name}
          </button>
          <p
            id={`b${Term4[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term4[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term4[3].id}`}
          >
            {Term4[3].name}
          </button>
          <p
            id={`b${Term4[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term4[3].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term4[4].id}`}
          >
            {Term4[4].name}
          </button>
          <p
            id={`b${Term4[4].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term4[4].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term4[5].id}`}
          >
            {Term4[5].name}
          </button>
          <p
            id={`b${Term4[5].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term4[5].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term4[6].id}`}
          >
            {Term4[6].name}
          </button>
          <p
            id={`b${Term4[6].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term4[6].vhd}
          </p>
        </div>
      </div>
      {/* term 5 */}
      <div className="col-start-5 col-end-9 bg-slate-800 rounded flex flex-col relative">
        <div
          id="hoverMouse5"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Term5}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          Term 5{' '}
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
            id={`${Term5[0].id}`}
          >
            {Term5[0].name}
          </button>
          <p
            id={`b${Term5[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term5[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term5[1].id}`}
          >
            {Term5[1].name}
          </button>
          <p
            id={`b${Term5[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term5[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term5[2].id}`}
          >
            {Term5[2].name}
          </button>
          <p
            id={`b${Term5[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term5[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term5[3].id}`}
          >
            {Term5[3].name}
          </button>
          <p
            id={`b${Term5[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term5[3].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term5[4].id}`}
          >
            {Term5[4].name}
          </button>
          <p
            id={`b${Term5[4].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term5[4].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term5[5].id}`}
          >
            {Term5[5].name}
          </button>
          <p
            id={`b${Term5[5].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term5[5].vhd}
          </p>
        </div>
      </div>
      {/* term 6 */}
      <div className="col-start-9 col-end-[13] bg-slate-800 rounded flex flex-col relative">
        <div
          id="hoverMouse6"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Term6}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          Term 6{' '}
        </div>
        <div className=" grid grid-cols-6 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-5 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>
        <div
          id="6t"
          className="grid grid-cols-6 content-center text-white gap-2 p-2"
        >
          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term6[0].id}`}
          >
            {Term6[0].name}
          </button>
          <p
            id={`b${Term6[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term6[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term6[1].id}`}
          >
            {Term6[1].name}
          </button>
          <p
            id={`b${Term6[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term6[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term6[2].id}`}
          >
            {Term6[2].name}
          </button>
          <p
            id={`b${Term6[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term6[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term6[3].id}`}
          >
            {Term6[3].name}
          </button>
          <p
            id={`b${Term6[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term6[3].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term6[4].id}`}
          >
            {Term6[4].name}
          </button>
          <p
            id={`b${Term6[4].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term6[4].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term6[5].id}`}
          >
            {Term6[5].name}
          </button>
          <p
            id={`b${Term6[5].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term6[5].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term6[6].id}`}
          >
            {Term6[6].name}
          </button>
          <p
            id={`b${Term6[6].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term6[6].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term6[7].id}`}
          >
            {Term6[7].name}
          </button>
          <p
            id={`b${Term6[7].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term6[7].vhd}
          </p>
        </div>
      </div>
      {/* term 7 */}
      <div className="col-start-3 col-end-7 bg-slate-800 rounded flex flex-col relative">
        <div
          id="hoverMouse7"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Term7}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          Term 7{' '}
        </div>
        <div className=" grid grid-cols-6 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-5 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>
        <div
          id="7t"
          className="grid grid-cols-6 content-center text-white gap-2 p-2"
        >
          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term7[0].id}`}
          >
            {Term7[0].name}
          </button>
          <p
            id={`b${Term7[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term7[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term7[1].id}`}
          >
            {Term7[1].name}
          </button>
          <p
            id={`b${Term7[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term7[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term7[2].id}`}
          >
            {Term7[2].name}
          </button>
          <p
            id={`b${Term7[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term7[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term7[3].id}`}
          >
            {Term7[3].name}
          </button>
          <p
            id={`b${Term7[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term7[3].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term7[4].id}`}
          >
            {Term7[4].name}
          </button>
          <p
            id={`b${Term7[4].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term7[4].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term7[5].id}`}
          >
            {Term7[5].name}
          </button>
          <p
            id={`b${Term7[5].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term7[5].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term7[6].id}`}
          >
            {Term7[6].name}
          </button>
          <p
            id={`b${Term7[6].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term7[6].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term7[7].id}`}
          >
            {Term7[7].name}
          </button>
          <p
            id={`b${Term7[7].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term7[7].vhd}
          </p>
        </div>
      </div>
      {/* term 8 */}
      <div className="col-start-7 col-end-11 bg-slate-800 rounded flex flex-col relative">
        <div
          id="hoverMouse8"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Term8}></HoverC>
        </div>

        {/* the content */}
        <div className=" text-center rounded-t text-white bg-black p-1">
          Term 8{' '}
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
            id={`${Term8[0].id}`}
          >
            {Term8[0].name}
          </button>
          <p
            id={`b${Term8[0].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term8[0].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term8[1].id}`}
          >
            {Term8[1].name}
          </button>
          <p
            id={`b${Term8[1].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term8[1].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term8[2].id}`}
          >
            {Term8[2].name}
          </button>
          <p
            id={`b${Term8[2].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term8[2].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term8[3].id}`}
          >
            {Term8[3].name}
          </button>
          <p
            id={`b${Term8[3].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term8[3].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term8[4].id}`}
          >
            {Term8[4].name}
          </button>
          <p
            id={`b${Term8[4].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term8[4].vhd}
          </p>

          <button
            onClick={btnClicked}
            onMouseEnter={HoverEv}
            onMouseLeave={HoverEv}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term8[5].id}`}
          >
            {Term8[5].name}
          </button>
          <p
            id={`b${Term8[5].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term8[5].vhd}
          </p>

          <button
            onClick={btnClicked}
            className="rounded col-span-5 block text-center z-20 p-1 cursor-pointer"
            id={`${Term8[6].id}`}
          >
            {Term8[6].name}
          </button>
          <p
            id={`b${Term8[6].id}`}
            className="rounded col-span-1 p-1 place-self-center text-center px-3 "
          >
            {Term8[6].vhd}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefaultSchedule;
