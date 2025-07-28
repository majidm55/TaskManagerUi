import MenuAccordion from "../components/MenuAccordion";
import TopNav from "../components/TopNav";

export interface NavContainerProps {
  children: React.ReactNode;
}

export default function NavigationContainer({ children }: NavContainerProps) {
  return (
    <div className="layout-container">
      <div className="top-nav">
        <TopNav />
      </div>
      <div className="main-area">
        <div className="sidebar">
          <MenuAccordion />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
