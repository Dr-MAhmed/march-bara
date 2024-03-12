const GroupComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start pt-[102px] px-5 pb-[102.29999999999995px] box-border relative gap-[42px] max-w-full shrink-0 z-[2] text-center text-xl font-aeonik-pro mq925:pt-[66px] mq925:pb-[66px] mq925:box-border mq450:gap-[21px]" style={{ backgroundColor: 'black', color: 'white' }}>
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain mix-blend-lighten"
        alt=""
        src="/clip-path-group@2x.png"
      />
      <div className="w-[829px] flex flex-col items-start justify-start gap-[17.3px_0px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <b className="w-[295px] relative tracking-[0.83em] uppercase flex items-center justify-center shrink-0 whitespace-nowrap z-[1] mq450:text-base">
            Get Started
          </b>
        </div>
        <h1 className="m-0 self-stretch h-[169.1px] relative text-53xl tracking-[-0.01em] leading-[122%] font-bold font-inherit inline-block shrink-0 z-[1] mq925:text-39xl mq925:leading-[70px] mq450:text-24xl mq450:leading-[53px]">
          <p className="m-0">{`Access to all `}</p>
          <p className="m-0">exclusive BGTV videos</p>
        </h1>
      </div>
      <div className="w-[829px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[247px] rounded-mini bg-darkblue-100 overflow-hidden shrink-0 flex flex-row items-start justify-start py-[22.100000000000023px] px-[52.5px] box-border whitespace-nowrap z-[1]">
          <b className="flex-1 relative capitalize">Subscribe Now</b>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
