import rocket from "@src/assets/rocket.svg";
import { Card, CardDescription, CardTitle } from "@src/components/ui/card";
import { DOCUMENTATION } from "@src/utils/links";
import Image from "next/image";
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
    </div>
  );
};

export default Dashboard;
