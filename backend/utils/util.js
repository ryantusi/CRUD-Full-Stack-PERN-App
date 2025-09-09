exports.fieldValidator = (fields) => {
  const emptyFields = [];
  for (const key in fields) {
    if (fields[key] === undefined || fields[key] === "") {
      emptyFields.push(key);
    }
  }
  if (emptyFields.length > 0) {
    return { error: "All fields are required", emptyFields };
  }
  return null;
};
