import "./App.css";
import Accordion from "./Components/Accordion";
import data from "./data";
import pic1 from "./images/illustration-woman-online-desktop.svg";
import pic2 from "./images/illustration-woman-online-mobile.svg";

function App() {
  return (
    <main className=" bg-gradient-to-b from-softViolet to-softBlue  h-[100vh]  flex  flex-col items-center justify-center ">
      <div className="  mx-auto md:w-[1024px] w-[500px]  bg-[white] px-[3rem] md:py-20 rounded-[20px] drop-shadow-2xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[100%] ">
          <div className=" w-[100%] h-[100%] ">
            <picture>
              <source media="min-width:768px" srcSet={pic2} />
              <img src={pic1} alt="" />
            </picture>
          </div>
          <div>
            <h3 className=" mb-5 text-[3rem] font-bold font-kumb text-veryDarkSaturated ">
              FAQ
            </h3>
            {data.map((item) => {
              return <Accordion key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
