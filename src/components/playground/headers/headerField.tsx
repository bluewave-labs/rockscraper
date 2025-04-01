import { Input } from "@src/components/ui/input";
import { ChangeEvent } from "react";
import { usePlayground } from "../context";
import style from "./headers.module.scss";

const HeaderField = ({
  id,
  headerKey,
  value,
}: {
  id: string;
  headerKey: string;
  value: string;
}) => {
  const { headers, setHeaders } = usePlayground();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const { name, value } = e.target;
    let newHeader = headers.find((header) => header.id === id);
    const index = headers.findIndex((header) => header.id === id);
    if (!newHeader) return;
    if (name === "key") {
      newHeader = {
        ...newHeader,
        key: value,
      };
    } else {
      newHeader = {
        ...newHeader,
        value: value,
      };
    }
    const newHeaders = [...headers];
    newHeaders[index] = newHeader;
    setHeaders(newHeaders);
  };

  return (
    <div key={id} className={style["play__headers--item"]}>
      <Input
        placeholder='Header name'
        id={`key-${id}`}
        value={headerKey}
        name='key'
        onChange={(e) => handleChange(e, id)}
      />
      <Input
        placeholder='Header value'
        id={`value-${id}`}
        value={value}
        name='value'
        onChange={(e) => handleChange(e, id)}
      />
    </div>
  );
};

export default HeaderField;
