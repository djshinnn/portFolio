import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nowpadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Dongju Shin Portfolio
      </SectionTitle>
      <SectionText style={{ fontSize: "22px", fontWeight: "bold" }}>
        안녕하세요. 블록체인 프론트엔드 개발자를 희망하는 신동주입니다. <br />
        Web3 환경이 사용자 친화적인 환경이 될 수 있도록 기여하고 싶습니다.
      </SectionText>
      <Button onClick={() => window.open("https://velog.io/@tls980824")}>
        My Blog
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
