

export function configureFakeBackend() {
    
    let users =[
        {
          "firstName": "edessociales.andrearendon@gmail.com",
          "id": 1,
          "lastName": "edessociales.andrearendon@gmail.com",
          "password": "db3w2xjooxvp",
          "username": "edessociales.andrearendon@gmail.com"
        },
        {
          "firstName": "canalesespecializados@gmail.com",
          "id": 2,
          "lastName": "canalesespecializados@gmail.com",
          "password": "ylm5niqcr7cb",
          "username": "canalesespecializados@gmail.com"
        },
        {
          "firstName": "andrea_rendon@bantrab.net.gt",
          "id": 3,
          "lastName": "andrea_rendon@bantrab.net.gt",
          "password": "r7cbdb3w2xss",
          "username": "andrea_rendon@bantrab.net.gt"
        },
        {
          "firstName": "maria_cermeno@bantrab.net.gt",
          "id": 4,
          "lastName": "maria_cermeno@bantrab.net.gt",
          "password": "zesiutllh8tg",
          "username": "maria_cermeno@bantrab.net.gt"
        },
        {
          "firstName": "tatiana_meneses@bantrab.net.gt",
          "id": 5,
          "lastName": "tatiana_meneses@bantrab.net.gt",
          "password": "1kfwvb3ex9pu",
          "username": "tatiana_meneses@bantrab.net.gt"
        },
        {
          "firstName": "omgadmin",
          "id": 6,
          "lastName": "omgadmin",
          "password": "omgadmin",
          "username": "omgadmin"
        },
        { "username":"wendy_santacruz@bantrab.net.gt",
        "password":"ven6fnbq",
        "firstName": "wendy",
        "id": 7,
        "lastName": "wendy",
           } 
      ];



    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const isLoggedIn = 'Bearer fake-jwt-token';
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {  
                // authenticate - public
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    const params = JSON.parse(opts.body);
                    const user = users.find(x => x.username === params.username && x.password === params.password);
                    if (!user) return error('Error de Accesos');
                    return ok({
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    });
                }
                // get users - secure
                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (!isLoggedIn) return unauthorised();
                    return ok(users);
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

                // private helper functions

                function ok(body) {
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
                }

                function unauthorised() {
                    resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
                }

                function error(message) {
                    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
                }
            }, 500);
        });
    }
}