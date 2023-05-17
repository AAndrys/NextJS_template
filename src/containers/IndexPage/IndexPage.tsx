import { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';
import { ISR_TIMEOUT } from 'utils/config';

import { CARDS_DATA_TEMPLATE } from './IndexPage.data';
import * as S from './IndexPage.styles';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: ISR_TIMEOUT,
  };
};

interface IndexPageProps {}

const IndexPage: FunctionComponent<IndexPageProps> = () => {
  return (
    <S.Main>
      <S.Description>
        <p>
          Get started by editing&nbsp;
          <S.Code>src/pages/index.tsx</S.Code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <S.VercelLogo
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
            />
          </a>
        </div>
      </S.Description>

      <S.Center>
        <S.Logo src="/next.svg" alt="Next.js Logo" width={180} height={37} />
      </S.Center>

      <S.Grid>
        {CARDS_DATA_TEMPLATE.map(({ href, title, desc }, idx) => (
          <S.Card
            key={title + idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>
              {title} <span>-&gt;</span>
            </h4>
            <p>{desc}</p>
          </S.Card>
        ))}
      </S.Grid>
      <small>Modified by AA &copy;</small>
    </S.Main>
  );
};

export default IndexPage;
