const write = (value, config = {}, opposite) => {
  if (typeof value === "undefined" || value === null) {
    value = config.default || "";

    if (!config.continueWhenDefault) {
      return value;
    }
  } else value = String(value);

  if (config.max) {
    let newValue = value;
    if (config.maxAfter) {
      const valueAfterChar = value.split(config.maxAfter)[1];

      if (valueAfterChar && valueAfterChar.length > config.max) {
        newValue =
          value.split(config.maxAfter)[0] +
          config.maxAfter +
          valueAfterChar.substring(0, config.max);
      }
    } else {
      if (config.max < value.length) {
        newValue = value.substring(0, config.max);
      }
    }

    if (newValue !== value && config.ellipsis) {
      value = newValue + "...";
    } else value = newValue;
  }

  if (config.trim) value = trim(value);

  if (config.shift) {
    value = config.shift + value;
  }
  if (config.pop) {
    value += config.pop;
  }

  if (config.case) {
    if (config.case === "upper") {
      value = value.toUpperCase();
    }
    if (config.case === "lower") {
      value = value.toLowerCase();
    }
  }
  return value;
};

const trim = (value = "") =>
  String(value)
    .split("")
    .reduce(
      (sum, crr) =>
        sum[sum.length - 1] === " " && crr === " " ? sum : sum + crr,
      ""
    );

export { write, trim };
