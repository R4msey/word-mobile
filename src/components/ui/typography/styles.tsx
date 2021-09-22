import styled from 'styled-components/native'

import { COLORS } from '../../common/colors'

interface ITypography {
  fontSize?: number | string
  color?: string
}

export const Heading = styled.Text<ITypography>`
  font-size: ${props => props.fontSize || '35px'};
  fontFamily: 'Roboto-Thin';
  color: ${props => props.color || COLORS.background};
`

export const UpperCaseTitle = styled.Text<ITypography>`
  font-size:${props => props.fontSize || '28px'};
  fontFamily: 'Roboto-Thin';
  textTransform: uppercase;
  color: ${props => props.color || COLORS.background};
`

export const BtnView = styled.View<ITypography>`
  margin: 10px ;
  flexDirection: row;
  justifyContent: space-between ;
  alignItems: center ;
`