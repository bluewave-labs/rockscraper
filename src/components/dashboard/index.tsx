import marker from "@src/assets/marker.svg";
import rocket from "@src/assets/rocket.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@src/components/ui/card";
import { DOCUMENTATION, GET_TOKENS } from "@src/utils/links";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import style from "./dashboard.module.scss";
import ScrapeChart from "./scrape-chart";
import UPTChart from "./upt-chart";

const Dashboard = () => {
  return (
    <div className={style.main}>
      <div className={style.main__container}>
        <Card>
          <CardTitle>Your trial will expire on</CardTitle>
          <CardDescription>22 February 2025</CardDescription>
        </Card>
        <Card>
          <CardTitle>Your API key</CardTitle>
          <CardDescription>sk-abcdefghijklmnopqrstuvwxy23456</CardDescription>
        </Card>
      </div>
      <div className={style.main__container}>
        <ScrapeChart />
        <UPTChart />
      </div>
      <div className={style.main__doc}>
        <div className={style["main__doc--left"]}>
          <h3 className={style["main__doc--title"]}>
            <Image src={rocket} alt='Rocket' width={24} height={24} />
            <span>Get started with PrismCrawler</span>
          </h3>
          <p className={style["main__doc--desc"]}>
            Using PrismCrawler takes a short time, but it’s always worth reading
            documentation before you start crawling web pages.
          </p>
        </div>
        <Button asChild>
          <a href={DOCUMENTATION}>Get started</a>
        </Button>
      </div>
      <div className={style.main__cta}>
        <h3 className={style["main__cta--title"]}>
          <Image src={marker} alt='Marker' width={24} height={24} />
          <span>Next up...</span>
        </h3>
        <div className={style["main__cta--container"]}>
          <Card variant='clickable' asChild>
            <a href={GET_TOKENS}>
              <CardTitle>Top up $UPT tokens to your account</CardTitle>
              <CardContent>
                <CardDescription>
                  PrismCrawler works with $UPT tokens. Connect your wallet and
                  start scraping web content.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant='link' size='sm'>
                  Get $UPT <ArrowUpRight />
                </Button>
              </CardFooter>
            </a>
          </Card>
          <Card variant='clickable' asChild>
            <Link href='/playground'>
              <CardTitle>Start running crawlers and scrape data</CardTitle>
              <CardContent>
                <CardDescription>
                  Start with a simple crawler and be amazed with how Uprock’s
                  PrismCrawler scrapes data effectively.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant='link'>
                  Run crawler <ArrowUpRight />
                </Button>
              </CardFooter>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
