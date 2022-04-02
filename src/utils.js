const emptyValue = (value) => value == null || value == undefined || value == ''

const dataURLToFile = (dataurl, filename) => {
  let arr = dataurl.split(',')

  let bstr = atob(arr[1])

  let mime = arr[0].match(/:(.*?)/)[1]

  let n = bstr.length

  let u8arr = new Uint8Array(n)

  while (n >= 0) {
    u8arr[n] = bstr.charCodeAt(n)
    n -= 1
  }

  return filename != null && filename !== undefined
    ? new File([u8arr], filename, { type: mime })
    : new Blob([u8arr], { type: mime })
}

export default {
  emptyValue,
  dataURLToFile,
}
