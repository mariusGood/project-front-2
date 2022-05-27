export const postData = async (resource, data) => {
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

export const getData = async (resource) => {
  try {
    const token = localStorage.getItem('token');
    const resp = await fetch(`${process.env.REACT_APP_URL}/${resource}`, {
      method: 'GET',
      headers: { Authorization: `Bearer: ${token}` },
    });
    const respInJs = await resp.json();

    return respInJs;
  } catch (error) {
    console.log('error ===', error);
    return error;
  }
};
