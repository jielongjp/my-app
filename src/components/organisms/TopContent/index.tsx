import { FC, useState } from "react";
import styled from "styled-components";
import { Counter } from "../../molecules/Counter";
import { TagArea, TagList } from "../../molecules/TagArea";

export const TopContent: FC = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  const [tag, setTag] = useState<string[]>([]);
  const handleClearTag = () => setTag([]);
  const handlePushTag = (clickedTag: string) => {
    if (tag.includes(clickedTag)) {
      setTag(tag.filter((t) => t !== clickedTag));
    } else {
      setTag([...tag, clickedTag]);
    }
  };

  const tagList: TagList = [
    { id: "tag1", value: "React" },
    { id: "tag2", value: "Vue.js" },
    { id: "tag3", value: "Angular" },
    { id: "tag4", value: "Next.js" },
    { id: "tag5", value: "Nuxt.js" },
    { id: "tag6", value: "jQuery" },
    { id: "tag7", value: "Gatsby.js" },
  ];

  return (
    <div>
      <StTextBox>
        <h1>react初心者向け講座</h1>
      </StTextBox>
      <StArticle>
        <StArticleTitle>カウント</StArticleTitle>
        <Counter
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </StArticle>
      <StArticle>
        <StArticleTitle>タグ</StArticleTitle>
        <TagArea
          tag={tag}
          tagList={tagList}
          handleClearTag={handleClearTag}
          handlePushTag={handlePushTag}
        />
      </StArticle>
    </div>
  );
};

const StTextBox = styled.div`
  background-color: #ffffff;
  border: 1px solid grey;
  border-radius: 2px;
  padding: 12px;
  margin: 12px;
  font-weight: bold;
`;

const StArticle = styled.div`
  background-color: #ffffff;
  border: 1px solid grey;
  border-radius: 2px;
  margin: 12px;
`;

const StArticleTitle = styled.div`
  padding: 12px;
  font-size: 14px;
`;
