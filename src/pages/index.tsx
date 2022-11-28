import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Fountain from '@/components/EmojiPop';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  // testimonials about getting crypto back
  const testimonials = [
    {
      quote: 'I got my crypto back! Thank you so much!',
      blockchain: 'ETH',
      icon: 'ethereum',
      type: 'Pre-sale Wallet',
      amount: '820',
    },
    {
      quote: 'I got my crypto back! Thank you so much! ',
      blockchain: 'BTC',
      icon: 'bitcoin',
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
      icon: '🪟',
    },
    {
      title: 'Discovery',
      description:
        'Once we have determined initial viability we can dive deeper by gathering as much information as possible. No morsel is too small or insignificant when it comes to this stage. We’re kind of like a ghost writer to the story of your lost wallet.',
      icon: '🔭',
    },
    {
      title: 'Contract',
      description:
        'We send a human readable legal contract for the benefit of both parties.',
      icon: '📝',
    },
    {
      title: 'Work',
      description:
        'We begin our pass-war using the many proprietary tools and processes we have developed.',
      icon: '💼',
    },
    {
      title: 'Feedback',
      description:
        "The unfortunate thing about password or private key recovery is the inability to see or track any progress. Binary by definition, it's either solved or isn't. However, we still like to maintain regular communication so you know what’s going on and there’s always hope we may trigger additional pertinent information.",
      icon: '📢',
    },
    {
      title: 'Solved!',
      description:
        "We did it! We'll send your recovered coins to your new wallet and you can finally breathe a sigh of relief.",
      icon: '🎉',
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
        'It depends on the complexity of the case. We have solved some in a few hours and others in a few months. We will always be transparent about the time frame and will give you our best estimate before we begin.',
    },
    {
      question: 'What if I don’t have the original wallet?',
      answer:
        'We can still help. We have a lot of experience with recovering wallets from seed phrases, mnemonic phrases, and even brain wallets.',
    },
    {
      question: 'How do i know i can trust you?',
      answer:
        'We hope our past work speaks for itself in this regard. We have a lot of experience and a lot of satisfied customers. We are also happy to provide personal references and prefer video calls to put faces to names.',
    },
  ];

  const advantages = [
    'We own our hardware so your keys never leave our possession.',
    'We write and modify software for each use case and use artificial intelligence to speed up the process.',
    'We have a background in Operational Security (OPSec) and a strong understanding of the psychology behind what goes into not only making a password, but how to recollect old forgotten ones.',
  ];

  const values = [
    {
      icon: '👀',
      title: 'Privacy',
      description:
        'We always maintain the privacy of our clients and their coins',
    },
    {
      icon: '🔒',
      title: 'Security',
      description:
        'We run our own local hardware with a background in OPSec for large billion dollar companies',
    },
    {
      icon: '😼',
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

      <main id='confetti' className='min-h-full bg-gray-100'>
        <header className='flex flex-row  items-end justify-between px-10'>
          <h1 className='mt-10'>🥷 WalletNinja </h1>
          <Link
            href='#contact'
            className='rounded  bg-blue-500 p-5 px-10 font-bold text-white transition duration-300 hover:scale-105 hover:cursor-pointer hover:border-black hover:bg-black hover:font-bold hover:text-white hover:opacity-75 hover:shadow-lg'
          >
            Contact Us
          </Link>
          {/* <div className='flex flex-col items-end'>
            <ul id='navigation' className='flex'>
              <li className='mr-4'>
                <Link href='/'>Home</Link>
              </li>
            </ul>
          </div> */}
        </header>

        <section id='hero' className='py-20'>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h2 className='mb-10 mt-10 text-6xl'>
              <span className='mb-8 block text-8xl'>💰</span>
              Recover Your Coins
            </h2>
            <h3 className=' mb-28 w-8/12 text-3xl font-semibold'>
              WalletNinja is a team of hackers and crypto enthusiasts with a
              passion for recovering lost crypto.
            </h3>
            <p className='mt-4 mb-2 w-8/12 text-2xl'>
              We've recovered over $3,000,000 in crypto for our clients.
            </p>
            <p className='mb-10 w-8/12 text-2xl'>Let us do the same for you.</p>

            <div className='mb-20 mt-10'>
              <Link
                href='#contact'
                className='rounded bg-blue-500  p-6 px-8 text-2xl font-bold text-white transition duration-300 hover:scale-105 hover:cursor-pointer hover:border-black hover:bg-black hover:font-bold hover:text-white hover:opacity-75 hover:shadow-lg'
              >
                Recover Your Crypto
              </Link>
            </div>
          </div>
        </section>

        <section className='bg-slate-50 py-20'>
          <div
            className='layout flex flex-col items-center justify-center text-center'
            id='values'
          >
            <h2 className='mt-4'>Our Values</h2>
            <ul className='flex flex-col flex-wrap items-baseline justify-center text-center md:flex-row'>
              {values.map((item, index) => (
                <li
                  key={index}
                  className='align-center flex w-full flex-col justify-around p-5 md:w-1/3 '
                >
                  <span className='m-5 text-6xl'>{item.icon}</span>
                  <h3 className='mb-2'>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className=' bg-slate-200 py-20' id='testimonials'>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h2 className='mt-4'>Testimonials</h2>
            <ul className='m-10 mt-4 flex flex-row flex-wrap items-center justify-center text-center '>
              {testimonials.map((item, index) => (
                <li
                  key={index}
                  className='flex flex-col items-center px-10 md:w-4/12'
                >
                  <Image
                    src={`/images/${item.icon}.svg`}
                    width={20}
                    height={20}
                    alt=''
                    className='mb-4 h-10 w-10  rounded-full bg-slate-100 p-2'
                  />

                  <div className=''>
                    <div className='mb-2 inline-block pr-1'>{`${item.amount}`}</div>
                    <div className='inline-block capitalize'>
                      {item.blockchain}
                    </div>
                    <div className=' mb-1 rounded-md bg-slate-400 px-2 py-1 text-xs font-normal text-gray-100'>
                      {item.type}
                    </div>
                  </div>
                  <p className="relative my-3 text-2xl font-light italic before:absolute before:-top-2 before:-left-2 before:-z-10 before:block before:-translate-x-0 before:scale-[4] before:text-gray-400 before:opacity-20 before:content-['❝']">
                    {item.quote}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='bg-white py-20'>
          <div className=' layout flex flex-col items-center justify-center text-center'>
            <h2 className='mt-4'>Our Process</h2>
            <ul className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {process.map((item, index) => (
                <li
                  key={index}
                  className='flex flex-col items-center rounded-lg border border-gray-200 p-4 text-center shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md'
                >
                  {/* <Image
                    src={
                      item.icon ? item.icon : '/images/process/placeholder.svg'
                    }
                    width={100}
                    height={100}
                    alt=''
                    className='h-20 w-20'
                  /> */}
                  <span className='m-5 text-6xl'>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='bg-white py-20'>
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

        <section className='py-20' id='faq'>
          <div className='layout flex flex-col items-center justify-center text-center'>
            <h2 className='mt-4'>FAQs</h2>
            <ul className=' m-auto mt-4 flex flex-col items-center justify-center'>
              {faqs.map((item, index) => (
                <li
                  key={index}
                  className='flex flex-col items-center pb-10 md:w-8/12'
                >
                  <h3 className='mb-3'>{item.question}</h3>
                  <p>{item.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='bg-white py-20'>
          <div className='layout flex flex-col justify-between text-center align-text-top'>
            <h2 className='m-4'>Why choose us?</h2>
            <ul className=' flex flex-col md:flex-row '>
              {advantages.map((item, index) => (
                <li
                  key={index}
                  className='flex flex-col items-center p-4 md:w-1/3'
                >
                  <h3 className='h-16 w-16 rounded-xl bg-slate-400 text-4xl leading-[1.7] text-slate-100'>
                    {index + 1}
                  </h3>
                  <h3 className=''>{item}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id='contact-form' className='pb-40 pt-20'>
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
                    rows={5}
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
