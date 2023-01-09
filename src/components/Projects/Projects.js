import React from "react";

import {
  BlogCard,
  CardTitle,
  CardDescription,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  UtilityList,
  Img,
  ImageBox,
  CardBox,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { practice } from "../../constants/constants";

const Projects = () => (
  <Section id="projects">
    <SectionDivider />

    <SectionTitle main>Team Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, introduce, intent, content, source, visit }) => (
          <BlogCard key={id}>
            <ImageBox>
              <Img src={image} />
            </ImageBox>

            <div>
              <CardInfo>
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>

                <CardBox>
                  <CardTitle>{`프로젝트${"\n"}소개`}</CardTitle>
                  <CardDescription>{introduce}</CardDescription>
                </CardBox>

                <CardBox>
                  <CardTitle>{`개발${"\n"}의도`}</CardTitle>
                  <CardDescription>{intent}</CardDescription>
                </CardBox>

                <CardBox>
                  <CardTitle>{`개발${"\n"}기능`}</CardTitle>
                  <CardDescription>{content}</CardDescription>
                </CardBox>
              </CardInfo>
              <br />

              <UtilityList>
                <ExternalLinks href={visit} target="_blank">
                  깃허브
                </ExternalLinks>
                <ExternalLinks href={source} target="_blank">
                  개발 과정
                </ExternalLinks>
              </UtilityList>
            </div>
          </BlogCard>
        )
      )}
    </GridContainer>
    <SectionDivider style={{ marginTop: "5rem" }} />
    <SectionTitle main>Running</SectionTitle>
    <GridContainer>
      {practice.map(
        ({ id, image, title, introduce, intent, content, source, visit }) => (
          <BlogCard key={id}>
            <ImageBox>
              <Img src={image} />
            </ImageBox>

            <div>
              <CardInfo>
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardBox>
                  <CardTitle>{`프로젝트${"\n"}소개`}</CardTitle>
                  <CardDescription>{introduce}</CardDescription>
                </CardBox>

                <CardBox>
                  <CardTitle>{`개발${"\n"}의도`}</CardTitle>
                  <CardDescription>{intent}</CardDescription>
                </CardBox>

                <CardBox>
                  <CardTitle>{`개발${"\n"}기능`}</CardTitle>
                  <CardDescription>{content}</CardDescription>
                </CardBox>
              </CardInfo>
              <br />

              <UtilityList>
                <ExternalLinks href={visit} target="_blank">
                  깃허브
                </ExternalLinks>
                <ExternalLinks href={source} target="_blank">
                  배포 사이트
                </ExternalLinks>
              </UtilityList>
            </div>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
