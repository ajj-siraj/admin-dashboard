import Header from "./Header";
import ContentArea from "./ContentArea";
import SideNav from "./SideNav";

function Main() {
  return (
    <>
      <div className="grid grid-flow-row gap-0 grid-cols-12">
        <SideNav />
        <ContentArea />
      </div>
    </>
  );
}

export default Main;
