import Mendleson from "./Mendleson/Mendleson";
// import MendlesonAi from "./MendlesonAi/MendlesonAi";
// import Tailwind from "./tailwind";
// import useCount from "./useCount";

function App() {
  // const [count, list, increment, decrement] = useCount();

  // const [message, setMessage] = useState(
  //   "Hello This is The text befour the click",
  // );

  // const [isStaetChanged, setIsStateChanged] = useState(false);

  // const onClicked = () => {
  //   if (!isStaetChanged) {
  //     setIsStateChanged(true);

  //     setMessage("This is the text after the click");
  //   } else {
  //     setIsStateChanged(false);
  //     setMessage("Hello This is The text befour the click");
  //   }
  // };

  return (
    <div>
      <Mendleson />
      {/* <div className="flex items-center gap-4 p-20 x-auto">
        <button
          className="w-12 h-12 bg-blue-500 rounded-full text-white text-2xl"
          onClick={increment}
        >
          +
        </button>

        <p className="text-3xl p-10">{count}</p>

        <button
          className="w-12 h-12 bg-blue-500 rounded-full text-white text-2xl"
          onClick={decrement}
        >
          -
        </button>
      </div>
      <div className="flex items-center gap-4 p-20 x-auto">
        {list.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <p className="[-20 text-xl">{message}</p>

      <button
        className="bg-blue-400 text-white font-bold  pl-20 pr-20"
        onClick={onClicked}
      >
        Click me
      </button>
      <Tailwind /> */}
    </div>
  );
}

export default App;
