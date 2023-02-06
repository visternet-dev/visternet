import { ReactComponent as MyVoiceIconSVG } from 'assets/images/icons/my-voice.svg';
import { ReactComponent as MyIdeaIconSVG } from 'assets/images/icons/my-idea.svg';
import { ReactComponent as MyVillageIconSVG } from 'assets/images/icons/my-village.svg';
import { ReactComponent as GuildsIconSVG } from 'assets/images/icons/guilds.svg';
import { ReactComponent as ChartIconSVG } from 'assets/images/icons/chartIcon.svg';
import { ReactComponent as MyIranIconSVG } from 'assets/images/icons/myIran.svg';
import { ReactComponent as CameraSVG } from 'assets/images/icons/camera.svg';
import { ReactComponent as TrashSVG } from 'assets/images/icons/Trash.svg';
import { ReactComponent as PenSVG } from 'assets/images/icons/Pen.svg';
import { ReactComponent as VideoSVG } from 'assets/images/icons/video.svg';
import { ReactComponent as FilterSVG } from 'assets/images/icons/filter.svg';
import { ReactComponent as ArbaeinSVG } from 'assets/images/icons/arbaein.svg';

const IconDictionary = {
    MyVoice: (props) => <MyVoiceIconSVG {...props} />,
    MyIdea: (props) => <MyIdeaIconSVG {...props} />,
    MyVillage: (props) => <MyVillageIconSVG {...props} />,
    Guilds: (props) => <GuildsIconSVG {...props} />,
    Chart: (props) => <ChartIconSVG {...props} />,
    MyIran: (props) => <MyIranIconSVG {...props} />,
    Camera: (props) => <CameraSVG {...props} />,
    Trash: (props) => <TrashSVG {...props} />,
    Pen: (props) => <PenSVG {...props} />,
    Video: (props) => <VideoSVG {...props} />,
    Filter: (props) => <FilterSVG {...props} />,
    Arbaein: (props) => <ArbaeinSVG {...props} />
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

// ? <Icon onClick = Function name="Home" size="20" className='' style='' fill='' />

export default Icon;
