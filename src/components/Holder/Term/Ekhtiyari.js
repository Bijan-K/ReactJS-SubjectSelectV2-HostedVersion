import { useEffect, useState } from 'react';

const Ekhtiyari = (props) => {
  const [hoverV, setHoverV] = useState('');
  const [btnclick, setbtnclick] = useState(0);
  //  THE DATA POINTS 13tas
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

    // sds
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
              textInfo[0] = element.r_name[0];
              Truth[0] = element2.r_state[0] == true ? true : false;
              Truth[2] = element2.r_state[0] == true ? true : false;
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
          <p className="text-lg">
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
          <p className="flex text-lg">
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

    if (SaveData[SaveData.length - 1].vhd >= 80) {
      SaveData[SaveData.length - 2].state = true;
      SaveData[SaveData.length - 2].r_state = [true];
      SaveData[SaveData.length - 4].r_state = [true];
    } else {
      SaveData[SaveData.length - 2].state = false;
      SaveData[SaveData.length - 2].r_state = [false];
      SaveData[SaveData.length - 4].r_state = [false];
    }
    if (SaveData[SaveData.length - 1].vhd >= 100) {
      SaveData[SaveData.length - 3].state = true;
      SaveData[SaveData.length - 3].r_state = [true];
      SaveData[SaveData.length - 5].r_state = [true];
    } else {
      SaveData[SaveData.length - 3].state = false;
      SaveData[SaveData.length - 3].r_state = [false];
      SaveData[SaveData.length - 5].r_state = [false];
    }

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
    if (SaveData[SaveData.length - 1].vhd >= 80) {
      SaveData[SaveData.length - 2].r_state = true;
    }
    if (SaveData[SaveData.length - 1].vhd >= 100) {
      SaveData[SaveData.length - 3].r_state = true;
    }
    props.SetSave(SaveData);
  }, [hoverV, btnclick]);

  return (
    <div
      dir="rtl"
      className="flex flex-col animate-fadein gap-5 h-screen mb-28 "
    >
      {/* first table */}
      <div className="bg-slate-800 rounded flex flex-col relative">
        <div
          id="hoverMouse1"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-48 w-[10rem] z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={ekhtiyari}></HoverC>
        </div>

        {/* the content */}

        <div className="grid grid-cols-10 items-center rounded-t text-white bg-black content-center p-3">
          <div className="col-span-5 text-center">توضیحات</div>
          <div className="col-span-4 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>
        <div className="grid grid-cols-10 ">
          <div className="grid col-span-5 btnfont text-xl justify-start text-white gap-2 p-4">
            8 واحد در کل، 2واحد باید *حتما* آز یا کارگاه باشد
            <br />
            به نسبت اینکه چطور دروس را انتخاب می کنید <br /> به یکی از این دو
            حالت باید برسید:
            <br />
            <br />
            144 اگر اختیاری به صورت یک 3 واحدی <br /> + دفاع مقدس + 3 از یا
            کارگاه
            <br />
            <br />
            146 اگر اختیاری به صورت دو سه واحدی <br /> + دفاع مقدس+ دو از یا
            کارگاه
            <br />
            (ترجیحا اولی)
            <br />
            <br />
            <br />
            این جدول مخلوطی از جدول 93 و جدول
            <br />
            94 است. خودتون هم پی دی اف ها رو
            <br />
            به نظرم مطالعه کنید
            <br />
            <br />
            <br />
            زوم out کنید اگر در این tab مانیتورتون جا نداشت
          </div>
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
