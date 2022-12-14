import { exec } from 'child_process';

const secondApi = {
  executeSecond() {
    exec(
      `cd d:\\Projects\\my-redwood-project\\ && yarn redwood generate page secondPage /`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
  },
};

export default secondApi;
