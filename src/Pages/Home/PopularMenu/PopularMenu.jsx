import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
	const [menu]=useMenu();
	const popular = menu.filter(item =>item.category ==='popular');
	return (
		<section className="mb-12 px-10">
			<SectionTitle
			heading="What's Popular Here!"
			subHeading="Popular CAT Foods"
			></SectionTitle>
			<div className="grid md:grid-cols-2 gap-10">
				{
					popular.map(item=> <MenuItem
					key={item._id}
					item={item}
					></MenuItem>)
				}
			</div>
		</section>
	);
};

export default PopularMenu;