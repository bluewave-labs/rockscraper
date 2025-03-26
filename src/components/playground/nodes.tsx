"use client";
import { useState } from "react";
import Radio from "../ui/radio";
import Select from "../ui/select";
import style from "./playground.module.scss";

const countries = ["USA", "Canada", "Mexico", "Brazil", "Argentina", "Chile"];
const continents = [
  "North America",
  "South America",
  "Europe",
  "Asia",
  "Africa",
];

const Nodes = () => {
  const [option, setOption] = useState<"random" | "continent" | "country">(
    "random"
  );
  const [continent, setContinent] = useState<string>(continents[0]);
  const [country, setCountry] = useState<string>(countries[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.value as "random" | "continent" | "country");
  };

  return (
    <div className={style.play__nodes}>
      <h2 className={style.play__title}>Manage nodes</h2>
      <label htmlFor='random' className={style["play__checkbox--label"]}>
        <Radio
          checked={option === "random"}
          name='node'
          value='random'
          id='random'
          onChange={handleChange}
        />
        <span>Randomize IPs</span>
      </label>
      <div>
        <label htmlFor='continent' className={style["play__checkbox--label"]}>
          <Radio
            checked={option === "continent"}
            name='node'
            value='continent'
            id='continent'
            onChange={handleChange}
          />
          <span>Select from a group of continents</span>
        </label>
        <Select
          selected={continent}
          list={continents}
          onChange={(val) => setContinent(val)}
        />
      </div>
      <div>
        <label htmlFor='country' className={style["play__checkbox--label"]}>
          <Radio
            checked={option === "country"}
            name='node'
            value='country'
            id='country'
            onChange={handleChange}
          />
          <span>Select from a group of countries</span>
        </label>
        <Select
          selected={country}
          list={countries}
          onChange={(val) => setCountry(val)}
        />
      </div>
    </div>
  );
};

export default Nodes;
