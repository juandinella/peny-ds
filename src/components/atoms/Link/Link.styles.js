import { css } from 'styled-components'

import layout from '../../../styles/theme/layout'

export default css`
  display: inline-flex;
  color: var(--color-primary-main);
  text-decoration: none;
  transition: color var(--transition-timing-easing);
  cursor: pointer;

  &:hover {
    color: var(--color-primary-dark);
  }

  ${(props) =>
    props.size &&
    css`
      font-size: var(
        --font-${(props) => (props.mSize ? props.mSize : props.size)}
      );

      @media screen and (min-width: ${() => layout.breakpoints.sm}) {
        font-size: var(--font-${(props) => props.size});
      }
    `}
`
