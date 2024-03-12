import ImageRectangle from "../components/image-rectangle";
import WatchPlatformText from "../components/watch-platform-text";
import MultipleLayoutsGroup from "../components/multiple-layouts-group";
import LineShape from "../components/line-shape";
import GroupComponent from "../components/group-component";
import SocialMediaIconsFrame from "../components/social-media-icons-frame";

const VideoDetailsNotLoggedIn = () => {
  return (
    <div className="w-full h-[2986px] relative bg-black overflow-hidden flex flex-col items-start justify-start tracking-[normal] text-left text-[40px] text-white font-aeonik-pro mq1825:h-auto">
      <img
        className="w-[1205.2px] h-[1205.2px] absolute !m-[0] top-[-172px] right-[-383.2px] overflow-hidden shrink-0 object-contain mix-blend-hard-light"
        alt=""
        src="/gradient01@2x.png"
      />
      <div className="w-[3004.5px] h-[2080px] hidden flex-row items-start justify-start opacity-[0.25] mix-blend-luminosity max-w-full z-[1]">
        {/* Hidden images */}
      </div>
      <img
        className="mt-[-2539px] ml-[-600px] mb-[1324px] w-[3063px] h-[1215px] relative mix-blend-color max-w-[160%] shrink-0"
        alt=""
      />
      <img
        className="w-[1584px] h-[702px] absolute !m-[0] top-[213px] left-[calc(50%_-_792px)] z-[1]"
        alt=""
        src="/group-48095483.svg"
      />
      <div className="w-[1576px] h-px absolute !m-[0] top-[1241px] left-[166px] box-border z-[1] border-t-[1px] border-solid border-gray-300" />
      <ImageRectangle />
      <WatchPlatformText />
      <h1 className="!m-[0] w-[729px] absolute top-[984px] left-[168px] text-inherit tracking-[-0.01em] leading-[122%] font-bold font-inherit inline-block z-[1] mq925:text-[32px] mq925:leading-[39px] mq450:text-5xl mq450:leading-[29px]">
        Watch all on the BGTV+ platform.
      </h1>
      <MultipleLayoutsGroup />
      <div className="w-[854px] h-[78px] absolute !m-[0] top-[1092px] left-[168px] text-base leading-[26px] text-gray-700 inline-block z-[1]">
        Series terbaru BGTV kali ini memaparkan misi BGTV untuk test seorang
        Boyfriend yang dikatakan sedang curang dengan seorang perempuan di
        Instagram. Terdapat banyak masalah dalam satu video ini. Tonton sekarang
        secara exclusive di BGTV+.
      </div>
      <LineShape />
      <GroupComponent />
      <SocialMediaIconsFrame />
    </div>
  );
};

export default VideoDetailsNotLoggedIn;
