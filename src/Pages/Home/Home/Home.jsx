import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Reviews from "../Reviews/Reviews";
import RenownedDoctors from "../RenownedDoctors/RenownedDoctors";
import BiweeklyTips from "../BiweeklyTips/BiweeklyTips";
import LostAndFound from "../LostAndFound/LostAndFound";
import CalculateBMI from "../CalculateBMI/CalculateBMI";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PH Care | Home </title>       
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BiweeklyTips></BiweeklyTips>
      <CalculateBMI></CalculateBMI>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <RenownedDoctors></RenownedDoctors>
      <LostAndFound></LostAndFound>
      <Reviews></Reviews>
      
	
    </div>
  );
};

export default Home;
