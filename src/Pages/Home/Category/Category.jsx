import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img6 from '../../../assets/Images/6.jpg';
import img7 from '../../../assets/Images/7.jpg';
import img8 from '../../../assets/Images/8.jpg';
import img9 from '../../../assets/Images/9.jpg';
import img10 from '../../../assets/Images/10.jpg';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";



const Category = () => {
  return (
	<section>
    <SectionTitle
    heading={"From 10am to 4pm"}  
    subHeading={"See Our Work for assurence"}

    >
      
    </SectionTitle>
		<Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24 mt-10"
	
    >
      <SwiperSlide>
		<img src={img6} alt="" />

	</SwiperSlide>
      <SwiperSlide>
		<img src={img7} alt="" />
	</SwiperSlide>
      <SwiperSlide>
		<img src={img8} alt="" /></SwiperSlide>
      <SwiperSlide>
		<img src={img9} alt="" />
	</SwiperSlide>
      <SwiperSlide>
		<img src={img10} alt="" />	
	</SwiperSlide>
 
    </Swiper>
	</section>
    
  );
};

export default Category;
