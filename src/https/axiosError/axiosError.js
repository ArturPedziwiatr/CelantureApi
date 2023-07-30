export const axiosError = (err) => {
  try {
    const { response } = err
    const { data } = response
    const { statusCode, code, message } = data
    if (!statusCode && !code && !message) return data
    return {
      statusCode,
      code,
      message,
    }
  } catch (err) {
    return err
  }
}
