import { Card, CardDescription, CardTitle } from "@src/components/ui/card";
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
    </div>
  );
};

export default Dashboard;
