interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
};

export function login(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '3whj45rhetrbdjbfgusiehrtdusthei7rhtsejkrhtu',
        user: {
          name: 'Alcsaw',
          email: 'alcsaw@hotmail.com'
        },
      })
    }, 1000);
  });
};
