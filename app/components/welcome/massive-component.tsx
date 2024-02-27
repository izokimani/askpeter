'use client';

import type { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { PencilIcon } from '@heroicons/react/24/solid';
import s from './style.module.css';
import type { AppInfo } from '@/types/app';
import Button from '@/app/components/base/button';

export const AppInfoComp: FC<{ siteInfo: AppInfo }> = ({ siteInfo }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className='flex items-center py-2 text-xl font-medium text-gray-700 rounded-md'>
        🏌️ Chat with 25 years of b2b sales and marketing leadership experience
      </div>
      <div className='flex items-center py-2 text-xl font-medium text-gray-700 rounded-md'>
        🏌️Chat with 25 years of b2b sales and marketing leadership experience
      </div>
    </>
  );
};

export const PromptTemplate: FC<{ html: string }> = ({ html }) => {
  return (
    <div
      className={cn('box-border text-sm text-gray-700')}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.75 1C2.75 0.723858 2.52614 0.5 2.25 0.5C1.97386 0.5 1.75 0.723858 1.75 1V1.75H1C0.723858 1.75 0.5 1.97386 0.5 2.25C0.5 2.52614 0.723858 2.75 1 2.75H1.75V3.5C1.75 3.77614 1.97386 4 2.25 4C2.52614 4 2.75 3.77614 2.75 3.5V2.75H3.5C3.77614 2.75 4 2.52614 4 2.25C4 1.97386 3.77614 1.75 3.5 1.75H2.75V1Z" fill="#444CE7" />
    <path d="M2.75 8.5C2.75 8.22386 2.52614 8 2.25 8C1.97386 8 1.75 8.22386 1.75 8.5V9.25H1C0.723858 9.25 0.5 9.47386 0.5 9.75C0.5 10.0261 0.723858 10.25 1 10.25H1.75V11C1.75 11.2761 1.97386 11.5 2.25 11.5C2.52614 11.5 2.75 11.2761 2.75 11V10.25H3.5C3.77614 10.25 4 10.0261 4 9.75C4 9.47386 3.77614 9.25 3.5 9.25H2.75V8.5Z" fill="#444CE7" />
    <path d="M6.96667 1.32051C6.8924 1.12741 6.70689 1 6.5 1C6.29311 1 6.10759 1.12741 6.03333 1.32051L5.16624 3.57494C5.01604 3.96546 4.96884 4.078 4.90428 4.1688C4.8395 4.2599 4.7599 4.3395 4.6688 4.40428C4.578 4.46884 4.46546 4.51604 4.07494 4.66624L1.82051 5.53333C1.62741 5.60759 1.5 5.79311 1.5 6C1.5 6.20689 1.
