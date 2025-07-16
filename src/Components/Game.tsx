import { useState } from "react";
import pic1 from "../assets/Dice1.png";
import pic2 from "../assets/Dice2.png";
import pic3 from "../assets/Dice3.png";
import pic4 from "../assets/Dice4.png";
import pic5 from "../assets/Dice5.png";
import pic6 from "../assets/Dice6.png";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router";
function Game() {
  const [TotalScore, setTotalScore] = useState<number>(0);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [image, setImage] = useState<string>(pic1);
  const [rules, setRules] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const diceImages = [pic1, pic2, pic3, pic4, pic5, pic6];
  const [islodaing, setIsLoading] = useState(false);
  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
    setShowError(false);
  };

  const handleDice = () => {
    if (!selectedNumber) {
      setShowError(true);
      return;
    }
    setIsLoading(true);

    const diceNumber = Math.floor(Math.random() * 6);
    const img = new Image();
    img.src = diceImages[diceNumber];
    img.onload = () => {
      setImage(diceImages[diceNumber]);
      if (selectedNumber === diceNumber + 1) {
        setTotalScore((prev) => prev + diceNumber + 1);
      } else {
        setTotalScore((prev) => prev - 2);
      }

      setIsLoading(false);
    };
  };

  return (
    <div>
      <Button
        className="text-white bg-black hover:bg-white hover:text-black m-4"
        variant="shadow"
        onPress={() => navigate("/")}
      >
        Main Menu
      </Button>
      <div className="flex justify-between">
        <div className="text-6xl w-[25vw] h-[25vh] items-center justify-center flex flex-col">
          {TotalScore} <br />
          <h1 className="text-2xl">Total Score</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 mr-[10vw] mt-[10vh]">
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <div
                key={number}
                onClick={() => handleNumberClick(number)}
                className={`w-[50px] h-[50px] border-2 border-black flex items-center justify-center cursor-pointer transition-colors
                  ${
                    selectedNumber === number
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
              >
                {number}
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-2xl">Select Number</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-center gap-2">
        <img className="w-[150px] h-[150px]" src={image} alt="dice1" />
        <Button
          onPress={handleDice}
          color="primary"
          variant="shadow"
          isLoading={islodaing}
        >
          Click to Roll the Dice
        </Button>
        <div className="text-red-600">
          {showError && "Kindly Select a number"}
        </div>
        <Button
          className="text-white bg-black hover:bg-white hover:text-black"
          variant="shadow"
          onPress={() => setTotalScore(0)}
        >
          Reset Score
        </Button>
        <Button
          className="text-white bg-black hover:bg-white hover:text-black"
          variant="shadow"
          onPress={() => setRules(!rules)}
        >
          {rules ? "Hide Rules" : "Show Rules"}
        </Button>
        <div className={`ml-2 ${rules ? "" : "hidden"}`}>
          <h1 className="text-2xl text-black font-bold">
            How to play dice game
          </h1>
          <h3>
            Select any number and roll the dice. <br />
            If selected number is same a dice number then it will be added to
            score. <br />
            If it's not then 2 scores are depleted from total score.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Game;
