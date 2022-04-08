import { css } from 'styled-components'

export default css`
  li {
    margin-bottom: var(--spacing-xxxs);

    &::marker {
      color: var(--color-primary-main);
    }
  }

  ${(props) =>
    props.inline &&
    css`
      li {
        display: inline-block;
        margin-right: var(--spacing-xs);
      }
    `}

  ${(props) =>
    props.color &&
    css`
      li {
        color: var(--color-${(props) => props.color});
      }
    `}

  ${(props) =>
    props.bulletColor &&
    css`
      li {
        &::marker {
          color: var(--color-${(props) => props.bulletColor});
        }
      }
    `}


  ${(props) =>
    props.size &&
    css`
      li {
        font-size: var(--font-${(props) => props.size});
      }
    `}
`
