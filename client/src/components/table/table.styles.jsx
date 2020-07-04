import styled from 'styled-components';

import { helpers, breakpoints, tableStyles } from 'utilities/styles/helpers.styles';

const { mainTint, dangerColor, accentColor } = helpers;
const { tabletPortrait, phone } = breakpoints;

export const TableContainer = styled.table`
	font-size: 1.8rem;
	color: ${mainTint};

	border-collapse: collapse;
	margin: 50px auto;

	/* Zebra striping */
	tr:nth-of-type(odd) {
		background: #eee;
	}

	th {
		background: #3498db;
		color: white;
		font-weight: bold;
	}

	td,
	th {
		padding: 10px;
		border: 1px solid #ccc;
		text-align: left;
		font-size: 18px;
	}
	a,
	a:visited {
		color: ${mainTint};
		text-decoration: none;
	}
	.icon {
		font-size: 2.4rem;
		cursor: pointer;
	}
	.delete-icon {
		margin-left: 1rem;
		&:hover {
			color: ${dangerColor};
		}
	}
	.update-icon{
		margin-left: 0.4rem;
		&:hover {
			color: ${accentColor};
		}
	}

	@media ${phone} {
		${tableStyles};
	}

	@media ${tabletPortrait} {
		${tableStyles};
	}
`;
