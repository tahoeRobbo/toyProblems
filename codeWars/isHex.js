const isHex = str =>
  /^([a-f0-9]{3}){1,2}$/i.test(str);

const isHex = str =>
  /^[a-f0-9]{3}([a-f0-9]{3})?$/i.test(str);