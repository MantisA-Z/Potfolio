import React from "react";
import "./Books.css";
import { FaAmazon as AmazonIcon } from "react-icons/fa";

const Books = () => {
  const books = [
    {
      name: "Deep Work",
      author: "Cal Newport",
      img: "https://books.google.co.in/books/publisher/content?id=lZpFCgAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2EA4BHcru6ODs7tAdmuUQ4ca-Xpw&w=1280",
      url: "https://www.amazon.in/s?k=deep+work+amazon&adgrpid=58480004786&ext_vrnc=hi&hvadid=381603819317&hvdev=c&hvlocphy=9075256&hvnetw=g&hvqmt=e&hvrand=8267452818841346135&hvtargid=kwd-832708639128&hydadcr=18127_1962709&tag=googinhydr1-21&ref=pd_sl_3zroz6zb74_e",
    },
    {
      name: "Attitude is everything",
      author: "Jeff Keller",
      img: "https://m.media-amazon.com/images/I/61go3pwTLYL._SY466_.jpg",
      url: "https://www.amazon.in/Attitude-Everything-Change-Your-Life/dp/9351772071/ref=sr_1_2?adgrpid=55991371821&dib=eyJ2IjoiMSJ9.OxS2dBcCtzG0nGZA0f_W3mbjaXVop_O5Muq6fcRhOj9MF71RLthA8EH373__NAs7KkB01GHgYa68_vBU3mFv5whaXKTF_nLAYWiEpni0V30zqbXrmzH5K7M4xIK8-6GNWJ527yygd5nLtsagKohhwzcPh-abSV1KnS4x8LlJKZ-QQNH120cT49IIzzMWanlV_PtZUpToOed1wlwqpY-rIsf053gVB9Rk-vm5h2Va89Q.Qs3bezxrUKDJSdhLuS_KuCrkACnIA2947Rnufmo16e0&dib_tag=se&ext_vrnc=hi&hvadid=714702923025&hvdev=c&hvlocphy=9075256&hvnetw=g&hvqmt=e&hvrand=16244102558077633442&hvtargid=kwd-1247607715875&hydadcr=24533_2401851&keywords=attitude+is+everything+amazon&nsdOptOutParam=true&qid=1729087844&sr=8-2",
    },
    {
      name: "Silent Patient",
      author: "Alex Michaelides",
      img: "https://books.google.co.in/books/publisher/content?id=a6NnDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1oG8xy5P2Kv8ClufATsdzz97zcAg&w=1280",
      url: "https://www.amazon.in/Silent-Patient-Alex-Michaelides/dp/1409181634/ref=sr_1_2?adgrpid=64087070562&dib=eyJ2IjoiMSJ9.YLgvaTfzWOqY8keNbqBP6cnntmJ-ZobCO_sAYjrY8w2uidhuiWXZCDFBNkDlcBONNi3a7BDSRKd9tBU9acCZ1q_b_A-KsbIgSL5gU-x8GH4n0doPtjyjSboWdQrxl2JXwXVA9u0mr-P8iHYOlIGwO8L1KRCvu-xfwtYB8ucx7CPrwTS5epBpEPdmw0px8suT.1nUMoCWvcbf0RV9tAQJqnNQ-GHaGPjuouYlArXU46N0&dib_tag=se&ext_vrnc=hi&hvadid=356393218302&hvdev=c&hvlocphy=9075256&hvnetw=g&hvqmt=e&hvrand=1815262078477121140&hvtargid=kwd-921774372216&hydadcr=15257_1947340&keywords=silent+patient+amazon&nsdOptOutParam=true&qid=1729087881&sr=8-2",
    },
    {
      name: "python crash course",
      author: "Eric Matthes",
      img: "https://m.media-amazon.com/images/I/8118skNqi1L.jpg",
      url: "https://www.amazon.in/Python-Crash-Course-Eric-Matthes/dp/1718502702/ref=sr_1_1?adgrpid=158055194370&dib=eyJ2IjoiMSJ9.EN1C9dcwamD2GE_hMYRlJJs0-zzwoSyPFKk7VkBt-92wXSqJvC6QlutMUBZyDJk5DEGWaNSUwtpEpp0zeDTw_GulGNxqRPGnP0_dSfSCAWgvr6VFsej6e3DSlPuwQdUBPcf1Ufq3KFbEnr-BgR1MpDmixdLxmf9cqX-ztp4Tb9nmGRgrXvrb50Zy8KfW6ewwDa9ErMZAy-OruRXwmLfUiy3pXfP9TSpVWoDOq1K7Cbk.XuxCCCCZTDwbv_RlgKvKPMxBEUguIDOWHP5LBD1VnBs&dib_tag=se&gad_source=1&hvadid=700558275765&hvdev=c&hvlocphy=9075256&hvnetw=g&hvqmt=b&hvrand=12270379965339380851&hvtargid=kwd-405238364133&hydadcr=19283_2241990&keywords=python+crash+course+eric&qid=1729087914&sr=8-1",
    },
    {
      name: "Doglapan",
      author: "Ashneer Grover",
      img: "https://imgv2-2-f.scribdassets.com/img/document/643731603/original/3fc6f4e0f0/1725535394?v=1",
      url: "https://www.amazon.in/Doglapan-Hard-Truth-about-Start-Ups/dp/067009711X",
    },
    {
      name: "How to win friends and Infulence people",
      author: "Dale carnegie",
      img: "https://m.media-amazon.com/images/I/618XGVFYlwL._SY466_.jpg",
      url: "https://www.amazon.in/How-Win-Friends-Influence-People/dp/8194790891/ref=sr_1_1_sspa?adgrpid=114464702843&dib=eyJ2IjoiMSJ9.seV_G6h9Lq_-GNc5IMw9ktOzMBoyxhdJ3OTqqcK2AgZ2FkyZnMhfTBlchbIp8LEI7HG2mRf4CkFssrH2f7pTVg20Mo07XSe5cvz0WVyjExw7--fBxH19EniqhgxKr16URRcMzdt_Vy0O7o7itks2lW27rj4EBhgUJhv9ZVEW-dTMPXOJSW0-Wth-a051W4Iav7A-CpXcRfZfV35WI9g8dtFXLuQ4b0MZIh1NS9fXmMA.U4shrIIqV-FoIPpAxXEKDs3CJ0K6NTmn6plZ9sBJM-g&dib_tag=se&ext_vrnc=hi&hvadid=485432207888&hvdev=c&hvlocphy=9075256&hvnetw=g&hvqmt=e&hvrand=430523363192715158&hvtargid=kwd-58764286&hydadcr=1042_2249104&keywords=how+to+win+friends+and+influence+people&qid=1729088363&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
  ];
  return (
    <div className="books-outer-container">
      <h2>Books I have read</h2>
      <div className="books-container">
        {books.map((val, i) => (
          <figure key={i}>
            <img width={300} src={val.img} alt="" />
            <figcaption>
              <p className="links">
                <a href={val.url}>
                  <AmazonIcon />
                </a>
              </p>
              <h2>
                <p>{val.name}</p>
                <p>by {val.author}</p>
              </h2>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Books;
