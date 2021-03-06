import { Placement } from '@popperjs/core';
import { EmojiPicker } from './index';

export interface EmojiRecord {
    name: string;
    emoji: string;
    custom?: boolean;
    category?: number;
    version?: string;
    variations?: string[];
    key?: string;
}

export interface EmojiData {
    categories: string[];
    emojiData: EmojiRecord[];
}

export interface RecentEmoji {
    key: string;
    name: string;
    emoji: string;
    custom?: boolean;
}

export interface EmojiEventData {
    emoji: EmojiRecord;
    showVariants: boolean;
    button: HTMLElement;
}

export interface Plugin {
    render(picker: EmojiPicker): HTMLElement;
    destroy?(): void;
}

export interface EmojiPickerOptions {
    position?: Placement | FixedPosition;
    autoHide?: boolean;
    autoFocusSearch?: boolean;
    showAnimation?: boolean;
    showPreview?: boolean;
    showSearch?: boolean;
    showRecents?: boolean;
    showVariants?: boolean;
    showCategoryButtons?: boolean;
    recentsCount?: number;
    rootElement?: HTMLElement;
    emojiVersion?: EmojiVersion;
    i18n?: I18NStrings;
    zIndex?: number;
    boxShadow?: string | 'none';
    theme?: EmojiTheme;
    categories?: Category[];
    style?: EmojiStyle;
    twemojiBaseUrl?: string;
    emojisPerRow?: number;
    rows?: number;
    emojiSize?: string;
    initialCategory?: Category | 'recents';
    custom?: EmojiRecord[];
    plugins?: Plugin[];
    icons?: Icons;
}

export interface TwemojiOptions {
    base?: string,
    ext: string,
    folder: string
}

export interface FixedPosition {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}

export type EmojiStyle = 'native' | 'twemoji';

export type EmojiTheme = 'dark' | 'light' | 'auto';

export type EmojiVersion =
    | '1.0'
    | '2.0'
    | '3.0'
    | '4.0'
    | '5.0'
    | '11.0'
    | '12.0'
    | '12.1';

export type Category =
    | 'smileys'
    | 'people'
    | 'animals'
    | 'food'
    | 'activities'
    | 'travel'
    | 'objects'
    | 'symbols'
    | 'flags';

export type I18NCategory =
    | 'recents'
    | 'smileys'
    | 'people'
    | 'animals'
    | 'food'
    | 'activities'
    | 'travel'
    | 'objects'
    | 'symbols'
    | 'flags'
    | 'custom';

export interface I18NStrings {
    search: string;
    categories: {
        [key in I18NCategory]: string;
    };
    notFound: string;
}

export interface Icons {
    search?: string;
    clearSearch?: string;
    categories?: {
        [key in I18NCategory]?: string;
    };
    notFound?: string;
}
