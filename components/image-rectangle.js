const ImageRectangle = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[17px] box-border max-w-full" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="flex-1  box-border overflow-hidden flex flex-row items-start justify-between py-2.5 px-[167.5px] max-w-full gap-[20px] z-[1] border-b-[1px] border-solid border-gray-800 mq925:pl-[41px] mq925:pr-[41px] mq925:box-border mq1350:pl-[83px] mq1350:pr-[83px] mq1350:box-border">
        <img
          className="h-[67px] w-[71px] relative object-cover"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <div className="w-[235px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0px_7px]">
            <button className="cursor-pointer py-[18px] pr-[25px] pl-6 bg-[transparent] flex-1 rounded-mini overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <b className="flex-1 relative text-base capitalize font-aeonik-pro text-white text-center">
                Register
              </b>
            </button>
            <button className="cursor-pointer [border:none] py-[18px] px-[36.5px] bg-darkblue-100 flex-[0.6508] rounded-mini overflow-hidden flex flex-row items-start justify-start hover:bg-mediumslateblue">
              <b className="flex-1 relative text-base capitalize font-aeonik-pro text-white text-center">
                Login
              </b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageRectangle;
