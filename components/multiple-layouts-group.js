const MultipleLayoutsGroup = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[31px] box-border max-w-full text-left text-53xl font-aeonik-pro" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="w-[1584px] flex flex-row items-start justify-between max-w-full gap-[20px] mq925:flex-wrap">
        <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[122%] font-bold font-inherit inline-block max-w-full mq925:text-39xl mq925:leading-[70px] mq450:text-24xl mq450:leading-[53px]">
          Similar Videos
        </h1>
        <div className="w-[147px] flex flex-col items-start justify-start pt-[11px] pb-0 px-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0px_14.4px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start [transform:_rotate(-180deg)]">
              <div className="h-[66.3px] w-[66.3px] flex flex-row items-center justify-center relative gap-[0px_8.97px]">
                <div className="h-[68.9px] flex-1 relative rounded-[50%] box-border border-[0px] border-solid border-white" />
                <img
                  className="h-[19.8px] w-[26px] absolute !m-[0] top-[33.2px] left-[19.7px] [transform:_rotate(180deg)] z-[1]"
                  alt=""
                  src="/arrow-1.svg"
                />
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-start justify-start">
              <div className="h-[66.3px] flex-1 relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkblue-200 w-full h-full" />
                <img
                  className="absolute top-[33.2px] left-[20.6px] w-[26px] h-[19.8px] z-[1]"
                  alt=""
                  src="/arrow-1.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultipleLayoutsGroup;
