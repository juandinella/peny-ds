import { css } from 'styled-components'

import layout from '../../../styles/theme/layout'

export default css`
  line-height: 1.5;

  ${(props) =>
    props.color &&
    css`
      color: var(--color-${(props) => props.color});
    `}

  ${(props) =>
    props.weight &&
    css`
      font-weight: var(--f-${(props) => props.weight});
    `}

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

  ${(props) =>
    props.lineClamp &&
    css`
      display: -webkit-box;
      line-clamp: ${(props) => props.lineClamp};
      -webkit-line-clamp: ${(props) => props.lineClamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}

    ${(props) =>
    props.breakLine &&
    css`
      word-break: break-all;
    `}

    ${(props) =>
    props.noWrap &&
    css`
      white-space: nowrap;
    `}

  ${(props) =>
    props.breakWord &&
    css`
      word-break: break-all;
    `}

  ${(props) =>
    props.transform &&
    css`
      text-transform: ${(props) => props.transform};
    `}

  ${(props) =>
    props.alignment &&
    css`
      text-align: ${(props) => props.alignment};
    `}
`
