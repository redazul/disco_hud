import React from "react";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
import Content from "./components/Content/Content";
import MobileCont from "./components/MobileCont";

export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 481;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? (
    <MobileCont />
  ) : (
    <div className="App">
      <TopNav />
      <LeftNav />
      <Content />
    </div>
  );
}
