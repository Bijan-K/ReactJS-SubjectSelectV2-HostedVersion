import { createContext, useState, useEffect } from 'react';

const SaveContext = createContext();

export const SaveProvider = ({ children }) => {
  // The main Save itself
  const [Save, SetSave] = useState([
    {
      id: 'dorosvije1',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'dorosvije2',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'hoshmoha',
      state: false,
      r_id: ['pish'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'mbnbinayi',
      state: false,
      r_id: ['hoshmoha'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'mbnpardazesh',
      state: false,
      r_id: ['amar', 'signal'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'osolrobot',
      state: false,
      r_id: ['signal'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'emamkho',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'quran',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'and1',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'and2',
      state: false,
      r_id: ['and1'],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'ensan',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'hogh',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'danesh',
      state: false,
      r_id: [''],
      r_state: [true],
      vhd: 2,
    },
    {
      id: 'fal',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'akh',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'ayin',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'erfan',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'englab',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'ashnayi',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'andishe',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'tarikh',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'emam',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'tarikhtahlil',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'tafsir-q',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'tafsir-n',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'fa',
      state: false,
      r_id: [''],
      r_state: [true],
      vhd: 3,
    },
    {
      id: 'eng',
      state: false,
      r_id: [''],
      r_state: [true],
      vhd: 3,
    },
    {
      id: 'tar1',
      state: false,
      r_id: [''],
      r_state: [true],
      vhd: 1,
    },
    {
      id: 'tar2',
      state: false,
      r_id: ['tar1'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'defa',
      state: false,
      r_id: [''],
      r_state: [true],
      vhd: 2,
    },
    {
      id: 'osoletlaat',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'modiryat',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'raneshamn',
      state: false,
      r_id: ['shabake'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'amiyadshab',
      state: false,
      r_id: ['shabake'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'algopish',
      state: false,
      r_id: ['algo'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'azmadelec',
      state: false,
      r_id: ['mad_elc'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'tarashibazi',
      state: false,
      r_id: ['pish'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'graphiccom',
      state: false,
      r_id: ['pish'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'piyadsys',
      state: false,
      r_id: ['pdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'dadekavi',
      state: false,
      r_id: ['sdata', 'pdata'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'az-narmafzar',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'az-data',
      state: false,
      r_id: ['pdata'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'karkah-matlab',
      state: false,
      r_id: ['signal'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'rz1',
      state: false,
      r_id: [''],
      r_state: [true],
      vhd: 3,
    },
    {
      id: 'rz2',
      state: false,
      r_id: ['rz1'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'fz1',
      state: false,
      r_id: [''],
      r_state: [true],
      vhd: 3,
    },
    {
      id: 'amar',
      state: false,
      r_id: ['rz2'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'dif',
      state: false,
      r_id: ['rz1'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'kargha-com',
      state: false,
      r_id: ['mbn'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'az-fz2',
      state: false,
      r_id: ['fz2'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'fz2',
      state: false,
      r_id: ['rz1'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'tamol',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'azmon-narm',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'ravesh-rasmi',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'objector',
      state: false,
      r_id: ['pish'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'tahlil-sys',
      state: false,
      r_id: ['pish'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'pdata',
      state: false,
      r_id: ['sdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'trahi-zaban',
      state: false,
      r_id: ['osolcomplier'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'moh-narm',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'moh-net',
      state: false,
      r_id: ['shabake', 'pdata'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'mbn',
      state: false,
      r_id: [''],
      r_state: [true],
      vhd: 3,
    },
    {
      id: 'mad_elc',
      state: false,
      r_id: ['dif'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'gos',
      state: false,
      r_id: ['rz1', 'mbn'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'pish',
      state: false,
      r_id: ['mbn'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'sdata',
      state: false,
      r_id: ['pish', 'gos'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'mad_man',
      state: false,
      r_id: ['gos'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'nazar',
      state: false,
      r_id: ['sdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'engt',
      state: false,
      r_id: ['eng'],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'ravesh',
      state: false,
      r_id: ['engt'],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'moh',
      state: false,
      r_id: ['dif', 'rz2'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'memar',
      state: false,
      r_id: ['mad_man'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'sys-amel',
      state: false,
      r_id: ['sdata', 'memar'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'algo',
      state: false,
      r_id: ['sdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'tarhsystem',
      state: false,
      r_id: ['memar'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'signal',
      state: false,
      r_id: ['moh'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'rizpar',
      state: false,
      r_id: ['memar'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'shabake',
      state: false,
      r_id: ['sys-amel'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'ai-sys',
      state: false,
      r_id: ['sdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'osolcomplier',
      state: false,
      r_id: ['sdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'az-sys-amel',
      state: false,
      r_id: ['sys-amel'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'az-man-memari',
      state: false,
      r_id: ['memar', 'mad_man'],
      r_state: [false, false],
      vhd: 1,
    },
    {
      id: 'az-rizpar',
      state: false,
      r_id: ['rizpar'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'az-shabake',
      state: false,
      r_id: ['shabake'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'omom1',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'omom3',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'omom4',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'omom6',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'omom7',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'omom8',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'az-ekh7',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'az-ekh8',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'ekh7',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'ekh8',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'proj',
      state: false,
      r_id: ['100vhd'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'karamozi',
      state: false,
      r_id: ['80vhd'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: '100vhd',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: '80vhd',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      vhd: 0,
      r_id: [''],
      r_state: [false],
    },
  ]);
  const [finalVhd, SetFinalVhd] = useState(0);
  const [Done, SetDone] = useState(true);
  const [Effect, SetEffect] = useState(0);
  const [SaveWasClicked, SetSaveWasClicked] = useState(false);
  const [hoverV, setHoverV] = useState('');
  const [btnclick, setbtnclick] = useState(0);

  if (localStorage.getItem('SubjectSelect99Save') && Done) {
    let SaveInStore = JSON.parse(localStorage.getItem('SubjectSelect99Save'));
    SetDone(false);
    SetSave(SaveInStore);
  }

  // SHIT I DIDNT CHANGE FFS
  const HoverC = (prop) => {
    let textInfo = ['', ''];
    let defaultValues = [false, false, false];
    let id = prop.id;
    let RelevantTable = prop.table;
    let save = Save;

    RelevantTable.forEach((element) => {
      if (element.id == id) {
        save.forEach((element2) => {
          if (element2.id == element.id) {
            if (element2.r_state.length == 1) {
              textInfo[0] = element.r_name[0];
              defaultValues[0] = element2.r_state[0] == true ? true : false;
              defaultValues[2] = element2.r_state[0] == true ? true : false;
            } else if (element2.r_state.length == 2) {
              textInfo[0] = element.r_name[0];
              textInfo[1] = element.r_name[1];
              defaultValues[0] = element2.r_state[0] == true ? true : false;
              defaultValues[1] = element2.r_state[1] == true ? true : false;
              if (defaultValues[0] == true && defaultValues[1] == true)
                defaultValues[2] = true;
            }
          }
        });
      }
    });
    return (
      <>
        <div className="top-5 absolute">
          <p className="text-lg">
            {defaultValues[0] && (
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
            {defaultValues[1] && (
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
        <div className="bottom-5 absolute ">
          {defaultValues[2] && (
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
          {!defaultValues[2] && (
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

  const HoverEv = (e) => {
    let p_id = e.target.parentNode.id;
    let id = e.target.id;
    p_id = p_id.charAt(0);
    const hoverer = document.getElementById(`hoverMouse${p_id}`);
    hoverer.classList.toggle('animate-slidein');
    setHoverV(id);
    SetEffect(Effect + 1);
  };

  const btnClicked = (e) => {
    let id = e.target.id;
    let btn = document.getElementById(id);
    let SaveNow = Save;
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

    SetEffect(Effect + 1);
  };

  useEffect(() => {
    let SaveData = Save;
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
    SetFinalVhd(vhddd);
    SetSave(SaveData);
  }, [Effect]);

  return (
    <SaveContext.Provider
      value={{
        Save,
        SetSave,
        Effect,
        SetEffect,
        hoverV,
        btnclick,
        btnClicked,
        HoverEv,
        HoverC,
        finalVhd,
        SaveWasClicked,
        SetSaveWasClicked,
      }}
    >
      {children}
    </SaveContext.Provider>
  );
};

export default SaveContext;
