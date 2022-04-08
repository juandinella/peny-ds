import { css } from 'styled-components'

import layout from '../../../styles/theme/layout'

export default css`
  background-color: var(--color-neutral-00);
  width: 100%;
  height: 100%;
  position: relative;

  ${(props) =>
    props.shadow &&
    css`
      box-shadow: var(--shadow-sm);
    `}

  ${(props) =>
    props.borderRadius &&
    css`
      border-radius: var(--radius-${(props) => props.borderRadius});
    `}


  ${(props) => {
    const sizeVerticalMobile = props.mSize && props.mSize.split(' ')[0]

    const sizeHorizontalMobile =
      (props.mSize && props.mSize.split(' ')[1]) ||
      (props.mSize && props.mSize.split(' ')[0])

    const sizeVertical = props.size && props.size.split(' ')[0]

    const sizeHorizontal =
      (props.size && props.size.split(' ')[1]) ||
      (props.size && props.size.split(' ')[0])

    return (
      props.size &&
      css`
        padding: var(
            --spacing-${sizeVerticalMobile ? sizeVerticalMobile : sizeVertical}
          )
          var(
            --spacing-${sizeHorizontalMobile ? sizeHorizontalMobile : sizeHorizontal}
          );

        @media screen and (min-width: ${() => layout.breakpoints.sm}) {
          padding: var(--spacing-${sizeVertical})
            var(--spacing-${sizeHorizontal});
        }
      `
    )
  }}

  ${(props) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}
`
