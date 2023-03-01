import { useContext } from 'react';
import SaveContext from '../../../context/SaveContext';

const SaveButton = () => {
  const { Save, SetSaveWasClicked } = useContext(SaveContext);

  const clickHandlerForSaveOnLocalStorage = (e) => {
    e.preventDefault();
    let SaveInString = JSON.stringify(Save);
    localStorage.setItem('SubjectSelect99Save', SaveInString);
    SetSaveWasClicked(true);
  };

  return (
    <a
      onClick={clickHandlerForSaveOnLocalStorage}
      href="#"
      className="relative inline-flex items-center justify-start lg:px-4 pr-6 pl-4 py-3 overflow-hidden font-medium transition-all bg-black group h-8 mt-1 ml-2 mb-1"
    >
      <span className="w-44 h-44 rounded bg-white rotate-[-40deg] absolute bottom-0 left-2 -translate-x-full ease-out duration-200 transition-all translate-y-full mb-9 ml-6 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black pr-1">
        Save
      </span>
    </a>
  );
};

export default SaveButton;
