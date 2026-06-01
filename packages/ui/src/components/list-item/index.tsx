import { type ForwardedRef, forwardRef } from 'react'
import { View, type ViewProps } from 'react-native'
import { mergeStyles, styled } from '../../theme/styles'
import { Separator } from '../separator'

export interface ListItemProps extends ViewProps {
  size?: 'small' | 'medium' | 'large'
  separator?: boolean
  disablePadding?: boolean
  disableMinHeight?: boolean
}

const StyledListItem = styled(View)<ListItemProps>((theme, { size = 'large', disablePadding, disableMinHeight }) => {
  return mergeStyles(
    disableMinHeight && { minHeight: 'auto' },
    size === 'small' && { minHeight: 40 },
    size === 'medium' && { minHeight: 48 },
    size === 'large' && { minHeight: 56 },
    {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing(2),
      paddingHorizontal: disablePadding ? 0 : theme.spacing(2),
    }
  )
})

export const ListItem = forwardRef(function ListItem(
  { separator, children, ...props }: ListItemProps,
  ref: ForwardedRef<View | null>
) {
  const element = (
    <StyledListItem ref={ref} {...props}>
      {children}
    </StyledListItem>
  )

  if (separator === true) {
    return (
      <>
        {element}
        <Separator />
      </>
    )
  }

  return element
})
