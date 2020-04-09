import React from 'react';
import styled, {CSSObject} from 'styled-components';
import {useTranslation} from 'react-i18next';
import {
	FontSizes,
	FontWeights,
	DefaultFontStyles
} from '@fluentui/react';
import {getTheme} from '@fluentui/react';


//import {utilities} from '@fluentui/react';
const theme = getTheme();

const StyledH1 = styled.h1`
	${theme.fonts.mega as CSSObject};
	margin: 0px 0px 0px 0px;

	@media (max-width: 767px){

		${theme.fonts.superLarge as CSSObject}
	}
	@media (max-width: 670px){
		${theme.fonts.xxLarge as CSSObject}
	}
`;
export const ViewHeaderText: React.FunctionComponent = () => {
	const {t} = useTranslation();
	return <StyledH1>
		{t('Make you podcast seen and lietened')}
	</StyledH1>
}