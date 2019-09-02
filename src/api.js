export const postData = async data => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    let data = await response.json();
    return data;
  } else {
    throw Error(`Error fetching, ${response.status}`);
  }
};
