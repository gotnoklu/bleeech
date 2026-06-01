import { type ForwardedRef, forwardRef } from 'react'
import { type AnimatableNumericValue, type DimensionValue, View, type ViewProps } from 'react-native'
import { mergeStyles, styled } from '../../theme/styles'
import type { Palette, TextPaletteColors } from '../../theme/types'
import { getThemeProperty } from '../../theme/utilities'

export interface BoxProps extends ViewProps {
  width?: DimensionValue
  height?: DimensionValue
  borderRadius?: string | AnimatableNumericValue
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  flex?: number
  gap?: number
  p?: DimensionValue
  px?: DimensionValue
  py?: DimensionValue
  pt?: DimensionValue
  pb?: DimensionValue
  pl?: DimensionValue
  pr?: DimensionValue
  m?: DimensionValue
  mx?: DimensionValue
  my?: DimensionValue
  mt?: DimensionValue
  mb?: DimensionValue
  ml?: DimensionValue
  mr?: DimensionValue
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  backgroundColor?: keyof Palette | keyof TextPaletteColors | (string & {})
}

const StyledBox = styled(View, {
  omitProps: [
    'width',
    'height',
    'borderRadius',
    'direction',
    'flex',
    'alignItems',
    'justifyContent',
    'p',
    'py',
    'px',
    'pt',
    'pb',
    'pl',
    'pr',
    'm',
    'my',
    'mx',
    'mt',
    'mb',
    'ml',
    'mr',
    'gap',
    'backgroundColor',
  ],
})<BoxProps>(
  (
    theme,
    {
      width,
      height,
      borderRadius,
      direction,
      flex,
      alignItems,
      justifyContent,
      backgroundColor,
      p,
      py,
      px,
      pl,
      pt,
      pb,
      pr,
      m,
      my,
      mx,
      ml,
      mt,
      mb,
      mr,
      gap = 0,
    }
  ) => {
    return mergeStyles(
      (typeof p === 'string' || typeof p === 'number') && {
        padding: typeof p === 'number' ? theme.spacing(p) : p,
      },
      (typeof pt === 'string' || typeof pt === 'number') && {
        paddingTop: typeof pt === 'number' ? theme.spacing(pt) : pt,
      },
      (typeof pl === 'string' || typeof pl === 'number') && {
        paddingLeft: typeof pl === 'number' ? theme.spacing(pl) : pl,
      },
      (typeof pr === 'string' || typeof pr === 'number') && {
        paddingRight: typeof pr === 'number' ? theme.spacing(pr) : pr,
      },
      (typeof pb === 'string' || typeof pb === 'number') && {
        paddingBottom: typeof pb === 'number' ? theme.spacing(pb) : pb,
      },
      (typeof px === 'string' || typeof px === 'number') && {
        paddingLeft: typeof px === 'number' ? theme.spacing(px) : px,
        paddingRight: typeof px === 'number' ? theme.spacing(px) : px,
      },
      (typeof py === 'string' || typeof py === 'number') && {
        paddingTop: typeof py === 'number' ? theme.spacing(py) : py,
        paddingBottom: typeof py === 'number' ? theme.spacing(py) : py,
      },
      (typeof m === 'string' || typeof m === 'number') && {
        margin: typeof m === 'number' ? theme.spacing(m) : m,
      },
      (typeof mt === 'string' || typeof mt === 'number') && {
        marginTop: typeof mt === 'number' ? theme.spacing(mt) : mt,
      },
      (typeof ml === 'string' || typeof ml === 'number') && {
        marginLeft: typeof ml === 'number' ? theme.spacing(ml) : ml,
      },
      (typeof mr === 'string' || typeof mr === 'number') && {
        marginRight: typeof mr === 'number' ? theme.spacing(mr) : mr,
      },
      (typeof mb === 'string' || typeof mb === 'number') && {
        marginBottom: typeof mb === 'number' ? theme.spacing(mb) : mb,
      },
      (typeof mx === 'string' || typeof mx === 'number') && {
        marginLeft: typeof mx === 'number' ? theme.spacing(mx) : mx,
        marginRight: typeof mx === 'number' ? theme.spacing(mx) : mx,
      },
      (typeof my === 'string' || typeof my === 'number') && {
        marginTop: typeof my === 'number' ? theme.spacing(my) : my,
        marginBottom: typeof my === 'number' ? theme.spacing(my) : my,
      },
      {
        flex,
        alignItems,
        justifyContent,
        width,
        height,
        borderRadius,
        flexDirection: direction,
        gap: theme.spacing(gap),
        backgroundColor: backgroundColor
          ? getThemeProperty({
              object: theme.palette,
              key: backgroundColor,
              fallback: backgroundColor,
            })
          : undefined,
      }
    )
  }
)

export const Box = forwardRef(function Box({ children, ...props }: BoxProps, ref: ForwardedRef<View | null>) {
  return (
    <StyledBox ref={ref} {...props}>
      {children}
    </StyledBox>
  )
})
