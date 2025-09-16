import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';
import { hstackStyle } from './styles';

type AllowedSpace = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
type IHStackProps = ViewProps & VariantProps<typeof hstackStyle> & {
  space?: AllowedSpace;
};

const HStack = React.forwardRef<React.ComponentRef<typeof View>, IHStackProps>(
  function HStack({ className, space, reversed, ...props }, ref) {
    return (
      <View
        className={hstackStyle({
          space,
          reversed: reversed as boolean,
          class: className,
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

HStack.displayName = 'HStack';

export { HStack };

