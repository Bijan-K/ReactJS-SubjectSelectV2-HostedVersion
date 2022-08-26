const OverLay = (props) => {
  return (
    <div className="absolute w-full h-full flex flex-col justify-center items-center">
      <div
        onClick={() => props.setoverlay(false)}
        className="fixed bg-slate-900 bg-opacity-60 w-full h-screen z-40"
      ></div>

      <div className="fixed z-50 flex flex-col p-3 w-1/2 h-2/3 border-neutral-800  border-2 rounded bg-stone-800">
        <div className="bg-slate-500 h-full overflow-y-auto">
          <div className="">garare inja matn bashe</div>
        </div>
        <i className="text-white text-center mt-4 bottom-0">
          <span className="bg-slate-700 rounded p-2 hover:bg-slate-600 cursor-default">
            {`${props.Save[props.Save.length - 1].vhd}`}/146
          </span>
        </i>
      </div>
    </div>
  );
};

export default OverLay;
