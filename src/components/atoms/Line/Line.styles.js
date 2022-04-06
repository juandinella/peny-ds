import { css } from 'styled-components'

export default css`
  width: 100%;
  border-top: 1px;
  background: none;
  margin: 0;

  ${(props) =>
    props.color &&
    css`
      border-color: var(--color-${(props) => props.color});
    `}

  ${(props) =>
    props.type &&
    css`
      border-style: none;
      border-top-style: ${(props) => props.type};
    `}
`
