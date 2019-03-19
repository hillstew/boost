export const postData = async data => {
  const url = 'https://boost-be.herokuapp.com/api/messages';
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
