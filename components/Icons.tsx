import { useThemeColor } from '@/hooks/useThemeColor';
import { AntDesign, Entypo, Feather, FontAwesome6 } from '@expo/vector-icons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

type CustomIconProps = Omit<IconProps<string>, 'name'> & { lightColor?: string; darkColor?: string };

export const ArrowLeftIcon = (props: CustomIconProps) => {
  const color = useThemeColor({ light: props.lightColor, dark: props.darkColor }, 'text');

  return <AntDesign {...props} name="arrowleft" size={props.size || 24} color={props.color || color || 'black'} />;
};

export const SearchIcon = (props: CustomIconProps) => {
  const color = useThemeColor({ light: props.lightColor, dark: props.darkColor }, 'text');

  return <AntDesign {...props} name="search1" size={props.size || 24} color={props.color || color || 'black'} />;
};

export const ShareIcon = (props: CustomIconProps) => {
  const color = useThemeColor({ light: props.lightColor, dark: props.darkColor }, 'text');

  return <Feather {...props} name="share-2" size={props.size || 24} color={props.color || color || 'black'} />;
};

export const HearthIcon = (props: CustomIconProps) => {
  const color = useThemeColor({ light: props.lightColor, dark: props.darkColor }, 'text');

  return <AntDesign {...props} name="hearto" size={props.size || 24} color={props.color || color || 'black'} />;
};

export const CrowIcon = (props: CustomIconProps) => {
  const color = useThemeColor({ light: props.lightColor, dark: props.darkColor }, 'text');

  return <FontAwesome6 {...props} name="crown" size={props.size || 24} color={props.color || color || '#f7c522'} />;
};

export const ChevronRight = (props: CustomIconProps) => {
  const color = useThemeColor({ light: props.lightColor, dark: props.darkColor }, 'text');

  return <Entypo {...props} name="chevron-right" size={props.size || 24} color={props.color || color || 'black'} />;
};
