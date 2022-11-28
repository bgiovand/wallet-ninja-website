import Image from 'next/image';
import * as React from 'react';

import Fountain from '@/components/EmojiPop';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  // testimonials about getting crypto back
  const testimonials = [
    {
      quote: 'I got my crypto back! Thank you so much!',
      blockchain: 'ethereum',
      type: 'Pre-sale',
      amount: '1,000',
    },
    {
      quote: 'I got my crypto back! Thank you so much! ',
      blockchain: 'bitcoin',
      type: 'Blockchain.com',
      amount: '22',
    },
  ];

  const tokens = [
    'Bitcoin',
    'Ethereum',
    'Cardano',
    'Polkadot',
    'Uniswap',
    'Chainlink',
    'Solana',
    'Litecoin',
    'Filecoin',
    'Stellar',
  ];

  const process = [
    {
      title: 'Screen',
      description:
        'Even if you think all is lost… reach out! We fancy ourselves digital detectives / hackers and see obstacles as challenges — while we won’t make any promises most times what seems impossible, is possible. We like to build trust and do screening as a video call so we can put faces to names. We understand the gravity of you having to provide us, relative strangers, with private valuable information so it’s important to build rapport.',
      icon: '/images/process/screen.svg',
    },
    {
      title: 'Discovery',
      description:
        'Once we have determined initial viability we can dive deeper by gathering as much information as possible. No morsel is too small or insignificant when it comes to this stage. We’re kind of like a ghost writer to the story of your lost wallet.',
      icon: '/images/process/discovery.svg',
    },
    {
      title: 'Contract',
      description:
        'We send a human readable legal contract for the benefit of both parties.',
      icon: '/images/process/contract.svg',
    },
    {
      title: 'Work',
      description:
        'We begin our pass-war using the many proprietary tools and processes we have developed.',
      icon: '/images/process/battle.svg',
    },
    {
      title: 'Feedback',
      description:
        "The unfortunate thing about password or private key recovery is the inability to see or track any progress. Binary by definition, it's either solved or isn't. However, we still like to maintain regular communication so you know what’s going on and there’s always hope we may trigger additional pertinent information.",
      icon: '/images/process/feedback.svg',
    },
  ];

  const specialities = [
    {
      blockchain: 'Bitcoin',
      description:
        'We have a deep understanding of the Bitcoin protocol and how it works. We have a deep understanding of the Bitcoin protocol and how it works.',
      icon: '/images/bitcoin.svg',
      wallets: [
        {
          name: 'Bitcoin Core',
          icon: '/images/wallets/bitcoin-core.svg',
        },
        {
          name: 'Electrum',
          icon: '/images/wallets/electrum.svg',
        },
        {
          name: 'Blockchain.com',
          icon: '/images/wallets/blockchain.svg',
        },
        {
          name: 'Ledger',
          icon: '/images/wallets/ledger.svg',
        },
      ],
    },
    {
      blockchain: 'Ethereum',
      description:
        'We have a deep understanding of the Ethereum protocol and how it works. We have a deep understanding of the Ethereum protocol and how it works.',
      icon: '/images/ethereum.svg',
      wallets: [
        {
          name: 'Pre-sale',
          icon: '/images/wallets/pre-sale.svg',
        },
        {
          name: 'Metamask',
          icon: '/images/wallets/metamask.svg',
        },
        {
          name: 'MyEtherWallet',
          icon: '/images/wallets/myetherwallet.svg',
        },
        {
          name: 'Coinbase',
          icon: '/images/wallets/coinbase.svg',
        },
        {
          name: 'Ledger',
          icon: '/images/wallets/ledger.svg',
        },
      ],
    },
  ];

  const faqs = [
    {
      question: 'How much does it cost?',
      answer:
        'Between 15-30% depending on a lot of different variables. Most companies use a single percentage but we treat every case differently and we don’t want one clients spoils subsidizing another’s. We will be transparent about why one case might cost more than another but it always comes down to the money invested, wether time, hardware, programming etc.',
    },
    {
      question: 'How do you do it?',
      answer:
        'We can’t really tell you without giving away our secret. It’s not like we really have a secret sauce… more that we build each burger to order for each person…. including the bun and the sauce from scratch. Other companies just use existing open source tools.. which is kind of like McDonalds in our burger analogy. So long story short… we really just cater everything around each individual job - this is also why we have a variable pricing model.',
    },
    {
      question: 'How long does it take?',
      answer:
        'It depends on the complexity of the case. We have solved some in a few hours and others in a few months. We will always be transparent about the time frame and will give you an estimate before we begin.',
    },
    {
      question: 'What if I don’t have the original wallet?',
      answer:
        'We can still help. We have a lot of experience with recovering wallets from seed phrases, mnemonic phrases, and even brain wallets.',
    },
    {
      question: 'How do i know i can trust you?',
      answer:
        "The short and honest answer is, you can't. The long answer is we hope our past work speaks for itself. We have a lot of experience and a lot of satisfied customers. We are also happy to provide references and we can even do a video call to put faces to names.",
    },
  ];

  const advantages = [
    "We have a quiver of open source software we've modified specifically for cracking crypto wallets",
    'We own our hardware so your keys never leave our possession',
    'We write or modify software for each use case',
    "We have a background in OPSec and a strong understanding of the psychology behind what goes into not only making a password, but what's recollecting or missed about old forgotten ones.",
  ];

  const values = [
    {
      title: 'Privacy',
      description:
        'We always maintain the privacy of our clients and their coins',
    },
    {
      title: 'Security',
      description:
        'We run our own local hardware with a background in OPSec for large billion dollar companies',
    },
    {
      title: 'Curiosity',
      description:
        'We are fascinated by the cross section of psychology and tech',
    },
  ];

  React.useEffect(() => {
    new Fountain();
  }, []);

  return (
    <Layout>
      <Seo />

      <main id='confetti'>
        <section className='p-20'>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h1 className='mt-4 text-9xl'>🥷💰</h1>
            <h1 className='mt-10'>Wallet Ninja</h1>
          </div>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h2 className='mt-4'>We recover your lost crypto</h2>
            <p className='mt-4 text-2xl'>
              We are a team of hackers and crypto enthusiasts who have a passion
              for recovering lost crypto. We have a deep understanding of the
              inner workings of the most popular crypto wallets and how they
              work.
            </p>
          </div>
        </section>

        <section className='bg-white'>
          <div className=' layout flex flex-col items-center justify-center text-center'>
            <h2 className='mt-4'>Our Process</h2>
            <ul className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {process.map((item, index) => (
                <li
                  key={index}
                  className='flex flex-col items-center rounded-lg border border-gray-200 p-4 text-center shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md'
                >
                  <Image
                    src={
                      item.icon ? item.icon : '/images/process/placeholder.svg'
                    }
                    width={100}
                    height={100}
                    alt=''
                    className='h-20 w-20'
                  />
                  <h3>
                    {`${index + 1}.`} {item.title}
                  </h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='bg-white'>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h2 className='mt-4'>Our Specialities</h2>
            <ul className='mt-4'>
              {specialities.map((item, index) => (
                <li key={index} className='flex flex-col items-center'>
                  <Image
                    src={
                      item.icon
                        ? item.icon
                        : '/images/specialities/placeholder.svg'
                    }
                    width={100}
                    height={100}
                    alt=''
                  />
                  <h3>{item.blockchain}</h3>
                  <p>{item.description}</p>
                  <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                    {item.wallets.map((wallet, index) => (
                      <li
                        key={index}
                        className='flex flex-col items-center rounded-lg border border-gray-200 p-4 text-center shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md'
                      >
                        <Image
                          src={
                            wallet.icon
                              ? wallet.icon
                              : '/images/specialities/placeholder.svg'
                          }
                          width={20}
                          height={20}
                          alt=''
                          className='h-15 w-15 float-left'
                        />
                        <span className='float-right mt-4'>{wallet.name}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h2 className='mt-4'>FAQs</h2>
            <ul className='mt-4'>
              {faqs.map((item, index) => (
                <li key={index} className='flex flex-col items-center'>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='bg-white'>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h2 className='mt-4'>Why choose us?</h2>
            <ul className='mt-4'>
              {advantages.map((item, index) => (
                <li key={index} className='flex flex-col items-center'>
                  <h3 className=' '>{item}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h2 className='mt-4'>Our Values</h2>
            <ul className=' mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {values.map((item, index) => (
                <li key={index} className='flex flex-col items-center'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='bg-white' id='testimonials'>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h2 className='mt-4'>Testimonials</h2>
            <ul className='m-10 mt-4 flex flex-row flex-wrap items-center justify-center text-center '>
              {testimonials.map((item, index) => (
                <li
                  key={index}
                  className='flex w-4/12 flex-col items-center px-10'
                >
                  <span className='before:conent-["“"] mb-5 text-2xl italic'>
                    {item.quote}
                  </span>
                  <Image
                    src={`/images/${item.blockchain}.svg`}
                    width={20}
                    height={20}
                    alt=''
                    className='h-10 w-10 rounded-full  bg-gray-200 p-2'
                  />
                  <div className='font-bold capitalize'>
                    <span className='after:content-["*"]'>
                      {item.blockchain}
                    </span>
                    <span className=''>{item.type}</span>
                  </div>

                  <span>{`${item.amount}`}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id='contact-form'>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h2 className='mt-4'>Contact Us</h2>
            <p className='mt-4'>
              We are always happy to answer any questions you may have.
            </p>

            <form
              name='contact'
              method='POST'
              data-netlify='true'
              className='mt-4'
            >
              <input type='hidden' name='form-name' value='contact' />
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='mt-2 rounded border border-gray-300 p-2'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='mt-2 rounded border border-gray-300 p-2'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <label htmlFor='phone'>Phone</label>
                  <input
                    type='tel'
                    name='phone'
                    id='phone'
                    className='mt-2 rounded border border-gray-300 p-2'
                  />
                </div>

                <div className='flex flex-row items-center justify-center'>
                  <div className='flex flex-col'>
                    <label htmlFor='token-amount'>Token Amount</label>
                    <input
                      type='number'
                      name='token-amount'
                      id='token-amount'
                      className='mt-2 rounded border border-gray-300 p-2'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor='token-type'>Token Type</label>
                    <input
                      type='text'
                      name='token-type'
                      id='token-type'
                      className='mt-2 rounded border border-gray-300 p-2'
                    />
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    name='message'
                    id='message'
                    rows='5'
                    className='mt-2 rounded border border-gray-300 p-2'
                  />
                </div>
                <button
                  type='submit'
                  className='mt-4 rounded bg-blue-500 p-2 text-white'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
