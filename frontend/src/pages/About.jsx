import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around gap-12 px-6 md:px-16 py-16 bg-(--color-bg) transition-colors duration-300 h-screen">
      {/* Right column */}
      <div className="relative w-full max-w-sm h-105 flex items-center justify-center">
        {/* Blob background */}
        <div className="relative flex items-center justify-center">
          <div
            className="w-130 h-120 rounded-[19%] rotate-6
            bg-(--color-box)
            transition duration-300"
          />
        </div>

        {/* Lottie animation */}
        <div className="absolute w-170 h-170">
          <DotLottieReact
      src="https://lottie.host/a05e6c40-328d-48ea-b550-3d08a27e8d45/7DCW1vkqYV.lottie"
      loop
      autoplay
    />
        </div>
      </div>

      {/* Left column */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-(--color-text)">
          About <span className="text-(--color-accent)">Us</span>
        </h1>

        <p className="mt-5 text-(--color-text-muted) text-base leading-relaxed text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, officia
          ullam et fuga, fugit odio voluptatem saepe eveniet vel dolore vitae
          iste? Eveniet quas, recusandae dolore harum sint aperiam obcaecati
          repellendus atque earum alias tempora porro sunt dicta nobis. Qui
          repudiandae, similique quos non soluta, amet nemo pariatur delectus
          maiores deserunt ducimus eum laborum voluptate molestiae quas? Eius
          voluptate consequatur doloribus debitis autem impedit, maiores,
          aliquid dolorum in, molestias laudantium unde reprehenderit sunt
          tempore veniam repudiandae qui repellat! Et ea suscipit laboriosam
          excepturi dolor voluptatum eligendi minima sequi, optio recusandae
          autem minus vero eaque libero itaque iusto ipsam officiis error.
        </p>

        <div className="mt-8 flex items-center gap-10">
          <button
            className="px-8 py-3 rounded-full text-white font-medium
            bg-(--color-primary) hover:opacity-90 transition-opacity"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;