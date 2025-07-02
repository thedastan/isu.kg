 import HeroSections from '@/components/pages/home/HeroSections';
import { Metadata } from 'next';
import Head from 'next/head';
import React from 'react';


export const metadata: Metadata = {
	title: "ЖОЖдор аралык илимий-методикалык семинар",
	 
	robots: "index, follow",
	authors: [{ name: "ЖОЖдор аралык илимий-методикалык семинар" }],
	openGraph: {
		title: "ЖОЖдор аралык илимий-методикалык семинар",
	 
		url: "https://krf-edu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.aa3b36ce.jpeg&w=1200&q=75",
		type: "website",
	},
};

 
 const Home = () => {
  return (
    <>
      <Head>
				<link rel="canonical" href="https://krf-edu.vercel.app/" />
				 

				<meta
					property="og:image"
					content="https://krf-edu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.aa3b36ce.jpeg&w=1200&q=75"
				/>

				<meta property="og:type" content="website" />

			 
			</Head>
      <HeroSections/>
    </>
  );
 };
 
 export default Home;