const crUrl =  'https://codecast.qualified.io/relay';

export const runCode = ({ preloaded, code, testCases, language, languageVersion, testFramework }, ref) => {
  ref.contentWindow.postMessage({
    method: 'run',
    data: {
      language,
      languageVersion,
      testFramework,
      fixture: testCases,
      code,
      privilegeMode: "full",
      successMode: "specs",
      services: [],
      setup: preloaded || "",
      ably: true,
      batch: true
    }
  }, crUrl);
};
