"use client";

import img1 from "@/assets/images/about1.jpeg";
import img2 from "@/assets/images/about2.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

import styles from "./About.module.scss";

const AboutImages = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const slides = [
		{
			img: img2.src,
			titleKey: "title",
			descKey: "desc",
		},
		{
			img: img1.src,
			titleKey: "title",
			descKey: "desc",
		},
	];

	return (
		<section className={styles["about-section"]}>
			<div className={styles.container}>
				<div className="relative">
					{isMounted && (
						<Swiper
							modules={[Autoplay]}
							slidesPerView={1}
							loop={true}
							autoplay={{
								delay: 2000,
								disableOnInteraction: false,
							}}
							style={{
								width: "100%",
								maxWidth: "700px",
							}}>
							{slides.map(({ img }, index) => (
								<SwiperSlide key={index}>
									<img
										style={{
											width: "100%",
											height: "500px",
                      objectFit:"cover"
										}}
                    
										src={img}
										alt="img"
									/>
								</SwiperSlide>
							))}
						</Swiper>
					)}
				</div>
			</div>
		</section>
	);
};

export default AboutImages;
