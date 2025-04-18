'use client';
import { Button } from '@bluewavelabs/prism-ui';
import marker from '@src/assets/marker.svg';
import rocket from '@src/assets/rocket.svg';
import { DOCUMENTATION, GET_TOKENS } from '@src/utils/links';
import Image from 'next/image';
import Link from 'next/link';
import ActionCard from './action-card';
import style from './dashboard.module.scss';
import InfoCard from './info-card';
import ScrapeChart from './scrape-chart';
import UPTChart from './upt-chart';

const Dashboard = () => {
  return (
    <div className={style.main}>
      <div className={style.main__container}>
        <InfoCard title="Your trial will expire on" description="22 February 2025" />
        <InfoCard title="Your API key" description="sk-abcdefghijklmnopqrstuvwxy23456" />
      </div>

      <div className={style.main__container}>
        <ScrapeChart />
        <UPTChart />
      </div>

      <div className={style.main__doc}>
        <div className={style['main__doc--left']}>
          <h3 className={style['main__doc--title']}>
            <Image src={rocket} alt="Rocket" width={24} height={24} />
            <span>Get started with PrismCrawler</span>
          </h3>
          <p className={style['main__doc--desc']}>
            Using PrismCrawler takes a short time, but it’s always worth reading the documentation before you start
            crawling web pages.
          </p>
        </div>
        <Button asChild>
          <Link href={DOCUMENTATION}>Get started</Link>
        </Button>
      </div>

      <div className={style.main__cta}>
        <h3 className={style['main__cta--title']}>
          <Image src={marker} alt="Marker" width={24} height={24} />
          <span>Next up...</span>
        </h3>
        <div className={style['main__cta--container']}>
          <ActionCard
            title="Top up $UPT tokens to your account"
            description="PrismCrawler works with $UPT tokens. Connect your wallet and start scraping web content."
            href={GET_TOKENS}
            buttonText="Get $UPT"
          />
          <ActionCard
            title="Start running crawlers and scrape data"
            description="Start with a simple crawler and be amazed with how Uprock’s PrismCrawler scrapes data effectively."
            href="/playground"
            buttonText="Run crawler"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
