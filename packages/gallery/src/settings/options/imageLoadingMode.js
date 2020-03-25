import { INPUT_TYPES, GALLERY_CONSTS } from '../utils/constants';
import { createOptions } from '../utils/utils';

export default {
  title: 'Loading Placeholder',
  description: `Determines what is shown until the image is loaded.`,
  isRelevant: () => true,
  options: createOptions('LOADING_MODE'),
  type: INPUT_TYPES.OPTIONS,
  default: GALLERY_CONSTS.LOADING_MODE.BLUR,
}
