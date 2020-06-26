import styled from 'styled-components';

import { helpers, breakpoints, tableStyles } from 'utilities/styles/helpers.styles';

const { mainTint } = helpers;
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

	@media ${phone} {
		${tableStyles};
	}

	@media ${tabletPortrait} {
		${tableStyles};
	}
`;
