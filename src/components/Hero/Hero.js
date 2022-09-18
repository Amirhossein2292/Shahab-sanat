import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        شرکت <br />
        شهاب صنعت
      </SectionTitle>
      <SectionText>
        طراحی و ساخت قطعات و قالب های صنعتی
      </SectionText>
      <Button onClick={() => {}}>ارتباط با ما</Button>
    </LeftSection>
  </Section>
);

export default Hero;