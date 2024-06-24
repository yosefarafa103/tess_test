import img from "../../assets/44989288_9135401.png";

const Congrats = () => {
  return (
    <>
      <img
        src={img.src}
        loading="lazy"
        className="size-[150px] mx-auto my-[15px]"
        alt=""
      />
      <div className="flex px-[20px] text-[6vw] capitalize font-bold justify-center text-center">
        Abbuchung erfolgreich!
      </div>
    </>
  );
};

export default Congrats;
