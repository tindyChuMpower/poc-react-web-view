import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyLink from "../components/MyLink";

export type TItem = {
  id: number;
  name: string;
};

export default function Items() {
  const navigate = useNavigate();
  const location = useLocation();

  const [items, setItems] = useState<TItem[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.PUBLIC_URL + "/mock/items.json");
      const json: TItem[] = await response.json();
      setItems(json);
    })();
  }, []);

  return (
    <>
      <h1>Item</h1>
      <div className="items">
        {items.map(({ id, name }) => (
          <MyLink key={id + Math.random()} to={`${location.pathname}/${id}`}>
            <div className="items__element" data-id={id}>
              <span>{id}</span>
              <span> {name}</span>
            </div>
          </MyLink>
        ))}
      </div>
    </>
  );
}
