/*
 * Sample import icon *
 * import { ReactComponent as MyVoiceIconSVG } from 'assets/images/icons/my-voice.svg'; *
 */
// import { ReactComponent as UserProfileSVG } from "/assets/images/icons/setting/profile/user-profile.svg";

const IconDictionary = {
  /*
   * Sample add icon *
   * MyVoice: (props) => <MyVoiceIconSVG {...props} />, *
   */
  // user_profile: (props) => <UserProfileSVG {...props} />
};

const Icon = (props) => {
  // # get props for icons
  const { onClick, name, size, className, style, fill, stroke } = { ...props };
  // # if icon Not found return null
  if (!IconDictionary[name]) {
    return null;
  }
  // # return icon
  return IconDictionary[name]({
    onClick,
    width: `${size}rem`,
    height: `${size}rem`,
    className,
    style,
    stroke,
    fill,
    ...props
  });
};

/*
 * Sample use component *
 * <Icon onClick = Function name="Home" size="20" className='' style='' fill='' /> *
 */

export default Icon;
