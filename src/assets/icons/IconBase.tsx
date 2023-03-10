import React from 'react';
import TwitterIcon from '@assets/icons/Twitter.icon';
import MeatballsIcon from '@assets/icons/Meatballs.icon';
import ReplyIcon from '@assets/icons/Reply.icon';
import ReTwitIcon from '@assets/icons/ReTwit.icon';
import LikeIcon from '@assets/icons/Like.icon';
import ShareIcon from '@assets/icons/Share.icon';

interface IconBaseProps {
  icon: IconNameType;
  iconStyle: IconProps;
}

export interface IconProps {
  width: number | string;
  height: number | string;
  color?: string;
}

const getIcon = (props: IconProps) => {
  const { width = 24, color = '#222', height = 24 } = props;

  return {
    twitter: <TwitterIcon width={width} height={height} color={color} />,
    meatballs: <MeatballsIcon width={width} height={height} color={color} />,
    reply: <ReplyIcon width={width} height={height} color={color} />,
    reTwit: <ReTwitIcon width={width} height={height} color={color} />,
    like: <LikeIcon width={width} height={height} color={color} />,
    share: <ShareIcon width={width} height={height} color={color} />,
  };
};

const extractedIcon = getIcon({ color: '#222', height: 24, width: 24 });

export type IconNameType = keyof typeof extractedIcon;

const IconBase = (props: IconBaseProps) => {
  const { iconStyle, icon } = props;
  const iconList = getIcon(iconStyle);

  return iconList[icon];
};

export default IconBase;
