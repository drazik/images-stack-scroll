import { useMotionValueEvent, useScroll } from "framer-motion";
import { ReactNode, useRef } from "react";

export const Screen = ({
  onProgressChange,
  children,
}: {
  onProgressChange: (value: number) => void;
  children?: ReactNode;
}) => {
  const root = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", onProgressChange);

  return (
    <div
      ref={root}
      style={{
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};
