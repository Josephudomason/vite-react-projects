import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  noOfStars?: number;
}

export default function StarRating({ noOfStars = 5 }: StarRatingProps) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  function handleClick(getCurrentIndex: number) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex: number) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div className="flex justify-center items-center min-h-screen" onMouseLeave={handleMouseLeave}>
      {[...Array(noOfStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <FaStar
            key={starIndex}
            className={starIndex <= (hover || rating) ? "text-amber-300" : "text-black"}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            size={40}
          />
        );
      })}
    </div>
  );
}
