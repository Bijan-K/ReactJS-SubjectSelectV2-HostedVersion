const SaveButton = ({ Save }) => {
  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const clickhandler2 = (e) => {
    let SaveInJson = JSON.stringify(Save);

    e.preventDefault();
    download('save.json', `${SaveInJson}`);
  };

  return (
    <a
      onClick={clickhandler2}
      href="#"
      className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-black group h-8 mt-1 mr-auto"
    >
      <span className="w-48 h-48 rounded bg-white rotate-[-40deg] absolute bottom-0 left-0 -translate-x-full ease-out duration-200 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
        Save
      </span>
    </a>
  );
};

export default SaveButton;
