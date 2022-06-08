export const getToken = () => {
  try {
    const token = localStorage.getItem('token');
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
};
