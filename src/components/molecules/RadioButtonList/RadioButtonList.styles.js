import { css } from 'styled-components'

export default css`
  width: 100%;

  > div {
    margin-bottom: var(--spacing-xxxs);
  }

  ${(props) =>
    props.horizontal &&
    css`
      display: flex;
      justify-content: space-between;
      width: 100%;
    `}
`
