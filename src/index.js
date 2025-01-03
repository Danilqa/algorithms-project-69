module.exports = function (docs, query) {
  return docs
    .filter((doc) => doc.text.match(/\w+/g).includes(query))
    .map((doc) => doc.id);
};
