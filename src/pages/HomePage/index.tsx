import * as React from "react";
import { Header } from "../../components/Header";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header userActive={false} darkMode={false} />
    </React.Fragment>
  );
};

export default Home;
