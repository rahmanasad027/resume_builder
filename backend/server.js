const app = require("./index");
const express = require("express");

const PORT = process.env.PORT || 4000;

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('../frontend/build'))
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
