module.exports = function (docs, query) {
  return docs.filter((doc) => doc.text.includes(query)).map((doc) => doc.id);
};
