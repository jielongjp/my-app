import type { NextPage } from "next";
import { Template } from "../components/templates";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Template title="test">
      <div className="main">
        <StTextBox>
          <p>React初心者向け講座</p>
        </StTextBox>
      </div>
    </Template>
  );
};

export default Home;

const StTextBox = styled.div`
  background-color: #ffffff;
  border: 1px solid grey;
  border-radius: 2px;
  padding: 12px;
  margin: 12px;
  font-weight: bold;
`;
