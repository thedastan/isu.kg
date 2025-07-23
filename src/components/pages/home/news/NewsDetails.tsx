'use client'
import { useGetNewsQuery } from "@/redux/api/catalog";
import scss from "./NewsDetails.module.scss";
import Image from "next/image";
import { useParams } from "next/navigation";

const NewsDetails = () => {
	const { data } = useGetNewsQuery();
	const { locale } = useParams();

  const { id } = useParams();
	const newsItem = data?.find(el => el.id.toString() === id);

	if (!newsItem) return <div>Loading...</div>;


	return (
		<div className={scss.NewsDetails}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.block}>
							<div className={scss.box}>
                <div className={scss.image}>
                <Image fill objectFit="contain" src={newsItem.image} alt="img" />

                </div>
								 <h2> 
								     {locale === "kg" ? newsItem.title_ky : locale === "ru"	? newsItem.title_ru : newsItem.title_en}
								 </h2>
								<p> 
							  	 {locale === "kg" ? newsItem.description_ky : locale === "ru"	? newsItem.description_ru : newsItem.description_en}
								</p>
							</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsDetails;
