import { TemplateNameProps } from "./TemplateName.props";
import React from "react";
// @ts-ignore
import style from './TemplateName.module.sass';

export const TemplateName = ({ }: TemplateNameProps): JSX.Element => {
  // @ts-ignore
  return (<div className={style.TemplateName}>{children}</div>);
};