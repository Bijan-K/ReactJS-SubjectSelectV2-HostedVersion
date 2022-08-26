import { useEffect } from 'react';

const LoadOverlay = (props) => {
  useEffect(() => {
    const dragElement = document.getElementById('drag');
    dragElement.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    dragElement.addEventListener('drop', (e) => {
      e.preventDefault();
      document.getElementById('checked').classList.remove('hidden');
      document.getElementById('waiting').classList.add('hidden');
      document.getElementById('checked').classList.add('flex');

      let reader = new FileReader();
      reader.addEventListener('load', function () {
        let SaveFromJson = JSON.parse(this.result);
        props.SetSave(SaveFromJson);
      });
      reader.readAsText(e.dataTransfer.files[0]);
      document.getElementById('dataSubmit').onclick = () =>
        props.SetOverlayLoad(false);
    });
  }, []);

  const overlayClick = () => {
    props.SetOverlayLoad(false);
  };
  const Realshit = () => {
    let reader = new FileReader();
    reader.addEventListener('load', function () {
      let SaveFromJson = JSON.parse(this.result);
      props.SetSave(SaveFromJson);
    });
    reader.readAsText(document.querySelector('input').files[0]);

    props.SetOverlayLoad(false);
  };
  const Clicked = () => {
    document.getElementById('input').click();
    document.getElementById('input').addEventListener('change', () => {
      document.getElementById('checked').classList.remove('hidden');
      document.getElementById('waiting').classList.add('hidden');
      document.getElementById('checked').classList.add('flex');
    });
  };

  return (
    <div
      id="screen2"
      className="absolute w-full h-screen flex flex-col justify-center items-center"
    >
      <div
        onClick={overlayClick}
        className="bg-slate-900 bg-opacity-60 w-full h-screen fixed z-40"
      ></div>
      <div className="z-50 fixed bg-zinc-600 flex flex-col justify-center items-center p-5 rounded">
        <div
          onClick={Clicked}
          id="drag"
          className=" p-32 border-4 border-dashed border-gray-800 rounded cursor-pointer"
        >
          <span
            id="waiting"
            className="text-slate-300 flex flex-col justify-center items-center"
          >
            <svg className="h-24 w-24" viewBox="0 0 20 20" fill="white">
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Click here to select a file or <br />
            Drop the file here directly!
          </span>
          {/* second one */}
          <span
            id="checked"
            className="text-slate-300 hidden flex-col justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            File has been Selected!
          </span>
          <input id="input" type="file" className="hidden" accept=".json" />
        </div>
        <div>
          <button
            id="dataSubmit"
            onClick={Realshit}
            className="bg-gray-900 px-3 py-1 hover:bg-gray-800 mt-3 text-white rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoadOverlay;
