const crUrl =  'https://codecast.qualified.io/relay';

export const runCode = ({ script, tests }, ref) => {
  let resolve;
  let reject;
  let posts = [];

  ref.contentWindow.postMessage({
    method: 'run',
    data: {
      language: 'javascript',
      languageVersion: '6.x',
      testFramework: 'mocha_bdd',
      fixture: tests,
      code: script
    }
  }, crUrl);

  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  const timeout = setTimeout(() => {
    const post = posts.pop();
    post.reject();
  }, 2000);

  posts.push({ promise, reject, resolve, timeout });
  return promise;
};
