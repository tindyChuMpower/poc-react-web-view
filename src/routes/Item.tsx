import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TItem } from "./Items";

export default function Item() {
  const initItem: TItem = { id: 0, name: "" };
  const [item, setItem] = useState<TItem>(initItem);
  const params = useParams<{ id: string }>();
  console.log(params);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.PUBLIC_URL + "/mock/items.json");
      const json: TItem[] = await response.json();
      const item = json.find((item) => item.id.toString() === params.id);
      setItem(item || initItem);
    })();
  }, []);

  return (
    <div>
      <h1>{item.name}</h1>
      <div>{item.id}</div>
    </div>
  );
}
