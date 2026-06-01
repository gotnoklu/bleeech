import type { ReactNode } from 'react'
import { Image, type ImageProps, View, type ViewProps } from 'react-native'
import { createVariants, mergeStyles, styled } from '../../theme/styles'
import type { PaletteColorToken } from '../../theme/types'
import { getThemeProperty } from '../../theme/utilities'
import type { TextProps } from '../text'

export interface AvatarProps extends ViewProps {
  variant?: 'filled' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  shape?: 'default' | 'rounded' | 'circular'
  color?: PaletteColorToken | (string & {})
  source?: ImageProps['source']
  alt?: string
  children?: ReactNode
  viewProps?: {
    image?: Omit<ImageProps, 'source'>
    text?: TextProps
  }
}

const AvatarSizes = { sm: 32, md: 40, lg: 48 }

const StyledAvatar = styled(View)<AvatarProps>(
  (theme, { variant = 'filled', shape = 'default', size = 'md', color, source }) => {
    const shapes = createVariants({
      styles: {
        rounded: 'default',
        default: { borderRadius: theme.radius(2) },
        circular: { borderRadius: AvatarSizes[size] / 2 },
      },
      defaults: { variant: 'default' },
    })(shape)

    const variants = createVariants({
      styles: {
        filled: {
          backgroundColor: getThemeProperty({ object: theme.palette, key: color ?? 'avatar', fallback: color }),
        },
        outlined: {
          borderColor: getThemeProperty({ object: theme.palette, key: color ?? 'avatar', fallback: color }),
          borderWidth: 1,
          padding: source ? theme.spacing(1) : 0,
        },
      },
      defaults: {
        variant: 'filled',
        styles: {
          ...shapes,
          width: AvatarSizes[size],
          height: AvatarSizes[size],
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: getThemeProperty({ object: theme.palette, key: color ?? 'avatar', fallback: color }),
        },
      },
    })(variant)

    return variants
  }
)

export function Avatar({ color, source, alt, children, viewProps, ...props }: AvatarProps) {
  return (
    <StyledAvatar color={color} source={source} {...props}>
      {source ? (
        <Image
          source={source}
          resizeMode="cover"
          {...viewProps?.image}
          style={mergeStyles({ width: '100%', height: '100%' }, viewProps?.image?.style)}
        />
      ) : (
        children
      )}
    </StyledAvatar>
  )
}
