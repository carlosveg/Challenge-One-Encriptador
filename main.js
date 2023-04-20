const keys = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const encrypt = (data) => {
  data = data.toLowerCase();

  for (const key in keys) data = data.replaceAll(key, keys[key]);

  return data;
};

const decrypt = (data) => {
  data = data.toLowerCase();

  for (const key in keys) data = data.replaceAll(keys[key], key);

  return data;
};
