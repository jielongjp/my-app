import { FC, useState } from "react";
import { Template } from "../components/templates";
import styled from "styled-components";
import { TopContent } from "../components/organisms/TopContent";

const Home: FC = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <Template title="test">
      <TopContent />
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

const StCountBox = styled.div`
  background-color: #ffffff;
  border: 1px solid grey;
  border-radius: 2px;
  margin: 12px;
`;

const StArticle = styled.div``;
const StArticleTitle = styled.div`
  margin: 12px;
`;

const StCountWrapper = styled.div`
  padding: 8px 0;
  display: flex;
  width: 160px;
  justify-content: space-around;
`;

const StButton = styled.button`
  height: 32px;
  width: 32px;
  border: 1px solid #a6a6a6;
  border-radius: 3px;
`;
