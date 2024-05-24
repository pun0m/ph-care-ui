import React from 'react';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const lost_dogs = [];
const found_dogs = [];

const LostAndFound = () => {
    return (
        <div>
            <SectionTitle subHeading="Lost & Found Pets" heading="is your pet lost?"></SectionTitle>
            <div className='md:flex justify-center items-center py-10 px-16'>
				<div className='md:ml-10'>
                    <div className="grid grid-cols-2 gap-20 max-w-[400px] md:max-w-[600px]">
                        <div>
    					    <p className='uppercase pb-2'>
                                <b>Report your lost pet.</b>
                                <img src="../../../../src/assets/Images/lost.jpg" alt="" />
                            </p>
                        </div>
                        <div>
    					    <p className='uppercase pb-2'>
                                <b>Looking for your lost pet ?</b>
                                <img src="../../../../src/assets/Images/found.jpg" alt="" />
                            </p>
                        </div>
                    </div>
				</div>
			</div>
        </div>
    )
}

export default LostAndFound;