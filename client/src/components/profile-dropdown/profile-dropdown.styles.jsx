import styled from 'styled-components';
import { helpers } from 'utilities/styles/helpers.styles';

const { mainRGB, secondaryColor } = helpers;

const borderRadius = '3px';

export const Container = styled.div`
	.profile-dropdown {
		display: inline-block;
		position: relative;
		background: ${secondaryColor};
		margin: auto;
		font-weight: bold;
		font-size: 1.6rem;
		border-radius: ${borderRadius};
		-webkit-user-select: none; /* Chrome all / Safari all */
		-moz-user-select: none; /* Firefox all */
		-ms-user-select: none; /* IE 10+ */
		user-select: none; /* Likely future */

		* {
			-webkit-user-select: none; /* Chrome all / Safari all */
			-moz-user-select: none; /* Firefox all */
			-ms-user-select: none; /* IE 10+ */
			user-select: none; /* Likely future */
		}

		input[type='checkbox'] {
			display: none;
			&:checked {
				& ~ ul {
					display: block;
					animation: $animation 0.5s;
				}

				& ~ img {
					background: rgb(${mainRGB});
				}

				& ~ label {
					background: rgb(${mainRGB});

					.icon {
						color: ${secondaryColor};
					}

					&:after {
						content: '';
						position: absolute;
						top: 100%;
						right: calc(50% - 10px);
						display: block;
						border-style: solid;
						border-width: 7px 10px 0 10px;
						border-color: ${mainRGB} transparent transparent transparent;
						width: 0;
						height: 0;
					}
				}
			}
		}

		img {
			display: inline-block;
			background: darken(${secondaryColor}, 10%);
			height: 2.5rem;
			vertical-align: middle;
			margin-right: 1rem;
			margin: 0.5rem 0.75rem 0.5rem 0.5rem;
			border-radius: 50%;
		}

		span {
			display: inline-block;
			vertical-align: sub;
			width: 125px;
			margin-right: 2rem;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		ul {
			display: none;
			list-style: none;
			padding: 0;
			marrgin: 0;
			background: #fff;
			position: absolute;
			top: 100%;
			right: 0;
			width: 100%;
			border-radius: ${borderRadius};

			li {
				a {
					display: block;
					padding: 0.75rem 1rem;
					text-decoration: none;
					color: darken(${secondaryColor}, 50%);
					font-size: 1.3rem;

					// i {
					// 	font-size: 1.3rem;
					// 	vertical-align: middle;
					// 	margin: 0 0.75rem 0 -0.25rem;
					// }

					&:hover {
						background: rgba(${mainRGB}, 0.2);
					}
				}

				&:first-child a:hover {
					border-radius: ${borderRadius} ${borderRadius} 0 0;
				}

				&:last-child a:hover {
					border-radius: 0 0 ${borderRadius} ${borderRadius};
				}
			}
		}

		& > label {
			position: relative;
			height: 3.5rem;
			display: block;
			text-decoration: none;
			background: transparent;
			color: #333;
			box-sizing: border-box;
			padding: 0.9rem;
			float: right;
			border-radius: 0 ${borderRadius} ${borderRadius} 0;

			i {
				color: darken(${secondaryColor}, 25%);
				font-size: 1.75rem;
			}
		}

		&:after {
			content: '';
			display: table;
			clear: both;
		}
	}
`;
