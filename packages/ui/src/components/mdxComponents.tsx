import { Code } from 'bright';
import { Balancer } from 'react-wrap-balancer';
import type { ImageProps } from 'next/image';
import type { ReactNode } from 'react';
import type { NextImageType } from '../utils/types';
import { LinkHeading } from './LinkHeading';
import type { TwoColumnsProps } from './TwoColumns';
import { TwoColumns } from './TwoColumns';
import { focus } from './bright/focus';

interface CustomImageProps extends ImageProps {
  containerClassName: string;
}

Code.theme = {
  dark: 'github-dark',
  light: 'github-light',
};

export const mdxComponents = ({
  imgComponent,
}: {
  imgComponent: NextImageType;
}) => ({
  TwoColumns: (props: TwoColumnsProps) => {
    return (
      <>
        <TwoColumns {...props} />
      </>
    );
  },
  Img: (props: CustomImageProps) => {
    const { containerClassName, ...rest } = props;

    const ImageComponent = imgComponent;

    return (
      <div className={`relative block ${containerClassName}`}>
        <ImageComponent {...rest} className="object-contain rounded-md" />
      </div>
    );
  },
  h1: ({ children }: { children: string }) => {
    return (
      <h1>
        <Balancer>{children}</Balancer>
      </h1>
    );
  },
  h2: ({ children }: { children: string }) => {
    return <LinkHeading component="h2">{children}</LinkHeading>;
  },
  h3: ({ children }: { children: string }) => {
    return <LinkHeading component="h3">{children}</LinkHeading>;
  },
  h4: ({ children }: { children: string }) => {
    return <LinkHeading component="h4">{children}</LinkHeading>;
  },
  h5: ({ children }: { children: string }) => {
    return <LinkHeading component="h5">{children}</LinkHeading>;
  },
  h6: ({ children }: { children: string }) => {
    return <LinkHeading component="h6">{children}</LinkHeading>;
  },
  pre: (props: {
    children: ReactNode;
    filename?: string;
    lang: 'js' | 'json' | 'ts';
    note?: string;
  }): JSX.Element => {
    return (
      <>
        <div data-theme="dark" className="hidden dark:block">
          <Code
            lang={props.lang}
            className="!m-0 border border-gray-800"
            title={props.filename}
            extensions={[focus]}
          >
            {props.children}
          </Code>
          {props.note ? (
            <p className="!my-0 p-2 px-4 border-[1px] border-gray-800 text-sm border-t-0">
              Note: {props.note}
            </p>
          ) : null}
        </div>

        <div data-theme="light" className="block dark:hidden">
          <Code
            lang={props.lang}
            title={props.filename}
            className="!m-0 border border-gray-300"
            extensions={[focus]}
          >
            {props.children}
          </Code>
          {props.note ? (
            <p className="!my-0 p-2 px-4 border-[1px] border-gray-300 text-sm border-t-0">
              Note: {props.note}
            </p>
          ) : null}
        </div>
      </>
    );
  },
});
