import { MotionValue } from "framer-motion";
import { useRef } from "react";
import { images } from "../data";
import { Screen } from "../Screen";
import { ImagesStack } from "../ImagesStack";

export default function Demo1() {
  const progresses = useRef(
    images.map(() => {
      const motionValue = new MotionValue<number>();
      motionValue.set(0);

      return motionValue;
    }),
  );

  const onProgressChange = (index: number) => (value: number) => {
    progresses.current[index]?.set(value);
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            display: "grid",
            placeItems: "center",
            height: "100vh",
            width: "50%",
          }}
        >
          <ImagesStack progresses={progresses.current} />
        </div>
      </div>
      {images.map((image, index) => (
        <Screen key={image.src} onProgressChange={onProgressChange(index)}>
          <div
            style={{
              paddingLeft: "50%",
              display: "grid",
              minHeight: "100vh",
              placeItems: "center",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, eius
            vitae iste quis ab eligendi! Magni, saepe? Adipisci odit blanditiis
            quo, distinctio, magnam quasi explicabo enim animi at nobis maiores.
          </div>
        </Screen>
      ))}
    </div>
  );
}
