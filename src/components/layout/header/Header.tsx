"use client";
import { useState } from "react";
import Image from "next/image";
import scss from "./Header.module.scss";

import logo from "@/assets/images/logo2.png";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import Language from "./Language";
import { useTranslations } from "next-intl";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
 	const t = useTranslations("Header");
	const closeMenu = () => setIsOpen(false);

	const links = [
		{ title: t("accreditation"), link: "/accreditation" },
		{ title: t("departments"), link: "/departments" },
		{ title: t("research"), link: "/works" },
		{ title: t("specialties"), link: "/specialties" },
	];

	const selectOptions = [
		{ title: t("administration"), link: "/administration" },
		{ title: t("teachers"), link: "/teachers" },
	];

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.image}>
						<Link href={"/"}>
							<Image
								style={{ width: "50px", height: "100%" }}
								src={logo}
								alt="img"
							/>
						</Link>
					</div>

					{/* Burger Icon */}
					<div
						className={`${scss.burger} ${isOpen ? scss.open : ""}`}
						onClick={() => setIsOpen(!isOpen)}>
						<div></div>
						<div></div>
						<div></div>
					</div>

					{/* Navigation Links */}
					<nav className={`${scss.nav} ${isOpen ? scss.show : ""}`}>
						<div className={scss.image2}>
							<div className={scss.img}>
								<Link href={"/"}>
									<Image
											style={{ width: "50px", height: "100%" }}
										src={logo}
										alt="img"
									/>
								</Link>
							</div>
						</div>

						<Language />
						<div className={scss.customSelect}>
							<div className={scss.selectedContent}>
								<p>{t("facultet")}</p>
								<FaAngleDown className={scss.icon} />
							</div>
							<ul className={scss.options}>
								<div className={scss.option}>
									{selectOptions.map((option, index) => (
										<Link
											onClick={closeMenu}
											href={option.link}
											className={scss.link}
											key={index}>
											{option.title}
										</Link>
									))}
								</div>
							</ul>
						</div>
						{links.map((el, index) => (
							<Link
								onClick={closeMenu}
								key={index}
								className={scss.link}
								href={el.link}>
								{el.title}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
