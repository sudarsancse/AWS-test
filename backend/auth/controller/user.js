export const dog = async (req, res) => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    res.send(`
      <html>
        <body style="text-align:center; font-family:sans-serif">
          <h1>Random Dog 🐶</h1>
          <img src="${data.message}" width="300" style="border-radius:10px"/>
          <p>${data.message}</p>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send("Error fetching dog image");
  }
};
