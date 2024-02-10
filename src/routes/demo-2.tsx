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
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
              height: "100vh",
            }}
          >
            <ImagesStack progresses={progresses.current} />
          </div>
          <div
            style={{ display: "grid", placeItems: "center", height: "100vh" }}
          >
            <p style={{ fontSize: "4rem" }}>
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
      {images.map((image, index) => (
        <Screen key={image.src} onProgressChange={onProgressChange(index)} />
      ))}
    </div>
  );
}
