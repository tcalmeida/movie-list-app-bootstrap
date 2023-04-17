async function getData() {
    const response = await fetch('https://api.b7web.com.br/cinema/');
    const jsonData = await response.json();
    return jsonData;
  }