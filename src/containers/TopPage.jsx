import "../styles/TopPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideMenue from "../components/SideBar/SideMenue";
import Contents from "../components/Contents/Contents";

export default TopPage = () => {
  return (
    <>
      <SideMenue />
      <Contents />
    </>
  );
};
