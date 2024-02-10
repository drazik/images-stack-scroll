import { MotionValue, motion, useTransform } from "framer-motion";
import { images } from "./data";

export function ImagesStack({
  progresses,
}: {
  progresses: Array<MotionValue<number>>;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateAreas: "overlap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {images.map((image, index) => (
        <Image
          key={image.src}
          {...image}
          progress={progresses[index]}
          index={index}
        />
      ))}
    </div>
  );
}

const Image = ({
  src,
  rotateValues,
  translateValues,
  progress,
  index,
}: {
  src: string;
  rotateValues: [number, number, number];
  translateValues: [number, number, number];
  progress: MotionValue<number>;
  index: number;
}) => {
  const rotate = useTransform(progress, [0, 0.5, 1], rotateValues);
  const translateX = useTransform(progress, [0, 0.5, 1], translateValues);
  const opacity = useTransform(progress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <motion.img
      src={src}
      alt={""}
      style={{
        rotate,
        translateX,
        opacity,
        height: 500,
        gridArea: "overlap",
        zIndex: -index,
        isolation: "isolate",
        border: "13px solid white",
        // @ts-expect-error custom property
        "--shadow-color": "16deg 14% 56%",
        boxShadow: shadows.medium,
      }}
    />
  );
};

const shadows = {
  high: `0.3px 0.3px 0.6px hsl(var(--shadow-color) / 0),
    3.9px 4.2px 8.6px hsl(var(--shadow-color) / 0.11),
    7px 7.5px 15.4px hsl(var(--shadow-color) / 0.22),
    10.3px 11px 22.6px hsl(var(--shadow-color) / 0.33),
    14.4px 15.5px 31.7px hsl(var(--shadow-color) / 0.44),
    20px 21.5px 44px hsl(var(--shadow-color) / 0.55),
    27.7px 29.8px 61px hsl(var(--shadow-color) / 0.66),
    38.3px 41.2px 84.4px hsl(var(--shadow-color) / 0.77)`,

  medium: `0.3px 0.3px 0.6px hsl(var(--shadow-color) / 0),
    1.6px 1.7px 3.5px hsl(var(--shadow-color) / 0.24),
    3.3px 3.5px 7.2px hsl(var(--shadow-color) / 0.47),
    6.8px 7.3px 15px hsl(var(--shadow-color) / 0.71)`,
};
