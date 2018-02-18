const crUrl =  'https://codecast.qualified.io/relay';

export const runCode = ({ script, tests, language, languageVersion, testFramework }, ref) => {
  ref.contentWindow.postMessage({
    method: 'run',
    data: {
      language,
      languageVersion,
      testFramework,
      fixture: tests,
      code: script,
      privilegeMode: "full",
      successMode: "specs",
      services: [],
      setup: "",
      ably: true,
      batch: true
    }
  }, crUrl);
};
