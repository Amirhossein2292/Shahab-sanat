import React from 'react';
import { DiFirebase, DiReact, DiZend,  } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>خدمات</SectionTitle>
    <SectionText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corrupti, ea expedita magnam exercitationem aspernatur laborum earum vel. Ducimus repudiandae explicabo maiores iste odio numquam eveniet, modi aut tempore error.
    </SectionText>

    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>خدمات ماشین کاری</ListTitle>
          <ListParagraph>
            Experience with <br />
            Catia
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>  طراحی وساخت</ListTitle>
          <ListParagraph>
            Experience with <br />
            Catia
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle> ابر نقاط  </ListTitle>
          <ListParagraph>
            Experience with <br />
            Catia
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
