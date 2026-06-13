function status(request, response) {
  response.status(200).json({ chave: "Programação é bom d+" });
}

export default status;
