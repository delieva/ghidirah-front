import React from "react";
import HeaderButton from "./HeaderButton";
import styles from './header.module.scss'

const Header = () => (
	<div className={styles.header}>
		<HeaderButton link='' text='Home'/>
		<HeaderButton link='' text='About'/>
		<HeaderButton link='' text='Interact'/>
	</div>
);

export default Header;
