import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../Home/MenuCategory/MenuCategory";
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg'
import menuImg from '../../assets/menu/menu-bg.png'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'





const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item =>item.category ==='dessert');
  const soup = menu.filter(item =>item.category ==='soup');
  const salad = menu.filter(item =>item.category ==='salad');
  const pizza = menu.filter(item =>item.category ==='pizza');
  const offered = menu.filter(item =>item.category ==='offered');
  return (
    <div>
      <Helmet>
        <title>PH Care | Portal </title>
      </Helmet> 
      <Cover img={menuImg} title="PH Menu" ></Cover>
      <SectionTitle subHeading="Today's Offer" heading="Don't Miss"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
      items={dessert}
      title="Dessert"
      img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
      
      
   
 
    </div>
  );
};

export default Menu;
