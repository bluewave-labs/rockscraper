import Playground from "@src/components/playground";
import { PlaygroundProvider } from "@src/components/playground/context";

export default function Home() {
  return (
    <PlaygroundProvider>
      <Playground />
    </PlaygroundProvider>
  );
}
