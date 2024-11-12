import { styled } from "@stitches/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-dvw h-dvh bg-zinc-950 flex flex-col items-center justify-center gap-10 p-8">
      <Title className="text-zinc-100 text-4xl text-center">
        Essa página está em construção!
      </Title>
      <Image
        src="/workInProgress.svg"
        alt="Guy working on a new idea represented by a lightbulb"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}

const Title = styled("h1", {
  fontWeight: "bold",
  margin: "10px",
  padding: "0",
});
