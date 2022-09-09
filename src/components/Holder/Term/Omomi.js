import { useEffect, useState } from 'react';

const Omomi = (props) => {
  const [hoverV, setHoverV] = useState('');
  const [btnclick, setbtnclick] = useState(0);
  //  THE DATA POINTS
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
            } else if (element.r_state.length == 2) {
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
      SaveData[SaveData.length - 2].r_state[0] = true;
    }
    if (SaveData[SaveData.length - 1].vhd >= 100) {
      SaveData[SaveData.length - 3].r_state[0] = true;
    }
    props.SetSave(SaveData);
  }, [hoverV, btnclick]);

  return (
    <div dir="rtl" className="grid grid-cols-2 animate-fadein gap-5">
      {/* first table */}
      <div className="bg-slate-800 rounded flex flex-col gap-1 relative">
        <div
          id="hoverMouse1"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Mabani}></HoverC>
        </div>

        {/* the content */}
        <div className="grid grid-cols-5 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">گرایش</div>
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div
          id="1t"
          className="grid grid-cols-5 content-center text-white gap-2"
        >
          {/* the thing */}
          <p className="row-start-1 row-end-7 col-span-2 p-1 text-center">
            x2 مبانی نظری اسلام
          </p>
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
      <div className="bg-slate-800 rounded flex flex-col gap-1 relative">
        <div
          id="hoverMouse2"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 bg-slate-800 left-0 rounded"
        >
          <HoverC id={hoverV} table={Akhlagh}></HoverC>
        </div>

        {/* the content */}
        <div className="grid grid-cols-5 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">گرایش</div>
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div
          id="2t"
          className="grid grid-cols-5 content-center text-white gap-2"
        >
          {/* the thing */}
          <p className="row-start-1 row-end-7 col-span-2 p-1 text-center">
            اخلاق اسلامی
          </p>
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
      <div className="bg-slate-800 rounded flex flex-col gap-1 relative">
        {/* the content */}
        <div className="grid grid-cols-5 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">گرایش</div>
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div className="grid grid-cols-5 content-center text-white gap-2">
          {/* the thing */}
          <p className="row-start-1 row-end-7 col-span-2 p-1 text-center">
            آشنایی با مبانی اسلامی
          </p>
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
      <div className="bg-slate-800 rounded flex flex-col gap-1 relative">
        {/* the content */}
        <div className="grid grid-cols-5 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">گرایش</div>
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div className="grid grid-cols-5 content-center text-white gap-2">
          {/* the thing */}
          <p className="row-start-1 row-end-7 col-span-2 p-1 text-center">
            تاریخ و تمدن اسلامی{' '}
          </p>
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
      <div className="bg-slate-800 rounded flex flex-col gap-1 relative mb-auto">
        {/* the content */}
        <div className="grid grid-cols-5 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">گرایش</div>
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div className="grid grid-cols-5 content-center text-white gap-2">
          {/* the thing */}
          <p className="row-start-1 row-end-7 col-span-2 p-1 text-center">
            تاریخ فرهنگ و تمدن اسلام و ایران
          </p>
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
      <div className="bg-slate-800 rounded flex flex-col gap-1 relative mb-auto">
        {/* the content */}
        <div className="grid grid-cols-5 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">گرایش</div>
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div className="grid grid-cols-5 content-center text-white gap-2">
          {/* the thing */}
          <p className="row-start-1 row-end-7 col-span-2 p-1 text-center">
            دانش خانواده و جمعیت{' '}
          </p>
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
      <div className="bg-slate-800 rounded flex flex-col gap-1 relative ">
        {/* the content */}
        <div className="grid grid-cols-5 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">گرایش</div>
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div className="grid grid-cols-5 content-center text-white gap-2">
          {/* the thing */}
          <p className="row-start-1 row-end-7 col-span-2 p-1 text-center">
            آشنایی با مبانی اسلامی
          </p>
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
      <div className="bg-slate-800 rounded flex flex-col gap-1 relative mb-auto">
        <div
          id="hoverMouse6"
          className="absolute flex flex-col justify-center items-center text-white  border-2 border-gray-900 border-t-4 opacity-0 h-44 w-36 z-30 bg-slate-800 left-0 rounded "
        >
          <HoverC id={hoverV} table={Koliha}></HoverC>
        </div>

        {/* the content */}
        <div className="grid grid-cols-5 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">گرایش</div>
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div
          id="6t"
          className="grid grid-cols-5 content-center text-white gap-2 pb-3"
        >
          {/* the thing */}
          <p className="row-start-1 row-end-7 col-span-2 p-1 text-center">
            x4 متفرقه
          </p>
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
      <div className="bg-slate-800 rounded flex flex-col gap-1 relative mb-5">
        {/* the content */}
        <div className="grid grid-cols-5 items-center rounded-t text-white bg-black content-center p-1">
          <div className="col-span-2 text-center">گرایش</div>
          <div className="col-span-2 text-center">درس</div>
          <div className="col-span-1 text-center">واحد</div>
        </div>

        <div className="grid grid-cols-5 content-center text-white gap-2">
          {/* the thing */}
          <p className="row-start-1 row-end-7 col-span-2 p-1 text-center">
            درس های جدول دوم x2
          </p>
          {/* buttons */}
          <button
            onClick={btnClicked}
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
            className="rounded col-span-2 text-center block z-20 p-1 cursor-pointer"
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
