import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { CategorySelect } from "../../atoms/CategorySelect";

type SkillList = { id: string; value: string };

export const Techstack: FC = () => {
  const [skillList, setSkillList] = useState<SkillList[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const handleSkillClick = (skillValue: string) => {
    if (skills.includes(skillValue)) {
      setSkills((prevSkills) =>
        prevSkills.filter((skill) => skill !== skillValue)
      );
    } else {
      setSkills((prevSkills) => [...prevSkills, skillValue]);
    }
  };

  const handleRemoveTag = (skillValue: string) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillValue)
    );
  };

  useEffect(() => {
    if (selectedCategory !== null) {
      fetch(`/api/skill?categoryId=${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => setSkillList(data))
        .catch((error) => console.error("Error: ", error));
    }
  }, [selectedCategory]);

  return (
    <StTechstackRoot>
      <div>
        <CategorySelect handleCategoryChange={handleCategoryChange} />
        <StSkillList>
          {skillList.map((skill) => (
            <li key={skill.id} onClick={() => handleSkillClick(skill.value)}>
              {skill.value}
            </li>
          ))}
        </StSkillList>
      </div>
      <StSelectionList>
        {skills.map((t, index) => (
          <StTag key={index}>
            {t} <StRemoveTag onClick={() => handleRemoveTag(t)}>x</StRemoveTag>
          </StTag>
        ))}
      </StSelectionList>
    </StTechstackRoot>
  );
};

const StTechstackRoot = styled.div`
  display: flex;
  position: relative;
  min-height: 100px;
  padding: 12px;
`;

const StSkillList = styled.ul`
  list-style: none;
  font-size: 12px;
  margin-top: 8px;
`;

const StSelectionList = styled.ul`
  padding: 12px;
`;

const StTag = styled.li`
  background-color: rgb(27, 161, 255);
  color: #fff;
  border-radius: 24px;
  margin: 4px;
  padding: 4px 12px;
  font-size: 12px;
  display: flex;
  width: fit-content;
`;

const StRemoveTag = styled.div`
  font-size: 10px;
  padding-left: 6px;
  cursor: pointer;
`;
