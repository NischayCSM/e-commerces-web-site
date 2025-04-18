import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    console.log("hello");
  };
  return (
    <div className="grid grid-cols-2 bg-slate-300">
      <div
        role="button"
        tabIndex={0}
        className="flex  rounded-2xl drop-shadow-lg hover:cursor-pointer box-border p-20 m-10 mx-24 "
        style={{
          backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20240409/pngtree-empty-shopping-basket-on-wood-table-over-grocery-store-supermarket-blur-image_15653639.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center" // or whatever size
        }}
        onClick={() => handleClick("/Groce")}
      >
        <h1 className="text-white font-serif text-2xl">Groceries</h1>
      </div>
      <div
        role="button"
        tabIndex={0}
        className="flex justify-center rounded-2xl drop-shadow-lg hover:cursor-pointer box-border p-20 m-10 mx-24"
        style={{
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAPYM3YYox8i1JUwbYUxzXxMWXuUjLohenw&s)`,
          backgroundSize: "cover",
          backgroundPosition: "center" // or whatever size
        }}
        onClick={() => handleClick("/Tech")}
      >
        <h1 className="text-black font-serif text-2xl">Electronics</h1>
      </div>
      <div
        role="button"
        tabIndex={0}
        className="flex  rounded-2xl drop-shadow-lg hover:cursor-pointer hover:bg-cyan-700 box-border  p-20 bg-cyan-500 m-16 mx-24"
        style={{
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKfpGlGPdIqdTGtbrkTRtqElFtkk8XNondw&s)`,
          backgroundSize: "cover",
          backgroundPosition: "center" // or whatever size
        }}
        onClick={() => handleClick("/Cloth")}
      >
        <h1 className="text-black font-serif text-2xl">Cloths</h1>
      </div>
      <div
        role="button"
        tabIndex={0}
        className="flex rounded-2xl drop-shadow-lg hover:cursor-pointer hover:bg-cyan-700 box-border  p-20 bg-cyan-500 m-16 mx-24"
        style={{
          backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8MDAwAAADV1dW3t7etra34+Pi/v7+goKAQEBCNjY3g4ODNzc2BgYH6+vqnp6fb29tTU1NbW1tsbGzt7e2WlpbHx8d4eHglJSVlZWVNTU1DQ0MWFhbn5+e8vLyhoaGJiYktLS08PDxhYWE4ODgnJycCVY2pAAADe0lEQVR4nO3cUXOiMBSGYYggVBBoBdRaFdvt//+LC91dIMGp0JkunvR9rr043wRyICE6DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwE+SLGaV9WvxbvGXX0h4VLM69Gs5J8tPJUH0hYSlcmekHnqjcgxuFZvf/MUV+1kTusrrSglvV1tMDxjMG9BVu/xPIYmz8D4vtRH5UwPOe41+RHz9GzFORxU8LeKxmj1gHfHFz51jXMTjao6KIBo7o3oXdQcB64hKXfzsdr3tuARjx9G/i3wf1HF8wPqWHXHD3l3CSX1uScJ7TDjpKhWYUL33mv1pu76iEp1QVU6+bss6Hx6Hnp9kJ6x7ftzeiVF8leyEi7qY/F9ZWTkQBEEpO+ElPndFZ6fA4OV64fIS1k81vW4RqgdDM8bCE2r9MHzYGZTxSCcyYa8fehvTm/E8IDCheiymLMDIS6gKJ6nastLHJ8Oz+DFs+uGiTbEaLleJn2lU3c7T9jJNlonBvILlJXR3XtgtoqWHZ8Or/LlU64fHwapxbAyiwIRaPwyqlWFtvFuJTNjLEJ9TQ2jBU9um6CLaOIbKr3tEW5aV3aKeSbpNqKg0Xw1L8TONqltFkYysWmRC1w2L7kJM3/aGJ8v64W0CE2r9sAzPoa4QP5fq/TCPTJn4mcZVVdHdalZ2i7riVTuXLk4m+StRTT/M2kEMCtNK/H2oj2Fh41qbWhXdZHplLhV/lepz6cL8TMiC+1Dvh9nJXPS2ImFvDG18e3JV/7l0uIqxEN/xm3eLsE1h4zON/n5o5TNN6jhVW5Y32OXeWHAfbvvrNOZEs6rkJ9TX2kKTFR2/1w+9zdawF78zo7/jFxbONM2+RfetRT5krFLJS9jsPZ0nbJEKTLjs7x/eXlYUmFDbA7ax4zf7+F1DCH8dDBf566X2f5uo9cPT4LvErfxnGqMfvhjk34fqUva+aytD+3ZI9W8Tj9lA8xYsO6H2fenwi6HGXnbCyllWI4uWmbC+EXsntvz94NO92lZ2Qv39MPWvkZ7wR+2QWprwe849ee93c3bt3Z8wiOPPrjlOtL6DiOolzZNjHI49f7gaf/6wYfsZUmf+c8Durn1cW4w4qD39HPBdneUe8V3UF85yz30e/+X7z+Pb/58Kzrf/9cWn/sP/YgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMj1G1lec/Qp2n3SAAAAAElFTkSuQmCC)`,
          backgroundSize: "cover",
          backgroundPosition: "center" // or whatever size
        }}
        onClick={() => handleClick("/Offer")}
      >
        <h1 className="text-white font-serif text-2xl">Offers</h1>
      </div>
    </div>
  );
};
// }

export default Home;
