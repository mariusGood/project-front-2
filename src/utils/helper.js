export const fetchData = async (resource, data) => {
  try {
    const resp = await fetch(`${process.env.REACT_APP_URL}/${resource}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const respInJs = await resp.json();
    return respInJs;
  } catch (error) {
    console.log('error ===', error);
    return error;
  }
};
