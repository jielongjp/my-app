import { FC } from "react";
import styled from "styled-components";

export type TagList = { id: string; value: string }[];

type Props = {
  tag: string[];
  tagList: TagList;
  handleClearTag: () => void;
  handlePushTag: (clickedTag: string) => void;
};

export const TagArea: FC<Props> = ({
  tag,
  tagList,
  handleClearTag,
  handlePushTag,
}) => {
  return (
    <StWrapper>
      <StSelectedTagAreaWrapper>
        <StSelectedTagArea>
          {tag.map((t) => (
            <StTag key={t}>{t}</StTag>
          ))}
        </StSelectedTagArea>
        <div onClick={handleClearTag}>×</div>
      </StSelectedTagAreaWrapper>
      <StSelectAreaWrapper>
        <StSelectArea>
          {tagList.map((t) => (
            <StSelectText key={t.value} onClick={() => handlePushTag(t.value)}>
              {t.value}
            </StSelectText>
          ))}
        </StSelectArea>
      </StSelectAreaWrapper>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  display: flex;
`;

const StSelectedTagAreaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StSelectedTagArea = styled.ul`
  display: flex;
`;

const StTag = styled.li`
  background-color: rgb(27, 161, 255);
  color: #fff;
  border-radius: 24px;
  margin-right: 8px;
  padding: 4px 12px;
  font-size: 12px;
  height: fit-content;
`;

const StSelectAreaWrapper = styled.div`
  margin-top: 16px;
  border: 1px solid;
  padding: 0 8px;
`;
const StSelectArea = styled.ul`
  display: flex;
`;

const StSelectText = styled.li`
  margin-right: 8px;
`;
