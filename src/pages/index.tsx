import * as React from 'react';

import Fountain from '@/components/EmojiPop';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  React.useEffect(() => {
    new Fountain();
  }, []);

  return (
    <Layout>
      <Seo />

      <main id='confetti'>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>
              🥷💰 <br /> Wallet Ninja
            </h1>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()}{' '}
              <UnderlineLink href='https://walletninja.me'>
                Wallet Ninja
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
