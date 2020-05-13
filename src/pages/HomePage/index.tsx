import * as React from "react";
import { Header } from "../../components/Header";
import { SliderHeader } from "../../components/SliderHeader";
import { Body } from "../../components/Body";
import { useSpring, animated } from "react-spring";

const Home: React.FC = () => {
  const springHeader = useSpring({
    opacity: 1,
    marginTop: 0,
    delay: 100,
    from: {
      marginTop: -30,
      opacity: 0,
    },
  });
  const springSliderHeader = useSpring({
    opacity: 1,
    marginLeft: 0,
    delay: 200,
    from: {
      marginLeft: -1350,
      opacity: 1,
    },
  });
  return (
    <React.Fragment>
      <animated.div style={springHeader}>
        <Header userActive={false} darkMode={false} />
      </animated.div>
      <animated.div style={springSliderHeader}>
        <SliderHeader />
      </animated.div>
      <Body />
    </React.Fragment>
  );
};

export default Home;
