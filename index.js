require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT
const stu_name=process.env.DATABASE_NAME

app.get('/', (req, res) => {
  res.send(`.env 테스트 : ${stu_name}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} : 학생이름:$${stu_name}`)
})
