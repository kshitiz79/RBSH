import { useState } from "react";
import HoverComponent from "./components/HoverComponent";
import ImageSwitcher from "./components/ImageSwitcher";
import { MultiColorMouseParallax } from "./components/MultiColorMouseParallax";
import Nav from "./components/Nav";
import ToggleBox from "./components/ToggleBox";
import ToggleSwitch from "./components/ToggleSwitch";

function ServiceBanner({ gradientName }) {
  // Lift the dark mode state up here.
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
      <div>
        {/* Pass the gradientName and isDark prop to Nav */}
        <Nav gradientName={gradientName} isDark={isDark} />
        {/* Pass the dark mode state and updater to ToggleSwitch */}
        <ToggleSwitch isDark={isDark} setIsDark={setIsDark} />
      </div>
      <div className="flex flex-row">
        <ToggleBox />
        <ImageSwitcher />
      </div>
      <div>
        <HoverComponent />
        <MultiColorMouseParallax gradientName={gradientName} />
      </div>
    </div>
  );
}

export default ServiceBanner;
