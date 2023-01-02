import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 5, text: "팀 프로젝트" },
  { number: 1, text: "개인 프로젝트" },
  { number: "40+", text: "깃허브 저장소" },
  { number: "18", text: "블로깅" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
          <BoxNum>{card.number}</BoxNum>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
