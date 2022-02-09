import React, {useEffect, useRef, useState} from 'react';
import {defaultProps, IconProps, IconState } from './Icon.props';
import shallowDiffers from "./utils";
import {  } from "react-dom/server";
import {ReactComponent} from "*.svg";
import {useDynamicSVGImport} from "./Icons2";

const svgNamespace = 'http://www.w3.org/2000/svg';
const xlinkNamespace = 'http://www.w3.org/1999/xlink';

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {

  // const initialState: IconState = {
  //   hasError: false,
  //   isLoading: true
  // };
  //
  // let IS_MOUNTED = false;
  //
  // const [{isLoading, hasError}, setState] = useState<IconState>(initialState);
  //   const [icon, setIcon] = useState<JSX.Element>();
  //
  // const removeSVG = () => console.log('removeSVG ');
  // const renderSVG = () => console.log('renderSVG', props.loading);
  //
  //
  // useEffect(() => {
  //   IS_MOUNTED = true;
  //
  //   import('../../../assets/icons/activity.svg').then((m) => {
  //     setIcon(m.ReactComponent;
  //   });
  //   console.log(IconSVG);
  //
  //   console.log('Мы монтуруем объект');
  //   return function () {
  //     console.log('Мы удаляем объект');
  //     IS_MOUNTED = false;
  //   };
  // }, []);
  //
  // const prevProps = useRef<IconProps>(props);
  // useEffect(() => {
  //   if(shallowDiffers(prevProps.current, props)) {
  //     console.log('Мы обновляем компонент');
  //     renderSVG();
  //   }else {
  //     console.log('Не обновляем');
  //   }
  // });

  const { loading, SvgIcon } = useDynamicSVGImport('activity', {
    onError: (err) => console.log('ОШИИИБКА', err)
  });

  console.log(SvgIcon);
  return (<>
    {loading ? 'Загружаем' : 'dsfsdfsd'}
  </>);
};

Icon.defaultProps = defaultProps;

export { Icon };
