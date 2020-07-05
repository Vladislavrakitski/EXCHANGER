import React from 'react';
import styled from 'styled-components';

import { BGWrapper } from '@src/UI';

export const PageLayout = styled(BGWrapper)`
	max-width: 100%;
	height: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-size: cover;
	background-position: center;
	position: relative;
`;
