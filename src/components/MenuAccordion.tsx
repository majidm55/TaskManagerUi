import NestedList from "./MenuList";

export default function MenuAccordion() {
  return (
    <div
      style={{
        width: "220px",
        height: "calc(100vh - 54px)",
        backgroundColor: "#252218",
        overflow: "hidden",
      }}
    >
      <NestedList />
    </div>
  );
}
