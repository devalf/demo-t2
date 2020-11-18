import {sample} from 'lodash';

import liPic1 from 'images/li-1.jpg';
import liPic2 from 'images/li-2.jpg';
import liPic3 from 'images/li-3.jpg';
import liPic4 from 'images/li-4.jpg';

export function getRandomImage(): string {
    return sample([liPic1, liPic2, liPic3, liPic4]);
}
