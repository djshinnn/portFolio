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
              "file:///Users/sindongju/Downloads/%EC%8B%A0%EB%8F%99%EC%A3%BC_%EC%9D%B4%EB%A0%A5%EC%84%9C(%EC%B5%9C%EC%A2%852).pdf"
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
