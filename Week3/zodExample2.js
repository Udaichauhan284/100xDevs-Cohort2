const zod = require('zod');

function validateInput(arr){
  const schema = zod.array(zod.number());
  const response = schema.safeParse(arr);
  console.log(response);
}
validateInput([1,2,3]); //true
validateInput(["1",2]); //false