
import dices from "../assets/dices.png";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router";
function MainMenu() {
  const diceImage = dices;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      <img
        className="w-full max-w-[500px] h-auto object-contain md:w-[70vw] md:h-[60vh] mt-[5vh] md:mt-[10vh]"
        src={diceImage}
        alt="dices"
      />
      <div className="text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-4xl md:text-8xl font-bold md:mt-[35vh]">
          Dice Game
        </h1>{" "}
        <br />
        <Button
          className="text-white bg-black hover:bg-white hover:text-black"
          variant="shadow"
          onPress={() => navigate("/game")}
        >
          Play Game
        </Button>
      </div>
    </div>
  );
}

export default MainMenu;
