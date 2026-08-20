import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState, useEffect } from "react";
function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count === "0" ? "E-Learning" : `(${count}) E-Learning`;
  }, [count]);
  return (
    <div className="flex items-center justify-around gap-12 px-6 md:px-16 py-16 bg-(--color-bg) transition-colors duration-300 h-screen">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-(--color-text)">
          Investing in Knowledge and{" "}
          <span className="text-(--color-accent)">Your Future</span>
        </h1>

        <p className="mt-5 text-(--color-text-muted) text-base leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nobis
          maxime id aspernatur labore fuga tenetur doloribus aliquam debitis
          sapiente?
        </p>

        <div className="mt-8 flex items-center gap-10">
          <button onClick={() => setCount(count + 1)}
            className="px-8 py-3 rounded-full text-white font-medium
            bg-(--color-primary) hover:opacity-90 transition-opacity"
          >
            Contact
          </button>

          <div>
            <h1 className="text-2xl font-bold text-(--color-text)">50+</h1>
            <span className="text-sm text-(--color-text-muted)">
              Career Courses
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-(--color-text)">1M+</h1>
            <span className="text-sm text-(--color-text-muted)">
              Our Students
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-sm h-105 flex items-center justify-center">
        <div className="absolute flex items-center justify-center">
          <div
            className="w-120 h-120 rounded-[19%] rotate-6
            bg-(--color-box) transition duration-300"
          />
        </div>

        <div className="relative w-full h-110 flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/8c83367a-dc4d-4d1d-9779-bb859dca9a99/bDEarcL8yh.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
