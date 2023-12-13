import { HtmlHTMLAttributes, FC } from 'react';

interface ReactImageTurntableProps {
    /** List of image `src` attributes. */
    images: string[];
    /** Index of image to show first. */
    initialImageIndex?: number;
    /** The amount a "drag" has to move before an image changes to next or previous. */
    movementSensitivity?: number;
    /** Callback that triggers whenever the active index changes. */
    onIndexChange?: (index: number) => void;
    autoRotate?: {
        /** Automatically rotate the turntable. */
        disabled: boolean;
        /** The speed (in ms) at which the turntable rotates. */
        interval?: number;
    };
}
/** Base props *and* all available HTML element props. */
type ReactImageTurntableFullProps = HtmlHTMLAttributes<HTMLDivElement> & ReactImageTurntableProps;

/** Base `className` for images. */
declare const CLASS_NAME_IMG = "__react-image-turntable-img";
/** `className` of first rendered image (sets the size of the main component). */
declare const CLASS_NAME_IMG_PRIMARY = "__react-image-turntable-img--primary";
/** `className` of subsequent images. */
declare const CLASS_NAME_IMG_SECONDARY = "__react-image-turntable-img--secondary";
declare const ReactImageTurntable: FC<ReactImageTurntableFullProps>;

export { CLASS_NAME_IMG, CLASS_NAME_IMG_PRIMARY, CLASS_NAME_IMG_SECONDARY, ReactImageTurntable, ReactImageTurntableFullProps, ReactImageTurntableProps };
