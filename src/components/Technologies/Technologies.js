import React from "react";
import {
  DiFirebase,
  DiMysql,
  DiNodejs,
  DiReact,
  DiWebplatform,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText style={{ fontSize: "20px" }}>
      블록체인 서비스 개발에 필요한 Web App을 위한
      <br />
      Front-end, Back-end, Solidity 모두 다뤄보았습니다.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="5rem" style={{ position: "relative", right: "-5px" }} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br /> Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <img
          src={"/images/solidity.png"}
          height="50px"
          width="50px"
          style={{ position: "relative", left: "-10px" }}
        />
        <ListContainer>
          <ListTitle>BlockChain</ListTitle>
          <ListParagraph>
            Experience with <br /> solidity
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
