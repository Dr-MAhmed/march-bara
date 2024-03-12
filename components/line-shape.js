import GroupComponent1 from "./group-component1";

const LineShape = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[77.20000000000005px] box-border max-w-full shrink-0 text-left text-base text-gray-400 font-aeonik-pro mq925:pb-[50px] mq925:box-border" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="w-[1584.4px] grid flex-row items-start justify-start gap-[32.3px] max-w-full grid-cols-[repeat(3,_minmax(380px,_1fr))] mq925:gap-[16px] mq925:grid-cols-[minmax(380px,_1fr)] mq1350:justify-center mq1350:grid-cols-[repeat(2,_minmax(380px,_659px))]">
        <GroupComponent1 />
        <GroupComponent1 />
        <GroupComponent1 />
      </div>
    </section>
  );
};

export default LineShape;
