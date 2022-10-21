import { createContext, useState } from "react";

const LocaleCtx = createContext();

const LocaleProvider = (props) => {
  const [language, setLanguage] = useState(props.locale || "en-us");

  return (
    <LocaleCtx.Provider
      value={{ locale: _getLanguage(language), setLanguage, language }}
    >
      {props.children}
    </LocaleCtx.Provider>
  );
};

const _getLanguage = (lang = "en-us", slug = "index.json") =>
  _prettyFile(_loadFile(lang, slug));

/*
  ? How it works
  * 1. Load index file
  * 2. Check for imports, and import them
  * 3. merge files (from bottom of the tree to the top)
  * 4. delete all "key" & "imports" keys
*/

// import linked files inside the imported file
const _handleFile = (lang, file) => {
  if (file.imports?.length) {
    file.imports.forEach(
      (filePath) => (file = _mergeFiles(file, _loadFile(lang, filePath)))
    );
  }

  return file;
};

// load file
const _loadFile = (lang = "en-us", slug = "index.json") =>
  _handleFile(lang, require(`../../dictionary/${lang}/${slug}`) || {});

// merges two files (jsons) into one object
const _mergeFiles = (file, newFile) => {
  if (newFile.key) {
    file[newFile.key] = newFile;
    return file;
  }

  return { ...file, ...newFile };
};

// removes keys "imports & key"
const _prettyFile = (json) => {
  delete json.key;
  delete json.imports;

  // Check if it's a nested object
  let res = {};
  for (const [key, value] of Object.entries(json)) {
    if (Object(value) === value && !Array.isArray(json)) {
      res[key] = _prettyFile(value);
    } else res[key] = value;
  }

  return res;
};

export { LocaleCtx, LocaleProvider };
