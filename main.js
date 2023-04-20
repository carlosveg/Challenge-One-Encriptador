const input = document.getElementById("input-text");
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");
const output = document.getElementById("output");
const btnCopy = document.getElementById("btn-copy");
const placeholder = document.querySelector(".placeholder");
const content = document.querySelector(".output");

const keys = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const encrypt = (data) => {
  let input = data.toLowerCase();

  for (const key in keys) input = input.replaceAll(key, keys[key]);

  return input;
};

const decrypt = (data) => {
  let input = data.toLowerCase();

  for (const key in keys) input = input.replaceAll(keys[key], key);

  return input;
};

const toogleDisplay = () => {};

btnEncrypt.addEventListener("click", () => {
  if (input.value.trim().length > 0) {
    const textEncrypt = encrypt(input.value);
    if (!placeholder.classList.contains("hidden")) {
      placeholder.classList.toggle("hidden");
      output.classList.toggle("hidden");
      btnCopy.classList.toggle("hidden");
      content.classList.toggle("space-beetwen");
    }
    output.textContent = textEncrypt;
  }
});

btnDecrypt.addEventListener("click", () => {
  if (input.value.trim().length > 0) {
    const textDecrypt = decrypt(input.value);
    if (!placeholder.classList.contains("hidden")) {
      placeholder.classList.toggle("hidden");
      output.classList.toggle("hidden");
      btnCopy.classList.toggle("hidden");
      content.classList.toggle("space-beetwen");
    }
    output.textContent = textDecrypt;
  }
});

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerHTML);
});
