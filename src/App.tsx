import MyLink from "./components/MyLink";

export default function App() {
  return (
    <div>
      <h1>Web</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <MyLink to="/items" id="items-link">
          Items link
        </MyLink>
      </nav>
    </div>
  );
}
