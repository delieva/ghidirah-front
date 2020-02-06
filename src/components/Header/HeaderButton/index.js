import React from "react";
import PropTypes from 'prop-types';
import styles from './headerButton.module.scss'
import {Link} from "react-router-dom";

const HeaderButton = ({
	text,
	link,
}) => {
	return (
		<div className={styles.headerButton}>
			{}
			<Link to={link}>
				<div>
					{text}
				</div>
			</Link>
		</div>
		
	)
};

HeaderButton.propTypes = {
	text: PropTypes.string,
	link: PropTypes.string,
};
HeaderButton.defaultProps = {
	text: '',
	link: '',
};
export default HeaderButton;
