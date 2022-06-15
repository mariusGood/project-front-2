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
    return error;
  }
};

export const getData = async (resource, token) => {
  try {
    const resp = await fetch(`${process.env.REACT_APP_URL}/${resource}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const respInJs = await resp.json();
    return respInJs;
  } catch (error) {
    return error;
  }
};

export const getItems = async (resource, token) => {
  try {
    const resp = await fetch(`${process.env.REACT_APP_URL}/${resource}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const respInJs = await resp.json();
    return respInJs;
  } catch (error) {
    return error;
  }
};
