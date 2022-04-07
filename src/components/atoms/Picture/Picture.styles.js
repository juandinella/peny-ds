import { css } from 'styled-components'
import layout from '../../../styles/theme/layout'

export default css`
  img {
    display: block;
    width: 100%;
  }

  ${(props) =>
    props.rounded &&
    css`
      img {
        border-radius: 100%;
      }
    `}

  ${(props) =>
    props.width &&
    css`
      img {
        max-width: ${(props) =>
          props.mWidth ? `${props.mWidth}px` : `${props.width}px`};
        @media screen and (min-width: ${() => layout.breakpoints.sm}) {
          max-width: ${(props) => `${props.width}px`};
        }
      }
    `}

  ${(props) =>
    props.minWidth &&
    css`
      img {
        min-width: ${(props) => `${props.minWidth}px`};
      }
    `}



  ${(props) =>
    props.borderRadius &&
    css`
      img {
        border-radius: var(--radius-sm);
      }
    `}

  ${(props) =>
    props.cover &&
    css`
      img {
        object-fit: cover;
      }
    `}

  ${(props) =>
    props.fixedWidth &&
    css`
      img {
        min-width: ${(props) => props.width};
      }
    `}

  ${(props) =>
    props.inline &&
    css`
      display: inline-flex;
    `}
`
