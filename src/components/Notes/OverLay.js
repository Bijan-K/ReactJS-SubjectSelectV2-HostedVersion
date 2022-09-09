const OverLay = (props) => {
  return (
    <div className="absolute w-full h-full flex flex-col justify-center items-center">
      <div
        onClick={() => props.setoverlay(false)}
        className="fixed bg-slate-900 bg-opacity-60 w-full h-screen z-40"
      ></div>

      <div className="fixed z-50 flex flex-col p-3 w-1/2 h-3/4 border-neutral-800  border-2 rounded bg-stone-800">
        <div dir="rtl" className="bg-slate-500 h-full overflow-y-auto">
          <div className="flex flex-col btnfont text-2xl">
            <ul className="text-center mt-2">
              <li className="text-pink-900">
                لطفا واحد ها را به ترتیب بردارید تا به مشکلی برنخورید.
              </li>
            </ul>
            <p className="mx-5 mt-3 text-black">
              * این اپ بیشتر هدف مکملی دارد که از لحاظ رهگیری راحت تر باشیم پس
              از pdf ها هم استفاده کنید.
            </p>

            <p className="mx-5 mt-3 text-black">
              * حواستون به فایل سیوتان باشد که بعدا با لود بتوانید به حالت سیو
              شده برگردید.
            </p>

            <p className="mx-5 mt-3 text-black">
              * عنوان های عمومی و اختیاری در tab "برنامه 93 " حکم placeholder
              دارند و با کلیک بر انها فقط رنگشان عوض می شود.
            </p>

            <p className="mx-5 mt-3 text-black">
              * برنامه 93 در نهایت 140 واحد می دهد، بهتر است با3 tab دیگر پیش
              بروید و به 93 یه دیدگاه پیشنهادی داشته باشید.
            </p>

            <p className="mx-5 mt-3 text-black">
              * باید 16 واحد معارف پاس کنیم پس حواستون باشه هر ترم معارف بردارید
              که ترم اخر به فنا نرید.
            </p>

            <p className="mx-2 mt-3 text-black">
              اگر ایراد یا مشکلی پیدا کردید که منشأ آن نکته اول نبود در تلگرام
              پیام بدهید که درستش کنم.
            </p>
          </div>
        </div>
        <i className="text-white text-center mt-4 bottom-0">
          <span className="bg-slate-700 rounded p-2 hover:bg-slate-600 cursor-default">
            {`${props.Save[props.Save.length - 1].vhd}`} / 146 ya 144
          </span>
        </i>
      </div>
    </div>
  );
};

export default OverLay;
