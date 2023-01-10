import React from "react";

import Typed from "react-typed";

import {
  Section,
  SectionName,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to
        <br />
        <SectionName>
          <Typed strings={["Dongju Shin Portfolio"]} typeSpeed={100} />
        </SectionName>
      </SectionTitle>
      <SectionText>
        안녕하세요. 프론트엔드 개발자를 희망하는 신동주입니다. <br />
        항상 유저를 중심으로 생각하여 사용자 친화적인 개발을 지향합니다.
      </SectionText>

      <div
        style={{
          display: "flex",
        }}
      >
        <Button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1_IiguQNHzG-y-tpcvnYehJkut-ye_00-/view"
            )
          }
        >
          이력서 보러가기
        </Button>

        <Button onClick={() => window.open("https://velog.io/@tls980824")}>
          블로그 보러가기
        </Button>
      </div>
    </LeftSection>
  </Section>
);

export default Hero;
