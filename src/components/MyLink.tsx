import { useNavigate } from "react-router-dom";
import useQuery from "../hooks/query";

type TProps = {
  to: string;
  id?: string;
  className?: string;
  children?: JSX.Element[] | JSX.Element | string;
};

export default function MyLink({ to, id, children, className }: TProps) {
  const navigate = useNavigate();
  const query = useQuery();

  const handleClick = () => {
    if (!query.mobile) {
      navigate(to);
    }
  };

  return (
    <span
      data-to={to}
      id={id}
      className={className || "href"}
      onClick={handleClick}
    >
      {children}
    </span>
  );
}
