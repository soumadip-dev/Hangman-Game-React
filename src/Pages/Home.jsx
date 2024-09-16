import { Link } from "react-router-dom";
import Button from "../Components/Button/Button.jsx";
import { useEffect, useState } from "react";

function Home() {
  const [word, setWord] = useState("");

  async function fetchWords() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(data[randomIndex].wordValue);
    setWord(data[randomIndex].wordValue);
  }
  // Now I want to fetch words from json file and it is loaded when home page rander --> UseEffect()
  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-200 to-pink-300 min-h-screen flex items-center justify-center p-[20px]">
      <div className="p-10 flex flex-col items-center justify-center border-gray-300 bg-gradient-to-r from-white to-gray-100 rounded-xl shadow-2xl w-full max-w-4xl h-[80vh]">
        <h1 className="text-4xl font-extrabold mb-8  drop-shadow-lg text-center text-purple-600 tracking-wide">
          Welcome to the Game
        </h1>
        <div className="flex flex-col items-center space-y-6 w-full">
          <Link
            to="/play"
            state={{ wordSelected: word }}
            className="w-full flex justify-center"
          >
            <Button text="Single Player" className="w-3/4 max-w-xs" />
          </Link>
          <Link to="/start" className="w-full flex justify-center">
            <Button
              text="Multi Player"
              styleType="success"
              className="w-3/4 max-w-xs"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
