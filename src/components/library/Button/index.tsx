import * as React from "react";
import { Button, IconButton as ButtonIcon } from "./styles";

interface IProps {
  isElevation?: boolean;
}

export const TextButton: React.FC<IProps> = ({ isElevation, children }) => (
  <Button
    noElevation={isElevation === null ? false : true}
    children={children}
  />
);

export const IconButton: React.FC<IProps> = ({ isElevation, children }) => (
  <ButtonIcon children={children} />
);
