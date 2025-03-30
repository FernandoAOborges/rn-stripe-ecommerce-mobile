import { useTranslation } from 'react-i18next';

import { Images } from '@/constants';

import type { IWelcomeContents } from '../types';

const useWelcomeContents = () => {
  const { t } = useTranslation();

  const WELCOME_CONTENTS: IWelcomeContents[] = [
    {
      id: 1,
      name: 'DISCOUNT',
      title: t('WALKTHROUGH.DISCOUNT'),
      subtitle: t('WALKTHROUGH.SUBTITLE_DISCOUNT'),
      content: t('WALKTHROUGH.CONTENT_DISCOUNT'),
      image: Images.Walkthrough01,
    },
    {
      id: 2,
      name: 'ADVANTAGE',
      title: t('WALKTHROUGH.ADVANTAGE'),
      subtitle: t('WALKTHROUGH.SUBTITLE_ADVANTAGE'),
      content: t('WALKTHROUGH.CONTENT_ADVANTAGE'),
      image: Images.Walkthrough02,
    },
    {
      id: 3,
      name: 'TYPES',
      title: t('WALKTHROUGH.TYPES'),
      subtitle: t('WALKTHROUGH.SUBTITLE_DISCOUNT'),
      content: t('WALKTHROUGH.CONTENT_TYPES'),
      image: Images.Walkthrough03,
    },
  ];

  return WELCOME_CONTENTS;
};

export default useWelcomeContents;
