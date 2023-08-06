import { HomeStyle } from "@/Components/Home/styled.ts";

export default function Home(): JSX.Element {
  return (
    <HomeStyle>
      <img
        onContextMenu={(e) => e.preventDefault()}
        src="/static/home.jpg"
        alt="Main image"
      />
    </HomeStyle>
  );
}
