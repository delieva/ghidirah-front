import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeTitle from "../Home/components/HomeTitle";
import HomeText from "../Home/components/HomeText";
import './page.module.scss'

const Page = (props) => (
	<div>
		<Header />
		<HomeTitle />
		<HomeText />
		{
			// 'body' || (
			// (
			// <div>body</div>
			// )
		}
		<Footer />
	</div>
);

export default Page;
