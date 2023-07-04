export const axiosError = (err) => {
  const { response } = err
  const { data } = response
  const { statusCode, code, message } = data
  if (!statusCode && !code && !message) return data
  return {
    statusCode,
    code,
    message,
  };
};
