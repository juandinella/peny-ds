export const options = {
  /**
   * Variant of button
   * - **primary** Primary button has the primary color
   * - **secondary** Secondary button has the secondary color
   * - **tertiary** Tertiary button is like a regular link
   * - **ghost** Ghost button is a button with border primary
   * - **ghost-white** Ghost White button with a white border
   * - **Dashed** Dashed button
   * - **Black** Black button
   * - **White** White button
   * - **Plain** Plain button. No style at all
   */
  variants: [
    'primary',
    'secondary',
    'tertiary',
    'ghost',
    'ghost-white',
    'dashed',
    'black',
    'filter',
    'white',
    'plain',
  ],
  /**
   * Determines type of button
   * - **button** The button is a clickable button.
   * - **submit** The button is a submit button (submits form data)
   * - **reset** The button is a reset button (resets the form-data to its initial values)
   */
  types: ['button', 'reset', 'submit'],
}
