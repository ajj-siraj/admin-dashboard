import Header from "../components/Header";
import ContentArea from "../components/ContentArea";
import SideNav from "../components/SideNav";

function Main() {
  return (
    <>
      <div className="flex">
        <SideNav />
        <ContentArea />
      </div>
    </>
  );
}

export default Main;
