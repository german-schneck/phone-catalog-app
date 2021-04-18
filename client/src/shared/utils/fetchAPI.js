export default function fetchAPI({
  endPoint,
  method,
  body = null,
  params = null,
  headers = null
}) {
  return new Promise((resolve, reject) => {
    const url = `${process.env.REACT_APP_BASE_URL}${endPoint}`;

    const opts = {
      method,
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
      }),
      params,
      body
    };

    if (process.env.NODE_ENV === 'development') {
      console.info('fetch::request', {
        opts,
        url
      });
    }

    fetch(url, opts).then((response) => {
      if (process.env.NODE_ENV === 'development') {
        console.info('fetch::response', { url, response });
      }
      return response.json();
    })
      .then(resolve)
      .catch((err) => reject(err));
  });
}
