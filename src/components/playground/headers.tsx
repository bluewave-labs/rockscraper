"use client";
import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import style from "./headers.module.scss";
import mainStyle from './playground.module.scss'

const Headers = () => {
  const [headers, setHeaders] = useState<
    { key: string; value: string; id: string }[]
  >([{ key: "", value: "", id: Date.now().toString() }]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const newHeaders = [...headers];
    if (name === "key") {
      newHeaders[index] = {
        id: newHeaders[index].id,
        key: value,
        value: newHeaders[index].value,
      };
      setHeaders(newHeaders);
      return;
    }
    newHeaders[index] = {
      id: newHeaders[index].id,
      key: newHeaders[index].key,
      value,
    };
    console.log(newHeaders);
    setHeaders(newHeaders);
  };

  return (
    <div className={style.play__headers}>
      <label htmlFor='headers' className={mainStyle["play__label"]}>
        Custom headers{" "}
        <button
          onClick={() => {
            setHeaders([
              ...headers,
              { key: "", value: "", id: Date.now().toString() },
            ]);
          }}
          className={style["play__headers--add"]}
        >
          +
        </button>
      </label>
      {headers.length > 0 ? (
        <>
          {headers.map(({ key, value, id }, index) => (
            <div key={id} className={style["play__headers--item"]}>
              <Input
                placeholder='Header name'
                id={`key-${index}`}
                value={key}
                name='key'
                onChange={(e) => handleChange(e, index)}
              />
              <Input
                placeholder='Header value'
                id={`value-${index}`}
                value={value}
                name='value'
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ))}
        </>
      ) : (
        <div className={style["play__headers--item"]}>
          <Input
            placeholder='Header name'
            onChange={(e) => handleChange(e, 0)}
          />
          <Input
            placeholder='Header value'
            onChange={(e) => handleChange(e, 0)}
          />
        </div>
      )}
    </div>
  );
};

export default Headers;
