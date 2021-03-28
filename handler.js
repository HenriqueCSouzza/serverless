// handler recebera as functions
// provider da aws aceita java, go, js, ruby, python
// necessario usar functions async por causa do harmony
// parametros event,context,callback
module.exports.hello = async (event, context, callback) => {
  // tipos de respostas
  // para erros: error,response,cnt:context
  // callback(error, response, cnt);

  // response success
  console.log("Hello");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "helloworld" }) || null,
    header: {},
  };
};
