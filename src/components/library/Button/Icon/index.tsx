import * as React from "react";
import styled, { DefaultTheme } from "styled-components";
import { IconType } from "react-icons";

export interface IIconProps {
  IconType: IconType;
  size?: number;
  color?: string;
  secundary?: boolean;
  primary?: boolean;
}

interface IPropsTheme {
  theme: DefaultTheme;
}

export const Icons: React.FC<IIconProps> = ({
  IconType,
  size,
  color,
  primary,
  secundary,
}) => {
  const IconStyled = styled(IconType).attrs((props: IPropsTheme) => {
    const colorIcon = (): string => {
      if (primary) {
        return props.theme.color.primary;
      }

      if (secundary) {
        return props.theme.color.secundary;
      }

      if (color !== undefined) {
        return color;
      }

      return "#FEFEFE";
    };

    size = size === undefined ? 24 : size;

    return {
      size,
      color: colorIcon(),
    };
  })`
    margin-right: 5px;
  `;
  return <IconStyled />;
};
