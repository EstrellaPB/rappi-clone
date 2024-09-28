import { AntDesign, Feather, FontAwesome6 } from '@expo/vector-icons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

type CustomIconProps = Omit<IconProps<string>, 'name'>;

export const ArrowLeftIcon = (props: CustomIconProps) => (
  <AntDesign {...props} name="arrowleft" size={props.size || 24} color={props.color || 'black'} />
);

export const SearchIcon = (props: CustomIconProps) => (
  <AntDesign {...props} name="search1" size={props.size || 24} color={props.color || 'black'} />
);

export const ShareIcon = (props: CustomIconProps) => (
  <Feather {...props} name="share-2" size={props.size || 24} color={props.color || 'black'} />
);

export const HearthIcon = (props: CustomIconProps) => (
  <AntDesign {...props} name="hearto" size={props.size || 24} color={props.color || 'black'} />
);

export const CrowIcon = (props: CustomIconProps) => (
  <FontAwesome6 {...props} name="crown" size={props.size || 24} color={props.color || '#f7c522'} />
);
