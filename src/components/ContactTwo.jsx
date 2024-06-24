const ContactTwo = () => {
  return (
    <>
      <div className="px-[20px] pt-[30px] border-t-[#ddd] border-t-[1px] mt-[30px] py-[15px]">
        {["Karteninhaber", "Karditkartenanbieter", "Kartennummer"].map((el) => (
          <div key={el} className="flex flex-col gap-[10px] mt-[10px]">
            <label htmlFor="">{el}</label>
            <input
              type="text"
              className="p-[7px] border-solid border-[#bbb] max-w-[300px] border-[2px]"
              placeholder={el}
            />
          </div>
        ))}

        <div className="flex flex-col gap-[15px] mt-[15px]">
          <label htmlFor="">Kartennummer</label>
          <section className="flex items-center gap-2">
            <select
              id=""
              className="border-solid border-[1px] border-black w-[100px]"
              value={`*`}
            >
              <option value=""></option>
            </select>
            /
            <select
              id=""
              className="border-solid border-[1px] border-black w-[100px]"
              value={`*`}
            >
              <option value=""></option>
            </select>
          </section>
        </div>
        <div className="flex flex-col gap-[15px] mt-[15px]">
          <label htmlFor="">Kartenprufnummer</label>
          <input
            type="text"
            className="p-[10px] border-solid border-[#bbb] w-[100px] border-[2px]"
          />
        </div>
      </div>
      <section className="px-[20px]">
        <p className="capitalize text-balance text-[16px]">
          bei visa-und mastercard-Kareditkarten finden sie die dreistellige
          prufnummer im unterschriftsfeld auf der kartenruckseite bei american
          expresss-Karten ist sie eine vierstellige nummer auf der vorderseite
          iher american exprees card
        </p>
        <button className="max-md:w-full block text-left border-[#00000045] shadow-md shadow-[#bbb] border-solid border-[1px] p-[10px] font-semibold capitalize mt-[15px] bg-[#FFD638]">
          jetzt bezahlen
        </button>
      </section>
    </>
  );
};

export default ContactTwo;
