import { m } from './m';
import { mban } from './mban';
import { mgetban } from './mgetban';
import { Commands } from '../types';
import { munban } from './munban';
import { mcompareips } from './mcompareips';
import { mdc } from './mdc';
import { mnotify } from './mnotify';
import { mtoggleregistration } from './mtoggleregistration';
import { mwhisper } from './mwhisper';
import { mremoveavatar } from './mremoveavatar';
import { mclose } from './mclose';
import { mannounce } from './mannounce';
import { mkill } from './mkill';

export const modCommands: Commands = {
  [m.command]: m,
  [mban.command]: mban,
  [mgetban.command]: mgetban,
  [munban.command]: munban,
  [mcompareips.command]: mcompareips,
  [mdc.command]: mdc,
  [mnotify.command]: mnotify,
  [mtoggleregistration.command]: mtoggleregistration,
  [mwhisper.command]: mwhisper,
  [mremoveavatar.command]: mremoveavatar,
  [mclose.command]: mclose,
  [mannounce.command]: mannounce,
  [mkill.command]: mkill,
};
