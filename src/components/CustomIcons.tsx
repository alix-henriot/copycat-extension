import React from 'react';
import Icon, { HomeOutlined } from '@ant-design/icons';
import type { GetProps } from 'antd';

type CustomIconComponentProps = GetProps<typeof Icon>;

const CopycatSvg = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.4067 7.4964C16.066 6.55612 13.0937 5.77144 12.0001 5.77144C11.7145 5.77144 11.301 5.82493 10.804 5.9207C10.5421 5.51142 10.1357 4.91891 9.62612 4.31233C10.3882 2.68781 11.9773 0 14.1492 0C16.7186 0 17.9169 4.6708 18.4067 7.4964Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M2.4673 12.1364C2.4673 12.1364 1.64761 2.53288 5.25365 1.89704C7.6804 1.46913 9.97184 4.62049 10.8042 5.92123C7.97712 6.46609 2.4516 8.37952 2.4516 9.60056C2.4516 10.0279 3.12847 10.5401 4.12962 11.0487L2.4673 12.1364Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M21.5487 9.60008C21.5487 11.0358 13.9098 13.4286 12 13.4286C10.0903 13.4286 2.45133 11.0358 2.45134 9.60008C2.45134 8.16439 10.0903 5.77148 12 5.77148C13.9098 5.77148 21.5487 8.16439 21.5487 9.60008ZM12 13.429C13.9098 13.429 21.5487 11.0362 21.5487 9.60046V9.60042H21.571L23.9642 18.0004C24.6821 20.5204 14.3916 24.0004 11.9984 24.0004C9.60527 24.0004 -0.65111 20.4004 0.0326481 18.0004L2.4258 9.60042H2.45134V9.60046C2.45133 11.0362 10.0903 13.429 12 13.429ZM16.7429 17.5717C16.7429 18.9761 16.2057 20.1145 15.5429 20.1145C14.8802 20.1145 14.3429 18.9761 14.3429 17.5717C14.3429 16.1673 14.8802 15.0288 15.5429 15.0288C16.2057 15.0288 16.7429 16.1673 16.7429 17.5717ZM19.8287 18.4002C20.3967 18.4002 20.8572 17.2873 20.8572 15.9145C20.8572 14.5417 20.3967 13.4288 19.8287 13.4288C19.2606 13.4288 18.8001 14.5417 18.8001 15.9145C18.8001 17.2873 19.2606 18.4002 19.8287 18.4002Z" fill="currentColor"/>
    </svg>
)

const ClipboardFilledSvg = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill="currentColor"/>
        <path d="M17.2391 4.81949C17.2391 6.40949 15.9391 7.70949 14.3491 7.70949H9.64906C8.05906 7.70949 6.75906 6.40949 6.75906 4.81949C6.75906 4.25949 6.15906 3.90949 5.65906 4.16949C4.24906 4.91949 3.28906 6.40949 3.28906 8.11949V17.5295C3.28906 19.9895 5.29906 21.9995 7.75906 21.9995H16.2391C18.6991 21.9995 20.7091 19.9895 20.7091 17.5295V8.11949C20.7091 6.40949 19.7491 4.91949 18.3391 4.16949C17.8391 3.90949 17.2391 4.25949 17.2391 4.81949ZM12.3791 16.9495H7.99906C7.58906 16.9495 7.24906 16.6095 7.24906 16.1995C7.24906 15.7895 7.58906 15.4495 7.99906 15.4495H12.3791C12.7891 15.4495 13.1291 15.7895 13.1291 16.1995C13.1291 16.6095 12.7891 16.9495 12.3791 16.9495ZM14.9991 12.9495H7.99906C7.58906 12.9495 7.24906 12.6095 7.24906 12.1995C7.24906 11.7895 7.58906 11.4495 7.99906 11.4495H14.9991C15.4091 11.4495 15.7491 11.7895 15.7491 12.1995C15.7491 12.6095 15.4091 12.9495 14.9991 12.9495Z" fill="currentColor"/>
    </svg>
)

const ClipboardOutlinedSvg = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12.2H15" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 16.2H12.38" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
)

const SelectionOutlinedSvg = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.81 12.72 14.98 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
)

const SelectionFilledSvg = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 7.52V13.4C21 13.74 20.67 13.98 20.35 13.88L16.42 12.66C15.34 12.33 14.18 12.61 13.39 13.4C12.59 14.2 12.3 15.37 12.64 16.45L13.85 20.35C13.95 20.67 13.71 21 13.37 21H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2H15.48C18.93 2 21 4.06 21 7.52Z" fill="currentColor"/>
        <path d="M21.9597 18.8385L20.3297 19.3885C19.8797 19.5385 19.5197 19.8885 19.3697 20.3485L18.8197 21.9785C18.3497 23.3885 16.3697 23.3585 15.9297 21.9485L14.0797 15.9985C13.7197 14.8185 14.8097 13.7185 15.9797 14.0885L21.9397 15.9385C23.3397 16.3785 23.3597 18.3685 21.9597 18.8385Z" fill="currentColor"/>
    </svg>
)


export const CopycatIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CopycatSvg} {...props} />
);

export const ClipboardOutlinedIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={ClipboardOutlinedSvg} {...props} />
);

export const ClipboardFilledIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={ClipboardFilledSvg} {...props} />
);

export const SelectionOutlinedIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={SelectionOutlinedSvg} {...props} />
);

export const SelectionFilledIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={SelectionFilledSvg} {...props} />
);