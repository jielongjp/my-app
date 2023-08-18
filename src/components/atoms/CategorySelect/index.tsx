import { FC, useEffect, useState } from "react";
import styled from "styled-components";

type Category = {
  id: number;
  value: string;
};

export const CategorySelect: FC = ({ handleCategoryChange }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/category")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error: ", error));
  }, []);

  return (
    <StSelectBox onChange={(e) => handleCategoryChange(e.target.value)}>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.value}
        </option>
      ))}
    </StSelectBox>
  );
};

const StSelectBox = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: fit-content;
`;
