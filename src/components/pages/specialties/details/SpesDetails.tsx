"use client";
import scss from "../hero/Hero.module.scss";
import { useGetSpesQuery } from "@/redux/api/catalog";
import { useParams } from "next/navigation";

const SpesDetails = () => {
	const { data, isLoading, error } = useGetSpesQuery();
	const { id, locale } = useParams();

	const numericId = Number(id);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error fetching data</p>;

	const spesDetail = data?.find((item) => item.id === numericId);

	const handleFileClick = (fileUrl: any) => {
		if (fileUrl) {
			window.open(fileUrl, "_blank");
		}
	};

	return (
		<>
			<div className={scss.SpesDetails}>
				<h1 style={{ marginTop: "200px" }}>
					 
					{locale === "kg" ? spesDetail?.title_ky : locale === "ru"	? spesDetail?.title_ru : spesDetail?.title_en}
				</h1>

				<div className={scss.cards}>
					{spesDetail?.curriculums.map((science, index) => (
						<div className={scss.card} key={index}>
							<h2>
								{" "}
								{locale === "kg" ? science.name_file_ky : locale === "ru"	? science.name_file_ru : science.name_file_en}
							</h2>
							<button
								style={{
									border: "none",
									fontSize: "22px",
									background: "white",
									cursor: "pointer",
								}}
								onClick={() => handleFileClick(science.file)}>
								PDF file
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SpesDetails;
